import React from 'react';
import img1 from '../asset/walton.png'
import img2 from '../asset/romoni.png'
import img3 from '../asset/misfit.png'
import img4 from '../asset/amrtech.png'

const CompanySupply = () => {
    return (
        <div className='lg:block hidden'>
            <div className='w-full h-[255px] p-3 bg-[#101828] mt-[120px]'>
                <div>
                   <div className=''>
                   <div className=''>
                 <span className='text-[20px] flex justify-center text-white'>Top companies trust Ostad</span>
                 </div>
                   </div>
<div className='grid grid-cols-7 mt-6 ml-3'>
<img className='w-[185px] h-[111px] rounded bg-white' src={img1} alt="" />
<img className='w-[185px] h-[111px] rounded  bg-white'  src={img2} alt="" />
<img className='w-[185px] h-[111px] rounded bg-white'  src={img2} alt="" />
<img className='w-[185px] h-[111px] rounded bg-white' src={img3} alt="" />
<img className='w-[185px] h-[111px] rounded bg-white' src={img4} alt="" />
<img className='w-[185px] h-[111px] rounded bg-white' src={img1} alt="" />
<img className='w-[185px] h-[111px] rounded bg-white' src={img2} alt="" />
 
</div>
                </div>
            </div>
            
        </div>
    );
};

export default CompanySupply;