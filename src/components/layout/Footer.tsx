"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full bg-[#182634] border-t border-[#223649] py-6 px-10 mt-auto"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white font-bold text-sm leading-normal">
          © 2026 Putra Adimulya Wali Zhafran. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="https://www.linkedin.com/in/putra-adimulya-walizhafran-9a5a91279" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm leading-normal hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/putraadm" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm leading-normal hover:text-primary transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </motion.footer>
  );
}