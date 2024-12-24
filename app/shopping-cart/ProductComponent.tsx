import React from 'react'
import Image from 'next/image'
import StarRating from '@/components/StarRating'

const ProductComponent = ({ name, img, stars, price, quantity, total, removeClr }: { name: string, img: string, stars: number, price: string, quantity: number, total: string, removeClr: string }) => {
    return (

        <div className="w-full min-h-[115px]  flex flex-col justify-between mt-[32px]">

            <div className='w-full h-[97px] flex items-center justify-between'>
                {/* burger */}
                <div className='md:w-[225px] w-[200px] h-[97px] flex sm:flex-row flex-col md:gap-4 gap-2'>
                    <Image className='md:w-[93px] sm:w-[80px] w-[75px] md:h-[97px] sm:h-[80px] h-[50px] object-cover object-center rounded-[4px]' src={`/${img}.jpeg`} width={93} height={97} alt={img} />
                    <div className='flex flex-col'>
                        <h5 className='sm:font-bold md:text-[16px] text-[13px] text-[#333333]'>{name}</h5>
                        <div className='min-w-4'>
                            <StarRating stars={stars} />
                        </div>
                    </div>
                </div>

                <div className='flex '>
                    {/* Price */}
                    <p className='sm:text-base text-sm text-[#333333]'>{price}</p>
                    {/* Quantity */}
                    <div className='md:w-[110px] sm:w-[80px] w-[50px] sm:h-[28px] h-[20px] md:h-[32px] border border-[#E0E0E0] sm:rounded-[18px] rounded-[20px] flex items-center justify-evenly xl:ml-[164px] lg:ml-[105px] md:ml-[72px] sm:ml-[62px] ml-[7px] xl:mr-[158px] lg:mr-[98px] md:mr-[68px] sm:mr-[52px] mr-[7px]'>
                        <button className='sm:w-[16px] w-3 h-3 sm:h-[16px] text-base text-[#E0E0E0]'>
                            <Image className='object-fill object-center' src='/Minus.png' width={16} height={16} alt='Minus' />
                        </button>
                        <p className='sm:text-base text-sm text-[#333333]'>{quantity}</p>
                        <button className='sm:w-[16px] w-3 h-3 sm:h-[16px] text-base text-[#E0E0E0]'>
                            <Image className='object-cover object-center' src='/Plus.png' width={16} height={16} alt='Plus' />
                        </button>
                    </div>
                    {/* Total */}
                    <h5 className='sm:text-base text-sm text-[#333333] sm:font-bold'>{total}</h5>
                    {/* Remove */}
                    <div className='md:w-5 w-4 md:h-5 h-4 xl:ml-[196px] lg:ml-[148px] md:ml-[112px] sm:ml-[85px] ml-[22px] xl:mr-[120px] mr-4 flex items-center justify-center hover:text-[19px] transition-all hover:rotate-90 text=[16px]'>
                        <button className={`font-bold ${removeClr}`}>&#10005;</button>
                    </div>
                </div>
            </div>




            {/* Divider */}
            <div className='w-full h-[1px] bg-[#E0E0E0] mt-0'></div>
        </div>
    )
}

export default ProductComponent