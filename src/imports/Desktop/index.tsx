import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-53i83ekapg";
import imgAboutSection from "./71ad34881466c78eea13256f8ea03d34002bb625.png";
import imgRectangle1 from "./308f14aad229b5a9a2c53f7976ca72af4009e0d3.png";
import imgImage from "./49e4bcc22dfd74ccde497f1170efb65fa6a94e9e.png";
import imgImage1 from "./new_editor_portrait.png";
import imgImage2 from "./e8254491847c34d997f4a89633414d9184cb2491.png";
import imgImage3 from "./08b0001d35330649af1be3c80ffebfbe7647d890.png";
import imgImage4 from "./f88b790b2fa2b372a261bd9d3400b45b1d090b67.png";
import imgImage5 from "./dec0173071faf24adf1b3bcfd56ee0919e8e2eed.png";
import imgImage6 from "./66a1432141cc5b660b0bab7682a370e1615ec0a1.png";
import imgImage7 from "./cbc9ab37be42e06d82cb4ae61cfde58cf2dd3b20.png";
import imgImage8 from "./89e13fad0cff50d4b695a2847aa0e911a5db66c0.png";
import { imgRectangle, imgRectangle2, imgGroup } from "./svg-xklak";

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Exo:Bold',sans-serif] font-bold leading-[70px] relative shrink-0 text-[60px] text-white uppercase whitespace-nowrap">About me</p>
      <div className="h-0 relative shrink-0 w-[401px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 401 1">
            <line id="Line" stroke="url(#paint0_linear_1_350)" x2="401" y1="0.5" y2="0.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_350" x1="0" x2="401" y1="1" y2="1">
                <stop stopColor="#FF0000" />
                <stop offset="0.489" stopColor="#42FF00" />
                <stop offset="1" stopColor="#2400FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-center justify-center left-1/2 top-[120px]" data-name="About">
      <Title />
      <p className="[word-break:break-word] font-['Exo:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.36px] w-[992px] whitespace-pre-line">
        {"I'm a video editor obsessed with one thing attention. Not the fake kind you beg for, the kind you earn in the first three seconds and don't let go of. I take raw footage, chaos, and unfinished ideas, and turn them into stories people actually stay for.\n\nEvery cut, every transition, every beat is intentional. I don't edit to fill time I edit to hold it.\n\nIf your content deserves to be watched, not scrolled past, that's where I come in."}
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Skills">
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-0 text-[20px] text-white top-0 whitespace-nowrap">Cash cow editing</p>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[1370px] text-[20px] text-white top-0 whitespace-nowrap">Cash cow editing</p>
      <div className="absolute left-[253px] size-[10px] top-[7.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_1_332)" id="Ellipse 3" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_332" x1="0" x2="10" y1="0" y2="0">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[1623px] size-[10px] top-[7.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_1_332)" id="Ellipse 3" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_332" x1="0" x2="10" y1="0" y2="0">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[323px] text-[20px] text-white top-0 whitespace-nowrap">Reels editng</p>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[1693px] text-[20px] text-white top-0 whitespace-nowrap">Reels editng</p>
      <div className="absolute left-[522px] size-[10px] top-[7.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_1_332)" id="Ellipse 3" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_332" x1="0" x2="10" y1="0" y2="0">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[1892px] size-[10px] top-[7.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_1_332)" id="Ellipse 3" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_332" x1="0" x2="10" y1="0" y2="0">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[592px] text-[20px] text-white top-0 whitespace-nowrap">logo animation</p>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[1962px] text-[20px] text-white top-0 whitespace-nowrap">logo animation</p>
      <div className="absolute left-[823px] size-[10px] top-[7.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_1_332)" id="Ellipse 3" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_332" x1="0" x2="10" y1="0" y2="0">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[2193px] size-[10px] top-[7.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_1_332)" id="Ellipse 3" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_332" x1="0" x2="10" y1="0" y2="0">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[893px] text-[20px] text-white top-0 whitespace-nowrap">podcast edit</p>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[2263px] text-[20px] text-white top-0 whitespace-nowrap">podcast edit</p>
      <div className="absolute left-[1093px] size-[10px] top-[7.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_1_332)" id="Ellipse 3" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_332" x1="0" x2="10" y1="0" y2="0">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[2463px] size-[10px] top-[7.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_1_332)" id="Ellipse 3" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_332" x1="0" x2="10" y1="0" y2="0">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[1163px] text-[20px] text-white top-0 whitespace-nowrap">Vlogs editing</p>
      <p className="[word-break:break-word] absolute capitalize font-['Orbitron:Medium',sans-serif] font-medium leading-[25px] left-[2533px] text-[20px] text-white top-0 whitespace-nowrap">Vlogs editing</p>
    </div>
  );
}

