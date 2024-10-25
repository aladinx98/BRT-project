import { useEffect, useState } from 'react'
import USDT from "../../assets/icons/usdt.png"
import BNB from "../../assets/icons/bnb.png"
import BRTLOGO from "../../assets/logo/logo-BRT.png"
import Ref from "../../assets/icons/ref.png"
import refer from "../../assets/images/refer.png"
import bonus from "../../assets/images/Banner.png"
import PresaleTokenAbi from "../constant/PresaleAbi.json";
import USDTAbi from "../constant/usdtAbi.json";
import toast from "react-hot-toast";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import Web3 from "web3";
import {
    prepareWriteContract,
    writeContract,
    waitForTransaction,
} from "@wagmi/core";


const isValid = (regex) => (input) => regex.test(input);
const numberRegex = /^\d*\.?\d*$/;
const isValidNumber = isValid(numberRegex);

const Presale = () => {

    const { isConnected, address } = useAccount();
    const [isOpen, setIsOpen] = useState(false);
    const cAddress = "0x193b0170bce22B8F620459254fc7903cA6803871";
    const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";

    const apiLink = new Web3("https://bsc-dataseed.binance.org/");
    const usdtTokenContract = new apiLink.eth.Contract(USDTAbi, usdtAddress);
    const [walletBal, setwalletBal] = useState("");

    const [data, setData] = useState({
        bnb: "",
        gart: "",
        referralAddress: ""
    });
    const [currentToken, setCurrentToken] = useState({ name: 'USDT', icon: USDT });
    const gartVal = currentToken.name === "BNB" ? 53587.27 : 90.90;
    const referralAddress = data.referralAddress || "0x0888ecC57bD0AcD9415B6628Ba0D9C4eC1a86a4D";

    function handleUSDTButtonClick() {
        setCurrentToken({ name: 'USDT', icon: USDT });
        setData({ ...data, gart: 90.90 });
        console.log("USDT");
    }

    function handleBNBButtonClick() {
        setCurrentToken({ name: 'BNB', icon: BNB });
        setData({ ...data, gart: 53587.27 });
        console.log("BNB");
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    const checkWalletAddress = () => {
        setIsOpen(!isOpen);
    };

    const [allowance, setAllowance] = useState(0);

    useEffect(() => {
        if (isConnected) {
            fetchwalletBal(address);
        }
    }, [isConnected, address]);

    const fetchwalletBal = async (walletAddress) => {
        try {
            const balance = await apiLink.eth.getBalance(walletAddress);
            const balanceInEther = apiLink.utils.fromWei(balance);
            setwalletBal(balanceInEther);
        } catch (error) {
            console.error('Error fetching wallet balance:', error);
        }
    };

    useEffect(() => {
        const fetchAllowance = async () => {
            try {
                const usdtContract = new apiLink.eth.Contract(
                    USDTAbi,
                    usdtAddress
                );
                const allowanceAmount = await usdtContract.methods
                    .allowance(address, cAddress)
                    .call();

                setAllowance(allowanceAmount);
            } catch (error) {
                console.error("Error fetching allowance:", error);
            }
        };
        console.log("fetch allowance");
        fetchAllowance();
    }, [address, cAddress]);

    console.log("allowanceAmount", allowance);

    const processBuy = async () => {
        if (!data.bnb || !data.gart) {
            toast.error("Please enter the correct value.");
            return;
        }
        console.log("Buy with BNB transaction call");
        try {
            let bnbValue = apiLink.utils.toWei(data.bnb.toString());
            const ethValueNum = Number(bnbValue);
            console.log("bnbValue",ethValueNum);
            console.log("referralAddress",referralAddress);
            const transaction = await prepareWriteContract({
                address: cAddress,
                abi: PresaleTokenAbi,
                functionName: "buyWithBNB",
                args: [referralAddress],
                value: bnbValue,
                from: address,
            });

            const toastId = toast.loading("Processing transaction...");
            const receipt = await writeContract(transaction);

            toast.success("Transaction completed successfully", { id: toastId });
            setData({ bnb: "", gart: "" });
        } catch (error) {
            toast.dismiss();
            toast.error("Something went wrong with the transaction!");
        }
    };

    const buy = async () => {
        if (!address || !isConnected) {
            toast.error("Please connect your wallet!");
            return;
        }
        console.log("Buy with USDT transaction call");
        try {
            const ethValueNumber = Number(data.bnb.toString());
            console.log("ethValueNumber",ethValueNumber);
            console.log("referralAddress",referralAddress);
            const tokenBalance = await usdtTokenContract.methods.balanceOf(address).call();
            if (Number(tokenBalance) < ethValueNumber) {
                toast.error("Insufficient USDT balance for this transaction");
                return;
            }

            if (allowance < ethValueNumber) {
                toast.error("You don't have enough allowance for this transaction");
                return;
            }

            const buyTransaction = await prepareWriteContract({
                address: cAddress,
                abi: PresaleTokenAbi,
                functionName: "buyWithUSDT",
                args: [ethValueNumber, referralAddress],
                from: address,
            });

            const toastId = toast.loading("Processing Buy Transaction..");
            await writeContract(buyTransaction);

            toast.success("Buy Transaction completed successfully", { id: toastId });
            setData({ bnb: "", gart: "" });

            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.dismiss();
            if (allowance < 0) {
                toast.error("You don't have enough allowance for this transaction");
            } else {
                toast.error("Error in buytransaction");
            }

            console.error(error);
        }
    };

    const approveTrx = async () => {
        if (!address || !isConnected) {
            toast.error("Please connect your wallet!");
            return;
        }
        // console.log("Approve transaction call");
        try {
            let ethValue = apiLink.utils.toWei(data.bnb.toString());
            const ethValueNumber = Number(ethValue * 10 ** 18);
            // console.log("ethValueNumber",ethValueNumber);
            // console.log("usdtAddress",usdtAddress);
            const approvalTransaction = await prepareWriteContract({
                address: usdtAddress,
                abi: USDTAbi,
                functionName: "approve",
                args: [cAddress, ethValueNumber],
                from: address,
            });

            const toastId = toast.loading("Approving transaction...");
            const hash = await writeContract(approvalTransaction);
            toast.loading("Processing Approval Transaction..", { id: toastId });
            await waitForTransaction(hash);
            toast.dismiss(toastId);
            toast.success("Approval completed successfully");
            setAllowance(ethValueNumber);
        } catch (error) {
            toast.dismiss();
            toast.error("Error in approve transaction");
            console.error(error);
        }
    };

    const handleBuyButtonClick = async () => {
        if (allowance > 0) {
            await buy();
        } else {
            await approveTrx();
        }
    };

    return (
        <>
            <div id="Presale " className="">
                <div className="min-h-fit w-full flex flex-col  ">
                    <div id="abt4">
                        <div
                            id="listing"
                            className="   relative min-h-[30vh]   px-10 py-10 tablet:px-10     tablet:phone:px-3   flex flex-col gap-20"
                        >
                            <div className=" absolute left-0 top-[-60%]    z-[-1]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={"100%"}
                                    height={1275}
                                    viewBox="0 0 877 1275"
                                    fill="none"
                                >
                                    <g filter="url(#filter0_bdf_1102_467)">
                                        <path
                                            d="M294.359 651.975C292.306 744.87 98.1467 866.605 5.2512 864.552C-87.6443 862.499 -156.825 717.23 -154.772 624.335C-152.719 531.439 37.7847 408.148 130.68 410.201C223.576 412.254 296.412 559.079 294.359 651.975Z"
                                            fill="#1779ae8b"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_bdf_1102_467"
                                            x="-564.617"
                                            y="0.375549"
                                            width="1440.92"
                                            height={1274}
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feGaussianBlur
                                                in="BackgroundImageFix"
                                                stdDeviation="45.7"
                                            />
                                            <feComposite
                                                in2="SourceAlpha"
                                                operator="in"
                                                result="effect1_backgroundBlur_1102_467"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dx={352} dy={4} />
                                            <feGaussianBlur stdDeviation="114.95" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_backgroundBlur_1102_467"
                                                result="effect2_dropShadow_1102_467"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow_1102_467"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="204.9"
                                                result="effect3_foregroundBlur_1102_467"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            <div className=" absolute right-0 top-[-25%] tablet:top-[0%]    z-[-1]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={899}
                                    height={1192}
                                    viewBox="0 0 899 1192"
                                    fill="none"
                                >
                                    <g filter="url(#filter0_bdf_1102_466)">
                                        <path
                                            d="M975 668.438C975 741.567 654.343 839.181 569.628 739.677C481.468 739.677 410 680.394 410 607.264C410 534.135 566.183 410 654.343 410C742.503 410 975 595.308 975 668.438Z"
                                            fill="#77a4bc95"
                                            fillOpacity="0.9"
                                            shapeRendering="crispEdges"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_bdf_1102_466"
                                            x="0.200012"
                                            y="0.200012"
                                            width="1556.7"
                                            height="1191.6"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feGaussianBlur
                                                in="BackgroundImageFix"
                                                stdDeviation="45.7"
                                            />
                                            <feComposite
                                                in2="SourceAlpha"
                                                operator="in"
                                                result="effect1_backgroundBlur_1102_466"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dx={352} dy={4} />
                                            <feGaussianBlur stdDeviation="114.95" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="effect1_backgroundBlur_1102_466"
                                                result="effect2_dropShadow_1102_466"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect2_dropShadow_1102_466"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="204.9"
                                                result="effect3_foregroundBlur_1102_466"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            <div
                                id="filler-main"
                                className="container mx-auto flex justify-between z-10  w-full gap-10 tablet:flex-col  tablet:items-center "
                            >
                                <div
                                    id="filler-left"
                                    className=" w-[50%] flex flex-col justify-center   gap-10 tablet:gap-5 tablet:w-[100%] tablet:text-center "
                                >
                                    {/* <h2 className="btn3 text-sm w-fit  tablet:mx-auto pointer-events-none " > Use Case </h2> */}
                                    <h2
                                        data-aos="fade-up"
                                        className="text-5xl font-extralight  desktop:text-4xl    desktop:tablet:phone:text-3xl   "
                                    >
                                        Presale Is  Live
                                    </h2>

                                    <div data-aos="fade-up" className="  max-w-2xl  ">
                                        <p className="text-lg  tablet:phone:text-base  text-gray-300 tablet:phone:leading-tight  tablet:text-center">
                                        Welcome to the Blocks Revenue Token (BRT) Presale! This is your exclusive opportunity to be part of a revolutionary project designed to transform the blockchain and revenue system.
                                        </p>
                                    </div>
                                    <div className=" tablet:mx-auto w-[80%]  ">
                                        <img src={bonus} className=" w-full h-full" alt="" />
                                    </div>
                                </div>

                                <div
                                    id="filler-right"
                                    className=" z-10 w-[50%] tablet:w-full   h-[100%] flex  justify-center   tablet:phone:w-[100%]    tablet:justify-center "
                                >
                                    <div
                                        id="hero-right-container"
                                        className="w-[30rem] border-[#5BC4FF] border-2  bg-slate-900 rounded-[25px] overflow-hidden "
                                    >
                                        <div
                                            id="upper"
                                            className=" flex flex-col gap-5 py-5 px-5 w-full bg-[#262636] text-center "
                                        >
                                            <h2 className="text-3xl "> BRT Token </h2>
                                            <p className="text-2xl f">Grab the deal Buy now BRT</p>

                                            {/* <div
                                                id="progressbar"
                                                className="w-full flex items-center h-10 border-2     rounded-full bg-gray-700 shadow-md  shadow-[#3d93f574]  "
                                            >
                                                <div
                                                    className="h-9 border-2 border-[--primary-color] bg-gradient-to-r from-[#3D92F5] to-[--secondry-color] rounded-full  flex justify-center items-center font-bold text-[--secondry-color]   "
                                                    style={{ width: "60%" }}
                                                ></div>
                                            </div> */}

                                            <div id="pricing" className=" flex justify-center">
                                                <div className=" flex  text-center space-x-[2vw]   ">
                                                    <div>Listing Price : $ 0.20</div>
                                                    <span> →</span>
                                                    <div>Next Price : $ 0.40</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="lower">
                                            <div className="text-center py-5 px-5 flex flex-col gap-5">
                                                <h2 className="text-base">You can buy with </h2>
                                                <div className="flex justify-center gap-3">
                                                    <button className="flex px-8 py-2 items-center justify-center rounded-[10px] gap-3 bg-[rgb(38,38,54)]    hover:scale-[1.02] transform-scale duration-200  "
                                                        onClick={handleUSDTButtonClick}
                                                    >
                                                        <img src={USDT} className=" my-auto w-[41px] h-auto " alt="" />
                                                        <p>USDT</p>
                                                    </button>
                                                    <button className="flex px-8 py-2 items-center justify-center rounded-[10px]  gap-3 bg-[#262636]   hover:scale-[1.02] transform-scale duration-200"
                                                        onClick={handleBNBButtonClick}
                                                    >
                                                        <img src={BNB} className=" w-[41px] h-auto " alt="" />
                                                        <p>BNB</p>
                                                    </button>
                                                </div>
                                                <h2 className="text-base">Buy BRT token Here </h2>
                                                <div className=" h-[2px] mx-3 rounded-lg bg-[#3F78F0]" />

                                                <div id="inputs" className="flex gap-4 justify-between ">
                                                    <div className="text-left">
                                                        <p className="pl-5"  >You will Pay</p>

                                                        <div className="relative  w-full ">
                                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                                <img src={currentToken.icon} width={30} height={30} alt="" />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                value={data.bnb}
                                                                onChange={(e) => {
                                                                    const val = e.target.value
                                                                        .split("")
                                                                        .filter((el) => isValidNumber(el))
                                                                        .join("");
                                                                    setData({
                                                                        ...data,
                                                                        bnb: val,
                                                                        gart: val * gartVal,
                                                                    });
                                                                }}
                                                                id="Amount"
                                                                className="bg-[#262636] border border-gray-300 text-lg text-white   rounded-full block w-full ps-12 p-2.5  "
                                                                placeholder="Amount"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="pr-5" >You will get</p>
                                                        <div className="relative  w-full ">
                                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                                <img src={BRTLOGO} width={30} height={30} alt="" />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                value={data.gart}
                                                                onChange={(e) => {
                                                                    const val = e.target.value
                                                                        .split("")
                                                                        .filter((el) => isValidNumber(el))
                                                                        .join("");
                                                                    setData({
                                                                        ...data,
                                                                        gart: val,
                                                                        bnb: val / gartVal,
                                                                    });
                                                                }}
                                                                id="Amount"
                                                                className="bg-[#262636] border border-gray-300 text-lg text-white   rounded-full block w-full ps-12 p-2.5  "
                                                                placeholder="BRT Amount"
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="text-right">
                                                        <div className="relative  w-full ">
                                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                                <img src={Ref} width={30} height={30} alt="" />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                value={data.referralAddress}
                                                                onChange={(e) => {
                                                                    const val = e.target.value
                                                                    setData({
                                                                        ...data,
                                                                        referralAddress: val,
                                                                    });
                                                                }}
                                                                id="Amount"
                                                                className="bg-[#262636] border border-gray-300 text-lg text-white   rounded-full block w-full ps-12 p-2.5  "
                                                                placeholder="Referral Address (Optional)"
                                                            />
                                                        </div>
                                                    </div>

                                                <div id="buttons">
                                                    <div className="flex justify-between bg-[#262636] rounded-[16px] py-5 gap-5 px-10">
                                                        {isConnected ? (
                                                            <button className="bg-[#494962] w-[50%] text-white text-lg font-bold py-2 px-4 rounded-lg   hover:bg-[#3D92F5] active:bg-[#3D92F5] hover:scale-[1.05] transform-scale duration-300  "
                                                                onClick={checkWalletAddress}
                                                            >
                                                                Bal: {parseFloat(walletBal).toFixed(3)} BNB
                                                            </button>
                                                        ) : (
                                                            <button className="bg-[#494962] w-[50%] text-white text-lg font-bold py-2 px-4 rounded-lg   hover:bg-[#3D92F5] active:bg-[#3D92F5] hover:scale-[1.05] transform-scale duration-300  "
                                                                onClick={checkWalletAddress}
                                                            >
                                                                Connect Wallet
                                                            </button>
                                                        )}


                                                        {currentToken.name === "USDT" &&(
                                                            <button className="bg-[#494962] w-[50%] text-white text-lg font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-[#3D92F5] hover:scale-[1.05] transform-scale duration-300"
                                                                onClick={handleBuyButtonClick}
                                                            >
                                                                {allowance > 0 ? "Buy" : "Approve"}
                                                            </button>
                                                        )}

                                                        {currentToken.name === "BNB" && (
                                                            <button className="bg-[#494962] w-[50%] text-white text-lg font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-[#3D92F5] hover:scale-[1.05] transform-scale duration-300"
                                                                onClick={processBuy}
                                                            >
                                                                Buy Now
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {isOpen && (
                <div
                    id="popup-modal"
                    onClick={closeModal}
                    tabIndex="-1"
                    className="fixed  h-[100vh] inset-0 z-50  bg-slate-900  bg-opacity-50    "
                >
                    <div className="h-[100vh] flex items-center justify-center">
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative h-fit   rounded-3xl shadow bg-gray-900 border-2 border-[--primary-color] bg-opacity-90 "
                        >
                            <button
                                onClick={closeModal}
                                type="button"
                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popup-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>


                            <div className=" max-w-[40rem] p-4 md:p-5 text-center">
                                <div className='flex gap-3 flex-col items-center justify-center'>

                                    <div className="p-4 md:p-5">
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
                                        <ul className="my-4 space-y-3">

                                            <Web3Button />
                                        </ul>
                                        <div>
                                            <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                                                <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                Why do I need to connect with my wallet?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default Presale;
