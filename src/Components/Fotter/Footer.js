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
            
 <footer className='lg:block hidden'>
    <div  className='lg:h-[220px] h-[800px] w-full bg-[#FFFBEE]  lg:grid lg:grid-cols-4 '>
       <div className='lg:ml-[149px] lg:mt-[20px] ml-4  '>
        <img className='mt-[18px]' src={goolw} alt="" />
       <div className='mt-5'>
       <span className='lg:mt-4 text-[12px] mt-8'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</span>
        <div className='flex mt-2'>
<img className='' src={img} alt="" />
<img className='ml-[21px]' src={img2} alt="" />
<img className='ml-[21px]' src={img3} alt="" />
<img className='ml-[21px]' src={img4} alt="" />
<img className='ml-[21px]' src={img5} alt="" />
        </div>
       </div>
       </div>
        <div className=' lg:ml-3 ml-4 mt-[34px]'>
            <span className='text-justify'>জয়েন করুন এক্সপার্টদের টিমে <br />
ব্লগ</span>
        </div>
        <div className=' lg:ml-3 ml-4 mt-[34px]'>
       
      <span className=''> Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, <br /> Gulshan-2, Dhaka-1212</span>
        </div>
        <div className='lg:ml-3 ml-4 mt-[34px]'>
            <span>
        
                Terms & Conditions</span>
        </div>
    </div>
 </footer>

            
        </div>
    );
};

export default Footer;