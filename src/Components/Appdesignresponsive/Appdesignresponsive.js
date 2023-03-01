import React from 'react';
import network from '../asset/network.png'
import time from '../asset/time.png'
import appdesign from '../asset/mobile caruselimg.png'
import appicone from '../asset/user.png'
import playbtn from '../asset/playbtnnet.png'

const Appdesignresponsive = () => {
    return (
       <div className='bg-[#F9F9FA]'>
         <div className='w-full h-[480px]  bg-[#FFFFFF] lg:hidden block'>
            <div>
                <div>
                    <div className='flex items-center ml-4 mt-[68px]'>
                        <img className='w-[40px] h-[40px]' src={network} alt="" />
                        <span className='text-[12px] font-bold lg:ml-4 ml-4'>Ostad helps you in your career with</span>
                    </div>
                    <span className='ml-4 flex justify-start mt-4 text-[10px]'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>
                </div>
                <hr className='mt-4' />
                <div className='flex items-center ml-6 '>
                    <img className='w-[40px] h-[40px] mt-6' src={playbtn} alt="" />
                    <span className='text-[22px] font-semibold ml-2 mt-6'>লাইভ কোর্সসমূহ</span>
                </div>
{/* carusel-------------------------- */}
                <div className='mt-6'>
                    
<div id="default-carousel" class="relative" data-carousel="static">
  
    <div class="relative h-[400px] w-full overflow-hidden rounded-lg md:h-96">
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div class="w-[316px] h-[365px] bg-white   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 borderdesign">
                        <a href="#">
                            <img class="rounded-t-lg" src={appdesign} alt="" />
                        </a>
                        <div className='w-full h-[40px]  '>
                            <div className='flex ml-4'>
                            <div className='mt-2'>
                                    <div className='flex w-[115px] h-[6] ml-1 rounded-[4px] text-black bg-[#FFF6D9] items-center justify-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={time} alt="" />
                                        <span className='text-xs ml-[5px]'>৫ দিন বাকি</span>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] justify-center h-[6] ml-1 rounded-[4px] text-black bg-[#FFF6D9] items-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={appicone} alt="" />
                                        <span className='text-xs ml-[5px]'>২০ টি সিট বাকি</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <span className='text-[20px] flex justify-start font-semibold ml-4 mt-2'>SolidWorks with Keyshot
                        </span>

                        <div className='bg-[#FFF6D9]  w-ful
h-[71px] mt-7'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <div className='ml-4'>
                                        <del className='text-[#FF8C4B] text-[14px]'>3000 TK</del> <br />
                                        <span className='text-[18px] font-semibold'>
                                            2000 TK</span>
                                    </div>
                                </div>
                                <div>
                                    <a style={{border:"1px solid #FFC000"}} href="#" class="inline-flex items-center px-3 py-2 w-[153px] h-[40px] text-sm font-medium text-cente bg-[#FFFBEE] justify-center mr-10 rounded-[6px] mt-4 ">
                                        বিস্তারিত দেখি
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
        </div>
        {/* -------------------------- */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div class="w-[316px] h-[365px] bg-white   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 borderdesign">
                        <a href="#">
                            <img class="rounded-t-lg" src={appdesign} alt="" />
                        </a>
                        <div className='w-full h-[40px]  '>
                            <div className='flex ml-4'>
                            <div className='mt-2'>
                                    <div className='flex w-[115px] h-[6] ml-1 rounded-[4px] text-black bg-[#FFF6D9] items-center justify-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={time} alt="" />
                                        <span className='text-xs ml-[5px]'>৫ দিন বাকি</span>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] justify-center h-[6] ml-1 rounded-[4px] text-black bg-[#FFF6D9] items-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={appicone} alt="" />
                                        <span className='text-xs ml-[5px]'>২০ টি সিট বাকি</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <span className='text-[20px] flex justify-start font-semibold ml-4 mt-2'>SolidWorks with Keyshot
                        </span>

                        <div className='bg-[#FFF6D9]  w-ful
h-[71px] mt-7'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <div className='ml-4'>
                                        <del className='text-[#FF8C4B] text-[14px]'>3000 TK</del> <br />
                                        <span className='text-[18px] font-semibold'>
                                            2000 TK</span>
                                    </div>
                                </div>
                                <div>
                                    <a style={{border:"1px solid #FFC000"}} href="#" class="inline-flex items-center px-3 py-2 w-[153px] h-[40px] text-sm font-medium text-cente bg-[#FFFBEE] justify-center mr-10 rounded-[6px] mt-4 ">
                                        বিস্তারিত দেখি
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
        </div>

        {/* ---------------------- */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div class="w-[316px] h-[365px] bg-white   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 borderdesign">
                        <a href="#">
                            <img class="rounded-t-lg" src={appdesign} alt="" />
                        </a>
                        <div className='w-full h-[40px]  '>
                            <div className='flex ml-4'>
                            <div className='mt-2'>
                                    <div className='flex w-[115px] h-[6] ml-1 rounded-[4px] text-black bg-[#FFF6D9] items-center justify-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={time} alt="" />
                                        <span className='text-xs ml-[5px]'>৫ দিন বাকি</span>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] justify-center h-[6] ml-1 rounded-[4px] text-black bg-[#FFF6D9] items-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={appicone} alt="" />
                                        <span className='text-xs ml-[5px]'>২০ টি সিট বাকি</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <span className='text-[20px] flex justify-start font-semibold ml-4 mt-2'>SolidWorks with Keyshot
                        </span>

                        <div className='bg-[#FFF6D9]  w-ful
h-[71px] mt-7'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <div className='ml-4'>
                                        <del className='text-[#FF8C4B] text-[14px]'>3000 TK</del> <br />
                                        <span className='text-[18px] font-semibold'>
                                            2000 TK</span>
                                    </div>
                                </div>
                                <div>
                                    <a style={{border:"1px solid #FFC000"}} href="#" class="inline-flex items-center px-3 py-2 w-[153px] h-[40px] text-sm font-medium text-cente bg-[#FFFBEE] justify-center mr-10 rounded-[6px] mt-4 ">
                                        বিস্তারিত দেখি
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
        </div>
         
         
    </div>
   
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
   
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


                </div>
                {/* carusel------------------ */}

            </div>

        </div>
       </div>
    );
};

export default Appdesignresponsive;