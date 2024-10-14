
import 'swiper/css';
import 'swiper/css/pagination';



import b1 from "../../assets/images/b1.png"

const S6PlanReward = () => {
    return (
        <>
            <div id="Rewards" className='py-20'>
                <div className=" min-h-fit w-full  space-y-20  " >

                    <div className=" text-center  flex gap-5  flex-col items-center justify-center">
                        <h2 data-aos="zoom-in-up" className="text-5xl font-extralight  desktop:text-4xl    ">Reward</h2>
                        <p data-aos="zoom-in-up" className='text-center leading-tight text-base tablet:text-base tablet:phone:text-sm max-w-[45rem]'>Spread the word about BRT and earn big! When you refer friends, family, or colleagues to participate in our presale, {"you'll"} receive a 10% referral reward on every purchase they make.</p>
                    </div>

                    <div className="w-[100%] flex justify-center items-center ">
                        <img className=' rounded-2xl w-[90%] phone:w-[95%] ' src={b1} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default S6PlanReward