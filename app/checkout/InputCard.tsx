import React from 'react'

const InputCard = ({input}: {input: string}) => {
    return (
        <div className="w-full">
        <p className="text-base text-[#333333] mb-2">{input}</p>
          <input className="w-full h-[56px] border border-[#E0E0E0] p-4 text-[16px] text-[#828282] leading-[56px]"/>
        </div>
    )
}

export default InputCard