function AboutSection() {
  return (
    <div id="about" className="-translate-x-1/2 absolute h-[555px] left-1/2 overflow-clip top-[830px] w-screen" data-name="About section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full w-full object-cover left-0 top-0" src={imgAboutSection} />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.9)] inset-0 to-[85.536%] to-[rgba(0,0,0,0.99)]" />
      </div>
      <div className="relative w-[1512px] h-full mx-auto">
        <About />
        <div className="-translate-x-1/2 absolute h-[25px] left-1/2 overflow-clip top-[485px] w-[1150px]" data-name="Rolling text">
          <Skills />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Exo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-white tracking-[-0.36px] uppercase whitespace-nowrap">Olial Kibria Konok</p>
      <div className="h-0 relative shrink-0 w-[152px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 1">
            <line id="Line" stroke="url(#paint0_linear_1_352)" x2="152" y1="0.5" y2="0.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_352" x1="0" x2="152" y1="1" y2="1">
                <stop stopColor="#FF0000" />
                <stop offset="0.489" stopColor="#42FF00" />
                <stop offset="1" stopColor="#2400FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start justify-center left-[120px] top-[120px] animate-entry-text opacity-0" data-name="Hero text">
      <Name />
      <p className="[word-break:break-word] font-['Exo:Bold',sans-serif] font-bold leading-[70px] relative shrink-0 text-[80px] text-white uppercase w-[584px] animate-capcut-text">Experienced video editor</p>
      <p className="[word-break:break-word] font-['Orbitron:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.12em] border-l-4 border-[#6f00a9] pl-4 py-0.5 mt-2 uppercase">Attention isn't given. I take it.</p>
      <button 
        onClick={() => window.open("https://x.com/konok_is_alive", "_blank")}
        className="bg-[#6f00a9] hover:bg-[#8e00da] hover:scale-105 active:scale-95 text-white font-['Orbitron:Black',sans-serif] font-black text-[16px] uppercase px-[40px] py-[12px] cursor-pointer rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(111,0,169,0.8)] transition-all duration-300 select-none flex items-center justify-center relative shrink-0"
        data-name="CTA Button"
      >
        Let's make it happen
      </button>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents h-[315px] right-[396px] top-[285px] w-[377px]" data-name="Group">
      <div className="absolute flex h-[315px] items-center justify-center right-[396px] top-[285px] w-[377px] animate-lightning-left">
        <div className="flex-none rotate-90">
          <div className="h-[377px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[23px_-0.387px] mask-size-[353.94px_315.259px] relative w-[315px]" style={{ maskImage: `url("${imgRectangle}")` }} data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[93.88%] left-[-0.12%] max-w-none top-[0.02%] w-[100.08%]" src={imgRectangle1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents h-[315px] right-[396px] top-[285px] w-[377px]" data-name="Group">
      <Group1 />
    </div>
  );
}

function CurrentPng() {
  return (
    <div className="absolute contents h-[315.259px] right-[396.06px] top-[284.61px] w-[353.94px]" data-name="Current png">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents h-[286.566px] right-[62px] top-[313.43px] w-[321.726px]" data-name="Group">
      <div className="absolute flex h-[286.566px] items-center justify-center right-[62px] top-[313.43px] w-[321.726px] animate-lightning-right">
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="h-[321.726px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-size-[321.726px_286.566px] relative w-[286.566px]" style={{ maskImage: `url("${imgRectangle2}")` }} data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents h-[286.566px] right-[62px] top-[313.43px] w-[321.726px]" data-name="Group">
      <Group3 />
    </div>
  );
}

