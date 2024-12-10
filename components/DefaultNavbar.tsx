"use client"
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

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

  const handleLinkClick = (path:string) => {
    setCurrentPath(path); // Update path on link click
  };

  const isActiveLink = (path:string) => currentPath === path;

  return (
    <div className="py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 lg:gap-[100px]">
          <Link href="/">
            <h2 className="font-bold text-2xl text-black tracking-tight">
              F<span className="text-[var(--primary-green)]">oo</span>dtuck
            </h2>
          </Link>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
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

          {/* Desktop Links */}
          <ul className="hidden md:flex text-[#333333] gap-4 text-[16px] leading-[24px] space-x-4">
            <li>
              <Link
                href="/"
                className={`${
                  isActiveLink("/") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`${
                  isActiveLink("/menu") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/menu")}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${
                  isActiveLink("/blog") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/blog")}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className={`${
                  isActiveLink("/pages") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/pages")}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  isActiveLink("/about") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`${
                  isActiveLink("/shop") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/shop")}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  isActiveLink("/contact") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/search">
            <img src="/search.svg" alt="search" width={30} height={30} />
          </Link>
          <Link href="/user">
            <img src="/user.svg" alt="user" width={30} height={30} />
          </Link>
          <Link href="/cart">
            <img src="/cart.svg" alt="cart" width={30} height={30} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-2 text-[#333333] text-[16px] leading-[24px] mt-4 px-4">
            <li>
              <Link
                href="/"
                className={`${
                  isActiveLink("/") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`${
                  isActiveLink("/menu") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/menu")}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${
                  isActiveLink("/blog") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/blog")}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className={`${
                  isActiveLink("/pages") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/pages")}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  isActiveLink("/about") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`${
                  isActiveLink("/shop") ? "font-bold text-[var(--primary)]" : ""
                }`}
                onClick={() => handleLinkClick("/shop")}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  isActiveLink("/contact") ? "font-bold text-[var(--primary)]" : ""
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
