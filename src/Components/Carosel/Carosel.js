import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactSimplyCarousel from 'react-simply-carousel';
import courseimage from '../asset/Course Image.png';
import playbtn from '../asset/Vector.png';
import tittleicone from '../asset/carusel titleicone.png';
import reviewman from '../asset/reviewman.png';
import './Carosel.css'
import MobileCarosel from '../MobileCarosel/MobileCarosel';

const Carosel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
   <div className='bg-[#F9F9FA]'>
     <div className='bg-[#F9F9FA] lg:block hidden'>
      <div>
        <div className='bg-[#101828] h-[434px]'>

          <div className='flex items-center ml-[160px] mb-[32px]'>
            <div>
              <img  className='mt-[40px] ' src={tittleicone} alt="" />
            </div>
            <span className='text-white mt-[40px] '>এক্সপার্টদের ক্যারিয়ার গাইডলাইন</span>
          </div>
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={2}
            itemsToScroll={2}
            forwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: 'center',
                background: "white",
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
                background: "white",
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
            <div  >
              <div class="w-[288px] h-[274px] bg-[#1D2939]   hover:bg-[#1D2939] hover:opacity-70 border-hover rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="" src={courseimage} alt="" />
                </a>
                <div className='flex items-center mt-[14px]'>
                  <img className=' ml-[18px]' src={playbtn} alt="" />
                  <div>
                    <span className='ml-[10px] text-white text-4'>ক্যারিয়ার করুন ওয়েব ডিজাইনে</span>
                  </div>
                </div>
                <hr className='w-[256px] h-0 mx-auto mt-2 bg-[#475467] opacity-30' />
                <div className='flex items-center ml-4 mt-3'>
                <img src={reviewman} alt="" />
                <div>
                  <div className='ml-4'>
                    <span className='text-4 text-white'>Instructor name</span> <br />
                    <span className='text-xs text-white text-start'>Expertise field name</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div>
              <div class="w-[288px] h-[274px] bg-[#1D2939]   hover:bg-[#1D2939] hover:opacity-70 border-hover rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="" src={courseimage} alt="" />
                </a>
                <div className='flex items-center mt-[14px]'>
                  <img className=' ml-[18px]' src={playbtn} alt="" />
                  <div>
                    <span className='ml-[10px] text-white text-4'>ক্যারিয়ার করুন ওয়েব ডিজাইনে</span>
                  </div>
                </div>
                <hr className='w-[256px] h-0 mx-auto mt-2 bg-[#475467] opacity-30' />
                <div className='flex items-center ml-4 mt-3'>
                <img src={reviewman} alt="" />
                <div>
                  <div className='ml-4'>
                    <span className='text-4 text-white'>Instructor name</span> <br />
                    <span className='text-xs text-white text-start'>Expertise field name</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div  >
              <div class="w-[288px] h-[274px] bg-[#1D2939]   hover:bg-[#1D2939] hover:opacity-70 border-hover rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="" src={courseimage} alt="" />
                </a>
                <div className='flex items-center mt-[14px]'>
                  <img className=' ml-[18px]' src={playbtn} alt="" />
                  <div>
                    <span className='ml-[10px] text-white text-4'>ক্যারিয়ার করুন ওয়েব ডিজাইনে</span>
                  </div>
                </div>
                <hr className='w-[256px] h-0 mx-auto mt-2 bg-[#475467] opacity-30' />
                <div className='flex items-center ml-4 mt-3'>
                <img src={reviewman} alt="" />
                <div>
                  <div className='ml-4'>
                    <span className='text-4 text-white'>Instructor name</span> <br />
                    <span className='text-xs text-white text-start'>Expertise field name</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div  >
              <div class="w-[288px] h-[274px] bg-[#1D2939]   hover:bg-[#1D2939] hover:opacity-70 border-hover rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="" src={courseimage} alt="" />
                </a>
                <div className='flex items-center mt-[14px]'>
                  <img className=' ml-[18px]' src={playbtn} alt="" />
                  <div>
                    <span className='ml-[10px] text-white text-4'>ক্যারিয়ার করুন ওয়েব ডিজাইনে</span>
                  </div>
                </div>
                <hr className='w-[256px] h-0 mx-auto mt-2 bg-[#475467] opacity-30' />
                <div className='flex items-center ml-4 mt-3'>
                <img src={reviewman} alt="" />
                <div>
                  <div className='ml-4'>
                    <span className='text-4 text-white'>Instructor name</span> <br />
                    <span className='text-xs text-white text-start'>Expertise field name</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div  >
              <div class="w-[288px] h-[274px] bg-[#1D2939]   hover:bg-[#1D2939] hover:opacity-70 border-hover rounded-[4px] shadow ml-[24px] ">
                <a href="#">
                  <img class="" src={courseimage} alt="" />
                </a>
                <div className='flex items-center mt-[14px]'>
                  <img className=' ml-[18px]' src={playbtn} alt="" />
                  <div>
                    <span className='ml-[10px] text-white text-4'>ক্যারিয়ার করুন ওয়েব ডিজাইনে</span>
                  </div>
                </div>
                <hr className='w-[256px] h-0 mx-auto mt-2 bg-[#475467] opacity-30' />
                <div className='flex items-center ml-4 mt-3'>
                <img src={reviewman} alt="" />
                <div>
                  <div className='ml-4'>
                    <span className='text-4 text-white'>Instructor name</span> <br />
                    <span className='text-xs text-white text-start'>Expertise field name</span>
                  </div>
                </div>
              </div>
              </div>
            </div>

          </ReactSimplyCarousel>
        </div>
      </div>


    </div>
    <MobileCarosel/>
   </div>
  );
};

export default Carosel;