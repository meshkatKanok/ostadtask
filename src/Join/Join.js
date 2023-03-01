import React from 'react';
import tittleicone from '../Components/asset/joinicone.png'
import course from '../Components/asset/course.png'
import course1 from '../Components/asset/course2.png'
import course2 from '../Components/asset/course3.png'
import course3 from '../Components/asset/course4.png'
import fb from '../Components/asset/fb.png'
import bannericonetwo from '../Components/asset/bannericonetwo.png'
import './join.css'

const Join = () => {
    return (
        <div>
            <div className='lg:block hidden'>
                <div>
                    <div className='flex items-center ml-[160px]'>
                        <div>
                            <img className='mt-[40px] ' src={tittleicone} alt="" />
                        </div>
                        <span className='text-black font-bold text-[36px] ml-4 mt-[40px] '>জয়েন করুন আমাদের কমিউনিটিতে</span>
                    </div>
                    <span className='flex justify-start lg:ml-[166px] mt-[19px]  text-xs'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>
                </div>
                <div className='ml-[160px]'>
                   
                    <div className='flex mt-[52px]'>
                         {/* card 1------------- */}
                    <div className=' '>

<a href="#" class="flex flex-col items-center  bg-white border  hover:border-blue-600  rounded-lg hover:shadow-xl md:flex-row  w-[554px] h-[158px] ">
    <img class="object-cover ml-4 rounded-t-lg w-[240px] h-[134px]  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={course} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <button className='w-[120px] ml-2 lg:ml-0 h-[24px] mt-[20px] flex items-center p-1 rounded-[4px] bg-[#E9EFFF]'><img className='ml-[9px]' src={bannericonetwo} alt="" /> <span className='text-xs ml-[5px] text-[#101828]'>698 members</span></button>
        <h5 class="mb-2 text-[18px] font-semibold tracking-tight text-gray-900 dark:text-white">Flutter Developers Community @Bangladesh</h5>
        <div>
            <a href="#" class="inline-flex items-center px-3 py-2 w-[266px] h-[40px] text-sm font-bold text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] ">
                ফেসবুক গ্রুপে জয়েন করুন
                <img className='ml-[10px]' src={fb} alt="" />
            </a>
        </div>
    </div>
</a>

</div>
{/* card2-------------------------- */}
<div className=' ml-[24px] '>

<a href="#" class="flex flex-col items-center changephoto  bg-white border  hover:border-blue-600  rounded-lg hover:shadow-xl md:flex-row  w-[554px] h-[158px] ">
    <img class="object-cover ml-4 img-top  rounded-t-lg w-[240px] h-[134px] mt-[20px]  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={course} alt="" />
    <img class="object-cover ml-4  rounded-t-lg w-[240px] h-[134px] mt-[20px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={course1} alt="" />
    <div class="flex flex-col justify-between p-4 absolute top-[-20px] left-[220px] leading-normal">
        <button className='w-[120px] ml-2 lg:ml-0 h-[24px] mt-[20px] flex items-center p-1 rounded-[4px] bg-[#E9EFFF]'><img className='ml-[9px]' src={bannericonetwo} alt="" /> <span className='text-xs ml-[5px] text-[#101828]'>698 members</span></button>
        <h5 class="mb-2 text-[18px] font-semibold tracking-tight text-gray-900 dark:text-white">Flutter Developers Community @Bangladesh</h5>
        <div>
            <a href="#" class="inline-flex items-center px-3 py-2 w-[266px] h-[40px] text-sm font-bold text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] ">
                ফেসবুক গ্রুপে জয়েন করুন
                <img className='ml-[10px]' src={fb} alt="" />
            </a>
        </div>
    </div>
</a>

</div>
                    </div>
                        {/* 3------------ */}
                        <div className='flex mt-[24px]'>
                        <div className=' '>

<a href="#" class="flex flex-col items-center changephoto  bg-white border  hover:border-blue-600  rounded-lg hover:shadow-xl md:flex-row  w-[554px] h-[158px] ">
    <img class="object-cover ml-4 img-top  rounded-t-lg w-[240px] h-[134px] mt-[20px]  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={course} alt="" />
    <img class="object-cover ml-4  rounded-t-lg w-[240px] h-[134px] mt-[20px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={course2} alt="" />
    <div class="flex flex-col justify-between p-4 absolute top-[-20px] left-[220px] leading-normal">
        <button className='w-[120px] ml-2 lg:ml-0 h-[24px] mt-[20px] flex items-center p-1 rounded-[4px] bg-[#E9EFFF]'><img className='ml-[9px]' src={bannericonetwo} alt="" /> <span className='text-xs ml-[5px] text-[#101828]'>698 members</span></button>
        <h5 class="mb-2 text-[18px] font-semibold tracking-tight text-gray-900 dark:text-white">Flutter Developers Community @Bangladesh</h5>
        <div>
            <a href="#" class="inline-flex items-center px-3 py-2 w-[266px] h-[40px] text-sm font-bold text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] ">
                ফেসবুক গ্রুপে জয়েন করুন
                <img className='ml-[10px]' src={fb} alt="" />
            </a>
        </div>
    </div>
</a>

</div>
{/* 4------------- */}
<div className='ml-[24px] '>

<a href="#" class="flex flex-col items-center changephoto  bg-white border  hover:border-blue-600  rounded-lg hover:shadow-xl md:flex-row  w-[554px] h-[158px] ">
    <img class="object-cover ml-4 img-top  rounded-t-lg w-[240px] h-[134px] mt-[20px]  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={course} alt="" />
    <img class="object-cover ml-4  rounded-t-lg w-[240px] h-[134px] mt-[20px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={course3} alt="" />
    <div class="flex flex-col justify-between p-4 absolute top-[-20px] left-[220px] leading-normal">
        <button className='w-[120px] ml-2 lg:ml-0 h-[24px] mt-[20px] flex items-center p-1 rounded-[4px] bg-[#E9EFFF]'><img className='ml-[9px]' src={bannericonetwo} alt="" /> <span className='text-xs ml-[5px] text-[#101828]'>698 members</span></button>
        <h5 class="mb-2 text-[18px] font-semibold tracking-tight text-gray-900 dark:text-white">Flutter Developers Community @Bangladesh</h5>
        <div>
            <a href="#" class="inline-flex items-center px-3 py-2 w-[266px] h-[40px] text-sm font-bold text-center hover:bg-[#D0D5DD] bg-[#EAECF0] justify-center mr-4 rounded-[6px] ">
                ফেসবুক গ্রুপে জয়েন করুন
                <img className='ml-[10px]' src={fb} alt="" />
            </a>
        </div>
    </div>
</a>

</div>
                        </div>
                   
                    {/* end------- */}
                </div>

            </div>
        </div>
    );
};

export default Join;