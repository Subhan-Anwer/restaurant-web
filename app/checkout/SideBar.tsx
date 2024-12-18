import React from 'react'
import Chicken from './Chicken'
import Charges from './Charges'

const SideBar = () => {
    return (

        <div className="w-full lg:w-[424px] h-auto p-6 border">
            {/* Chicken Cards */}
            <Chicken />
            <Chicken />
            <Chicken />

            {/* Summary Section */}
            <div className="w-full h-auto flex flex-col gap-6">
                {/* Summary Details */}
                <div className="w-full flex flex-col gap-4 border p-4">
                    <Charges text="Sub-total" price="130$" />
                    <Charges text="Shipping" price="Free" />
                    <Charges text="Discount" price="25%" />
                    <Charges text="Tax" price="54.75$" />
                    {/* Line */}
                    <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
                    {/* Total */}
                    <div className="flex justify-between items-center font-bold text-lg text-[#333333]">
                        <p>Total</p>
                        <p>432.65$</p>
                    </div>
                </div>

                {/* Place Order Button */}
                <div className="w-full h-[58px] bg-[var(--primary-yellow)] rounded-md text-white flex justify-center items-center gap-2">
                    <p>Place an order</p>
                    <div className="w-5 h-5 bg-[url('/ArrowRight.png')]"></div>
                </div>
            </div>
        </div>

    )
}

export default SideBar