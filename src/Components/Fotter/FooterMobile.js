import React from 'react';
import logo from '../asset/ostad logo.png'
import goolw from '../asset/google-play 1.png'
import img from '../asset/image 11.png'
import img2 from '../asset/image 12.png'
import img3 from '../asset/image 13.png'
import img4 from '../asset/image 5.png'
import img5 from '../asset/image 14.png'
import phone from '../asset/phone.png'
import message from '../asset/message.png'
import location from '../asset/location.png'

const FooterMobile = () => {
    return (
        <div>
            
 <footer className='lg:hidden block'>
    <div  className='  h-[900px] w-full bg-[#FFFBEE]  lg:grid lg:grid-cols-4 '>
       <div className='lg:ml-[149px] lg:mt-[20px] ml-4  '>
       <div className='flex items-center mb-5'>
            <img className='w-[27px]  h-[27px] mt-[100px] lg:mt-0' src={logo} alt="" />
            <span className='text-[15px] ml-[5px] mt-[100px] lg:mt-0 font-bold'>Ostad</span>
        </div>
        <span className='text-[15px] mb-5'>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</span> <br />
        <span className='mt-5 font-bold'>ডাউনলোড করুন ওস্তাদ অ্যাপ</span>
        <img className='mt-[18px]' src={goolw} alt="" />
       <div className='mt-5'>
       <span className='lg:mt-4 text-[12px] mt-8'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</span>
        <div className='flex mt-2'>
<img className='' src={img} alt="" />
<img className='ml-[21px] border border-gray-50' src={img2} alt="" />
<img className='ml-[21px]' src={img3} alt="" />
<img className='ml-[21px]' src={img4} alt="" />
<img className='ml-[21px]' src={img5} alt="" />
        </div>
       </div>
       </div>
        <div className=' lg:ml-3 ml-4 mt-[54px]'>
            <span className='text-justify'>
            কুইক লিঙ্ক <br />
আপকামিং লাইভ ব্যাচ <br />
ফ্রি লাইভ ক্লাস <br />
লাইভ ওয়ার্কশপ <br />
জয়েন করুন এক্সপার্টদের টিমে <br />
ব্লগ 
            </span>
        </div>
        <div className=' lg:ml-3 ml-4 mt-[34px]'>
       <span>
       <div className='flex items-center mt-5'>
       <img className='w-[18px] h-[18px]' src={phone} alt="" />
        <span className='ml-2 text-[16px]'>01781-611903</span>
       </div>
       <div className='flex items-center  mt-5'>
       <img className='w-[18px] h-[18px]' src={message} alt="" />
        <span className='ml-2 text-[16px]'>support@ostad.app</span>
       </div>
       <div className='flex items-center mt-5'>
       <img className='w-[18px] h-[18px]' src={location} alt="" />
        <span className='ml-2 text-[16px]'>Ka-6/a, Navana Sylvania, Baridhara Road, <br /> Nadda, Gulshan-2, Dhaka-1212</span>
       </div>
       </span>
      <span className=''>

      </span>
        </div>
        <div className='lg:ml-3 ml-4 mt-[34px]'>
            <span>
        
            কোম্পানি <br />
আমাদের সম্পর্কে</span>
        </div>
    </div>
 </footer>

            
        </div>
    );
};

export default FooterMobile;