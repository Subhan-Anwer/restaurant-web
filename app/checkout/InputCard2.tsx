import React from 'react'

const InputCard2 = ({input, plchldr}: {input: string, plchldr: string}) => {
    return (
        <div className='w-full relative'>
            <p className='text-base text-[#333333] mb-2'>{input}</p>
            <input className='w-full h-[56px] border border-[#E0E0E0] leading-[56px] p-4 text-[16px] text-[#828282]' placeholder={plchldr}></input>
            <div className='w-[24px] h-[24px] bg-[url("/CaretDown.png")] bg-center bg-cover top-12 right-4 absolute'></div>
        </div>
    )
}

export default InputCard2