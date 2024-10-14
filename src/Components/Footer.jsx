
// import logo1 from "../assets/logo/logo2.png"
import youtube from "../assets/socialmedia/YouTube.png"
import twiter from "../assets/socialmedia/Twitter.png"
import Facebook from "../assets/socialmedia/facebook.png"
import Instagram from "../assets/socialmedia/Instagram.png"
import Medium from "../assets/socialmedia/Medium.png"
import logo from "../assets/logo/new logo.gif"
// import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="  bg-[#101010] z-10  rounded-t-2xl ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
                    <div className="md:flex md:justify-between tablet:justify-center z-10">

                        <div className=" flex  flex-col gap-5 mb-6 max-w-[60%] tablet:max-w-[100%] tablet:items-center  md:mb-0">
                            <a href="" className="flex items-center">
                                <img className="self-center text-primary-gradient text-4xl font-bold whitespace-nowrap  text-white" src={logo} width="150" height="150px" />
                            </a>
                            <p className=" tablet:text-center text-white " > Be a part of the BRT revolution and help shape the future <br/> of the crypto economy. </p>
                            <div className="flex gap-5" >
                                <a target="blank" href="https://www.youtube.com/@BRTTOKEN "> <img className="hover:scale-[1.3] transform-scale duration-300" src={youtube} alt="" /> </a>
                                <a target="blank" href="https://x.com/BlocksRevenueT "> <img className="hover:scale-[1.3] transform-scale duration-300" src={twiter} alt="" /> </a>
                                <a target="blank" href="https://www.facebook.com/BRTTOKEN "> <img className="hover:scale-[1.3] transform-scale duration-300" src={Facebook} alt="" /> </a>
                                <a target="blank" href="https://www.instagram.com/brttoken/ "> <img className="hover:scale-[1.3] transform-scale duration-300" src={Instagram} alt="" /> </a>
                                <a target="blank" href="https://medium.com/@BRTtoken "> <img className="hover:scale-[1.3] transform-scale duration-300" src={Medium} alt="" /> </a>

                            </div>
                        </div>
                        <div className=" mt-16 mt- flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap z-10">
                            <div className=" flex flex-col tablet:items-center " >
                                <h2 className=" text-primary-gradient mb-6 text-sm font-thin
                                 uppercase text-white">Resources</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center  ">
                                        <a href="https://blocksrevenuetoken.com/asset2/BRT-Whitepaper.pdf" className="unline  hover:underline " >Whitepaper</a>
                                    </li>
                                    <li className="  tablet:text-center  " >
                                        <a href="https://bscscan.com/token/0x264e1a0802225F6148eb72A8B1cCF51B38ECE198" className="hover:underline">Contract</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm font-thin
                                uppercase text-white">Presale</h2>
                                <ul className="  text-gray-400 font-medium">
                                    {/* <li className="mb-4 tablet:text-center">
                                        <a target="blank" href="https://aicumen-io.gitbook.io/aicumen-whitepaper" className="hover:underline ">White Paper</a>
                                    </li> */}
                                    <li className="  tablet:text-center  ">
                                        <a href="/Presale" className="hover:underline">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm font-thin
                                 uppercase text-white">Legal</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  border-gradient sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm   sm:text-center  text-gray-400">© 2024 <a href="" className="hover:underline">BRT Token</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer