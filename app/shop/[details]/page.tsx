import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import TextContent from './TextContent';
import Card from '../Card';
import { client } from '@/sanity/lib/client';


// Fetch single product based on _id
async function fetchSanityDataById(id: string) {
    const query = `
      *[_type == "food" && _id == $id][0] {
          name,
          price,
          originalPrice,
          description,
          "imageUrl": image.asset->url
      }
    `;

    const fetchData = await client.fetch(query, { id });
    return fetchData;
}




const page = async ({ params }: { params: { details: string } }) => {
    const productData = await fetchSanityDataById(params.details);
    console.log(productData);

    // const data = await fetchSanityData();
    // console.log(data);


    return (
        <div className='bg-white'>
            <Header title="Shop Details" link="Shop details" />

            <div className='w-full h-auto py-[120px] mx-auto'>
                {/* Yummy Chicken */}
                <section className='max-w-[1320px] w-full min-h-[718px] h-auto flex flex-col lg:flex-row lg:gap-6 gap-8 justify-between lg:items-start items-center mx-auto lg:p-0 p-4 '>
                    {/* Image Content */}
                    <div className='lg:w-[647px] w-full h-auto flex flex-col xl:flex-row xl:items-start items-center gap-6'>
                        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-1 xl:gap-6 lg:gap-4 sm:gap-6 gap-4'>
                            <Image
                                className='w-full h-[129px] object-cover object-center rounded-md mx-auto'
                                src='/yummy1.jpg' width={132} height={129} alt='Yummy Chicken' />
                            <Image
                                className='w-full h-[129px] object-cover object-center rounded-md mx-auto'
                                src='/yummy2.jpg' width={132} height={129} alt='Yummy Chicken' />
                            <Image
                                className='w-full h-[129px] object-cover object-center rounded-md mx-auto'
                                src='/yummy3.jpg' width={132} height={129} alt='Yummy Chicken' />
                            <Image
                                className='w-full h-[129px] object-cover object-center rounded-md mx-auto'
                                src='/yummy4.jpg' width={132} height={129} alt='Yummy Chicken' />
                        </div>
                        <Image
                            className='lg:w-[491px] w-[80%]  xl:h-[596px] h-[500px] object-cover object-center rounded-md'
                            src={productData.imageUrl} width={600} height={600} alt='Yummy Chicken' quality={100} />
                    </div>


                    {/* Text Content */}
                    <TextContent foodName={productData.name} foodPrice={productData.price} />
                </section>


                <section className="max-w-[1320px] w-full min-h-[458px] flex flex-col gap-[24px] mx-auto xl:p-0 p-4 mt-[56px] mb-[120px]">
                    <div className='flex gap-6 items-center mb-8'>
                        <button className='w-[165px] h-[50px] bg-[var(--primary-yellow)] text-white text-base hover:bg-[#ff920d] active:bg-[#ff6e0d] focus:outline-none'>Description</button>
                        <p className='text-base text-[#333333] hover:cursor-pointer'>Reviews (24)</p>
                    </div>
                    <p className='text-base text-[#828282]'>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
                    <p className='text-base text-[#828282]'>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>

                    <div className='flex flex-col'>
                        <h3 className='text-lg text-[#4f4f4f] mb-4'>Key Benefits</h3>
                        <ul className='list-disc pl-3 text-[#4F4F4F]'>
                            <li className='mb-1 text-[12px]'><p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>
                            <li className='mb-1 text-[12px]'><p className='text-sm'>Maecenas ullamcorper est et massa mattis condimentum.</p></li>
                            <li className='mb-1 text-[12px]'><p className='text-sm'>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</p></li>
                            <li className='mb-1 text-[12px]'><p className='text-sm'>Etiam nec massa et lectus faucibus ornare congue in nunc.</p></li>
                            <li className='mb-1 text-[12px]'><p className='text-sm'>Mauris eget diam magna, in blandit turpis.</p></li>
                        </ul>
                    </div>
                </section>

                <section className='max-w-[1320px] w-full min-h-[401px] h-auto flex flex-col gap-[24px] mx-auto xl:p-0 p-4 mt-[120px] mb-20'>
                    {/* Heading & Pagination */}
                    <div className='flex w-full items-center justify-between'>
                        <h2 className='font-bold md:text-[32px] text-[20px] text-[#333333]'>Similar Products</h2>
                        <div className='flex items-center gap-2'>
                            <div className='md:w-10 md:h-10 w-8 h-8 rounded-[50%] bg-[#FAF7F2] bg-[url("/ArrowLeft.png")] bg-center bg-fill bg-no-repeat'></div>
                            <div className='md:w-10 md:h-10 w-8 h-8 rounded-[50%] bg-[var(--primary-yellow)] bg-[url("/ArrowRight.png")] bg-center bg-fill bg-no-repeat'></div>
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div className='flex xl:flex-nowrap flex-wrap justify-center gap-6'>
                        <Card img='/menu1.jpg' name='Fresh Lime' price={38.00} pricewas='45.00' />
                        <Card img='/menu2.jpg' name='Chocolate Muffin' font='normal' price={28.00} icons={true} />
                        <Card img='/menu3.jpg' name='Burger' price={21.00} />
                        <Card img='/menu1.jpg' name='Fresh Lime' price={38.00} pricewas='45.00' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page