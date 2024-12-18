import React from 'react'

const Card = ({text}: {text: string}) => {
    return (
        <div className='xl:w-[648px] md:w-[47vw] w-[88vw] justify-self-center xl:h-[170px] sm:h-[200px] h-[270px] my-[6px] md:p-6 sm:p-5 p-4 flex flex-col md:justify-between justify-evenly bg-[#FAF7F2] rounded-lg'>
            <div className='flex items-center justify-between'>
                <h5 className="font-bold text-lg text-[#333333]">{text}</h5>
                <p className='text-[26px] text-[#333333]'>&#43;</p>
            </div>
            <p className='text-base text-[#4f4f4f]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
    )
}

export default Card