"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export function ProjectsSection() {
  return (
    <section id="projects" className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projects</h2>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
      >
        <motion.div variants={item} className="flex flex-col gap-3 pb-3">
          <div className="w-full bg-top bg-no-repeat aspect-video bg-cover rounded-lg shadow-sm border border-[#314d68]/50" style={{ backgroundImage: 'url("https://s0.wp.com/mshots/v1/https://konijombang.or.id/?w=800")' }}></div>
          <div>
            <p className="text-white text-base font-medium leading-normal">Website Company Profile KONI Jombang</p>
            <p className="text-[#90adcb] text-sm font-normal leading-normal">
              Dilengkapi dengan fitur Content Management System (CMS). Dibangun menggunakan Laravel dan React, platform ini memiliki sistem autentikasi aman yang memungkinkan admin untuk mengatur dan memperbarui konten website secara dinamis.
            </p>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex flex-col gap-3 pb-3">
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg shadow-sm border border-[#314d68]/50" style={{ backgroundImage: 'url("https://s0.wp.com/mshots/v1/https://jatmanjombang.or.id//?w=800")' }}></div>
          <div>
            <p className="text-white text-base font-medium leading-normal">Website Company Profile Jatman Jombang</p>
            <p className="text-[#90adcb] text-sm font-normal leading-normal">              Dilengkapi dengan fitur Content Management System (CMS). Dibangun menggunakan Laravel dan React, platform ini memiliki sistem autentikasi aman yang memungkinkan admin untuk mengatur dan memperbarui konten website secara dinamis.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}