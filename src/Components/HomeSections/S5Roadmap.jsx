import "../../Styles/S5Roadmap.css"
import rmap1 from "../../assets/images/rmap1.svg"
import rmap2 from "../../assets/images/rmap2.svg"
import rmap3 from "../../assets/images/rmap3.svg"
import rmap4 from "../../assets/images/rmap4.svg"

const S5Roadmap = () => {
    return (
        <>
            <div id="Roadmap" className="section7">
                <div className="roadmap">
                    <div className=" text-center  flex gap-5  flex-col items-center justify-center">
                        <h2 data-aos="zoom-in-up" className="text-5xl font-extralight  desktop:text-4xl    ">Roadmap</h2>
                        <p data-aos="zoom-in-up" className='text-center leading-tight text-base tablet:text-base tablet:phone:text-sm max-w-[45rem]'>Blocks Revenue Token (BRT) is committed to a strategic and transparent roadmap designed to guide our journey towards revolutionizing the mining and blockchain ecosystem. </p>
                    </div>



                    {/* <div className="mainroadmap">

                      <div className="roadmap1">
                          <div className="roadmapleft flex flex-col gap-3">
                              <h6 data-aos="zoom-in-right"   className=" text-base text-[#31FBFB] ">Roadmap -2024</h6>
                              <h2 data-aos="zoom-in-right"   className="text-3xl" >
                              Key Initiatives and Milestones
                              </h2>
                              <div className="line"></div>
                          </div>
                          <div data-aos="fade-right" className=" w-[20rem] phone:w-fit   flex  justify-center items-center  ">
                              <img className=" tablet:rotate-90 my-10  " src={rmap1} alt="" />
                          </div>
                          <div  className="roadmapright">
                              <ul>
                                  <li data-aos="zoom-in-left">
                                  Platform launch and initial token offering (ITO)
                                  </li>
                                  <li data-aos="zoom-in-left">
                                  Establish partnerships with early adopters and industry leaders
                                  </li>
                                  <li data-aos="zoom-in-left">
                                  Develop and release the first version of the BRT Token platform, focusing on core functionality and user experience
                                  </li>
                        
                              </ul>
                          </div>
                      </div>

                      <div className="roadmap1">
                          <div className="roadmapleft flex flex-col gap-3">
                              <h6 data-aos="zoom-in-right" className=" text-base text-[#C86CFF] ">Roadmap -2024</h6>
                              <h2 data-aos="zoom-in-right" className="text-3xl" >
                              Referral & Listing
                              </h2>
                              <div className="line"></div>
                          </div>
                          <div data-aos="fade-right" className=" w-[20rem] phone:w-fit flex  justify-center items-center  ">
                              <img className=" tablet:rotate-90 my-10 " src={rmap2} alt="" />
                          </div>
                          <div className="roadmapright">
                              <ul>
                                  <li data-aos="zoom-in-left">
                                  Launch a referral program to incentivize user growth and engagement
                                  </li>
                                  <li data-aos="zoom-in-left">
                                  List BRT Token on PancakeSwap to provide liquidity and accessibility for users
                                  </li>
                                 
                                   

                              </ul>
                          </div>
                      </div>

                      <div className="roadmap1">
                          <div className="roadmapleft flex flex-col gap-3  ">
                              <h6 data-aos="zoom-in-right" className=" text-base text-[#64FFAB] ">Roadmap -2025</h6>
                              <h2 data-aos="zoom-in-right" className="text-3xl" >
                                  Initiating foundation
                              </h2>
                              <div className="line"></div>
                          </div>
                          <div data-aos="fade-right" className=" w-[20rem] phone:w-fit flex  justify-center items-center  ">
                              <img className=" tablet:rotate-90 my-10 " src={rmap3} alt="" />
                          </div>
                          <div className="roadmapright">
                              <ul className="  " >
                                  <li data-aos="zoom-in-left">
                                      {" "}
                                      Expand platform functionalities and integrate additional features based on user feedback
                                  </li>
                                  <li data-aos="zoom-in-left">
                                  Introduce AI and machine learning integrations for predictive analytics and automated processes
                                  </li>
                                 
                                   

                              </ul>
                          </div>
                      </div>

                      <div className="roadmap1">
                          <div className="roadmapleft flex flex-col gap-3  ">
                              <h6 data-aos="zoom-in-right" className=" text-base text-[#7694FF] ">Roadmap -2026</h6>
                              <h2 data-aos="zoom-in-right" className="text-3xl" >
                                  Initiating foundation
                              </h2>
                              <div className="line"></div>
                          </div>
                          <div data-aos="fade-right" className=" w-[20rem] phone:w-fit flex  justify-center items-center  ">
                              <img className=" tablet:rotate-90 my-10 " src={rmap4} alt="" />
                          </div>
                          <div className="roadmapright">
                              <ul className="  " >
                                  <li data-aos="zoom-in-left">
                                      {" "}
                                      Market Expansion: Launch marketing campaigns to increase
                                      awareness and adoption of BRT  token globally.
                                  </li>
                                  <li data-aos="zoom-in-left">
                                      Ecosystem Partnerships: Forge strategic partnerships with
                                      other blockchain projects, exchanges, and ment processors
                                      to expand token utility.
                                  </li>
                                  <li data-aos="zoom-in-left">
                                      Community Engagement: Organize community events, contests,
                                      and incentives to grow the BRT token holder base.
                                  </li>
                                   

                              </ul>
                          </div>
                      </div>

                  </div> */}

                    <div className=" p-4">
                        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                            <div className="flex md:contents flex-row-reverse">
                                <div
                                    className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                    <h3 className="text-lg font-semibold lg:text-xl">Key Initiatives and Milestones</h3>
                                    <p className="mt-2 leading-6">Platform launch and initial token offering (ITO)</p>
                                    <p className="mt-2 leading-6">Establish partnerships with early adopters and industry leaders</p>
                                    <p className="mt-2 leading-6">Develop and release the first version of the BRT Token platform</p>
                                    <span className="absolute text-sm text-teal-100/75 -top-5 left-2 whitespace-nowrap">Q1 2024</span>
                                </div>
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-teal-300 rounded-t-full bg-gradient-to-b from-teal-400 to-teal-300">
                                        </div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-teal-300 border-4 border-teal-400 rounded-full top-1/2"></div>
                                </div>
                            </div>

                            <div className="flex md:contents">
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-teal-300"></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-teal-400 rounded-full top-1/2"></div>
                                </div>
                                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                    <h3 className="text-lg font-semibold lg:text-xl">Reward Distribution</h3>
                                    <p className="mt-2 leading-6">Launch a referral program to incentivize user growth and engagement</p>
                                    <p className="mt-2 leading-6">List BRT Token on PancakeSwap to provide liquidity and accessibility</p>
                                    <span className="absolute text-sm text-teal-100/75 -top-5 left-2 whitespace-nowrap">Q2 2024</span>
                                </div>
                            </div>
                            <div className="flex md:contents flex-row-reverse">
                                <div
                                    className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                    <h3 className="text-lg font-semibold lg:text-xl">Key Initiatives and Milestones</h3>
                                    <p className="mt-2 leading-6"> Expand platform functionalities and integrate additional features</p>
                                    <p className="mt-2 leading-6">  Introduce AI and machine learning integrations for predictive analytics</p>
                                    <span className="absolute text-sm text-teal-100/75 -top-5 left-2 whitespace-nowrap">Q3 2025</span>
                                </div>
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-teal-300 rounded-t-full bg-gradient-to-b from-teal-400 to-teal-300">
                                        </div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-teal-400 rounded-full top-1/2"></div>
                                </div>
                            </div>

                            <div className="flex md:contents">
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-teal-300"></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-teal-400 rounded-full top-1/2"></div>
                                </div>
                                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                    <h3 className="text-lg font-semibold lg:text-xl">Key Initiatives and Milestones</h3>
                                    <p className="mt-2 leading-6">Launch marketing campaigns to increase
                                        awareness and adoption</p>
                                    <p className="mt-2 leading-6">Forge strategic partnerships with
                                        other blockchain projects, exchanges</p>
                                    <p className="mt-2 leading-6">Organize community events, contests,
                                        and incentives</p>
                                    <span className="absolute text-sm text-teal-100/75 -top-5 left-2 whitespace-nowrap">Q4 2025</span>
                                </div>
                            </div>

                            <div className="flex md:contents flex-row-reverse">
                                <div
                                    className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                    <h3 className="text-lg font-semibold lg:text-xl">Key Initiatives and Milestones</h3>
                                    <p className="mt-2 leading-6"> Enhance security: Advanced protocols, audits ensure platform integrity</p>
                                    <p className="mt-2 leading-6"> Expand products: Diversify offerings to meet diverse user needs</p>
                                    <span className="absolute text-sm text-teal-100/75 -top-5 left-2 whitespace-nowrap">Q5 2025</span>
                                </div>
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-teal-300 rounded-t-full bg-gradient-to-b from-teal-400 to-teal-300">
                                        </div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-teal-400 rounded-full top-1/2"></div>
                                </div>
                            </div>

                            <div className="flex md:contents">
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-teal-300"></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-teal-400 rounded-full top-1/2"></div>
                                </div>
                                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                    <h3 className="text-lg font-semibold lg:text-xl">Key Initiatives and Milestones</h3>
                                    <p className="mt-2 leading-6">Enhance token utility across diverse blockchain networks</p>
                                    <p className="mt-2 leading-6">Innovate blockchain and AI-driven technologies continuously</p>
                                    <span className="absolute text-sm text-teal-100/75 -top-5 left-2 whitespace-nowrap">Q6 2025</span>
                                </div>
                            </div>
                            <div className="flex md:contents flex-row-reverse">
                                <div
                                    className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                    <h3 className="text-lg font-semibold lg:text-xl">Key Initiatives and Milestones</h3>
                                    <p className="mt-2 leading-6"> Promote eco-friendly blockchain practices and reduce environmental impact</p>
                                    <p className="mt-2 leading-6"> Explore liquidity mining, lending, and borrowing functionalities</p>
                                    <span className="absolute text-sm text-teal-100/75 -top-5 left-2 whitespace-nowrap">Q7 2026</span>
                                </div>
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-teal-300 rounded-t-full bg-gradient-to-b from-teal-400 to-teal-300">
                                        </div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-teal-400 rounded-full top-1/2"></div>
                                </div>
                            </div>

                            <div className="flex md:contents">
                                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div className="w-1 h-full bg-teal-300"></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-teal-400 rounded-full top-1/2"></div>
                                </div>
                                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                    <h3 className="text-lg font-semibold lg:text-xl">Key Initiatives and Milestones</h3>
                                    <p className="mt-2 leading-6">Strengthen frameworks to ensure global regulatory adherence</p>
                                    <p className="mt-2 leading-6">Review and optimize to sustain BRT value stability</p>
                                    <span className="absolute text-sm text-teal-100/75 -top-5 left-2 whitespace-nowrap">Q8 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default S5Roadmap