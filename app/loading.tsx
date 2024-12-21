import React from 'react'

const Loading = () => {
    return (
        <div className='text-white flex items-center justify-center w-full h-screen'>
            <div className="text-center">
                <div
                    className="w-[75px] h-[75px] border-8 border-dashed rounded-full animate-spin border-[var(--primary-yellow)] mx-auto"
                ></div>
                <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                Foodtuck Where every flavor tells a story.
                </p>
            </div>
        </div>
    )
}

export default Loading