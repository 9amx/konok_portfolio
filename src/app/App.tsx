import { useState, useEffect } from "react";
import Desktop from "@/imports/Desktop/index";
import Mobile from "@/imports/Mobile/index";

const fontOverrides = `
  /* Remap Figma-exported font family names to actual loaded Google Font families */
  [class*="font-"]:is([class*="Exo:Bold"]) { font-family: 'Exo', sans-serif; font-weight: 700; }
  [class*="font-"]:is([class*="Exo:Regular"]) { font-family: 'Exo', sans-serif; font-weight: 400; }
  [class*="font-"]:is([class*="Exo_2:Regular"]) { font-family: 'Exo 2', sans-serif; font-weight: 400; }
  [class*="font-"]:is([class*="Orbitron:Medium"]) { font-family: 'Orbitron', sans-serif; font-weight: 500; }
  [class*="font-"]:is([class*="Orbitron:Black"]) { font-family: 'Orbitron', sans-serif; font-weight: 900; }
`;

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      if (width >= 1024 && width < 1512) {
        setScale(width / 1512);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{fontOverrides}</style>
      {isMobile ? (
        <Mobile />
      ) : (
        <div className="min-h-screen w-full bg-[#000001] overflow-x-hidden flex flex-col items-center">
          <div 
            style={{ 
              width: "1512px",
              minHeight: "5330px",
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              marginBottom: `${(scale - 1) * 5330}px`,
            }}
            className="relative shrink-0"
          >
            <Desktop />
          </div>
        </div>
      )}
    </>
  );
}
