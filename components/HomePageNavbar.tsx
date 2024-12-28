"use client"
import React from 'react'
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Image from 'next/image';

const HomePageNavbar = () => {  




  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname); // Get current path from `location`
    }
  }, []);

  const handleLinkClick = (path: string) => {
    setCurrentPath(path); // Update path on link click
  };

  const isActiveLink = (path: string) => currentPath === path;
  return (
    <div className="bg-[rgba(13,13,13,0.95)] py-4 px-8">
      <div className="container justify-self-center  flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 lg:gap-[5px]">
          <div>
            <Link href="/">
              <h2 className="font-bold text-2xl text-white tracking-tight">
                <span className="text-[var(--primary-yellow)]">Food</span>tuck
              </h2>
            </Link>
          </div>

          {/* Desktop Links */}

          <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-96 gap-4 ">
            <ul className="flex flex-wrap text-white gap-4 text-[16px] leading-[24px] space-x-4 lg:mr-7">
              <li className="relative">
                <Link
                  href="/"
                  className={`${isActiveLink("/") ? "font-bold text-[var(--primary)]" : ""}`}
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </Link>
                {isActiveLink("/") && (
                  <div className="absolute bottom-0 top-6 mx-5 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </li>
              <li className="relative">
                <Link
                  href="/menu"
                  className={`${isActiveLink("/menu") ? "font-bold text-[var(--primary)]" : ""}`}
                  onClick={() => handleLinkClick("/menu")}
                >
                  Menu
                </Link>
                {isActiveLink("/menu") && (
                  <div className="absolute bottom-0 top-6 mx-5 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </li>
              <li className="relative">
                <Link
                  href="/blog"
                  className={`${isActiveLink("/blog") ? "font-bold text-[var(--primary)]" : ""}`}
                  onClick={() => handleLinkClick("/blog")}
                >
                  Blog
                </Link>
                {isActiveLink("/blog") && (
                  <div className="absolute bottom-0 top-6 mx-5 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </li>
              <li className="relative">
                <Link
                  href="/faq"
                  className={`${isActiveLink("/faq") ? "font-bold text-[var(--primary)]" : ""}`}
                  onClick={() => handleLinkClick("/faq")}
                >
                  Pages
                </Link>
                {isActiveLink("/pages") && (
                  <div className="absolute bottom-0 top-6 mx-5 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </li>
              <li className="relative">
                <Link
                  href="/about"
                  className={`${isActiveLink("/about") ? "font-bold text-[var(--primary)]" : ""}`}
                  onClick={() => handleLinkClick("/about")}
                >
                  About
                </Link>
                {isActiveLink("/about") && (
                  <div className="absolute bottom-0 top-6 mx-5 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </li>
              <li className="relative">
                <Link
                  href="/shop"
                  className={`${isActiveLink("/shop") ? "font-bold text-[var(--primary)]" : ""}`}
                  onClick={() => handleLinkClick("/shop")}
                >
                  Shop
                </Link>
                {isActiveLink("/shop") && (
                  <div className="absolute bottom-0 top-6 mx-5 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </li>
              <li className="relative">
                <Link
                  href="/contact"
                  className={`${isActiveLink("/contact") ? "font-bold text-[var(--primary)]" : ""}`}
                  onClick={() => handleLinkClick("/contact")}
                >
                  Contact
                </Link>
                {isActiveLink("/contact") && (
                  <div className="absolute bottom-0 top-6 mx-6 left-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                )}
              </li>
            </ul>




            {/* Search Bar */}
            <div className="flex items-center gap-3 md:gap-5  ml-7">
              <div className='relative'>
                <input
                  type="search"
                  placeholder="Search..."
                  className="text-white placeholder:text-white bg-transparent p-2 pl-8 rounded-[50px] max-h-[54px] maz-w-[310px] border-[var(--primary-yellow)] border"

                />
                <Link href="/search">
                <Image className='absolute  top-2 right-5' src="/search.svg" alt="search" width={30} height={30} ></Image>
                </Link>
              </div>
              <Link href="/cart">
                <Image className='w-[30px] h-[30px]' src="/cart.svg" alt="cart" width={30} height={30} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default HomePageNavbar