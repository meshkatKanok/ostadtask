import React from 'react';
import logo from '../asset/ostad logo.png'
import goolw from '../asset/google-play 1.png'
import img from '../asset/image 11.png'
import img2 from '../asset/image 12.png'
import img3 from '../asset/image 13.png'
import img4 from '../asset/image 5.png'
import img5 from '../asset/image 14.png'

const Footer = () => {
    return (
        <div>
            
 <footer>
    <div  className='lg:h-[412px] h-[800px] w-full bg-[rgb(255,251,238)]  lg:grid lg:grid-cols-4 '>
       <div className='lg:ml-[149px] lg:mt-[20px] ml-4  '>
       <div className='flex items-center'>
            <img className='w-[40px]  h-[40px] mt-[100px] lg:mt-0' src={logo} alt="" />
            <span className='text-[36px] ml-[5px] mt-[100px] lg:mt-0 font-bold'>Ostad</span>
        </div>
        <span className='text-[15px]'>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</span>
        <span>ডাউনলোড করুন ওস্তাদ অ্যাপ</span>
        <img className='mt-2' src={goolw} alt="" />
        <span className='lg:mt-4 text-[15px] mt-4'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</span>
        <div className='flex mt-2'>
<img className='' src={img} alt="" />
<img className='ml-[21px]' src={img2} alt="" />
<img className='ml-[21px]' src={img3} alt="" />
<img className='ml-[21px]' src={img4} alt="" />
<img className='ml-[21px]' src={img5} alt="" />
        </div>
       </div>
        <div className=' lg:ml-3 ml-4 mt-5 lg:mt-[150px]'>
            <span className='text-justify'>কুইক লিঙ্ক
আপকামিং লাইভ  ব্যাচ
ফ্রি লাইভ   ক্লাস
লাইভ ওয়ার্কশপ
জয়েন করুন এক্সপার্টদের টিমে
ব্লগ</span>
        </div>
        <div className='mt-5 lg:ml-3 ml-4 lg:mt-[150px]'>
       
      <span className=''>যোগাযোগ 

01781-611903
support@ostad.app
Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212</span>
        </div>
        <div className='lg:mt-[150px] mt-5 lg:ml-3 ml-4 text-[15px]'>
            <span>
            কোম্পানি
আমাদের সম্পর্কে <br />
                Terms & Conditions</span>
        </div>
    </div>
 </footer>

            
        </div>
    );
};

export default Footer;