import React from 'react';
import workdhoicone from '../asset/workshopicone.png'
import time from '../asset/time.png'
import appdesign from '../asset/appdesign.png'
import appicone from '../asset/user.png'

const Workshop = () => {
    return (
        <div className='lg:block hidden'>
            <div className='w-[1200px] h-[483px] mx-auto bg-[#FFFFFF] rounded-[7px] mt-[72px]' style={{ border: "1px solid #EAECF0" }}>
                <div>
                    <div className='flex items-center  ml-4 '>
                        <img className='w-[40px] h-[40px] mt-6' src={workdhoicone} alt="" />
                        <span className='text-[22px] font-semibold lg:ml-4 mt-6'>ওয়ার্কশপ</span>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2 ml-6 mt-6'>
                    {/* course card 1------------------------- */}
                    <div class="w-[343px] h-[371px] bg-white hover:shadow-xl  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 borderdesign">
                        <a href="#">
                            <img class="rounded-t-lg" src={appdesign} alt="" />
                        </a>
                        <div className='w-full h-[40px]  bg-[#1D2939]'>
                            <div className='flex'>
                                <div className='mt-2'>
                                    <div className='w-[53px] h-[24px]   ml-4 bg-[#101828] text-xs rounded-[4px] text-white'>ব্যাচ ২৬ </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] justify-center h-[6] ml-2 rounded-[4px] text-white bg-[#475467] items-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={appicone} alt="" />
                                        <span className='text-xs ml-[5px]'>২০ টি সিট বাকি</span>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] h-[6] ml-2 rounded-[4px] text-white bg-[#475467] items-center justify-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={time} alt="" />
                                        <span className='text-xs ml-[5px]'>৫ দিন বাকি</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='text-[20px] flex justify-start font-semibold ml-4 mt-2'>SolidWorks with Keyshot
                        </span>

                        <div className='bg-[#F9F9FA]  w-ful
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
                                    <a href="#" class="inline-flex items-center px-3 py-2 w-[156px] h-[40px] text-sm font-medium text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] mt-4 ">
                                        বিস্তারিত দেখি
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* course 2-------- */}
                    <div class="w-[343px] h-[371px] bg-white hover:shadow-xl  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 borderdesign">
                        <a href="#">
                            <img class="rounded-t-lg" src={appdesign} alt="" />
                        </a>
                        <div className='w-full h-[40px]  bg-[#1D2939]'>
                            <div className='flex'>
                                <div className='mt-2'>
                                    <div className='w-[53px] h-[24px]   ml-4 bg-[#101828] text-xs rounded-[4px] text-white'>ব্যাচ ২৬ </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] justify-center h-[6] ml-2 rounded-[4px] text-white bg-[#475467] items-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={appicone} alt="" />
                                        <span className='text-xs ml-[5px]'>২০ টি সিট বাকি</span>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] h-[6] ml-2 rounded-[4px] text-white bg-[#475467] items-center justify-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={time} alt="" />
                                        <span className='text-xs ml-[5px]'>৫ দিন বাকি</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='text-[20px] flex justify-start font-semibold ml-4 mt-2'>SolidWorks with Keyshot
                        </span>

                        <div className='bg-[#F9F9FA]  w-ful
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
                                    <a href="#" class="inline-flex items-center px-3 py-2 w-[156px] h-[40px] text-sm font-medium text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] mt-4 ">
                                        বিস্তারিত দেখি
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* course 3----------- */}
                    <div class="w-[343px] h-[371px] bg-white hover:shadow-xl  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 borderdesign">
                        <a href="#">
                            <img class="rounded-t-lg" src={appdesign} alt="" />
                        </a>
                        <div className='w-full h-[40px]  bg-[#1D2939]'>
                            <div className='flex'>
                                <div className='mt-2'>
                                    <div className='w-[53px] h-[24px]   ml-4 bg-[#101828] text-xs rounded-[4px] text-white'>ব্যাচ ২৬ </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] justify-center h-[6] ml-2 rounded-[4px] text-white bg-[#475467] items-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={appicone} alt="" />
                                        <span className='text-xs ml-[5px]'>২০ টি সিট বাকি</span>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex w-[115px] h-[6] ml-2 rounded-[4px] text-white bg-[#475467] items-center justify-center p-1'>
                                        <img className='w-[10px] h-[10px] text-white' src={time} alt="" />
                                        <span className='text-xs ml-[5px]'>৫ দিন বাকি</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='text-[20px] flex justify-start font-semibold ml-4 mt-2'>SolidWorks with Keyshot
                        </span>

                        <div className='bg-[#F9F9FA]  w-ful
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
                                    <a href="#" class="inline-flex items-center px-3 py-2 w-[156px] h-[40px] text-sm font-medium text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] mt-4 ">
                                        বিস্তারিত দেখি
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* course end----------------------- */}
                </div>
            </div>

        </div>
    );
};

export default Workshop;