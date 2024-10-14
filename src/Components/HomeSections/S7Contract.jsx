
import { useState } from "react";
// import { motion } from "framer-motion"


const S7Contract = () => {
    const [copied, setCopied] = useState(false);
    const text = "0x264e1a0802225F6148eb72A8B1cCF51B38ECE198";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000); // Hide the popup after 2 seconds
            })
            .catch((err) => {
                console.error("Copy failed: ", err);
            });
    };




    return (
        <>


            <div id="contract1" className=" min-h-[30vh] z-10 my-10 tablet:my-0 ">


                <div id="contract" className=" text-white flex z-10  flex-col justify-center items-center gap-5 ">
                    <h5 data-aos="zoom-in-up" className="  text-center  font-medium  oxanium md:text-4xl  text-3xl">Contract Address</h5>

                    <p data-aos="zoom-in-up" className=" text-primary-gradient text-3xl tablet:text-2xl tablet:phone:text-[4vw]  z-10 "
                    >{text}</p>

                    {/* <p className=" text-"> sdfsdf</p> */}


                    <div id="contract-button" className="flex z-10 flex-wrap justify-center gap-7">

                        <button data-aos="zoom-in-up"
                            className=" px-4 py-1  border-2 rounded-full w-fit "

                            onClick={handleCopy}
                        >
                            <span className=" bg-black  flex oxanium">
                                {/* <img loading="lazy"
                                    src="/assets/copy (1).webp"
                                    height={25}
                                    width={25}
                                    style={{ marginRight: 15 }}
                                    alt="B"
                                /> */}
                                Copy Address
                            </span>
                        </button>

                        <a  href="https://bscscan.com/token/0x264e1a0802225F6148eb72A8B1cCF51B38ECE198" data-aos="zoom-in-up"
                            className=" px-4 py-1  border-2 rounded-full w-fit "

                           
                        >
                            <span className=" bg-black  flex oxanium">
                                
                                BSC Scan
                            </span>
                        </a>
                        
                    </div>
                    {copied && (
                        <div className="  " style={{ zIndex: 1, color: "green" }}>
                            Copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default S7Contract;
