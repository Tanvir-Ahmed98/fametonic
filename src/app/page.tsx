"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="bg-[#010101] text-white font-sans overflow-hidden w-full max-w-full">
      {/* Banner */}
      <div
        className="text-lg font-bold text-center bg-gradient-to-r from-[#FC004E] to-[#10CBE0] w-full"
        style={{
          height: "auto",
          opacity: 1,
          padding: "10px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        🎉 <span className="text-[#00C6FF] mx-1">FRESH BEGINNINGS SALE:</span>
        <span className="text-white mx-1">Extra 25% OFF, Limited Spots -</span>
        <span className="text-white mx-1">start your journey today!</span>
      </div>

      <header className="flex justify-between items-center px-4 md:px-[211px] py-5 w-full relative">
      {/* Logo */}
      <div className="w-24 md:w-40">
        <Image src="/logo.svg" alt="Logo" width={160} height={50} />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 text-sm">
        <a href="#" className="text-white">About us</a>
        <a href="#" className="text-white">Contact</a>
      </nav>

      {/* Burger Icon - Mobile Only */}
      <div className="md:hidden">
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212] text-white flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a href="#" className="text-sm">About us</a>
          <a href="#" className="text-sm">Contact</a>
        </div>
      )}
    </header>

    {/* Hero Section */}
<section className="w-full max-w-screen-2xl mx-auto px-4 md:px-[211px] py-10">
  {/* Layout Wrapper */}
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 bg-[#010101]">
    
    {/* Mobile Image First */}
    <div className="block md:hidden w-full max-w-[666px] mx-auto">
      <Image
        src="/mobile.svg"
        alt="App Preview"
        width={666}
        height={679}
        className="w-full h-auto"
      />
    </div>

    {/* Left Content */}
    <div className="w-full md:w-[516px] h-auto">
      <h1 className="text-[28px] md:text-[38px] font-bold mb-4 text-left text-white">
        Want to Turn Social Media Into a <span className="block">Profitable Career?</span>
      </h1>
      <p className="text-[18px] md:text-[20px] font-bold mb-5 text-left text-[#00C6FF]">
        Discover your way to success with <span className="text-[#FF007F]">Fametonic:</span>
      </p>
      <ul className="list-disc list-inside space-y-3 text-base mb-6 text-white">
        <li>Start growing your influence right away—no waiting required</li>
        <li>Create viral TikToks and Reels step by step with easy-to-follow lessons</li>
        <li>Use a Personal AI Worker to boost your content</li>
        <li>Learn from expert-led courses designed for aspiring influencers</li>
      </ul>
      <button className="bg-[#FF007F] text-white font-bold px-6 py-3 rounded text-sm w-full md:w-auto">
        GET STARTED →
      </button>
      <p className="text-xs text-gray-400 mt-3">
        By clicking &quot;Get Started&quot;, you agree to our <a href="/terms" className="underline">Terms and Conditions</a>, <a href="/privacy" className="underline">Privacy Policy</a>, and <a href="/subscription" className="underline">Subscription Terms</a>.
      </p>
      <p className="text-xs text-gray-400">Fametonic 2025. © All Rights Reserved.</p>
    </div>

    {/* Right Image Desktop Only */}
    <div className="hidden md:block w-full max-w-[666px]">
      <Image
        src="/mobile.svg"
        alt="App Preview"
        width={666}
        height={679}
        className="w-full h-auto"
      />
    </div>
  </div>
</section>

    </main>
  );
}
