import { useState, useEffect } from 'react';
import PresaleAbi from '../constant/PresaleAbi.json';
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import Web3 from "web3";
import {
    prepareWriteContract,
    writeContract,
    waitForTransaction,
} from "@wagmi/core";

const PresaleHistory = () => {

    const apiLink = new Web3("https://bsc-dataseed.binance.org/");
    const cAddress = "0x4F81b3F467C3daA7Ab719823cA9F51E764932794";
    const { address } = useAccount();
    const [buyData, setbuyData] = useState([]);
    const [currentData, setCurrentData] = useState('buyList');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const formattedDateTime = formatDate(now);
            setCurrentDateTime(formattedDateTime);
        }, 1000); // Update every second
        return () => clearInterval(intervalId);
    }, []);


    const formatDate = (timestamp) => {

        const date = new Date(timestamp * 1000);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

        return formattedDateTime;
    };

    function parseCustomDate(dateString) {
        const [datePart, timePart] = dateString.split(' ');
        const [day, month, year] = datePart.split('-');
        const [hours, minutes, seconds] = timePart.split(':');
        return new Date(year, month - 1, day, hours, minutes, seconds);
    }


    const totalPages = Math.ceil(buyData.length / itemsPerPage);

    useEffect(() => {
        const fetchbuyData = async () => {
            if (!address) return;

            try {
                const contract = new apiLink.eth.Contract(PresaleAbi, cAddress);
                const buyCount = await contract.methods.getUserPurchaseCount(address).call();

                const buyPromises = [];

                for (let i = 0; i < buyCount; i++) {
                    buyPromises.push(contract.methods.purchases(address, 0).call());
                }
                const buyEntries = await Promise.all(buyPromises);
                console.log("buyEntries", buyEntries);
                setbuyData(buyEntries);

            } catch (error) {
                console.error("Error fetching buy data:", error);
            }
        };

        fetchbuyData();
    }, [address]);

    const claimTrx = async () => {
        if (!address) {
            toast.error("Address is required to claim tokens.");
            return;
        }
    
        try {
            const withdrawTransaction = await prepareWriteContract({
                address: cAddress,
                abi: PresaleAbi,
                functionName: "claimTokens",
                from: address,
            });
    
            const toastId = toast.loading("Withdrawing transaction...");
            const hash = await writeContract(withdrawTransaction);
            toast.update(toastId, { render: "Claiming...", isLoading: true });
            await waitForTransaction(hash);
            toast.update(toastId, { render: "Claim completed successfully", type: "success", isLoading: false });
        } catch (error) {
            toast.dismiss();
            toast.error("Error in claim");
            console.error(error);
        }
    };

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return buyData.slice(startIndex, endIndex);
    };

    const handleSwitchData = (type) => {
        setCurrentData(type);
        setCurrentPage(1);
    };

    const handlePageClick = (pageNumber) => {
        if (pageNumber !== "...") {
            setCurrentPage(pageNumber);
        }
    };

    const createPagination = () => {
        const pageNumbers = [];
        const visibleRange = 3;

        pageNumbers.push(1);

        if (totalPages <= visibleRange) {
            for (let i = 2; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let startRange = Math.max(2, currentPage - 1);
            let endRange = Math.min(totalPages - 1, currentPage + 1);

            if (startRange > 2) {
                pageNumbers.push('...');
            }

            for (let i = startRange; i <= endRange; i++) {
                pageNumbers.push(i);
            }

            if (endRange < totalPages - 1) {
                pageNumbers.push('...');
            }

            if (totalPages > 1) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    const currentPageData = getCurrentPageData();



    return (
        <>

            <div id="ref-main" className=" my-10 ">
                <div className="mb-4  space-x-5 px-20 tablet:px-5 tablet:space-x-2 ">
                    <button
                        onClick={() => handleSwitchData('buyList')}
                        className={` px-3 py-1 
                     ${currentData === 'buyList' ? 'bg-gradient' : 'bg-gray-700'}
                      text-white rounded-3xl `}
                    >
                        <div id="btn" className=" flex gap-5 flex-wrap justify-center " >
                            <a href="" className="btn2 w-[10rem]">Buy History</a>
                        </div>
                    </button>

                </div>
                <div className='px-20 tablet:px-5 ' >
                    <div className="relative overflow-x-auto shadow-md  rounded-lg">
                        <table className="w-full text-sm text-left text-gray-300">
                            <thead className="text-xs text-gray-200 uppercase bg-gray-800">
                                <tr className='font-bold text-sm tracking-wider' >
                                    <th scope="col" className="px-6 py-3 text-nowrap ">Sr no.</th>
                                    <th scope="col" className="px-6 py-3">Amount</th>
                                    <th scope="col" className="px-6 py-3">Claimed</th>
                                    <th scope="col" className="px-6 py-3">Buy Date</th>
                                    <th scope="col" className="px-6 py-3">Claim Date</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPageData.map((row, index) => (
                                    <>
                                        <tr
                                            key={index}
                                            className="bg-gray-950 border-b hover:bg-gray-800"
                                        >
                                            <td className="px-6 py-4"><td>{(currentPage - 1) * itemsPerPage + index + 1}</td></td>
                                            <td className="px-6 py-4 text-primary-gradient  font-bold text-nowrap ">{row.amount / 10 ** 18}</td>
                                            <td className="  px-4 py-4"> <span className='bg-gradient text-white px-6 py-1 rounded-3xl text-nowrap ' >{row.claimedAmount} BRT</span> </td>
                                            <td className="px-6 py-4">{formatDate(row.timestamp)}</td>
                                            <td className="px-6 py-4">{formatDate(row.nextClaimDate)}</td>
                                            <td className="px-6 py-4">
                                                {
                                                    new Date() > parseCustomDate(formatDate(row.nextClaimDate)) ? (
                                                        <button
                                                            onClick={() => claimTrx()}
                                                            className="bg-green-500 text-white font-bold px-3 py-1 rounded-2xl"
                                                        >
                                                            Claim
                                                        </button>
                                                    ) : (
                                                        <button
                                                            disabled
                                                            className="bg-gray-500 text-white font-bold px-3 py-1 rounded-2xl"
                                                        >
                                                            Locked
                                                        </button>
                                                    )
                                                }


                                            </td>
                                        </tr>


                                    </>

                                ))}
                            </tbody>
                        </table>

                    </div>

                    <nav className="flex gap-2 items-center justify-end pt-4" aria-label="Table navigation">
                        <button
                            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                            className="px-3 h-8 text-primary-gradient  font-bold bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
                            disabled={currentPage <= 1}
                        >
                            {"<<"}
                        </button>

                        <div className="inline-flex space-x-2 text-sm">
                            {createPagination().map((page, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageClick(page)}
                                    className={`px-3 h-8 border font-bold border-gray-600 rounded ${currentPage === page ? 'bg-gray-500 text-primary-gradient  font-bold' : 'bg-gray-700 text-primary-gradient  font-bold hover:text-white hover:bg-gray-600'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                            className="px-3 h-8 text-primary-gradient  font-bold bg-gray-700 border-gray-600 rounded hover:text-white hover:bg-gray-600"
                            disabled={currentPage >= totalPages}
                        >
                            {">>"}
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default PresaleHistory;
