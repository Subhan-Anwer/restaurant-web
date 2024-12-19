import React from 'react'

const Filter = ({ label, opt1, opt2, opt3 }: { label: string, opt1: string, opt2: string, opt3: string }) => {
    return (
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-[15px] items-center '>
            <label className='text-lg sm:text-xl text-[#333333]'>{label}</label>
            <div className='relative w-[120px] sm:w-[236px] h-[46px] text-[#BDBDBD]'>
                <select className="w-full h-full appearance-none border border-[#E0E0E0] rounded-md text-lg bg-white md:px-[18px] px-2 focus:outline-none">
                    <option value="newest">{opt1}</option>
                    <option value="popular">{opt2}</option>
                    <option value="oldest">{opt3}</option>
                </select>
                <div className='absolute w-[20px] h-[20px] bg-[url("/CaretDown.png")] bg-cover bg-center top-3 right-4'></div>
            </div>
        </div>
    )
}


export default Filter