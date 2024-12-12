import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <section className="w-full min-h-[880px] h-auto flex items-center justify-center mb-9">
            <div className="w-full max-w-[1320px] min-h-[732px] h-auto flex flex-col justify-between px-4 lg:px-0">
                {/* Title */}
                <div className="flex flex-col justify-center items-center text-center">
                    <h3
                        style={{ fontFamily: 'GreatVibes' }}
                        className="text-3xl text-[var(--primary-yellow)] mb-5"
                    >
                        Chefs
                    </h3>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-4 font-bold text-white">
                        <span className="text-[var(--primary-yellow)]">La</span>test News & Blog
                    </h1>
                </div>
                {/* Cards Row */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BlogCard img="blog-1" text="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis" />
                    <BlogCard img="blog-2" text="Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A" />
                    <BlogCard img="blog-3" text="Curabitur rutrum velit ac congue malesuada" />
                </div>
            </div>
        </section>

    )
}

export default Blog