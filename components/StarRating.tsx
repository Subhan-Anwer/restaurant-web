import React from 'react'

type StarRatingProps = {
    stars: number; // Number of filled stars
    totalStars?: number; // Total stars, default is 5
};

const StarRating = ({ stars, totalStars = 5 }: StarRatingProps) => {
    return (
        <div className="flex items-center justify-center">
            {Array.from({ length: totalStars }, (_, index) => (
                <span
                    key={index}
                    className={`text-lg sm:text-xl lg:text-2xl ${index < stars ? "text-[var(--primary-yellow)]" : "text-[#E0E0E0]"
                        }`}
                >
                    &#9733;
                </span>
            ))}
        </div>
    );
};


export default StarRating