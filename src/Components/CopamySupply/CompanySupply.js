import React from 'react';
import img1 from '../asset/walton.png'
import img2 from '../asset/romoni.png'
import img3 from '../asset/misfit.png'
import img4 from '../asset/amrtech.png'

const CompanySupply = () => {
    return (
        <div className='lg:block hidden'>
            <div className='w-full h-[255px] bg-[#101828]'>
                <div>
                   <div className='mb-[32px]'>
                   <div className=''>
                 <span className='text-[20px] flex justify-center  mt-[32px] text-white'>Top companies trust Ostad</span>
                 </div>
                   </div>
<div className='grid grid-cols-7 mt-6'>
<img className='w-[173] h-[96px]' src={img1} alt="" />
<img className='w-[173] h-[96px]'  src={img2} alt="" />
<img className='w-[173] h-[96px]' src={img3} alt="" />
<img className='w-[173] h-[96px]' src={img4} alt="" />
<img className='w-[173] h-[96px]' src={img1} alt="" />
<img className='w-[173] h-[96px]' src={img2} alt="" />
<img className='w-[173] h-[96px]' src={img3} alt="" />
</div>
                </div>
            </div>
            
        </div>
    );
};

export default CompanySupply;