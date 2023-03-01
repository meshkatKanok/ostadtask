import React from 'react';
import tittleicone from '../asset/careericone.png';
import '../Carosel/Carosel.css'
import img1 from '../asset/man.png'
import img2 from '../asset/walton.png'
import img3 from '../asset/misfit.png'
import img4 from '../asset/walton.png'
 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MobileCarosel = () => {
    return (
        <div className='lg:hidden block w-full h-[638px]  mt-8'>
               <div className='flex items-center ml-4'>
                        <div>
                            <img className='mt-[40px] ' src={tittleicone} alt="" />
                        </div>
                        <span className='text-black font-bold text-[15px] mt-[40px] '>ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন</span>
                    </div>
                    <span className='flex ml-4 justify-start lg:ml-[166px] mt-[19px]  text-xs'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>

            <div id="default-carousel" class="relative mt-6" data-carousel="static">

                <div class="relative h-[380px] overflow-hidden rounded-lg md:h-[160px]">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div className=''>
                <div>
                    <div>

                        <div class="w-[241px] h-[348px] relative ml-[20px] mr-[34px]  bg-white border border-gray-200  ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px] bg-[#000000] opacity-40 absolute bottom-0 rounded-lg'>
                            </div>
                            <div className='absolute bottom-2 ml-[23px]'>
                            <span className='text-[18px] text-white text-center'>Kazi Ahad Islam (Erfan)</span> <br />
                            <span className='text-[11px] text-white mb-[10px]'>Country HR Manager, Amann Group</span>
                            <div className='flex'>
                                <img src={img2} alt="" />
                                <img  className='bg-white ml-[17px]' src={img3} alt="" />
                                <img className='ml-[17px]' src={img4} alt="" />
                            </div>
                            </div>
                             
                        </div>

                    </div>
                </div>

            </div>

                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div className=''>
                <div>
                    <div>

                        <div class="w-[241px] h-[348px] relative ml-[20px] mr-[34px]  bg-white border border-gray-200  ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px] bg-[#000000] opacity-40 absolute bottom-0 rounded-lg'>
                            </div>
                            <div className='absolute bottom-2 ml-[23px]'>
                            <span className='text-[18px] text-white text-center'>Kazi Ahad Islam (Erfan)</span> <br />
                            <span className='text-[11px] text-white mb-[10px]'>Country HR Manager, Amann Group</span>
                            <div className='flex'>
                                <img src={img2} alt="" />
                                <img  className='bg-white ml-[17px]' src={img3} alt="" />
                                <img className='ml-[17px]' src={img4} alt="" />
                            </div>
                            </div>
                             
                        </div>

                    </div>
                </div>

            </div>

                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div className=''>
                <div>
                    <div>

                        <div class="w-[241px] h-[348px] relative ml-[20px] mr-[34px]  bg-white border border-gray-200  ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px] bg-[#000000] opacity-40 absolute bottom-0 rounded-lg'>
                            </div>
                            <div className='absolute bottom-2 ml-[23px]'>
                            <span className='text-[18px] text-white text-center'>Kazi Ahad Islam (Erfan)</span> <br />
                            <span className='text-[11px] text-white mb-[10px]'>Country HR Manager, Amann Group</span>
                            <div className='flex'>
                                <img src={img2} alt="" />
                                <img  className='bg-white ml-[17px]' src={img3} alt="" />
                                <img className='ml-[17px]' src={img4} alt="" />
                            </div>
                            </div>
                             
                        </div>

                    </div>
                </div>

            </div>

                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div className=''>
                <div>
                    <div>

                        <div class="w-[241px] h-[348px] relative ml-[20px] mr-[34px]  bg-white border border-gray-200  ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px] bg-[#000000] opacity-40 absolute bottom-0 rounded-lg'>
                            </div>
                            <div className='absolute bottom-2 ml-[23px]'>
                            <span className='text-[18px] text-white text-center'>Kazi Ahad Islam (Erfan)</span> <br />
                            <span className='text-[11px] text-white mb-[10px]'>Country HR Manager, Amann Group</span>
                            <div className='flex'>
                                <img src={img2} alt="" />
                                <img  className='bg-white ml-[17px]' src={img3} alt="" />
                                <img className='ml-[17px]' src={img4} alt="" />
                            </div>
                            </div>
                             
                        </div>

                    </div>
                </div>

            </div>

                </div>

             

                    

                   
                </div>

                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-[40px] mt-[200px] top-[180px]  left-[50px]">
                    <button type="button" class="w-3 h-3 rounded-full bg-[#FFAB00]  text-[#FFAB00] " aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-[#FFAB00]  text-[#FFAB00]" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full bg-[#FFAB00]  text-[#FFAB00]" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div> 

                <button type="button" class="absolute top-[200px] left-[150px] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#FFFBEE] ">
                    <FaArrowLeft  className='text-[#FFAB00]'/>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-[200px] right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#FFFBEE] ">
                         <FaArrowRight className='text-[#FFAB00]'/>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>


        </div>
    );
};

export default MobileCarosel;