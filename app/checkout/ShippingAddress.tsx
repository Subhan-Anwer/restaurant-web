import React from 'react'
import InputCard from './InputCard'
import InputCard2 from './InputCard2'

const ShippingAddress = () => {
    return (
        <div className="w-full lg:w-[872px] min-h-[719px] px-1">
            <h3 className="text-xl text-[#333333] font-bold mb-6">Shipping Address</h3>
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Input Fields */}
                <InputCard input="First Name" />
                <InputCard input="Last Name" />
                <InputCard input="Email address" />
                <InputCard input="Phone number" />
                <InputCard input="Company" />
                <InputCard2 input="Country" plchldr="Choose country" />
                <InputCard2 input="City" plchldr="Choose city" />
                <InputCard input="Zip code" />
                <InputCard input="Address 1" />
                <InputCard input="Address 2" />
            </div>

            {/* Billing Address */}
            <h3 className="text-xl text-[#333333] font-bold mt-8">Billing Address</h3>
            <div className="flex items-center gap-2">
                <input id="shippingAddress" type="checkbox" />
                <label htmlFor="shippingAddress">Same as shipping address</label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
                {/* Back to Cart */}
                <div className="sm:w-[424px] w-full  h-[56px] border flex items-center mx-auto justify-center gap-2">
                    <div className="w-[24px] h-[24px] bg-[url('/CaretLeft.png')] bg-center bg-cover"></div>
                    <p className="text-[16px] text-[#4f4f4f]">Back to cart</p>
                </div>
                {/* Proceed to Shipping */}
                <div className="sm:w-[424px] w-full h-[56px] bg-[var(--primary-yellow)] flex items-center mx-auto justify-center gap-2">
                    <p className="text-[16px] text-white">Proceed to shipping</p>
                    <div className="w-[24px] h-[24px] bg-[url('/CaretRight.png')] bg-center bg-cover"></div>
                </div>
            </div>
        </div>

    )
}

export default ShippingAddress