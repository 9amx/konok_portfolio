import { useState, useEffect } from "react";
import svgPaths from "../Desktop/svg-53i83ekapg";
import imgAboutSection from "../Desktop/71ad34881466c78eea13256f8ea03d34002bb625.png";
import imgImage from "../Desktop/49e4bcc22dfd74ccde497f1170efb65fa6a94e9e.png";
import imgImage1 from "../Desktop/new_editor_portrait.png";
import imgImage2 from "../Desktop/e8254491847c34d997f4a89633414d9184cb2491.png";
import imgImage3 from "../Desktop/08b0001d35330649af1be3c80ffebfbe7647d890.png";
import imgImage4 from "../Desktop/f88b790b2fa2b372a261bd9d3400b45b1d090b67.png";
import imgImage5 from "../Desktop/dec0173071faf24adf1b3bcfd56ee0919e8e2eed.png";
import imgImage6 from "../Desktop/66a1432141cc5b660b0bab7682a370e1615ec0a1.png";
import imgImage7 from "../Desktop/cbc9ab37be42e06d82cb4ae61cfde58cf2dd3b20.png";
import imgImage8 from "../Desktop/89e13fad0cff50d4b695a2847aa0e911a5db66c0.png";
import imgRectangle1 from "../Desktop/308f14aad229b5a9a2c53f7976ca72af4009e0d3.png";
import { imgRectangle, imgRectangle2 } from "../Desktop/svg-xklak";

// Mobile-specific marquee styles
const mobileMarqueeStyle = `
  @keyframes mobile-marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-mobile-marquee {
    display: flex;
    width: max-content;
    animation: mobile-marquee 25s linear infinite;
  }
`;

