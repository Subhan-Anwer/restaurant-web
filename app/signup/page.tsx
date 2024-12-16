import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import type { Metadata } from "next";

const SignUp = () => (
  <section className="w-full bg-white">
  <Header title="Sign up page" link="sign up" />

  <div className="bg-white w-full min-h-[750px] flex items-center justify-center py-6">
    <div className="w-full max-w-[424px] h-auto shadow-[0px_4px_80px_rgba(255,159,13,0.15)] py-7 flex flex-col mx-4 sm:mx-auto">
      <h4 className="font-bold text-xl text-[#333333] ml-6 sm:ml-8">Sign Up</h4>
      {/* Name, Email, Password & Remember */}
      <div className="flex flex-col w-full gap-5 mt-8">
        {/* Name */}
        <div className="w-full max-w-[360px] h-[44px] mx-auto border border-[#E0E0E0] flex items-center">
          <Image
            className="w-[24px] h-[24px] m-3"
            src="/User.png"
            alt="icon"
            width={24}
            height={24}
            quality={100}
          />
          <p className="text-base text-[#4F4F4F]">Name</p>
        </div>
        {/* Email */}
        <div className="w-full max-w-[360px] h-[44px] mx-auto border border-[#E0E0E0] flex items-center">
          <Image
            className="w-[24px] h-[24px] m-3"
            src="/EnvelopeSimple.png"
            alt="icon"
            width={24}
            height={24}
            quality={100}
          />
          <p className="text-base text-[#4F4F4F]">Email</p>
        </div>
        {/* Password */}
        <div className="w-full max-w-[360px] h-[44px] mx-auto border border-[#E0E0E0] flex items-center">
          <Image
            className="w-[24px] h-[24px] m-3"
            src="/Lock.png"
            alt="icon"
            width={24}
            height={24}
            quality={100}
          />
          <p className="text-base text-[#4F4F4F]">Password</p>
        </div>
        {/* Remember me */}
        <div className="w-auto h-[22px] flex items-center justify-start ml-6 sm:ml-8 gap-2">
          <div className="w-5 h-5 bg-[var(--primary-yellow)] text-white flex items-center justify-center">
            &#x2713;
          </div>
          <h4 className="text-sm text-[#333333]">Remember me?</h4>
        </div>
      </div>
      {/* Sign up */}
      <div className="w-full max-w-[360px] h-[44px] mt-9 mx-auto bg-[var(--primary-yellow)] text-white text-base flex items-center justify-center">
        Sign Up
      </div>
      <p className="text-sm text-[#828282] mr-6 sm:mr-8 mt-3 text-right">Forget password?</p>
      {/* or Google & Apple */}
      <div className="flex flex-col w-full gap-5 mt-8">
        {/* Or */}
        <div className="w-full max-w-[360px] h-8 mx-auto flex items-center justify-center">
          <div className="w-[164px] h-[1px] border border-[#E0E0E0]"></div>
          <div className="w-[32px] h-[32px] border border-[#E0E0E0] text-center text-[14px] leading-8">
            OR
          </div>
          <div className="w-[164px] h-[1px] border border-[#E0E0E0]"></div>
        </div>
        {/* Google */}
        <div className="w-full max-w-[360px] h-[44px] mx-auto border border-[#E0E0E0] flex items-center">
          <Image
            className="w-[20px] h-[20px] m-3"
            src="/google.png"
            alt="icon"
            width={24}
            height={24}
            quality={100}
          />
          <p className="text-base text-[#4F4F4F] mx-auto">Sign up with Google</p>
        </div>
        {/* Apple */}
        <div className="w-full max-w-[360px] h-[44px] mx-auto border border-[#E0E0E0] flex items-center">
          <Image
            className="w-[20px] h-[21px] m-3 object-cover"
            src="/apple.png"
            alt="icon"
            width={24}
            height={24}
            quality={100}
          />
          <p className="text-base text-[#4F4F4F] mx-auto">Sign up with Apple</p>
        </div>
      </div>
    </div>
  </div>
</section>

)

export const metadata: Metadata = {
  title: "Foodtuck: Sign Up",
  description: "Generated by create next app",
};

export default SignUp