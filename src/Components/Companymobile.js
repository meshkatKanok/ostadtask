import React from 'react';
import img1 from '../Components/asset/walton.png'
import img2 from '../Components/asset/romoni.png'
import img3 from '../Components/asset/misfit.png'
import img4 from '../Components/asset/amrtech.png'
import '../Components/Carosel/Carosel.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const  Companymobile = () => {
    return (
        
        <div className='lg:hidden block w-full h-[225px] bg-[#101828]  p-0.5'>
             <span className='text-[20px] flex justify-center  mt-[32px] text-white'>Top companies trust Ostad</span>
             
            <div id="default-carousel" class="relative mt-6" data-carousel="static">

                <div class="relative h-[380px] overflow-hidden rounded-lg md:h-[160px]">

                   <div className='flex'>
                   <div class="hidden duration-700 ease-in-out" data-carousel-item>
                   <img className='w-[185px] h-[111px] rounded bg-white ml-11' src={img1} alt="" />
                        {/*  */}
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img className='w-[185px] h-[111px] rounded  bg-white ml-11'  src={img2} alt="" />
                        {/*  */}
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img className='w-[185px] h-[111px] rounded bg-white ml-11'  src={img2} alt="" />
                        {/*  */}
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img className='w-[185px] h-[111px] rounded bg-white ml-11' src={img3} alt="" />
                        {/*  */}
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img className='w-[185px] h-[111px] rounded bg-white ml-11' src={img3} alt="" />
                        {/*  */}
                    </div>
                   </div>
                   




  
                    
       

                </div>

                <div class="absolute z-30  space-x-3 -translate-x-1/2 bottom-[10px] hidden left-[50px]">
                    <button type="button" class="w-3 h-3 rounded-full bg-[#FFAB00] text-[#FFAB00] " aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full  " aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full  " aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>

                <button type="button" class="absolute top-[-25px]  left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white ">
                        <FaArrowLeft className='text-[#FFAB00]' />
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-[-25px] right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white ">
                        <FaArrowRight className='text-[#FFAB00]' />
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>


        </div>
        
    );
};

export default  Companymobile;