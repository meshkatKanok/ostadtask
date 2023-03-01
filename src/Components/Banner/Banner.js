import React from 'react';
import banner from '../asset/bannerorginal.png';
import bannerimage from '../asset/CATAGORY.png'
import bannericone from '../asset/bannericone.png'
import bannericonetwo from '../asset/bannericonetwo.png'
import {FaArrowRight} from "react-icons/fa";
import mobilebg from '../asset/Untitled design.png'

const Banner = () => {
    return (
        <div>
            <div>

                <figure class="relative w-full   ">
                    <a href="#">
                        <img class=" w-full h-[493px] lg:h-[300px] lg:block hidden" src={banner} alt="banner" />
                        <img class=" w-full h-[493px]  block lg:hidden  " src={mobilebg} alt="banner" />
                    </a>
                    <figcaption class="absolute  bottom-11">
                        <div className='lg:flex'>
                            <div className=' '>
                                <img className='lg:ml-[161px]' src={bannerimage} alt="" />
                            </div>
                            <div className=' h-[233px]   lg:ml-[36px]'>
                                <h1 className='font-bold lg:text-[30px] text-[20px] text-[#101828] flex justify-start ml-2 lg:ml-0 mt-[19px] lg:mt-0'>Tech and development</h1>
                                <div className='lg:mt-[24px] ml-2 lg:ml-0'>
                                <span className='  lg:block hidden lg:text-[16px] mt-[16px] text-justify lg:text-s text-[10px] text-[#1D2939]'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে  ,ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন <br /> দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>
                                <span className='  lg:hidden block lg:text-[16px] mt-[16px] text-justify lg:text-s text-[10px] text-[#1D2939]'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে <br /> ,ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন <br /> দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>
                                
                                </div>
                                <div className='flex mt-6'>
                                    <button  className='w-[120px] ml-2 lg:ml-0 h-[24px] flex items-center p-1 rounded-[4px] bg-[#E9EFFF]'><img className='ml-[9px]' src={bannericone} alt="" /> <span className='text-xs ml-[5px] text-[#101828] font-medium '>৭টি লাইভ কোর্স</span></button>
                                    <button  className='lg:w-[185px] w-[140px] ml-1   h-[24px] flex items-center p-1 lg:ml-4 rounded-[4px] bg-[#E9EFFF]'><img className='ml-[9px]' src={bannericonetwo} alt="" /> <span className='lg:text-xs text-[9px] lg:ml-[5px] text-[#101828] font-medium'>১৪২৪৫ জন Ostad গ্র্যাজুয়েট</span></button>
                                </div>
                                <div className='lg:flex lg:items-center mt-6 ml-3 lg:ml-0'>
                                    <button className=' lg:w-[188px] w-full h-[48px] bg-[#101828] hover:bg-[#FFC000] rounded-[8px] flex items-center justify-center'  >
                                        <span className='  text-[14px] uppercase text-white  '>Start Learning</span>    <FaArrowRight className='lg:w-[16px] lg:h-[15.56px] w-4 h-4 ml-[12px] text-white' />
                                    </button>
                                    <button style={{ border: "1px solid #101828" }} className=' mt-[16px] lg:mt-0 lg:w-[192px] w-full lg:ml-4 h-[48px] bg-[#F9F9FA] hover:bg-[#FFE699] rounded-[8px] '  >
                                        <span className='text-[14px] uppercase text-[#101828] mb-2 lg:mb-0'>assessment</span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </figcaption>
                </figure>

                



            </div>

        </div>
    );
};

export default Banner;