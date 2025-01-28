"use client";

import Header from '@/components/Header';
import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Card from './Card';
import Pagination from './Pagination';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import Product from './Product';
import Footer from '@/components/Footer';

// Fetch data from Sanity
async function fetchSanityData() {
    const fetchData = await client.fetch(
        `*[_type == "food"] {
      name,
      _id,
      price,
      originalPrice,
      category,
      "imageUrl": image.asset->url
    }`
    );
    return fetchData;
}

interface FoodItem {
    name: string;
    _id: string;
    price: number;
    originalPrice: number;
    category: string;
    imageUrl: string;
}

const Page = async () => {
    const [data, setData] = useState<FoodItem[]>([]); // State for the data
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State for selected category
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const cardsPerPage = 9; // Number of cards per page

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchSanityData();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category === selectedCategory ? null : category); // Toggle category
    };

    const filteredData = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;

    // Pagination logic
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };



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
                                currentData.map((val: { imageUrl: string; name: string; price: number, originalPrice: number, _id: string }, index: number) => {
                                    return <Link href={`/shop/${val._id}`} key={index}>
                                        <Card
                                            img={val.imageUrl}
                                            name={val.name}
                                            price={val.price}
                                            pricewas={`$${val.originalPrice}`}
                                        />
                                    </Link>
                                })
                            }
                        </div>

                        {/* Pagination */}
                        <div className='mt-8 mx-auto'>
                            <Pagination
                                totalItems={filteredData.length}
                                itemsPerPage={cardsPerPage}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
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
                        <div className="w-[248px] h-[372px] flex flex-col gap-6 my-6">
                            <h3 className="font-bold text-xl text-[#333333]">Category</h3>
                            <div className="flex flex-col gap-[14px]">
                                {["Sandwich", "Burger", "Desert", "Drink", "Pizza", "Main Court", "Non Veg"].map((category) => (
                                    <div key={category} className="flex items-center gap-2 hover:cursor-pointer">
                                        <input
                                            id={category}
                                            className="w-[14px] h-[14px] border border-[#333333]"
                                            type="checkbox"
                                            checked={selectedCategory === category}
                                            onChange={() => handleCategoryChange(category)}
                                        />
                                        <label htmlFor={category} className="text-lg">
                                            {category}
                                        </label>
                                    </div>
                                ))}
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
            <Footer />                      
        </div>
    )
}

export default Page