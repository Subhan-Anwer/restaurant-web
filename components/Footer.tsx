import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <section className="mx-auto w-full flex items-center justify-center">
            <div className="max-w-[1923px] w-full min-h-[740px] flex flex-col items-center justify-between text-white">
                {/* Top Section */}
                <div className="w-[90%] max-w-[1170px] min-h-[142px] flex flex-col gap-5">
                    <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-4">
                        <h2 className="font-bold text-[20px] sm:text-[32px] leading-[40px]">
                            <span className="text-[var(--primary-yellow)]">St</span>ill You Need Our Support ?
                        </h2>
                        <div className="flex">
                            <div className="bg-[var(--primary-yellow)] text-white p-4 rounded-l-md text-[12px] sm:text-[16px] leading-6">
                                Enter Your Email
                            </div>
                            <div className="bg-white text-[var(--primary-yellow)] p-4 rounded-r-md text-[12px] sm:text-[16px] leading-6">
                                Subscribe Now
                            </div>
                        </div>
                    </div>
                    <p className="text-center xl:text-left mx-auto xl:mx-0 max-w-[450px]">
                        Don&#39;t wait, make a smart & logical quote here. It&#39;s pretty easy.
                    </p>
                    <div className="w-full h-[1px] bg-[var(--primary-yellow)] mt-12"></div>
                </div>

                {/* Main Content */}
                <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-14 mt-14 px-5">
                    {/* About Us */}
                    <div className="flex flex-col gap-4 items-center sm:items-start">
                        <h3 className="font-bold text-[24px]">About Us</h3>
                        <p className="max-w-[312px] text-center sm:text-left">
                            Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities worldwide.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-[var(--primary-yellow)] w-[78px] h-[72px] flex items-center justify-center rounded-md">
                                <Image src="/clock.png" alt="Clock icon" width={40} height={40} />
                            </div>
                            <div>
                                <p className="text-lg">Opening Hours</p>
                                <p className="text-[14px]">Mon - Sat (8:00 - 18:00)</p>
                                <p className="text-[14px]">Sunday - Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="flex flex-col gap-4 items-center sm:items-start">
                        <h3 className="font-bold text-[24px]">Useful Links</h3>
                        <ul className="flex flex-col gap-2 text-[20px]">
                            <li>About</li>
                            <li>News</li>
                            <li>Partners</li>
                            <li>Team</li>
                            <li>Menu</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="flex flex-col gap-4 items-center sm:items-start">
                        <h3 className="font-bold text-[24px]">Help?</h3>
                        <ul className="flex flex-col gap-2 text-[20px]">
                            <li>FAQ</li>
                            <li>Terms & Conditions</li>
                            <li>Reporting</li>
                            <li>Documentation</li>
                            <li>Support Policy</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="flex flex-col gap-7 items-center sm:items-start">
                        <h3 className="font-bold text-[24px]">Recent Posts</h3>
                        {["why-image-3.jpeg", "post-2.jpeg", "post-3.jpeg"].map((src, idx) => (
                            <div key={idx} className="flex gap-3 items-center">
                                <Image
                                    src={`/${src}`}
                                    alt={`Post ${idx + 1}`}
                                    width={55}
                                    height={47}
                                    className="object-cover rounded-md w-[58px] h-[48px]"
                                />
                                <div>
                                    <p className="text-base opacity-50">20 Feb 2022</p>
                                    <p className="text-lg">Keep Your Business</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="w-full bg-[#4F4F4F] py-6 mt-16 flex flex-col md:flex-row items-center justify-between px-5">
                    <p className="text-xs md:text-base">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                    <div className="flex gap-4">
                        {["icon-1.png", "icon-2.png", "icon-3.png", "icon-4.png", "icon-5.png"].map((icon, idx) => (
                            <div
                                key={idx}
                                className="bg-white w-[36px] h-[34px] flex items-center justify-center rounded-md"
                            >
                                <Image src={`/${icon}`} alt={`Icon ${idx + 1}`} width={16} height={18} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer