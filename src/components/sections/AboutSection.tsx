"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About Me</h2>
                <p className="text-white text-justify text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Lulusan Diploma III Manajemen Informatika dengan pengalaman magang sebagai Full Stack Web Developer. Memiliki kemampuan dalam pengembangan aplikasi web menggunakan Laravel. Terbiasa bekerja dalam tim, menyelesaikan proyek berbasis web, dan memiliki semangat belajar tinggi untuk terus mengembangkan solusi digital yang berkualitas.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-white text-[18px] text-gray-800 font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Pengalaman Magang</h3>
                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-10 mr-6">
                    <div className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -left-2 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </span>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">PT Nusatama Jaya Sakti</h4>
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Jul, 2025 - Des, 2025</span>
                        </div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
                            Full Stack Web Developer
                        </p>
                        <ul className="list-disc ml-4 space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Mengembangkan dan memelihara fitur-fitur website menggunakan <span className="font-semibold text-gray-800 dark:text-gray-200">Laravel</span>.</li>
                            <li>Mendesain antarmuka responsif dan interaktif menggunakan <span className="font-semibold text-gray-800 dark:text-gray-200">Tailwind CSS</span> dan <span className="font-semibold text-gray-800 dark:text-gray-200">JavaScript</span>.</li>
                            <li>Melakukan optimasi <span className="font-semibold text-gray-800 dark:text-gray-200">SEO On-Page</span> untuk meningkatkan visibilitas website.</li>
                            <li>Berkolaborasi dengan tim dalam proses pengembangan dan pengujian aplikasi berbasis web.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-white text-[18px] text-gray-800 font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Pelatihan & Sertifikasi</h3>
                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-10">
                    <div className="mb-4 ml-6">
                        <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -left-2 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Sertifikasi Kompetensi Pemrograman Software Komputer</h4>
                        <p className="text-base font-medium text-blue-600 dark:text-blue-400">
                            Badan Nasional Sertifikasi Profesi (BNSP)
                        </p>
                    </div>
                    <div className="mb-4 ml-6">
                        <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -left-2 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Front End dan Back End Web Developer</h4>
                        <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                            Dicoding Indonesia
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Coding Camp 2025 Powered by DBS Foundation
                        </p>
                    </div>
                    <div className="mb-6 ml-6">
                        <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -left-2 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Python Essentials 1 dan 2</h4>
                        <p className="text-base font-medium text-blue-600 dark:text-blue-400">
                            Cisco Networking Academy (NetAcad)
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}