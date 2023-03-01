import React from 'react';
import tittleicone from '../asset/guideline.png'
import img from '../asset/guidelineimg.png'
import '../Carosel/Carosel.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Mobile = () => {
    return (
        <div className='lg:hidden block w-full h-[558px]   mt-4'>
            <div>
                <div className='flex items-center'>
                    <img className='w-[40px] h-[40px] mt-[40px] ml-4' src={tittleicone} alt="" />
                    <span className='text-black  font-bold text-[10px] ml-4 mt-[40px] '>ক্যারিয়ার গাইডলাইন নিয়ে আরও জানতে পড়ুন</span>
                </div>
                
            </div>
            <span className='flex justify-start lg:ml-[166px] mt-[19px] ml-4 text-xs'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>
            <div id="default-carousel" class="relative mt-6" data-carousel="static">

                <div class="relative h-[380px] overflow-hidden rounded-lg md:h-[160px]">

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='flex  '>
                        <div class="w-full h-[252px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg w-full" src={img} alt="" />
                            </a>
                            <div className='ml-4'>
                                <span className='mt-[4px]'>March 3, 2022 .
                                    5 min read</span>
                                <h3 className='text-[20px] font-bold text-black mt-[4px]'>IELTS Reading Test
                                </h3>
                                <span className='mt-[4px]'>IELTS Reading</span>
                            </div>

                        </div>
                        
                        
                    </div>
                        {/*  */}
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='flex  '>
                        <div class="w-full h-[252px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg w-full" src={img} alt="" />
                            </a>
                            <div className='ml-4'>
                                <span className='mt-[4px]'>March 3, 2022 .
                                    5 min read</span>
                                <h3 className='text-[20px] font-bold text-black mt-[4px]'>IELTS Reading Test
                                </h3>
                                <span className='mt-[4px]'>IELTS Reading</span>
                            </div>

                        </div>
                        
                        
                    </div>
                        {/*  */}
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className='flex  '>
                        <div class="w-full h-[252px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg w-full" src={img} alt="" />
                            </a>
                            <div className='ml-4'>
                                <span className='mt-[4px]'>March 3, 2022 .
                                    5 min read</span>
                                <h3 className='text-[20px] font-bold text-black mt-[4px]'>IELTS Reading Test
                                </h3>
                                <span className='mt-[4px]'>IELTS Reading</span>
                            </div>

                        </div>
                        
                        
                    </div>
                        {/*  */}
                    </div>
                   
                     
                    
                   






                </div>

                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-[40px]  left-[50px]">
                    <button type="button" class="w-3 h-3 rounded-full bg-[#FFAB00] text-[#FFAB00] " aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full  " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full  " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>

                <button type="button" class="absolute top-[140px] left-[150px] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white ">
                        <FaArrowLeft className='text-[#FFAB00]' />
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-[140px] right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white ">
                        <FaArrowRight className='text-[#FFAB00]' />
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>


        </div>
    );
};

export default Mobile;