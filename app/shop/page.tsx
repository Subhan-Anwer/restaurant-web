import Header from '@/components/Header'
import React from 'react'
import Filter from './Filter'
import Card from './Card'
import Pagination from './Pagination'
import Product from './Product'
import { client } from '@/sanity/lib/client'

async function fetchSanityData() {
    const fetchData = await client.fetch(
        `*[_type == "food"] {
            name,
            price,
            originalPrice,
            "imageUrl": image.asset->url
        }`
    );
    return fetchData;
}

const page = async () => {

    const data = await fetchSanityData();
    console.log(data);


    return (
        <div className='bg-white'>
            <Header title="Our Shop" link="Shop" />

            <section className='w-full h-auto py-[120px] mx-auto'>
                <div className='max-w-[1320px] w-full h-auto flex xl:flex-row flex-col justify-between xl:items-start items-center xl:px-0 px-3 mx-auto'>
                    {/* Menu */}
                    <div className='w-full xl:max-w-[984px] flex flex-col xl:items-start items-center gap-6'>
                        {/* Filters */}
                        <div className='flex gap-[20px] md:mx-0 mx-auto'>
                            <Filter label="Sort By :" opt1="Newest" opt2="Popular" opt3="Oldest" />
                            <Filter label="Show :" opt1="Default" opt2="Latest" opt3="Trending" />
                        </div>

                        {/* Cards */}
                        <div className='grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>


                            {
                                data.map((val: any, i: number) => {
                                    return <Card img={val.imageUrl} name={val.name} price={val.price} pricewas={`$${val.originalPrice}`} />
                                })
                            }



                            {/* <Card img='1' name='Fresh Lime' price='$38.00' pricewas='$45.00' icons={true} />
                            <div className='relative'>
                                <Card img='2' name='Chocolate Muffin' font='normal' price='$28.00' />
                                <div className='absolute w-[52px] h-[22px] rounded-[4px] text-white text-center text-sm bg-[var(--primary-yellow)] top-5 left-[20px]'>Sell</div>
                            </div>
                            <Card img='3' name='Burger' price='$21.00' pricewas='$45.00' />

                            <Card img='4' name='Country Burger' price='$45.00' />
                            <Card img='5' name='Drink' price='$23.00' pricewas='$45.00' />
                            <Card img='6' name='Pizza' price='$43.00' />

                            <Card img='7' name='Cheese Butter' font='normal' price='$10.00' />
                            <Card img='8' name='Sandwiches' price='$25.00' />
                            <Card img='9' name='Chicken Chup' price='$12.00' />

                            <Card img='4' name='Country Burger' price='$45.00' />
                            <Card img='5' name='Drink' price='$23.00' pricewas='$45.00' />
                            <Card img='6' name='Pizza' price='$43.00' />

                            <Card img='7' name='Cheese Butter' font='normal' price='$10.00' />
                            <Card img='8' name='Sandwiches' price='$25.00' />
                            <Card img='9' name='Chicken Chup' price='$12.00' /> */}
                        </div>

                        {/* Pagination */}
                        <div className='mt-8 mx-auto'>
                            <Pagination />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className='w-full xl:max-w-[312px] h-[1489px] mt-8 xl:mt-[70px] py-6 pl-[30px] border border-[#F2F2F2] rounded-md'>
                        {/* Search box */}
                        <div className='w-[248px] h-[46px] bg-[#FF9F0D1A] flex items-center justify-between'>
                            <p className='text-base text-[#828282] ml-5'>Search Product</p>
                            <div className='w-[46px] h-[46px] bg-[var(--primary-yellow)] bg-center bg-no-repeat bg-[url("/search.svg")]'></div>
                        </div>

                        {/* Category */}
                        <div className='w-[248px] h-[372px] flex flex-col gap-6 my-6'>
                            <h3 className='font-bold text-xl text-[#333333]'>Category</h3>
                            <div className='flex flex-col gap-[14px] '>
                                <div className='flex items-center gap-2 bg hover:cursor-pointer'>
                                    <input id='Sandwiches' className='w-[14px] h-[14px] hover:cursor-pointer border border-[#333333]' type="checkbox" /><label htmlFor='Sandwiches' className='text-lg'>Sandwiches</label></div>
                                <div className='flex items-center gap-2'>
                                    <input id='Burger' className='w-[14px] h-[14px] border border-[#333333]' type="checkbox" />
                                    <label htmlFor='Burger' className='text-lg'>Burger</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input id='Chicken Chup' className='w-[14px] h-[14px] border border-[#333333]' type="checkbox" />
                                    <label htmlFor='Chicken Chup' className='text-lg'>Chicken Chup</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input id='Drink' className='w-[14px] h-[14px] border border-[#333333]' type="checkbox" />
                                    <label htmlFor='Drink' className='text-lg'>Drink</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input id='Pizza' className='w-[14px] h-[14px] border border-[#333333]' type="checkbox" />
                                    <label htmlFor='Pizza' className='text-lg'>Pizza</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input id='Thi' className='w-[14px] h-[14px] border border-[#333333]' type="checkbox" />
                                    <label htmlFor='Thi' className='text-lg'>Thi</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input id='Non Veg' className='w-[14px] h-[14px] border border-[#333333]' type="checkbox" />
                                    <label htmlFor='Non Veg' className='text-lg'>Non Veg</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input id='Uncategorized' className='w-[14px] h-[14px] border border-[#333333]' type="checkbox" />
                                    <label htmlFor='Uncategorized' className='text-lg'>Uncategorized</label>
                                </div>
                            </div>

                        </div>

                        {/* Banner */}
                        <div className='w-[248px] h-[286px] bg-[url("/perfectTaste.jpg")] bg-cover bg-center py-[30px] pl-[23px] flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h3 className='font-bold text-base text-white'>Perfect Taste</h3>
                                <h2 className='font-bold text-xl text-white mt-1 mb-3'>Classic Restaurant</h2>
                                <h3 className='font-bold text-base text-[var(--primary-yellow)]'>45.00$</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='text-base text-white'>Shop Now</p>
                                <div className='w-[20px] h-[20px] bg-cover bg-center bg-no-repeat bg-[url("/ArrowCircleRight.png")]'></div>
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className='w-[248px] h-[87px] flex flex-col justify-between my-6'>
                            <h2 className='font-bold text-xl text-[#333333]'>Filter By Price</h2>
                            <div className='w-[243px]  flex items-center justify-between'>
                                <div className='w-[10px] h-[10px] shadow-[0px_0px_80px_rgba(205,205,205,0.25)] border-2 bg-[var(--primary-yellow)] border-white rounded-[50%]'></div>
                                <div className='w-full h-[5px] shadow-[0px_0px_80px_rgba(205,205,205,0.25)] bg-[var(--primary-yellow)]'></div>
                                <div className='w-[10px] h-[10px] border-2 border-white rounded-[50%] bg-[var(--primary-yellow)]'></div>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p className='text-base text-[#1E1E1E] opacity-[61%]'>From $0 to $8000</p>
                                <p className='text-base text-[#0D0D0D] opacity-[61%]'>Filter</p>
                            </div>
                        </div>

                        {/* Latest Products */}
                        <div className='w-[252px] h-[368px] flex flex-col justify-between my-6'>
                            <h2 className='font-bold text-xl text-[#333333]'>Latest Products</h2>
                            <div className='w-full h-auto flex flex-col gap-4'>
                                <Product name='Pizza' />
                                <Product name='Cupcake' />
                                <Product name='Cookies' />
                                <Product name='Burger' />
                            </div>
                        </div>


                        {/* Product Tags */}
                        <div className='w-[225px] h-[162px] flex flex-col justify-between my-6'>
                            <h3 className='font-bold text-xl text-[#333333]'>Product Tags</h3>
                            <div className='w-full min-h-[110px] flex flex-wrap gap-[10px] '>
                                <div className='w-auto h-[26px] text-base text-[#4f4f4f] border-b'>Services</div>
                                <div className='w-auto h-[26px] text-base text-[#4f4f4f] border-b'>Our Menu</div>
                                <div className='w-auto h-[26px] text-base text-[#4f4f4f] border-b'>Pizza</div>
                                <div className='w-auto h-[26px] text-base text-[#4f4f4f] border-b'>Cupcake</div>
                                <div className='w-auto h-[26px] text-base text-[var(--primary-yellow)] border-b border-[var(--primary-yellow)]'>Burger</div>
                                <div className='w-auto h-[26px] text-base text-[#4f4f4f] border-b'>Cookies</div>
                                <div className='w-auto h-[26px] text-base text-[#4f4f4f] border-b'>Our Shop</div>
                                <div className='w-auto h-[26px] text-base text-[#4f4f4f] border-b'>Tandoori Chicken</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page