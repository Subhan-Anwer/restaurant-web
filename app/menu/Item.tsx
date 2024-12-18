import React from 'react'

const Item = ({ text, price, desc, cal }: { text: string; price: string; desc: string; cal: string }) => {
    return (
        <div className='w-full'>
            {/* Title and Price */}
            <div className='w-full flex flex-wrap justify-between items-center mb-2'>
                <h4 className='text-lg lg:text-2xl text-[#333333] font-bold'>{text}</h4>
                <h4 className='text-lg lg:text-2xl text-[var(--primary-yellow)] font-bold'>{price}</h4>
            </div>
            
            {/* Description */}
            <p className='text-sm lg:text-base text-[#4f4f4f] mb-2'>{desc}</p>
            
            {/* Calories */}
            <p className='text-sm lg:text-base text-[#828282] mb-4'>{cal}</p>
            
            {/* Divider */}
            <div className='border-b border-[#E0E0E0] border-dashed'></div>
        </div>
    );
};

export default Item