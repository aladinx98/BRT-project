
import uc1 from "../../assets/images/uc1.svg"
const S3usecase = () => {
    return (
        <>
            <div id="Usecase" className="  " >
                <div className="min-h-fit w-full flex flex-col px-20 py-20   0 laptop:px-10 laptop:phone:px-3 ">

                    <div className=" flex flex-col justify-between gap-20   " >
                        <div data-aos="zoom-in-up" className=" text-center  flex flex-col items-center justify-center">
                            <h2 className="text-5xl font-extralight  desktop:text-4xl    ">Usecases of BRT token</h2>
                        </div>

                        <div className="h-full  flex tablet:flex-col tablet:gap-10 tablet:items-center justify-between " >
                            <div id="left" className="  tablet:text-center   flex flex-col laptop:tablet:items-center gap-60 laptop:gap-20  laptop:tablet:gap-10   " >
                                <div data-aos="zoom-in-right" className="  max-w-[25rem] tablet:max-w-[30rem] flex gap-5 flex-col items-center justify-center" >
                                    <h3 className="text-2xl  phone:text-xl" >Content Creators and Royalties</h3>
                                    <p className=" leading-tight text-gray-300  " >By integrating BRT Tokens, the platform can automate royalty distribution. Each time a song is streamed, smart contracts execute and instantly distribute payments to all stakeholders based on predefined terms. </p>
                                </div>
                                <div data-aos="zoom-in-right" className="  max-w-[25rem] tablet:max-w-[30rem] flex gap-5 flex-col items-center justify-center" >
                                    <h3 className="text-2xl phone:text-xl" >Business Profit Sharing</h3>
                                    <p className=" leading-tight text-gray-300  " >The corporation can use BRT Tokens to distribute profits efficiently and transparently. Smart contracts can be set up to automatically allocate and distribute profits based on company performance and individual contributions.  </p>
                                </div>
                            </div>
                            <div id="mid"className=" flex items-center" >
                                <div>
                                    <img src={uc1} alt="" />
                                </div>

                            </div>
                            <div id="right" className="text-right  tablet:text-center  flex flex-col gap-60 laptop:gap-20 laptop:tablet:gap-10  ">
                                <div data-aos="zoom-in-left" className=" max-w-[25rem] tablet:max-w-[30rem]  flex gap-5 flex-col items-center justify-center" >
                                    <h3 className="text-2xl phone:text-xl" >Decentralized Finance Investments</h3>
                                    <p className=" leading-tight text-gray-300  " >The platform can integrate BRT Tokens to facilitate investments in various DeFi projects. Users can invest in a range of DeFi opportunities, earning interest or dividends paid out in BRT Tokens.</p>
                                </div>

                                <div data-aos="zoom-in-left" className=" max-w-[25rem] tablet:max-w-[30rem]  flex gap-5 flex-col items-center justify-center" >
                                    <h3 className="text-2xl phone:text-xl" >Crowdfunding and Project Funding</h3>
                                    <p className=" leading-tight text-gray-300  " >The startup can launch a crowdfunding campaign using BRT Tokens. Contributors receive BRT Tokens in exchange for their investments, and smart contracts manage the distribution of funds based on project milestones.</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default S3usecase