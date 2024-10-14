import React from 'react';
import float1 from "../../assets/icons/float1.svg";
import float2 from "../../assets/icons/float2.svg";
import float3 from "../../assets/icons/float3.svg";
import float4 from "../../assets/icons/float4.svg";
// import bg45 from "https://blocksrevenuetoken.com/asset2/bg45-0P6Z8GL7.mp4";

const S1Hero = () => {
    return (
        <div className="relative bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat min-h-screen w-full px-5 py-10">
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover opacity-35 z-0"
            >
                <source src="https://blocksrevenuetoken.com/asset2/bg45-0P6Z8GL7.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute left-0 bottom-0 bg-gradient-to-t from-[#080A19] via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-full h-[100px] z-1"></div>

            <div className="relative z-10 h-[80vh] flex gap-10 phone:gap-6 text-center flex-col items-center justify-center">
                <h1 data-aos="zoom-in" className="hero-head text-7xl tablet:text-5xl phone:text-4xl max-w-[53rem] tracking-wide leading-normal tablet:leading-normal phone:leading-normal font-bold font-bold">
                    Welcome To <br /> Blocks Revenue Token
                </h1>
                <p data-aos="zoom-in" className="max-w-[50rem] phone:leading-tight text-gray-300">
                    Experience the power of blockchain technology with Blocks Revenue Token. Our platform is designed to offer transparent, secure, and efficient revenue sharing solutions.
                </p>
                <div className="flex gap-5 flex-wrap justify-center">
                    <a href="/presale" className="btn2 w-[10rem]">Buy Now</a>
                    <a href="https://blocksrevenuetoken.com/asset2/BRT-Whitepaper.pdf" className="btn2 w-[10rem]">Whitepaper</a>
                </div>
            </div>
        </div>
    );
}

export default S1Hero;
