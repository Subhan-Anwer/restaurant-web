"use client"
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


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
    <div className="py-4 px-8 bg-[#0D0D0D]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 lg:gap-[100px]">
          <Link href="/">
            <h2 className="font-bold text-2xl text-white tracking-tight">
              Food
              <span className="text-[var(--primary-yellow)]">tuck</span>
            </h2>
          </Link>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex text-white gap-4 text-[16px] leading-[24px] space-x-4">
          <li>
            <Link
              href="/"
              className={`${isActiveLink("/") ? "font-bold text-[var(--primary-yellow)]" : ""
                }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={`${isActiveLink("/menu") ? "font-bold text-[var(--primary-yellow)]" : ""
                }`}
              onClick={() => handleLinkClick("/menu")}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${isActiveLink("/blog") ? "font-bold text-[var(--primary-yellow)]" : ""
                }`}
              onClick={() => handleLinkClick("/blog")}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className={`${isActiveLink("/faq") ? "font-bold text-[var(--primary-yellow)]" : ""
                }`}
              onClick={() => handleLinkClick("/faq")}
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${isActiveLink("/about") ? "font-bold text-[var(--primary-yellow)]" : ""
                }`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={`${isActiveLink("/shop") ? "font-bold text-[var(--primary-yellow)]" : ""
                }`}
              onClick={() => handleLinkClick("/shop")}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${isActiveLink("/contact") ? "font-bold text-[var(--primary-yellow)]" : ""
                }`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>


        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-5 sm:ml-0 ml-4">
          <Link href="/search">
            <Image className="w-[30px] h-[30px]" src="/search.svg" alt="search" width={30} height={30} />
          </Link>
          <Link href="/user">
            <Image className="w-[30px] h-[30px]" src="/user.svg" alt="user" width={30} height={30} />
          </Link>
          <Link href="/shopping-cart">
            <Image className="w-[30px] h-[30px]" src="/cart.svg" alt="cart" width={30} height={30} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-2 text-white text-[16px] leading-[24px] mt-4 px-4">
            <li>
              <Link
                href="/"
                className={`${isActiveLink("/") ? "font-bold text-[var(--primary-yellow)]" : ""
                  }`}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`${isActiveLink("/menu") ? "font-bold text-[var(--primary-yellow)]" : ""
                  }`}
                onClick={() => handleLinkClick("/menu")}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${isActiveLink("/blog") ? "font-bold text-[var(--primary-yellow)]" : ""
                  }`}
                onClick={() => handleLinkClick("/blog")}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className={`${isActiveLink("/pages") ? "font-bold text-[var(--primary-yellow)]" : ""
                  }`}
                onClick={() => handleLinkClick("/pages")}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${isActiveLink("/about") ? "font-bold text-[var(--primary-yellow)]" : ""
                  }`}
                onClick={() => handleLinkClick("/about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`${isActiveLink("/shop") ? "font-bold text-[var(--primary-yellow)]" : ""
                  }`}
                onClick={() => handleLinkClick("/shop")}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${isActiveLink("/contact") ? "font-bold text-[var(--primary-yellow)]" : ""
                  }`}
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
