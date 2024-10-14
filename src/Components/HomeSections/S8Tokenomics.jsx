import tokenomicsimg from "../../assets/images/tokoimg.svg";
const S8Tokenomics = () => {
    return (
        <>
            <section id="Tokenomics">
                <div
                    id="about-main"
                    className=" bg-[url('/bgimgblackwave.webp')] bg-opacity-[0.8]  relative flex gap-20 flex-col min-h-[100vh] px-10 py-10 tablet:px-3"
                >
                    <div id="roadmap-heading" className=" w-full flex  justify-center">
                        <div className=" text-center  flex gap-5  flex-col items-center justify-center">
                            <h2 data-aos="zoom-in-up" className="text-5xl font-extralight  desktop:text-4xl    ">
                                Tokenomics
                            </h2>
                            <p data-aos="zoom-in-up" className="text-center leading-tight text-base tablet:text-base tablet:phone:text-sm max-w-[45rem]">
                            Blocks Revenue Token (BRT) is designed with a robust and transparent tokenomics structure to ensure sustainable growth, fair distribution, and long-term value for our community.{" "}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5 tablet:justify-center tablet:flex-col tablet:gap-16 ">
                        <div data-aos="zoom-in"
                            id="left"
                            className="w-[55%] flex  tablet:w-full justify-center "
                        >
                            <img src={tokenomicsimg} alt="" />
                        </div>

                        <div
                            id="right"
                            className="  w-[45%] tablet:w-full flex   justify-center items-center "
                        >
                            <div className="flex flex-col  w-[30rem]  gap-5    ">
                                <div data-aos="zoom-in-left" className="s5smallhead">
                                    <div className="s5box">
                                        <p>Token Name </p>
                                        <p>Blocks Revenue Token</p>
                                    </div>
                                </div>


                                <div data-aos="zoom-in-left" className="s5smallhead">
                                    <div className="s5box">
                                        <p>Token Symbol</p>
                                        <p> BRT </p>
                                    </div>
                                </div>



                                <div data-aos="zoom-in-left" className="s5smallhead">
                                    <div className="s5box">
                                        <p>Total Supply</p>
                                        <p>1.1 Billion</p>
                                    </div>
                                </div>



                                <div data-aos="zoom-in-left" className="s5smallhead">
                                    <div className="s5box">
                                        <p>Chain</p>
                                        <p>BEP20</p>
                                    </div>
                                </div>



                                <div data-aos="zoom-in-left" className="s5smallhead">
                                    <div className="s5box">
                                        <p>Presale</p>
                                        <p>330 Million</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default S8Tokenomics;
