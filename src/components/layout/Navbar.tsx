"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import profilePic from "../../../public/images/RAAF2216.webp";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223649] px-4 md:px-10 py-3 fixed top-0 left-0 right-0 z-50 bg-[#101a23]/95 backdrop-blur-md"
      >
        <div className="flex items-center gap-4 text-white">
          <div className="size-10 rounded-full overflow-hidden border-2 border-[#314d68] shadow-sm relative">
            <Image src={profilePic} alt="Profile" fill className="object-cover" />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">P.AM.W.Z</h2>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="flex flex-1 justify-end gap-8 hidden md:flex">
          <div className="flex items-center gap-9">
            <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#hero">Home</a>
            <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#skills">Skills</a>
            <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#projects">Projects</a>
            <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#contact">Contact</a>
          </div>
          <div className="flex gap-2">
            <a href="https://github.com/putraadm" target="_blank" rel="noopener noreferrer" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#223649] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition hover:bg-white/20">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/putra-adimulya-walizhafran-9a5a91279/" target="_blank" rel="noopener noreferrer" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#223649] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition hover:bg-white/20">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[64px] left-0 right-0 bg-[#182634] border-b border-[#223649] z-40 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-4">
              <a className="text-white text-base font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setTimeout(() => { document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }); }, 150); }}>Home</a>
              <a className="text-white text-base font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setTimeout(() => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }, 150); }}>About</a>
              <a className="text-white text-base font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setTimeout(() => { document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); }, 150); }}>Skills</a>
              <a className="text-white text-base font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setTimeout(() => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }, 150); }}>Projects</a>
              <a className="text-white text-base font-medium hover:text-primary transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setTimeout(() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }, 150); }}>Contact</a>

              <div className="flex gap-4 mt-2 pt-4 border-t border-[#314d68]">
                <a href="https://github.com/putraadm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/putra-adimulya-walizhafran-9a5a91279/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