export default function Mobile() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scale, setScale] = useState(0.45);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const factor = Math.min((width - 48) / 720, 0.65);
      setScale(factor);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "portfolio", "testimonials", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0.05,
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

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["home", "about", "portfolio", "testimonials", "contact"];

  return (
    <div className="bg-[#000001] text-white min-h-screen font-['Exo',sans-serif] overflow-x-hidden relative">
      <style>{mobileMarqueeStyle}</style>

      {/* Sticky Header */}
      <header className="sticky top-0 left-0 right-0 h-[70px] bg-black/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 z-50">
        <span className="font-['Exo_2',sans-serif] font-bold text-[20px] tracking-[-1px] text-white">
          Olial Kibria Konok
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative size-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={`text-2xl font-['Orbitron',sans-serif] uppercase tracking-wider transition-all cursor-pointer ${
              activeSection === item ? "text-purple-400 font-bold" : "text-white/60"
            }`}
          >
            {item}
          </button>
        ))}
        {/* Social Icons inside Menu */}
        <div className="flex gap-6 mt-8">
          <LinkedinIcon />
          <TwitterIcon />
          <WhatsAppIcon />
          <DiscordIcon />
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-12 pb-20 px-6 flex flex-col items-center text-center overflow-clip min-h-[calc(100vh-70px)] justify-center"
      >
        {/* Colorful Glow Backgrounds */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-60 h-60 rounded-full bg-green-500/5 blur-[80px] pointer-events-none" />

        {/* Profile Image & Badges with Thunderstorm & 3D floating icons */}
        <div 
          className="relative flex items-center justify-center select-none overflow-visible mb-6" 
          style={{ 
            width: `${720 * scale}px`, 
            height: `${520 * scale}px` 
          }}
        >
          <div 
            className="absolute origin-top-left"
            style={{ 
              transform: `scale(${scale})`,
              width: "720px",
              height: "520px",
              left: "0px",
              top: "0px"
            }}
          >
            {/* Left Lightning */}
            <div className="absolute flex h-[315px] items-center justify-center left-[9px] top-[203px] w-[377px] animate-lightning-left pointer-events-none">
              <div className="flex-none rotate-90">
                <div className="h-[377px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[23px_-0.387px] mask-size-[353.94px_315.259px] relative w-[315px]" style={{ maskImage: `url("${imgRectangle}")` }}>
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute h-[93.88%] left-[-0.12%] max-w-none top-[0.02%] w-[100.08%]" src={imgRectangle1} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Lightning */}
            <div className="absolute flex h-[286.566px] items-center justify-center left-[398.3px] top-[231.4px] w-[321.726px] animate-lightning-right pointer-events-none">
              <div className="-scale-y-100 flex-none rotate-90">
                <div className="h-[321.726px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-size-[321.726px_286.566px] relative w-[286.566px]" style={{ maskImage: `url("${imgRectangle2}")` }}>
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait Image (transparent background, with hover shadow glow) */}
            <div className="absolute h-[508px] left-[198px] top-[10px] w-[376px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(111,0,169,0.4)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(111,0,169,0.6)] cursor-pointer duration-500 ease-out transition-all hover:scale-103 animate-entry-portrait opacity-0">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt="Olial Kibria Konok"
                  className="absolute size-full object-cover object-center"
                  src={imgImage1}
                />
              </div>
            </div>

            {/* Premiere Pro Logo (floating slow & purple glow, entry animation) */}
            <div className="absolute flex items-center justify-center left-[57px] size-[174px] top-[32px] z-10 animate-entry-pr opacity-0">
              <div className="animate-float-slow size-full flex items-center justify-center glow-purple-icon hover:scale-110 cursor-pointer transition-transform duration-300">
                <div className="-rotate-45 flex-none">
                  <div className="h-[136px] relative w-[110px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="Premiere Pro Logo" className="absolute h-[116.13%] left-[-79.13%] max-w-none top-[-7.31%] w-[253.63%]" src={imgImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After Effects Logo (floating medium & blue/violet glow, entry animation) */}
            <div className="absolute flex h-[111px] items-center justify-center left-[551px] top-[84px] w-[105px] z-10 animate-entry-ae opacity-0">
              <div className="animate-float-medium size-full flex items-center justify-center glow-blue-icon hover:scale-110 cursor-pointer transition-transform duration-300">
                <div className="flex-none rotate-30">
                  <div className="h-[88px] relative w-[70px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="After Effects Logo" className="absolute h-[107.99%] left-[-73.31%] max-w-none top-[-2.24%] w-[239.04%]" src={imgImage2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Details */}
        <div className="max-w-md flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <span className="font-['Exo',sans-serif] font-bold text-[14px] text-white/80 uppercase tracking-widest">
              Olial Kibria Konok
            </span>
            <div className="h-[2px] w-[60px] bg-gradient-to-r from-red-500 via-green-500 to-blue-500" />
          </div>

          <h1 className="font-['Exo',sans-serif] font-bold text-[36px] uppercase leading-none tracking-tight text-white mt-2">
            <span className="animate-capcut-text">
              Experienced <br />
              video editor
            </span>
          </h1>

          <p className="font-['Orbitron:Medium',sans-serif] font-medium text-[11px] text-white whitespace-nowrap leading-relaxed mt-3 tracking-[0.12em] uppercase border-l-4 border-[#6f00a9] pl-4 py-0.5 text-left">
            Attention isn't given. I take it.
          </p>

          <button
            onClick={() => window.open("https://x.com/konok_is_alive", "_blank")}
            className="mt-4 bg-[#6f00a9] hover:bg-[#8e00da] hover:scale-105 active:scale-95 text-white font-['Orbitron',sans-serif] font-black text-[13px] uppercase px-6 py-2.5 cursor-pointer rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-300 flex items-center justify-center"
          >
            Let's make it happen
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 overflow-clip">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img alt="" className="size-full object-cover" src={imgAboutSection} />
          <div className="absolute inset-0 bg-black/90 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 px-6 max-w-lg mx-auto flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-['Exo',sans-serif] font-bold text-[30px] uppercase text-white tracking-wider">
              About me
            </h2>
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-red-500 via-green-500 to-blue-500" />
          </div>

          <p className="font-['Exo',sans-serif] text-[15px] leading-relaxed text-white/80 whitespace-pre-line">
            {"I'm a video editor obsessed with one thing attention. Not the fake kind you beg for, the kind you earn in the first three seconds and don't let go of. I take raw footage, chaos, and unfinished ideas, and turn them into stories people actually stay for.\n\nEvery cut, every transition, every beat is intentional. I don't edit to fill time I edit to hold it.\n\nIf your content deserves to be watched, not scrolled past, that's where I come in."}
          </p>

          {/* Marquee Skills */}
          <div className="w-full overflow-hidden bg-white/5 border-y border-white/10 py-3 mt-8">
            <div className="animate-mobile-marquee">
              <span className="font-['Orbitron',sans-serif] text-[14px] uppercase tracking-wider mx-4 flex items-center gap-3">
                Cash cow editing <Dot /> Reels editing <Dot /> logo animation <Dot /> podcast edit <Dot /> Vlogs editing
              </span>
              <span className="font-['Orbitron',sans-serif] text-[14px] uppercase tracking-wider mx-4 flex items-center gap-3">
                Cash cow editing <Dot /> Reels editing <Dot /> logo animation <Dot /> podcast edit <Dot /> Vlogs editing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Portfolio Sections */}
      
      {/* Section 1: Cash Cow */}
      <section id="portfolio" className="relative py-16 px-6 bg-black">
        <div className="max-w-lg mx-auto flex flex-col gap-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="font-['Exo',sans-serif] font-bold text-[24px] uppercase text-white tracking-wider">
              Cash Cow Edits
            </h2>
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {cashcowVideos.map((vid, idx) => (
              <MobileVideoCard key={idx} videoUrl={vid.url} title={vid.title} category={vid.category} onPlay={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Cinematography */}
      <section id="cinematography" className="relative py-16 px-6 bg-zinc-950/20">
        <div className="max-w-lg mx-auto flex flex-col gap-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="font-['Exo',sans-serif] font-bold text-[24px] uppercase text-white tracking-wider">
              Cinematography
            </h2>
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {cinematographyVideos.map((vid, idx) => (
              <MobileVideoCard key={idx} videoUrl={vid.url} title={vid.title} category={vid.category} onPlay={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Commercial */}
      <section id="commercial" className="relative py-16 px-6 bg-black">
        <div className="max-w-lg mx-auto flex flex-col gap-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="font-['Exo',sans-serif] font-bold text-[24px] uppercase text-white tracking-wider">
              Commercial Ads
            </h2>
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {commercialVideos.map((vid, idx) => (
              <MobileVideoCard key={idx} videoUrl={vid.url} title={vid.title} category={vid.category} onPlay={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Social Shorts */}
      <section id="facehead" className="relative py-16 px-6 bg-zinc-950/20">
        <div className="max-w-lg mx-auto flex flex-col gap-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="font-['Exo',sans-serif] font-bold text-[24px] uppercase text-white tracking-wider">
              Facehead YT Video
            </h2>
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {faceheadVideos.map((vid, idx) => (
              <MobileVideoCard key={idx} videoUrl={vid.url} title={vid.title} category={vid.category} onPlay={setActiveVideo} isVertical />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: SaaS & Motion graphics */}
      <section id="saasmotions" className="relative pt-16 pb-6 px-6 bg-black">
        <div className="max-w-lg mx-auto flex flex-col gap-8">
          <div className="flex flex-col items-start gap-1">
            <h2 className="font-['Exo',sans-serif] font-bold text-[24px] uppercase text-white tracking-wider">
              SaaS & Motion graphics
            </h2>
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {saasmotionsVideos.map((vid, idx) => (
              <MobileVideoCard key={idx} videoUrl={vid.url} title={vid.title} category={vid.category} onPlay={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-10 px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-lg mx-auto flex flex-col gap-12 text-center items-center">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-['Exo',sans-serif] font-bold text-[30px] uppercase text-white tracking-wider">
              Testimonials
            </h2>
            <div className="h-[2px] w-[140px] bg-gradient-to-r from-red-500 via-green-500 to-blue-500" />
          </div>

          {/* Cards */}
          <div className="w-full">
            <MobileTestimonialsSlider />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative pt-10 pb-6 px-6 bg-black">
        <div className="max-w-lg mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-start gap-2">
            <h2 className="font-['Exo',sans-serif] font-bold text-[24px] uppercase text-white tracking-wide">
              I am ready to consult you
            </h2>
            <div className="h-[2px] w-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500" />
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white/80">
              <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p313f0f70} fill="currentColor" />
                </svg>
              </div>
              <span className="font-['Exo',sans-serif] text-[16px]">+8801621974705</span>
            </div>

            <div className="flex items-center gap-4 text-white/80">
              <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p30757df0} fill="currentColor" />
                </svg>
              </div>
              <span className="font-['Exo',sans-serif] text-[16px]">Olialkonok2@gmail.com</span>
            </div>
          </div>

          <MobileFooter />
        </div>
      </section>

      {/* Lightbox Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[9999]">
          <div className="relative w-[90%] max-w-lg p-2 flex items-center justify-center">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-[-50px] right-[5px] text-white/80 hover:text-white text-[45px] font-light cursor-pointer transition-colors z-[10000]"
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
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10 max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Small helpers
function Dot() {
  return (
    <span className="inline-block mx-3 size-2 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500" />
  );
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

interface MobileVideoCardProps {
  videoUrl: string;
  title: string;
  category: string;
  onPlay: (url: string) => void;
  isVertical?: boolean;
}

function MobileVideoCard({ videoUrl, title, category, onPlay, isVertical }: MobileVideoCardProps) {
  const cardHeight = isVertical ? "h-[240px]" : "aspect-video";

  const premiumBadge = isVertical ? "Short" : (
    videoUrl.includes("cashcow") ? "Viral Edit" :
    videoUrl.includes("cinematography") ? "4K Cinema" :
    videoUrl.includes("commercial") ? "Ads / Promo" : "SaaS Motion"
  );

  return (
    <div 
      className="relative group cursor-pointer w-full mx-auto"
      onClick={() => onPlay(videoUrl)}
    >
      <div className={`relative ${cardHeight} rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.6)] bg-zinc-950`}>
        <video 
          src={videoUrl}
          preload="metadata"
          muted
          playsInline
          className="absolute object-cover size-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
        
        {/* Floating badge top-left */}
        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center gap-1">
          <span className="size-1 rounded-full bg-purple-500" />
          <span className="font-['Orbitron',sans-serif] text-[8px] font-bold text-purple-300 uppercase tracking-widest">{premiumBadge}</span>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center size-[48px] rounded-full bg-purple-600/90 border border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.6)]">
            <svg className="size-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Review card helpers
function MobileReviewCard({ name, title, text }: { name: string; title: string; text: string }) {
  return (
    <div className="bg-[#6f00a9]/60 backdrop-blur-sm border border-purple-500/10 p-6 rounded-xl flex flex-col gap-2 items-center text-center shadow-lg">
      <p className="font-['Exo',sans-serif] font-bold text-[28px] uppercase tracking-wide text-white leading-none">
        {name}
      </p>
      <p className="font-['Exo',sans-serif] text-[14px] uppercase text-purple-300">
        {title}
      </p>
      <p className="font-['Exo',sans-serif] text-[15px] leading-relaxed text-white/90 mt-2">
        {text}
      </p>
    </div>
  );
}

function MobileTestimonialsSlider() {
  const [index, setIndex] = useState(0);
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
      setIndex((prev) => (prev + 1) % 9);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[340px] mx-auto flex flex-col items-center gap-4">
      {/* Slider Viewport */}
      <div className="relative w-full aspect-[4/3] rounded-2xl border border-purple-500/10 overflow-hidden bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-3 shadow-lg shadow-purple-500/5 hover:border-purple-500/50 transition-colors duration-300">
        <img 
          key={images[index]}
          src={images[index]} 
          alt={`Testimonial ${index + 1}`} 
          className="max-h-full max-w-full object-contain rounded-lg shadow-md animate-testimonial-fade" 
        />
        
        {/* Navigation Arrows inside slider overlay */}
        <button 
          onClick={() => setIndex((prev) => (prev - 1 + 9) % 9)}
          className="absolute left-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/80 active:scale-95"
          aria-label="Previous"
        >
          ←
        </button>
        <button 
          onClick={() => setIndex((prev) => (prev + 1) % 9)}
          className="absolute right-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/80 active:scale-95"
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex gap-1.5 mt-1">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === idx ? "w-4 bg-purple-500" : "w-1.5 bg-white/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function MobileFooter() {
  return (
    <footer className="w-full py-10 flex flex-col items-center justify-center gap-5 border-t border-white/5 bg-zinc-950/20 backdrop-blur-sm relative overflow-hidden mt-12">
      {/* Decorative radial purple background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
      
      <p className="font-['Orbitron',sans-serif] text-[10px] tracking-[0.2em] text-purple-400/80 uppercase font-medium">
        Stay Connected
      </p>

      {/* Large Eye-catching Social handles */}
      <div className="flex gap-4 items-center justify-center">
        <LinkedinIcon />
        <TwitterIcon />
        <WhatsAppIcon />
        <DiscordIcon />
      </div>
    </footer>
  );
}

// Social Icons using relative paths
function LinkedinIcon() {
  return (
    <a href="https://www.linkedin.com/in/olial-kibria-konok-75001827b/" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-[#0077b5]/30 flex items-center justify-center text-[#0077b5] hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:shadow-[0_0_15px_rgba(0,119,181,0.5)] transition-all">
      <svg className="size-5" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.pe8a000} fill="currentColor" />
      </svg>
    </a>
  );
}

function TwitterIcon() {
  return (
    <a href="https://x.com/konok_is_alive" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-black hover:bg-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all animate-pulse" style={{ animationDuration: "4s" }}>
      <svg className="size-4" fill="none" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
      </svg>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <a href="https://wa.me/8801621974705" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-[#25d366]/30 flex items-center justify-center text-[#25d366] hover:text-white hover:bg-[#25d366] hover:border-[#25d366] hover:shadow-[0_0_15px_rgba(37,211,98,0.5)] transition-all">
      <svg className="size-5" fill="none" viewBox="0 0 24 24">
        <path d="M12 .003C5.384.003.007 5.38.007 11.994c0 2.112.551 4.17 1.602 5.992L.007 24l6.173-1.619c1.765.961 3.748 1.467 5.761 1.468 6.613 0 11.99-5.378 11.99-11.993C23.93 5.38 18.552.003 12 .003zm6.39 16.92c-.263.742-1.527 1.46-2.1 1.52-.514.053-1.183.08-3.414-.84-2.853-1.177-4.693-4.08-4.836-4.27-.142-.19-1.157-1.54-1.157-2.93 0-1.39.728-2.072 1-2.353.272-.28.59-.35.79-.35.198 0 .397.002.57.01.184.009.43-.07.674.52.247.597.84 2.057.913 2.203.073.146.12.316.024.509-.096.192-.143.315-.285.48-.143.166-.3.37-.43.495-.143.136-.293.284-.126.57.168.286.747 1.233 1.6 1.994.86.768 1.586 1.008 1.87 1.15.286.142.453.118.623-.076.17-.193.729-.848.924-1.14.195-.293.39-.244.664-.143.275.1.1.2.98.674 1.765.875 2.116 1.15.26 1.344z" fill="currentColor" />
      </svg>
    </a>
  );
}

function DiscordIcon() {
  return (
    <a href="https://discord.com/users/olialkibriakonok" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-[#5865f2]/30 flex items-center justify-center text-[#5865f2] hover:text-white hover:bg-[#5865f2] hover:border-[#5865f2] hover:shadow-[0_0_15px_rgba(88,101,242,0.5)] transition-all" title="Discord: olialkibriakonok">
      <svg className="size-5" fill="none" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" fill="currentColor" />
      </svg>
    </a>
  );
}
