"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function SkillsSection() {
  return (
    <section id="skills" className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
      >
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] hover:border-[#FF2D20] hover:bg-[#2a435b] transition-all group p-4 items-center">
          <div className="text-white group-hover:scale-110 group-hover:text-[#FF2D20] transition-all duration-300">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinejoin="round" d="m17 13 3.4641-2V7L17 5l-3.4641 2v4M17 13l-3.4641-2M17 13v4l-7.00001 4M17 13V9m0 4-7.00001 4m3.53591-6L10.5 12.7348M9.99999 21l-3.4641-2.1318M9.99999 21v-4m-3.4641 2v-.1318m0 0V15L10.5 12.7348m-3.96411 6.1334L3.5 17V5m0 0L7 3l3.5 2m-7 0 2.99999 2M10.5 5v7.7348M10.5 5 6.49999 7M17 9l3.5-2M17 9l-3.5-2M9.99999 17l-3.5-2m0 .5V7" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">Laravel</h2>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] hover:border-[#61DAFB] hover:bg-[#2a435b] transition-all group p-4 items-center">
          <div className="text-white group-hover:scale-110 group-hover:text-[#61DAFB] transition-all duration-300">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
              <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">React JS</h2>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] hover:border-[#ffffff] hover:bg-[#2a435b] transition-all group p-4 items-center justify-center">
          <div className="text-white group-hover:scale-105 group-hover:text-black transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="24" fill="none" viewBox="0 0 394 80">
              <path fill="currentColor" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z" />
              <path fill="currentColor" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z" />
            </svg>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] hover:border-[#38BDF8] hover:bg-[#2a435b] transition-all group p-4 items-center">
          <div className="text-white group-hover:scale-110 group-hover:text-[#38BDF8] transition-all duration-300">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">Tailwind CSS</h2>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] hover:border-[#3776AB] hover:bg-[#2a435b] transition-all group p-4 items-center">
          <div className="text-white group-hover:scale-110 group-hover:text-[#3776AB] transition-all duration-300">
            <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.79 1.574h3.866c.14 0 .252.11.252.246v5.186a.25.25 0 01-.252.246H6.344c-.975 0-1.766.77-1.766 1.72v1.162a.25.25 0 01-.253.243H1.867a.25.25 0 01-.253-.246V6.177a.25.25 0 01.252-.246H7.98c.418 0 .757-.33.757-.737a.747.747 0 00-.757-.738H5.537V1.82a.25.25 0 01.253-.246zm5.632 2.592V1.82c0-.95-.79-1.72-1.766-1.72H5.79c-.976 0-1.767.77-1.767 1.72v2.636H1.867C.89 4.456.1 5.226.1 6.176v3.955c0 .95.79 1.72 1.766 1.72h2.46c.085 0 .17-.006.252-.017v2.346c0 .95.79 1.72 1.766 1.72h3.866c.976 0 1.767-.77 1.767-1.72v-2.636h2.156c.976 0 1.767-.77 1.767-1.72V5.868c0-.95-.79-1.72-1.767-1.72h-2.458c-.086 0-.17.005-.253.017zm-5.33 5.974V8.994a.25.25 0 01.252-.246h3.312c.976 0 1.766-.77 1.766-1.72V5.866a.25.25 0 01.253-.243h2.458c.14 0 .253.11.253.246v3.954a.25.25 0 01-.252.246H8.02a.747.747 0 00-.757.737c0 .408.339.738.757.738h2.442v2.636a.25.25 0 01-.253.246H6.344a.25.25 0 01-.252-.246v-4.04z" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">Python</h2>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] hover:border-[#F7DF1E] hover:bg-[#2a435b] transition-all group p-4 items-center">
          <div className="text-white group-hover:scale-110 group-hover:text-[#F7DF1E] transition-all duration-300">
            <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="nonzero" clipRule="nonzero" d="M7.58638 0.102166C7.8199 -0.0340553 8.10867 -0.0340553 8.34219 0.102166L14.5565 3.72717C14.7869 3.86157 14.9286 4.10825 14.9286 4.375V11.625C14.9286 11.8918 14.7869 12.1384 14.5565 12.2728L8.34219 15.8978C8.10867 16.0341 7.8199 16.0341 7.58638 15.8978L6.03281 14.9916C5.67502 14.7829 5.55417 14.3236 5.76288 13.9658C5.97159 13.6081 6.43083 13.4872 6.78862 13.6959L7.96429 14.3817L13.4286 11.1942V4.80578L7.96429 1.61828L2.5 4.80578V11.1942L3.6168 11.8457C3.96098 11.9561 4.38611 11.9831 4.68576 11.8507C4.82477 11.7893 4.95031 11.6893 5.04968 11.5107C5.15426 11.3227 5.25 11.0098 5.25 10.5V5.25C5.25 4.83579 5.58579 4.5 6 4.5C6.41421 4.5 6.75 4.83579 6.75 5.25V10.5C6.75 11.1902 6.62104 11.7716 6.36047 12.2399C6.09471 12.7176 5.71466 13.036 5.29192 13.2228C4.48562 13.579 3.59523 13.433 3.04999 13.2371C3.00686 13.2216 2.96525 13.2022 2.92567 13.1791L1.3721 12.2728C1.14168 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14168 3.86157 1.3721 3.72717L7.58638 0.102166ZM8.24655 5.28323C8.64339 4.81081 9.26318 4.5 10.1042 4.5C10.8847 4.5 11.4792 4.76756 11.8815 5.19314C12.166 5.49417 12.1527 5.96885 11.8516 6.25338C11.5506 6.53792 11.0759 6.52455 10.7914 6.22352C10.7038 6.13087 10.5202 6 10.1042 6C9.66182 6 9.47952 6.14753 9.39511 6.24802C9.28615 6.37774 9.25 6.54184 9.25 6.625C9.25 6.70816 9.28615 6.87226 9.39511 7.00198C9.47952 7.10247 9.66182 7.25 10.1042 7.25C10.1782 7.25 10.2497 7.26073 10.3173 7.28072C10.9368 7.37001 11.4089 7.64784 11.7326 8.03323C12.1049 8.47643 12.2292 8.99983 12.2292 9.375C12.2292 9.75017 12.1049 10.2736 11.7326 10.7168C11.3358 11.1892 10.716 11.5 9.87501 11.5C9.0945 11.5 8.49996 11.2324 8.09768 10.8069C7.81315 10.5058 7.82652 10.0311 8.12755 9.74662C8.42857 9.46208 8.90325 9.47546 9.18779 9.77648C9.27536 9.86913 9.459 10 9.87501 10C10.3174 10 10.4997 9.85247 10.5841 9.75198C10.693 9.62226 10.7292 9.45816 10.7292 9.375C10.7292 9.29184 10.693 9.12774 10.5841 8.99802C10.4997 8.89753 10.3174 8.75 9.87501 8.75C9.80097 8.75 9.72943 8.73927 9.66188 8.71928C9.04237 8.62999 8.57028 8.35216 8.24655 7.96677C7.87427 7.52357 7.75 7.00017 7.75 6.625C7.75 6.24983 7.87427 5.72643 8.24655 5.28323Z" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">JavaScript</h2>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] hover:border-[#E34F26] hover:bg-[#2a435b] transition-all group p-4 items-center">
          <div className="text-white group-hover:scale-110 group-hover:text-[#E34F26] transition-all duration-300">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">HTML</h2>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] hover:border-[#0A66C2] hover:bg-[#2a435b] transition-all group p-4 items-center">
          <div className="text-white group-hover:scale-110 group-hover:text-[#0A66C2] transition-all duration-300">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">CSS</h2>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 rounded-lg border border-[#314d68] hover:border-[#0A66C2] bg-[#182634] hover:bg-[#2a435b] p-4 items-center transition-all group">
          <div className="text-white group-hover:scale-110 group-hover:text-[#0A66C2] transition-all duration-300">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">MySQL</h2>
        </motion.div>
        <motion.div variants={item} className="flex flex-1 gap-3 p-4 items-center rounded-lg border bg-[#182634] hover:bg-[#2a435b] border-[#314d68] hover:border-[#ffffff] transition-all group">
          <div className="text-white group-hover:scale-110 group-hover:text-black transition-all duration-300">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-white text-base font-bold leading-tight">Git / GitHub</h2>
        </motion.div>
      </motion.div>
    </section>
  );
}