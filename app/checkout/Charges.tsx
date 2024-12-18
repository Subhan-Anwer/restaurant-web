import React from 'react'

const Charges = ({ text, price }: { text: string, price: string}) => {
    return (
        <div className='flex justify-between items-center'>
            <p className='text-base text-[#4f4f4f]'>{text}</p>
            <p className='text-base text-[#333333]'>{price}</p>
        </div>
    )
}

export default Charges