import Header from '@/components/Header'
import React from 'react'
import ChefCard from './ChefCard'
import { client } from '@/sanity/lib/client'


async function fetchSanityData() {
    const fetchData = await client.fetch(
        `*[_type == "chef"] {
            name,
            position,
            "imageUrl": image.asset->url
        }`
    );
    return fetchData;
}


const page = async () => {

    const data = await fetchSanityData();
    // console.log(data);


    return (
        <div className='bg-white'>
            <Header title="Our Chef" link="chef" />


            <section className='w-full h-auto flex items-center justify-center justify-self-center'>
                <div className='max-w-[1320px] w-full min-h-[1386px] py-[120px] gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>


                    {
                        data.map((val: any, i: number) => {
                            return <ChefCard img={val.imageUrl} name={val.name} position={val.position} />
                        })
                    }



                </div>
            </section>
        </div>
    )
}

export default page