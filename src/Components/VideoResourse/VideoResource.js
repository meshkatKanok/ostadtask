import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactSimplyCarousel from 'react-simply-carousel';
import courseimage from '../asset/Group 10191.png';
import tittleicone from '../asset/image 22.png';
import chill from '../asset/chill2.png'
import chill2 from '../asset/chil.png'
import '../Carosel/Carosel.css'
import './Videoresource.css'
 

const VideoResource = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
   <div className='bg-[#F9F9FA] border-none'>
     <div className='bg-[#F9F9FA] lg:block border-none hidden'>
      <div>
        <div className='w-full bg-[#FFFFFF] h-[665px] mt-[118px] border-none'>

          <div className='flex items-center ml-[160px] mb-[32px]'>
            <div>
              <img  className='mt-[40px] ' src={tittleicone} alt="" />
            </div>
            <span className='text-black font-bold text-[36px] ml-4 mt-[40px] '>ফ্রি ভিডিও রিসোর্স</span>
          </div>
          <span className='flex justify-start lg:ml-[166px]  text-xs'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>
            <hr className='lg:w-[1200px] h-auto w-full mx-auto mt-4 ' />
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={2}
            itemsToScroll={2}
            forwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: 'center',
                background: "#FFFBEE",
                border: 'none',
                borderRadius: '50%',
                color: '#FFAB00',
                cursor: 'pointer',
                fontSize: '20px',
                height: 40,
                lineHeight: 1,
                textAlign: 'center',
                width: 40,
                marginLeft: '40px'

              },
              children: <span><FaArrowRight className='ml-2' /></span>,
            }}
            backwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: 'center',
                background: "#FFFBEE",
                border: 'none',
                borderRadius: '50%',
                color: '#FFAB00',
                cursor: 'pointer',
                fontSize: '20px',
                height: 40,
                lineHeight: 1,
                textAlign: 'center',
                width: 40,
                marginRight: "40px"
              },
              children: <span><FaArrowLeft className='ml-2' /></span>,
            }}
            responsiveProps={[
              {
                itemsToShow: 4,
                itemsToScroll: 2,
                minWidth: 1140,
              },
            ]}
            speed={400}
            easing="linear"
          >
            {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
            
             
            <div className=''>
              <div  class="w-[276px] h-[308px] bg-[white] resource  hover:shadow-xl border-hover  rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="w-full resourceimg " src={courseimage} alt="" />
                 
                </a>
              
                <div>
                    <span className='text-[16px] text-[#475467] ml-4 font-semibold mt-[16px]'>Language Learning</span> <br />
                    <span className='text-[14px]  flex justify-start font-semibold text-[black] ml-4 mt-2'>Language Learning
IELTS Listening: 15 Days Challenge</span>
                </div>
                <div className='flex items-center mt-[18px]'>
                <div className='flex items-center ml-[16px]'>
                    <img className='w-[13px] h-[13px]' src={chill} alt="" />
                    <span className='ml-[5px] text-[#475467]'>60 min</span>
                </div>
                <div className='flex items-center ml-[15px]'>
                    <img className='w-[13px] h-[13px]' src={chill2} alt="" />
                    <span className='ml-[5px] text-[#475467]'>30 March, 2022</span>
                </div>
                </div>
                 
                
                
              </div>
            </div>





            <div className=''>
              <div  class="w-[276px] h-[308px] bg-[white] resource  hover:shadow-lg border-hover  rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="w-full resourceimg " src={courseimage} alt="" />
                 
                </a>
                <div>
                    <span className='text-[16px] text-[#475467] ml-4 font-semibold mt-[16px]'>Language Learning</span> <br />
                    <span className='text-[14px]  flex justify-start font-semibold text-[black] ml-4 mt-2'>Language Learning
IELTS Listening: 15 Days Challenge</span>
                </div>
                <div className='flex items-center mt-[18px]'>
                <div className='flex items-center ml-[16px]'>
                    <img className='w-[13px] h-[13px]' src={chill} alt="" />
                    <span className='ml-[5px] text-[#475467]'>60 min</span>
                </div>
                <div className='flex items-center ml-[15px]'>
                    <img className='w-[13px] h-[13px]' src={chill2} alt="" />
                    <span className='ml-[5px] text-[#475467]'>30 March, 2022</span>
                </div>
                </div>
                 
                
                
              </div>
            </div>
            <div className=''>
              <div  class="w-[276px] h-[308px] bg-[white] resource  hover:shadow-lg border-hover  rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="w-full resourceimg " src={courseimage} alt="" />
                 
                </a>
                <div>
                    <span className='text-[16px] text-[#475467] ml-4 font-semibold mt-[16px]'>Language Learning</span> <br />
                    <span className='text-[14px]  flex justify-start font-semibold text-[black] ml-4 mt-2'>Language Learning
IELTS Listening: 15 Days Challenge</span>
                </div>
                <div className='flex items-center mt-[18px]'>
                <div className='flex items-center ml-[16px]'>
                    <img className='w-[13px] h-[13px]' src={chill} alt="" />
                    <span className='ml-[5px] text-[#475467]'>60 min</span>
                </div>
                <div className='flex items-center ml-[15px]'>
                    <img className='w-[13px] h-[13px]' src={chill2} alt="" />
                    <span className='ml-[5px] text-[#475467]'>30 March, 2022</span>
                </div>
                </div>
                 
                
                
              </div>
            </div>
            <div className=''>
              <div  class="w-[276px] h-[308px] bg-[white] resource  hover:shadow-lg border-hover  rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="w-full resourceimg " src={courseimage} alt="" />
                 
                </a>
                <div>
                    <span className='text-[16px] text-[#475467] ml-4 font-semibold mt-[16px]'>Language Learning</span> <br />
                    <span className='text-[14px]  flex justify-start font-semibold text-[black] ml-4 mt-2'>Language Learning
IELTS Listening: 15 Days Challenge</span>
                </div>
                <div className='flex items-center mt-[18px]'>
                <div className='flex items-center ml-[16px]'>
                    <img className='w-[13px] h-[13px]' src={chill} alt="" />
                    <span className='ml-[5px] text-[#475467]'>60 min</span>
                </div>
                <div className='flex items-center ml-[15px]'>
                    <img className='w-[13px] h-[13px]' src={chill2} alt="" />
                    <span className='ml-[5px] text-[#475467]'>30 March, 2022</span>
                </div>
                </div>
                 
                
                
              </div>
            </div>
            <div className=''>
              <div  class="w-[276px] h-[308px] bg-[white] resource  hover:shadow-lg border-hover  rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="w-full resourceimg " src={courseimage} alt="" />
                 
                </a>
                <div>
                    <span className='text-[16px] text-[#475467] ml-4 font-semibold mt-[16px]'>Language Learning</span> <br />
                    <span className='text-[14px]  flex justify-start font-semibold text-[black] ml-4 mt-2'>Language Learning
IELTS Listening: 15 Days Challenge</span>
                </div>
                <div className='flex items-center mt-[18px]'>
                <div className='flex items-center ml-[16px]'>
                    <img className='w-[13px] h-[13px]' src={chill} alt="" />
                    <span className='ml-[5px] text-[#475467]'>60 min</span>
                </div>
                <div className='flex items-center ml-[15px]'>
                    <img className='w-[13px] h-[13px]' src={chill2} alt="" />
                    <span className='ml-[5px] text-[#475467]'>30 March, 2022</span>
                </div>
                </div>
                 
                
                
              </div>
            </div>

          </ReactSimplyCarousel>
        </div>
      </div>


    </div>
    
   </div>
  );
};

export default VideoResource;