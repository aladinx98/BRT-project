import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logovideo from "../assets/logo/new logo.gif"

import youtube from "../assets/socialmedia/YouTube.png";
import Twitter from "../assets/socialmedia/Twitter.png";
import Facebook from "../assets/socialmedia/facebook.png"
import Instagram from "../assets/socialmedia/Instagram.png";
import Medium from "../assets/socialmedia/Medium.png";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const [isScrolled, setisScrolled] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Disable scrolling when the modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when the modal is closed
            document.body.style.overflowY = 'auto';

            // Cleanup function to restore default overflow when component unmounts
            return () => {
                document.body.style.overflowY = 'auto';
            };
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const closeMenu = () => {
        setIsNavVisible(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: Smooth scrolling animation
        });

    };


    return (

        <>

            <nav
                className={`${isScrolled ? 'bg-black ' : 'bg-transparent'
                    } w-full z-10 overflow-x-hidden   top-0 start-0 border-b border-none `}
            >
                <div className=" relative max-w-full   flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">


                    <a href="/" onClick={closeMenu}>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img loading="lazy" src={logovideo} className=' w-[7rem] h-auto ' alt="BRT token" />
                            {/* <h1 className=' text-4xl font-bold font-outfit  text-primary-gradient phone:text-xl ' >BRT</h1> */}
                        </div>
                    </a>


                    <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="/Presale"
                            className="  borned text-xs    border-2  px-5 py-2 rounded-3xl    oxanium text-white   font-medium phone:font-light  first-line  phone:h-[40px]  ">Buy Token  →
                        </Link>



                        <button
                            onClick={toggleNav}
                            type="button"
                            className="  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-100 bg-gray-900 border border-[--primary-color] rounded-lg md:hidden   focus:outline-none focus:ring-2 focus:ring-[--prime-color]   ring-[--prime-color]  hover:bg-gray-900  "
                            aria-controls="navbar-sticky1"
                            aria-expanded={isNavVisible}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns=" "
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>


                    <div
                        id="navbar-sticky1"
                        className={`items-center  justify-between  w-full md:flex md:w-auto md:order-1 ${isNavVisible ? 'block  ' : 'hidden'
                            }`}
                    >
                        <ul className="   navcar  flex    flex-col p-4   md:py-1.5   mt-4 font-medium border border-[--primary-color]  md:rounded-[50px] rounded-lg   md:space-x-[3vmax] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   text-white tablet:bg-gray-900    ">

                            <li className='md:border-none border-b-[1px]  border-gradient '>
                                <Link to="/" onClick={closeMenu}>
                                    <div className=" block borned text-sm  py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0  dark:border-gray-700 hover:text-[#20F2FF] font-outfit   ">Home</div>
                                </Link>
                            </li>

                            {/* <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=usecase" onClick={closeMenu}  >
                                    <div className=" block borned text-sm  py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#20F2FF] font-outfit ">Usecase</div>
                                </Link>
                            </li> */}

                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=Tokenomics" onClick={closeMenu}>
                                    <div className=" block borned text-sm  py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#20F2FF] font-outfit ">Tokenomics</div>
                                </Link>
                            </li>
                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=Roadmap" onClick={closeMenu}>
                                    <div className=" block borned text-sm  py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#20F2FF] font-outfit ">Roadmap</div>
                                </Link>
                            </li>
                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/Keynote" onClick={closeMenu}>
                                    <div className=" block borned text-sm  py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#20F2FF] font-outfit ">Keynote</div>
                                </Link>
                            </li>
                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/Stages" onClick={closeMenu}>
                                    <div className=" block borned text-sm  py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#20F2FF] font-outfit ">Stages</div>
                                </Link>
                            </li>
                            <li onClick={() => { toggleModal(); closeMenu(); }} className='md:border-none border-b-[1px] border-gradient '>
                                <div onClick={closeMenu}>
                                    <div className=" block borned text-sm  py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#20F2FF] font-outfit ">Contact</div>
                                </div>
                            </li>
                            {/* <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/Presale" onClick={closeMenu}>
                                    <div className=" block borned text-sm  py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#20F2FF] font-outfit ">Presale</div>
                                </Link>
                            </li> */}



                        </ul>

                    </div>


                </div>
            </nav>


            {isOpen && (
                <div

                    id="popup-modal"
                    onClick={closeModal}
                    tabIndex="-1"
                    className="fixed  h-[100vh] inset-0 z-50  bg-slate-950  bg-opacity-80    "
                >
                    <div data-aos="flip-up" className="h-[100vh] flex items-center justify-center">
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
                                    <h1 className='text-3xl tracking-widest  '>Get In Touch!</h1>
                                    <h2 className='text-lg' >Stay In Touch With BRT token community</h2>

                                    <p className="text-center text-gray-300 ">

                                        For any inquiries, support, or feedback regarding our BRT token crypto token website, feel free to reach out to us on our social media channels. {"We're"} here to assist you with any questions you may have about our services or the token itself. Connect with us today and join the conversation!</p>

                                    <h3 className=" text-xl font-bold    text-white">
                                        Our Social Media
                                    </h3>

                                    <div id="shocial-media" className="flex gap-4 items-center ">
                                        <a href="https://www.youtube.com/@BRTTOKEN" target="blank" className=" hover:scale-[1.2] transform-scale duration-200  "  >
                                            <img loading="lazy" src={youtube} width={30} height={30} alt="youtube" />
                                        </a>
                                        <a href="https://x.com/BlocksRevenueT" target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " >
                                            <img loading="lazy" src={Twitter} width={30} height={30} alt="Twitter" />
                                        </a>
                                        <a href="https://www.facebook.com/BRTTOKEN" target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " >
                                            <img loading="lazy" src={Facebook} width={30} height={30} alt="Telegram" />
                                        </a>
                                        <a href="https://www.instagram.com/blocks_revenue_token/" target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " >
                                            <img loading="lazy" src={Instagram} width={30} height={30} alt="Instagram" />
                                        </a>
                                        <a href="https://medium.com/@BRTtoken" target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " >
                                            <img loading="lazy" src={Medium} width={30} height={30} alt="Medium" />
                                        </a>
                                    </div>


                                </div>






                            </div>
                        </div>
                    </div>

                </div>
            )}






        </>
    )
}

export default Navbar