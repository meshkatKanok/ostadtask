import React from 'react';
import tittleicone from '../asset/guideline.png'
import img from '../asset/guidelineimg.png'

const CarerrGuideline = () => {
    return (
        <div className='lg:block hidden'>
            <div className='w-full h-[665px] bg-[#FFFFFF]'>
                <div className='flex items-center ml-[160px]'>
                    <div>
                        <img className='mt-[88px] ' src={tittleicone} alt="" />
                    </div>
                    <span className='text-black font-bold text-[36px] ml-4 mt-[40px] '>ক্যারিয়ার গাইডলাইন নিয়ে আরও জানতে পড়ুন</span>
                </div>
                <span className='flex justify-start lg:ml-[166px] mt-[19px]  text-xs'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>
                <div >

                    
                    <div className='flex ml-[149px] mt-[72px]'>
                        <div class="w-[343px] h-[282px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                        <div class="w-[343px] h-[282px] bg-white ml-[56px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                        <div class="w-[343px] h-[282px] bg-white ml-[56px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

                </div>
            </div>

        </div>
    );
};

export default CarerrGuideline;