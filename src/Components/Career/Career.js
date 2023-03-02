 import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactSimplyCarousel from 'react-simply-carousel';
import tittleicone from '../asset/careericone.png';
import '../Carosel/Carosel.css'
import img1 from '../asset/man.png'
import img2 from '../asset/walton.png'
import img3 from '../asset/misfit.png'
import img4 from '../asset/walton.png'
import './Career.css'
import '../Carosel/Carosel.css'
 

const Career = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
   <div className='bg-[#F9F9FA]'>
     <div className='bg-[#F9F9FA] lg:block hidden mt-[100px]'>
      <div>
      <div className='flex items-center ml-[160px]'>
                        <div>
                            <img className='mt-[40px] ' src={tittleicone} alt="" />
                        </div>
                        <span className='text-black font-bold text-[36px] ml-4 mt-[40px] '>ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন</span>
                    </div>
                    <span className='flex justify-start lg:ml-[166px] mt-[19px]  text-xs'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</span>
        <div className='mt-[40px] '>

        
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={2}
            itemsToScroll={2}
            forwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: 'center',
                background: "white",
                border: 'none',
                borderRadius: '50%',
                color: '#FFAB00',
                cursor: 'pointer',
                fontSize: '20px',
                height: 40,
                lineHeight: 1,
                textAlign: 'center',
                width: 40,
                marginLeft: '40px'

              },
              children: <span><FaArrowRight className='ml-2' /></span>,
            }}
            backwardBtnProps={{
              //here you can also pass className, or any other button element attributes
              style: {
                alignSelf: 'center',
                background: "white",
                border: 'none',
                borderRadius: '50%',
                color: '#FFAB00',
                cursor: 'pointer',
                fontSize: '20px',
                height: 40,
                lineHeight: 1,
                textAlign: 'center',
                width: 40,
                marginRight: "40px"
              },
              children: <span><FaArrowLeft className='ml-2' /></span>,
            }}
            responsiveProps={[
              {
                itemsToShow: 4,
                itemsToScroll: 2,
                minWidth: 1140,
              },
            ]}
            speed={400}
            easing="linear"
          >
         
            {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
            <div   className=''>
                <div>
                    <div>

                        <div  class="w-[241px] hover:shadow-2xl career-hover h-[348px] relative mr-[34px]  bg-white   ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px]   hover:bg-[#000000] hover:opacity-70 bg-[#000000] opacity-40 absolute bottom-0 rounded-lg'>
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
            <div className=''>
                <div>
                    <div>

                        <div class="w-[241px] h-[348px] career-hover relative  bg-white border border-gray-200  ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px] bg-[#000000] hover:bg-[#000000] hover:opacity-70 opacity-40 absolute bottom-0 rounded-lg'>
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
         
             
            <div className=''>
                <div>
                    <div>

                        <div class="w-[241px] h-[348px] career-hover relative ml-[34px]  bg-white border border-gray-200  ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px] bg-[#000000] hover:bg-[#000000] hover:opacity-70 opacity-40 absolute bottom-0 rounded-lg'>
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
            <div className=''>
                <div>
                    <div>

                        <div class="w-[241px] h-[348px] relative ml-[34px] career-hover   bg-white border border-gray-200  ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px] bg-[#000000] hover:bg-[#000000] hover:opacity-70 opacity-40 absolute bottom-0 rounded-lg'>
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
            <div className=''>
                <div>
                    <div>

                        <div class="w-[241px] h-[348px] career-hover relative ml-[34px] mr-[34px]  bg-white border border-gray-200  ">
                            <a href="#">
                                <img class="w-full h-full rounded-lg" src={img1} alt="" />
                            </a>
                            <div className='w-full h-[127px] bg-[#000000] hover:bg-[#000000] hover:opacity-70 opacity-40 absolute bottom-0 rounded-lg'>
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
            
            

          </ReactSimplyCarousel>
        </div>
      </div>


    </div>
   
   </div>
  );
};

export default Career;