import React from 'react'
import ProductComponent from './ProductComponent'

const ProductSection = () => {
    return (
        <section className='w-full h-auto flex items-center justify-center px-4 mt-[80px] mb-[120px]'>
            <div className="max-w-[1320px] w-full min-h-[765px] h-auto flex flex-col gap-[32px]">
                {/* Title */}
                <div className='max-w-[1225px] w-full h-auto flex items-center justify-between xl:font-bold font-semibold xl:text-lg md:text-base text-sm text-[#333333]'>
                    <h5 className=''>Product</h5>   
                    <div className='flex justify-between xl:w-[778px] lg:w-[600px] md:w-[500px] sm:w-[410px] w-auto gap-2 text-center'>
                        <h5 className=''>Price</h5>
                        <h5 className=''>Quantity</h5>
                        <h5 className=''>Total</h5>
                        <h5 className=''>Remove</h5>
                    </div>
                </div>




                {/* Products list  */}
                <ProductComponent name='Burger' img="burger" stars={3} price="$35.00" quantity={1} total="$221.00" removeClr='text-[#333333]' />
                <ProductComponent name='Fresh Lime' img="product2" stars={3} price="$25.00" quantity={1} total="$521.00" removeClr='text-[#FF9F0D]' />
                <ProductComponent name='Pizza' img="food-4" stars={3} price="$15.00" quantity={1} total="$421.00" removeClr='text-[#333333]' />
                <ProductComponent name='Chocolate Muffin' img="product-4" stars={3} price="$45.00" quantity={1} total="$521.00" removeClr='text-[#333333]' />
                <ProductComponent name='Cheese Butter' img="product-5" stars={3} price="$15.00" quantity={1} total="$325.00" removeClr='text-[#333333]' />
                
                

                




            </div>
        </section>

    )
}

export default ProductSection