function CurrentPng1() {
  return (
    <div className="absolute contents h-[286.566px] right-[62px] top-[313.43px] w-[321.726px]" data-name="Current png">
      <Group2 />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute contents right-[62px] top-[92px]" data-name="Hero Image">
      <CurrentPng />
      <CurrentPng1 />
      
      {/* Olial Kibria Konok Portrait (smooth scale/hover zoom with shadow glow, entry animation) */}
      <div className="absolute h-[508px] right-[208px] top-[92px] w-[376px] overflow-hidden rounded-2xl animate-entry-portrait opacity-0 cursor-pointer duration-500 ease-out transition-all hover:shadow-[0_0_30px_rgba(111,0,169,0.4)] hover:scale-103" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Olial Kibria Konok" className="absolute size-full object-cover object-center" src={imgImage1} />
        </div>
      </div>

      {/* Premiere Pro Logo (floating slow & purple glow, entry animation) */}
      <div className="absolute flex items-center justify-center right-[551.05px] size-[173.948px] top-[114px] animate-entry-pr opacity-0 z-10">
        <div className="animate-float-slow size-full flex items-center justify-center glow-purple-icon hover:scale-110 cursor-pointer transition-transform duration-300">
          <div className="-rotate-45 flex-none">
            <div className="h-[136px] relative w-[110px]" data-name="Image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Premiere Pro Logo" className="absolute h-[116.13%] left-[-79.13%] max-w-none top-[-7.31%] w-[253.63%]" src={imgImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* After Effects Logo (floating medium & blue/violet glow, entry animation) */}
      <div className="absolute flex h-[111.21px] items-center justify-center right-[126.38px] top-[166px] w-[104.622px] animate-entry-ae opacity-0 z-10">
        <div className="animate-float-medium size-full flex items-center justify-center glow-blue-icon hover:scale-110 cursor-pointer transition-transform duration-300">
          <div className="flex-none rotate-30">
            <div className="h-[88px] relative w-[70px]" data-name="Image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="After Effects Logo" className="absolute h-[107.99%] left-[-73.31%] max-w-none top-[-2.24%] w-[239.04%]" src={imgImage2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div id="home" className="-translate-x-1/2 absolute h-[600px] left-1/2 top-[150px] w-screen bg-black" data-name="Hero section">
      <div className="-translate-x-1/2 absolute bg-black h-[600px] left-1/2 overflow-clip top-0 w-screen" data-name="Gradients">
        <div className="relative w-[1512px] h-full mx-auto">
          <div className="absolute left-[-150px] size-[480px] top-[-114px]">
            <div className="absolute inset-[-20.83%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 680">
                <g filter="url(#filter0_f_1_348)" id="Ellipse 1" opacity="0.3">
                  <circle cx="340" cy="340" fill="url(#paint0_linear_1_348)" fillOpacity="0.6" r="240" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="680" id="filter0_f_1_348" width="680" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_348" stdDeviation="50" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_348" x1="100" x2="580" y1="340" y2="340">
                    <stop stopColor="#9700FF" />
                    <stop offset="0.369" stopColor="#57FF1C" />
                    <stop offset="0.674" stopColor="#FF0000" />
                    <stop offset="1" stopColor="#0038FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute left-[1106px] size-[480px] top-[255px]">
            <div className="absolute inset-[-20.83%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 680">
                <g filter="url(#filter0_f_1_348)" id="Ellipse 1" opacity="0.3">
                  <circle cx="340" cy="340" fill="url(#paint0_linear_1_348)" fillOpacity="0.6" r="240" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="680" id="filter0_f_1_348" width="680" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_348" stdDeviation="50" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_348" x1="100" x2="580" y1="340" y2="340">
                    <stop stopColor="#9700FF" />
                    <stop offset="0.369" stopColor="#57FF1C" />
                    <stop offset="0.674" stopColor="#FF0000" />
                    <stop offset="1" stopColor="#0038FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[1512px] h-full mx-auto">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[4.87%_0.01%_0.03%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.018px_0.069px] mask-size-[1976.231px_1976.235px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1397.62 1397.53">
        <g id="Group">
          <path d={svgPaths.p27800e00} fill="url(#paint0_linear_1_323)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_323" x1="0" x2="1397.62" y1="0" y2="0">
            <stop stopColor="#FF0000" />
            <stop offset="0.489" stopColor="#42FF00" />
            <stop offset="1" stopColor="#2400FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[4.88%_0_0.03%_0]" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute flex h-[2026.447px] items-center justify-center left-[-231px] top-[-663px] w-[2028px]">
      <div className="flex-none rotate-[45.87deg]">
        <div className="h-[1469.61px] opacity-5 overflow-clip relative w-[1397.65px]" data-name="BG">
          <ClipPathGroup />
        </div>
      </div>
    </div>
  );
}

interface VideoCardProps {
  videoUrl: string;
  title: string;
  category: string;
  onPlay: (url: string) => void;
  isVertical?: boolean;
}

const cashcowVideos = [
  { url: "/cashcow/1.mp4", title: "Cash Cow Video 1", category: "Cash Cow" },
  { url: "/cashcow/2.mp4", title: "Cash Cow Video 2", category: "Cash Cow" },
  { url: "/cashcow/3.mp4", title: "Cash Cow Video 3", category: "Cash Cow" },
  { url: "/cashcow/4.mp4", title: "Cash Cow Video 4", category: "Cash Cow" },
];

const cinematographyVideos = [
  { url: "/cinematography/1.mov", title: "Cinematography 1", category: "Cinematography" },
  { url: "/cinematography/2.mp4", title: "Cinematography 2", category: "Cinematography" },
];

const commercialVideos = [
  { url: "/commercial/1.mp4", title: "Commercial 1", category: "Commercial" },
];

const faceheadVideos = [
  { url: "/facehead/gym.mp4", title: "Gym Promo", category: "Social Short" },
  { url: "/facehead/realestate.mp4", title: "Real Estate Hook", category: "Social Short" },
];

const saasmotionsVideos = [
  { url: "/saasmotions/1.mp4", title: "SaaS Motion 1", category: "SaaS Motion" },
  { url: "/saasmotions/2.mp4", title: "SaaS Motion 2", category: "SaaS Motion" },
  { url: "/saasmotions/3.mp4", title: "SaaS Motion 3", category: "SaaS Motion" },
  { url: "/saasmotions/4.mp4", title: "SaaS Motion 4", category: "SaaS Motion" },
  { url: "/saasmotions/5.mp4", title: "SaaS Motion 5", category: "SaaS Motion" },
  { url: "/saasmotions/6.mp4", title: "SaaS Motion 6", category: "SaaS Motion" },
];

function VideoCard({ videoUrl, title, category, onPlay, isVertical }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const cardWidth = isVertical ? "w-[220px]" : "w-[360px]";
  const cardHeight = isVertical ? "h-[360px]" : "h-[202px]";

  // Generate premium categories context badges
  const premiumBadge = isVertical ? "Short" : (
    videoUrl.includes("cashcow") ? "Viral Edit" :
    videoUrl.includes("cinematography") ? "4K Cinema" :
    videoUrl.includes("commercial") ? "Ads / Promo" : "SaaS Motion"
  );

  return (
    <div 
      className="relative shrink-0 group cursor-pointer select-none transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onPlay(videoUrl)}
    >
      {/* Outer border & shadow container */}
      <div className={`relative overflow-hidden rounded-2xl ${cardWidth} ${cardHeight} border border-white/10 bg-zinc-950/80 backdrop-blur-sm transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] shadow-2xl`}>
        
        {/* HTML5 video preview */}
        <video 
          ref={videoRef}
          src={videoUrl}
          preload="metadata"
          muted
          loop
          playsInline
          className="absolute object-cover size-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        
        {/* Sleek shadow gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 group-hover:from-black/60 group-hover:via-black/10 group-hover:to-black/20 transition-all duration-500" />
        
        {/* Floating badge top-left */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/65 border border-white/10 backdrop-blur-md flex items-center gap-1.5 z-10 transition-transform duration-500 group-hover:scale-105">
          <span className="size-1.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="font-['Orbitron',sans-serif] text-[9px] font-bold text-purple-300 uppercase tracking-widest">{premiumBadge}</span>
        </div>

        {/* Pulsing play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center size-[54px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-600 group-hover:border-purple-400 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]">
            <svg className="size-5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Sweeping diagonal light reflection on hove */}
        <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-1000 ease-out group-hover:left-[150%]" />
      </div>
    </div>
  );
}

interface PortfolioRowProps {
  id: string;
  title: string;
  videos: { url: string; title: string; category: string }[];
  topY: number;
  onPlay: (url: string) => void;
  isVertical?: boolean;
}

function PortfolioRow({ id, title, videos, topY, onPlay, isVertical }: PortfolioRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = isVertical ? 250 : 400;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id={id} className="-translate-x-1/2 absolute h-[500px] left-1/2 w-[1272px] group/row select-none" style={{ top: `${topY}px` }} data-name={`Portfolio ${title}`}>
      {/* Title */}
      <div className="absolute content-stretch flex flex-col gap-[15px] items-start justify-center left-0 top-0">
        <p className="font-['Exo:Bold',sans-serif] font-bold leading-[50px] text-[40px] text-white uppercase tracking-wide">{title}</p>
        <div className="h-[2px] w-[350px] bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#3b82f6] shadow-[0_0_12px_rgba(168,85,247,0.85)]" />
      </div>

      {/* Modern Navigation Arrows */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-[-60px] top-[290px] -translate-y-1/2 size-12 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:scale-110 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover/row:opacity-100"
        aria-label="Scroll Left"
      >
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-[-60px] top-[290px] -translate-y-1/2 size-12 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:scale-110 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover/row:opacity-100"
        aria-label="Scroll Right"
      >
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrolling container */}
      <div ref={scrollRef} className="-translate-x-1/2 absolute h-[380px] left-1/2 overflow-x-auto overflow-y-clip top-[100px] w-[1272px] no-scrollbar flex items-center" data-name="Videos scrolling frame">
        <div className="flex gap-[30px] items-center justify-start left-0 top-0">
          {videos.map((vid, idx) => (
            <VideoCard 
              key={idx}
              videoUrl={vid.url}
              title={vid.title}
              category={vid.category}
              onPlay={onPlay}
              isVertical={isVertical}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


function Title2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-center justify-center left-[calc(50%+12.5px)] top-0" data-name="Title">
      <p className="[word-break:break-word] font-['Exo:Bold',sans-serif] font-bold leading-[70px] relative shrink-0 text-[60px] text-white uppercase whitespace-nowrap">Testimonials</p>
      <div className="h-0 relative shrink-0 w-[559px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 559 1">
            <line id="Line" stroke="url(#paint0_linear_1_346)" x2="559" y1="0.5" y2="0.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_346" x1="0" x2="559" y1="1" y2="1">
                <stop stopColor="#FF0000" />
                <stop offset="0.489" stopColor="#42FF00" />
                <stop offset="1" stopColor="#2400FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/testimonials/1.jpg",
    "/testimonials/2.jpg",
    "/testimonials/3.jpg",
    "/testimonials/4.jpg",
    "/testimonials/5.jpg",
    "/testimonials/6.jpg",
    "/testimonials/7.jpg",
    "/testimonials/8.jpg",
    "/testimonials/9.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 9);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev - 1 + 9) % 9);
    } else {
      setCurrentIndex((prev) => (prev + 1) % 9);
    }
  };

  const prev = (currentIndex - 1 + 9) % 9;
  const curr = currentIndex;
  const next = (currentIndex + 1) % 9;

  return (
    <div id="testimonials" className="-translate-x-1/2 absolute h-[550px] left-1/2 top-[4320px] w-[1060px] group/testimonials select-none" data-name="Testimonial section">
      <Title2 />
      
      {/* 3D Focus Slider Layout */}
      <div className="absolute inset-x-0 top-[160px] h-[360px] flex items-center justify-center gap-8">
        
        {/* Left Faded Card */}
        <div 
          onClick={() => slide('left')}
          className="bg-zinc-950/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden w-[260px] h-[300px] flex items-center justify-center p-3 opacity-30 hover:opacity-70 scale-90 transition-all duration-500 cursor-pointer shadow-lg transform -rotate-3 hover:rotate-0"
        >
          <img 
            key={images[prev]}
            src={images[prev]} 
            className="max-h-full max-w-full object-contain rounded-lg pointer-events-none animate-testimonial-fade" 
            alt="Previous Testimonial" 
          />
        </div>

        {/* Center Focused Card */}
        <div 
          className="bg-zinc-950 border-2 border-purple-500 shadow-[0_0_35px_rgba(111,0,169,0.5)] rounded-2xl overflow-hidden w-[340px] h-[350px] flex items-center justify-center p-4 scale-100 opacity-100 z-10 transition-all duration-500 cursor-default"
        >
          <img 
            key={images[curr]}
            src={images[curr]} 
            className="max-h-full max-w-full object-contain rounded-lg animate-testimonial-fade" 
            alt="Current Testimonial" 
          />
        </div>

        {/* Right Faded Card */}
        <div 
          onClick={() => slide('right')}
          className="bg-zinc-950/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden w-[260px] h-[300px] flex items-center justify-center p-3 opacity-30 hover:opacity-70 scale-90 transition-all duration-500 cursor-pointer shadow-lg transform rotate-3 hover:rotate-0"
        >
          <img 
            key={images[next]}
            src={images[next]} 
            className="max-h-full max-w-full object-contain rounded-lg pointer-events-none animate-testimonial-fade" 
            alt="Next Testimonial" 
          />
        </div>

      </div>

      {/* Navigation Buttons (Sleek Circle Buttons outside) */}
      <button 
        onClick={() => slide('left')}
        className="absolute left-[-45px] top-[340px] -translate-y-1/2 size-12 rounded-full bg-black/80 border border-purple-500/30 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:scale-110 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover/testimonials:opacity-100"
        aria-label="Previous Testimonial"
      >
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => slide('right')}
        className="absolute right-[-45px] top-[340px] -translate-y-1/2 size-12 rounded-full bg-black/80 border border-purple-500/30 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:scale-110 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover/testimonials:opacity-100"
        aria-label="Next Testimonial"
      >
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination indicators */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx ? "w-6 bg-purple-500" : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute h-0 left-0 top-[10px] w-[200px]" data-name="Mask group">
      <div className="absolute inset-[-18.41px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 36.8198">
          <g id="Mask group">
            <mask height="37" id="mask0_1_342" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="203" x="0" y="0">
              <path d={svgPaths.p1ab36f00} fill="var(--stroke-0, white)" id="Arrow 1" />
            </mask>
            <g mask="url(#mask0_1_342)">
              <rect fill="url(#paint0_linear_1_342)" height="45" id="Rectangle 1" width="257" x="-256" y="-4.5901" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_342" x1="-256" x2="1" y1="-4.5901" y2="-4.5901">
              <stop stopColor="#FF0000" />
              <stop offset="0.489" stopColor="#42FF00" />
              <stop offset="1" stopColor="#2400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}



function Title3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start justify-center left-0 top-0" data-name="Title">
      <p className="[word-break:break-word] font-['Exo:Bold',sans-serif] font-bold leading-[70px] relative shrink-0 text-[60px] text-white uppercase whitespace-nowrap">I am ready to consult you</p>
      <div className="h-0 relative shrink-0 w-[957px]" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 957 1">
            <line id="Line" stroke="url(#paint0_linear_1_305)" x2="957" y1="0.5" y2="0.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_305" x1="0" x2="957" y1="1" y2="1">
                <stop stopColor="#FF0000" />
                <stop offset="0.489" stopColor="#42FF00" />
                <stop offset="1" stopColor="#2400FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}



function Call() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Call">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Call">
          <path d={svgPaths.p313f0f70} fill="var(--fill-0, #9700FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
      <Call />
      <p className="[word-break:break-word] capitalize font-['Exo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap">+8801621974705</p>
    </div>
  );
}

function Email() {
  return (
    <div className="h-[15.122px] overflow-clip relative shrink-0 w-[20px]" data-name="Email">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.122">
        <g id="Layer 2">
          <path d={svgPaths.p30757df0} fill="var(--fill-0, #9700FF)" id="Icons" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
      <Email />
      <p className="[word-break:break-word] font-['Exo:Regular',sans-serif] font-normal leading-[20px] lowercase relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap">Olialkonok2@gmail.com</p>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="absolute content-stretch flex gap-[120px] items-center justify-center left-0 top-[120px]" data-name="Contact info">
      <Frame />
      <Frame2 />
    </div>
  );
}

function ContactSection() {
  return (
    <div id="contact" className="absolute top-[4930px] h-[180px] left-[120px] w-[959px]" data-name="Contact section">
      <Title3 />
      <ContactInfo />
    </div>
  );
}

function NavigationBar({ activeSection }: { activeSection: string }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['home', 'about', 'portfolio', 'testimonials', 'contact'];

  return (
    <div className="-translate-x-1/2 absolute flex gap-[10px] items-center justify-center left-[calc(50%+40px)] top-[50px] bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-full px-6 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md z-50 hover:border-white/20 transition-all duration-300" data-name="Navigation bar">
      {navItems.map((item) => {
        const isActive = activeSection === item;
        return (
          <button 
            key={item}
            onClick={() => scrollTo(item)}
            className="flex flex-col items-center justify-center px-4 py-2 relative cursor-pointer group transition-all duration-300"
            data-name="Navigation buttons"
          >
            <span className={`[word-break:break-word] font-['Orbitron:Medium',sans-serif] font-medium leading-[20px] relative text-[14px] text-center uppercase whitespace-nowrap tracking-wider transition-all duration-300 group-hover:text-purple-400 group-hover:-translate-y-[1px] ${
              isActive ? 'text-purple-400 font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]' : 'text-white/70'
            }`}>
              {item}
            </span>
            {/* Underline indicator */}
            <span className={`absolute bottom-0 h-[2px] bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-full transition-all duration-300 ${
              isActive ? 'w-6 opacity-100 shadow-[0_0_10px_rgba(168,85,247,0.8)]' : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-70'
            }`} />
          </button>
        );
      })}
    </div>
  );
}

function Linkedin() {
  return (
    <a 
      href="https://www.linkedin.com/in/olial-kibria-konok-75001827b/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative flex items-center justify-center size-[36px] rounded-full border border-white/10 bg-white/3 text-white/80 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,119,181,0.6)] transition-all duration-300 cursor-pointer" 
      data-name="linkedin"
    >
      <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.pe8a000} fill="currentColor" />
      </svg>
    </a>
  );
}

function Twitter() {
  return (
    <a 
      href="https://x.com/konok_is_alive" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative flex items-center justify-center size-[36px] rounded-full border border-white/10 bg-white/3 text-white/80 hover:text-black hover:bg-white hover:border-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer" 
      data-name="twitter"
    >
      <svg className="size-[15px]" fill="none" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
      </svg>
    </a>
  );
}

function WhatsApp() {
  return (
    <a 
      href="https://wa.me/8801621974705" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative flex items-center justify-center size-[36px] rounded-full border border-white/10 bg-white/3 text-white/80 hover:text-white hover:bg-[#25d366] hover:border-[#25d366] hover:scale-110 hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] transition-all duration-300 cursor-pointer" 
      data-name="whatsapp" 
      title="WhatsApp: +8801621974705"
    >
      <svg className="size-[18px]" fill="none" viewBox="0 0 24 24">
        <path d="M12 .003C5.384.003.007 5.38.007 11.994c0 2.112.551 4.17 1.602 5.992L.007 24l6.173-1.619c1.765.961 3.748 1.467 5.761 1.468 6.613 0 11.99-5.378 11.99-11.993C23.93 5.38 18.552.003 12 .003zm6.39 16.92c-.263.742-1.527 1.46-2.1 1.52-.514.053-1.183.08-3.414-.84-2.853-1.177-4.693-4.08-4.836-4.27-.142-.19-1.157-1.54-1.157-2.93 0-1.39.728-2.072 1-2.353.272-.28.59-.35.79-.35.198 0 .397.002.57.01.184.009.43-.07.674.52.247.597.84 2.057.913 2.203.073.146.12.316.024.509-.096.192-.143.315-.285.48-.143.166-.3.37-.43.495-.143.136-.293.284-.126.57.168.286.747 1.233 1.6 1.994.86.768 1.586 1.008 1.87 1.15.286.142.453.118.623-.076.17-.193.729-.848.924-1.14.195-.293.39-.244.664-.143.275.1.1.2.98.674 1.765.875 2.116 1.15.26 1.344z" fill="currentColor" />
      </svg>
    </a>
  );
}

function Discord() {
  return (
    <a 
      href="https://discord.com/users/olialkibriakonok" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative flex items-center justify-center size-[36px] rounded-full border border-white/10 bg-white/3 text-white/80 hover:text-white hover:bg-[#5865f2] hover:border-[#5865f2] hover:scale-110 hover:shadow-[0_0_15px_rgba(88,101,242,0.6)] transition-all duration-300 cursor-pointer" 
      data-name="discord" 
      title="Discord: olialkibriakonok"
    >
      <svg className="size-[18px]" fill="none" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" fill="currentColor" />
      </svg>
    </a>
  );
}

function SocialHandles() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center justify-center right-[120px] top-[47px]" data-name="Social handles">
      <Linkedin />
      <Twitter />
      <WhatsApp />
      <Discord />
    </div>
  );
}

function Header({ activeSection }: { activeSection: string }) {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.85)] h-[130px] left-1/2 top-0 w-screen border-b border-white/5 backdrop-blur-md z-50" data-name="Header">
      <div className="relative w-[1512px] h-full mx-auto">
        <p className="[word-break:break-word] absolute font-['Exo_2:Regular',sans-serif] font-normal leading-[20px] left-[120px] text-[30px] text-white top-[70px] tracking-[-3px] whitespace-nowrap">Olial Kibria Konok</p>
        <NavigationBar activeSection={activeSection} />
        <SocialHandles />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="-translate-x-1/2 absolute top-[5130px] left-1/2 w-screen py-10 flex flex-col items-center justify-center gap-6 border-t border-white/5 bg-zinc-950/40 backdrop-blur-md relative overflow-hidden z-50">
      {/* Decorative radial purple background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
      
      <p className="font-['Orbitron',sans-serif] text-[12px] tracking-[0.3em] text-purple-400/80 uppercase font-medium">
        Stay Connected
      </p>

      {/* Large Eye-catching Social handles */}
      <div className="flex gap-5 items-center justify-center">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/olial-kibria-konok-75001827b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative flex items-center justify-center size-[48px] rounded-full border border-white/10 bg-white/3 text-white/80 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110 hover:shadow-[0_0_25px_rgba(0,119,181,0.8)] transition-all duration-300 cursor-pointer"
          title="LinkedIn"
        >
          <svg className="size-[22px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.pe8a000} fill="currentColor" />
          </svg>
        </a>

        {/* X */}
        <a 
          href="https://x.com/konok_is_alive" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative flex items-center justify-center size-[48px] rounded-full border border-white/10 bg-white/3 text-white/80 hover:text-black hover:bg-white hover:border-white hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-pointer"
          title="X (Twitter)"
        >
          <svg className="size-[18px]" fill="none" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/8801621974705" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative flex items-center justify-center size-[48px] rounded-full border border-white/10 bg-white/3 text-white/80 hover:text-white hover:bg-[#25d366] hover:border-[#25d366] hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] transition-all duration-300 cursor-pointer"
          title="WhatsApp: +8801621974705"
        >
          <svg className="size-[22px]" fill="none" viewBox="0 0 24 24">
            <path d="M12 .003C5.384.003.007 5.38.007 11.994c0 2.112.551 4.17 1.602 5.992L.007 24l6.173-1.619c1.765.961 3.748 1.467 5.761 1.468 6.613 0 11.99-5.378 11.99-11.993C23.93 5.38 18.552.003 12 .003zm6.39 16.92c-.263.742-1.527 1.46-2.1 1.52-.514.053-1.183.08-3.414-.84-2.853-1.177-4.693-4.08-4.836-4.27-.142-.19-1.157-1.54-1.157-2.93 0-1.39.728-2.072 1-2.353.272-.28.59-.35.79-.35.198 0 .397.002.57.01.184.009.43-.07.674.52.247.597.84 2.057.913 2.203.073.146.12.316.024.509-.096.192-.143.315-.285.48-.143.166-.3.37-.43.495-.143.136-.293.284-.126.57.168.286.747 1.233 1.6 1.994.86.768 1.586 1.008 1.87 1.15.286.142.453.118.623-.076.17-.193.729-.848.924-1.14.195-.293.39-.244.664-.143.275.1.1.2.98.674 1.765.875 2.116 1.15.26 1.344z" fill="currentColor" />
          </svg>
        </a>

        {/* Discord */}
        <a 
          href="https://discord.com/users/olialkibriakonok" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative flex items-center justify-center size-[48px] rounded-full border border-white/10 bg-white/3 text-white/80 hover:text-white hover:bg-[#5865f2] hover:border-[#5865f2] hover:scale-110 hover:shadow-[0_0_25px_rgba(88,101,242,0.8)] transition-all duration-300 cursor-pointer"
          title="Discord: olialkibriakonok"
        >
          <svg className="size-[22px]" fill="none" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default function Desktop() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const sections = ['home', 'about', 'portfolio', 'testimonials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#000001] relative size-full" data-name="Desktop">
      <AboutSection />
      <HeroSection />
      
      {/* 5 Portfolio Row Sections */}
      <PortfolioRow id="portfolio" title="Cash Cow Edits" videos={cashcowVideos} topY={1585} onPlay={setActiveVideo} />
      <PortfolioRow id="cinematography" title="Cinematography" videos={cinematographyVideos} topY={2135} onPlay={setActiveVideo} />
      <PortfolioRow id="commercial" title="Commercial Ads" videos={commercialVideos} topY={2685} onPlay={setActiveVideo} />
      <PortfolioRow id="facehead" title="Facehead YT Video" videos={faceheadVideos} topY={3235} onPlay={setActiveVideo} isVertical />
      <PortfolioRow id="saasmotions" title="SaaS & Motion graphics" videos={saasmotionsVideos} topY={3785} onPlay={setActiveVideo} />

      <div className="-translate-x-1/2 absolute top-[4890px] h-0 left-1/2 w-screen" data-name="Separator">
        <div className="absolute inset-[-50px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 50">
            <line id="Separator" stroke="url(#paint0_linear_1_307)" strokeOpacity="0.1" strokeWidth="50" x2="1920" y1="25" y2="25" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_307" x1="0" x2="1920" y1="50" y2="50">
                <stop stopColor="#FF0000" />
                <stop offset="0.489" stopColor="#42FF00" />
                <stop offset="1" stopColor="#2400FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <ContactSection />
      <Footer />
      <Header activeSection={activeSection} />

      {/* Lightbox Fullscreen Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[9999]">
          <div className="relative w-full max-w-4xl p-4 flex items-center justify-center">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-[-50px] right-[10px] text-white/80 hover:text-white text-[45px] font-light cursor-pointer transition-colors z-[10000]"
              aria-label="Close Player"
            >
              &times;
            </button>
            <video 
              src={activeVideo} 
              autoPlay 
              loop
              onClick={(e) => {
                const v = e.currentTarget;
                if (v.paused) v.play();
                else v.pause();
              }}
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl border border-white/10 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}