import Image from 'next/image'
import React from 'react'

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: {
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
    onPageChange: (page: number) => void
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className='sm:w-[306px] w-[220px] h-[51px] flex items-center justify-between'>
            {/* Previous Button */}
            <button
                className={`sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] border-2 border-[#F2F2F2] flex items-center justify-center ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <Image src='/pgleft.png' alt='Previous' width={100} className='w-[14px] h-[17px]' />
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    className={`sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] border-2 border-[#F2F2F2] ${currentPage === index + 1
                            ? 'bg-[var(--primary-yellow)] text-white'
                            : 'text-[var(--primary-yellow)]'
                        }`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            {/* Next Button */}
            <button
                className={`sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] border-2 border-[#F2F2F2] flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <Image src='/pgright.png' alt='Next' width={100} className='w-[14px] h-[17px]' />
            </button>
        </div>
    )
}

export default Pagination