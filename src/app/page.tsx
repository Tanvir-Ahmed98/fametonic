import Image from "next/image";
import Logo from "../../public/logo.svg";

export default function HomePage() {
  return (
    <main className="bg-black text-white font-sans overflow-hidden w-full max-w-full">
      {/* Banner */}
      <div
        className="text-sm font-bold text-center bg-gradient-to-r from-[#FC004E] to-[#10CBE0] w-full"
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
        <span className="text-[#10CBE0] mx-1">start your journey today!</span>
      </div>

      {/* Header */}
      <header className="max-w-screen-xl mx-auto px-6 py-5 flex justify-between items-center text-base">
        <div className="w-32 md:w-40">
          <Image src="/logo.svg" alt="Logo" width={160} height={50} />
        </div>
        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#" className="text-white">About us</a>
          <a href="#" className="text-white">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full max-w-screen-2xl mx-auto px-4 md:px-12 overflow-hidden pb-12">
        {/* Mobile Image First */}
        <div className="block md:hidden w-full max-w-[666px] mx-auto mb-10">
          <Image
            src="/mobile.svg"
            alt="App Preview"
            width={666}
            height={679}
            className="w-full h-auto"
            style={{ opacity: 1 }}
          />
        </div>

        {/* Layout Wrapper */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 bg-transparent">
          {/* Left Content */}
          <div className="flex flex-col gap-6 bg-transparent w-full max-w-[516px] h-auto px-4 md:px-0">
            <div>
              <h1 className="text-[28px] md:text-[38px] font-bold mb-4 text-left text-white leading-tight">
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
                By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms.
              </p>
              <p className="text-xs text-gray-400">Fametonic 2025. © All Rights Reserved.</p>
            </div>
          </div>

          {/* Right Image Desktop Only */}
          <div className="hidden md:block w-full max-w-[666px] bg-transparent">
            <Image
              src="/mobile.svg"
              alt="App Preview"
              width={666}
              height={679}
              className="w-full h-auto"
              style={{ opacity: 1 }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
