import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

import planimg from "../../assets/images/pancakeswap.png";

import b2 from "../../assets/images/b2.png";

const Pancakeswap = () => {
    return (
        <>
            <div id="Rewards" className='py-20'>
                <div className=" min-h-fit w-full  space-y-20  " >

                    <div className=" text-center  flex gap-5  flex-col items-center justify-center">
                        <h2 data-aos="zoom-in-up" className="text-2xl font-extralight  desktop:text-xl    ">Next Listing</h2>
                        <h2 data-aos="zoom-in-up" className="text-5xl  font-normal desktop:text-4xl    ">   Coming Soon  </h2>
                        <div className=' w-[20rem] overflow-x-hidden border-2 flex shadow-md shadow-white items-center rounded-full h-8 ' >
                            <div data-aos="zoom-in-right" data-aos-duration="10000"    className=' w-[18rem] shadow-inner  shadow-white   bg-green-500 rounded-full h-7 ' >
                                
                            </div>
                        </div>
                        <p className=' tracking-widest uppercase ' >Stay Tune ...</p>

                        {/* <p data-aos="zoom-in-up" className='text-center leading-tight text-base tablet:text-base tablet:phone:text-sm max-w-[45rem]'>Discover the excitement as PanCake Swap makes its debut on Pancake Swap this Q2 2024, offering innovative features and opportunities for crypto enthusiasts!</p> */}
                    </div>



                    <Swiper
                        // spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >


                        <SwiperSlide>
                            <div className="w-[100%] flex justify-center items-center ">
                                <img data-aos="zoom-in" className=' rounded-2xl w-[90%] phone:w-[95%] ' src={b2} alt="" />
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                          <div className=" flex justify-center  " >
                              <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                  <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-7     ">

                                      <h2 className="text-4xl tablet:text-3xl  " >Pancakeswap</h2>
                                      <p className=" text-base tablet:text-sm leading-tight " >Discover the excitement as PanCake Swap makes its debut on Pancake Swap this Q2 2024, offering innovative features and opportunities for crypto enthusiasts!</p>
                                      <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Coming Soon  → </Link>

                                  </div>
                                  <div className=" overflow-hidden rounded-3xl " >
                                      <img src={planimg} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                  </div>

                              </div>
                          </div>
                      </SwiperSlide> */}


                        {/* <SwiperSlide>
                          <div className=" flex justify-center  " >
                              <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                  <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-7     ">

                                      <h2 className="text-4xl tablet:text-3xl  " >Maximize Gaming Benefits</h2>
                                      <p className=" text-base tablet:text-sm leading-tight " >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi omnis a culpa deleniti ad sapiente, cumque est, beatae quisquam pariatur eligendi, odio vero. Error, doloremque?</p>
                                      <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link>

                                  </div>
                                  <div className=" overflow-hidden rounded-3xl " >
                                      <img src={planimg} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                  </div>

                              </div>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <div className=" flex justify-center  " >
                              <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                  <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-7     ">

                                      <h2 className="text-4xl tablet:text-3xl  " >REFERRAL REWARD</h2>
                                      <p className=" text-base tablet:text-sm leading-tight " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat delectus sequi esse officiis ipsam nobis nam nesciunt amet, neque rerum voluptas eligendi animi repellendus vel.</p>
                                      <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link>

                                  </div>
                                  <div className=" overflow-hidden rounded-3xl " >
                                      <img src={planimg} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                  </div>

                              </div>
                          </div>
                      </SwiperSlide> */}

                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default Pancakeswap;