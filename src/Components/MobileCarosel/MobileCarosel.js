import React from 'react';
import tittleicone from '../asset/carusel titleicone.png';
import courseimage from '../asset/Course Image.png';
import playbtn from '../asset/Vector.png';
import reviewman from '../asset/reviewman.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MobileCarosel = () => {
    return (
        <div className='lg:hidden block w-full h-[498px] bg-[#101828] mt-8'>
             <div className='flex items-center '>
            <div>
              <img  className='mt-[40px] ml-4' src={tittleicone} alt="" />
            </div>
            <span className='text-white text-[15px] mt-[40px]'>এক্সপার্টদের ক্যারিয়ার গাইডলাইন</span>
          </div>

            <div id="default-carousel" class="relative mt-6" data-carousel="static">

                <div class="relative h-[380px] overflow-hidden rounded-lg md:h-[160px]">

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='mr-5' >
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
                    </div>

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='ml-5 mr-5' >
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
                    </div>

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='ml-5 mr-5' >
              <div class="w-[288px] h-[274px] bg-[#1D2939]  hover:bg-[#1D2939] hover:opacity-70 border-hover rounded-[4px] shadow ml-[24px] ">
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
                    </div>
                </div>

                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-[40px]  left-[50px]">
                    <button type="button" class="w-3 h-3 rounded-full bg-[#FFAB00] text-[#FFAB00]" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div> 

                <button type="button" class="absolute top-[140px] left-[150px] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <FaArrowLeft  className='text-[#FFAB00]'/>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-[140px] right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                         <FaArrowRight className='text-[#FFAB00]'/>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>


        </div>
    );
};

export default MobileCarosel;