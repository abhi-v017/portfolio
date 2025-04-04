import React from 'react'
import SpotlightCard from './SpotlightCard';

function Project() {
    return (
        <div className='flex flex-col items-center gap-4 bg-black py-4'>
            <h1 className='py-6 font-bold text-2xl text-[#725ced] underline max-md:text-lg'>Projects</h1>
            <SpotlightCard className="custom-spotlight-card max-md:p-4" spotlightColor="rgba(29, 5, 253, 0.1)">
                <div className='flex justify-center items-center gap-4 px-4 py-2 max-md:flex-col max-md:px-2 max-md:gap-1'>
                    <img className='w-[30%] border-2 border-[#725ced] rounded-sm max-md:w-[40%]' src="https://res.cloudinary.com/dulfdrdf2/image/upload/v1743778315/Untitled_design_xynwfq.png" alt="" />
                    <div className='border-r-2 border-[#725ced] pr-4 rounded-md max-md:w-full'>
                        <h1 className='text-white font-bold text-2xl py-4 underline max-md:text-lg'>Social-media Application(Android) ~</h1>
                        <p className='text-white text-lg flex flex-col gap-2 max-md:text-sm'>
                            VibeHive is a social media application developed using React Native, designed to provide users with an engaging platform for social interaction. The project utilizes several key technologies:
                            <span>
                                ✅ React Native: Enables cross-platform mobile app development using JavaScript and React.
                            </span>
                            <span>
                                ✅ Metro: A JavaScript bundler that facilitates the building and development process for React Native applications.
                            </span>
                            <span>
                                ✅ Jest: A testing framework used to ensure the reliability and correctness of the application's codebase.
                            </span>
                            These technologies collectively contribute to the development of a robust and efficient social media platform within VibeHive.
                        </p>
                        <button>
                            <a target='_blank' href="https://github.com/abhi-v017/VibeHive" className="relative items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group my-2">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#725ced] opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" color="#fff" fill="#fff">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg></span>
                                <span className="absolute inset-0 border-2 border-white/40 rounded-full"></span>
                            </a>
                        </button>
                    </div>
                </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card max-md:p-4" spotlightColor="rgba(29, 5, 253, 0.1)">
                <div className='flex justify-center items-center gap-4 px-4 py-2 max-md:flex-col max-md:px-2 max-md:gap-1'>
                    <div className='border-l-2 border-[#725ced] pl-4 rounded-md max-md:w-full'>
                        <h1 className='text-white font-bold text-2xl py-4 underline max-md:text-lg'>Social-media Application(Web) ~</h1>
                        <p className='text-white text-lg flex flex-col gap-2 max-md:text-sm'>
                            A MERN-based social media platform with essential social features, built for seamless user interaction.
                            User Authentication – Signup, login, and logout functionality
                            <span>
                                ✅ Create & Manage Posts – Add, edit, and delete posts
                            </span>
                            <span>
                                ✅ Like & Comment System – Engage with posts
                            </span>
                            <span>
                                ✅ Real-time Updates – Dynamic content rendering
                            </span>
                            <span>
                                ✅ Responsive UI – Styled with Tailwind CSS for a sleek look
                            </span>
                            Built with MongoDB, Express.js, React, and Node.js, optimized using Vite for fast development.
                        </p>
                        <button>
                            <a target='_blank' href="https://github.com/abhi-v017/vibehive-web" className="relative items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group my-2">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#725ced] opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" color="#fff" fill="#fff">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg></span>
                                <span className="absolute inset-0 border-2 border-white/40 rounded-full"></span>
                            </a>
                        </button>
                    </div>
                    <img className='w-[30%] border-2 border-[#725ced] rounded-sm max-md:w-[40%]' src="https://res.cloudinary.com/dulfdrdf2/image/upload/v1739163242/xn16i0uo2eg0mmipjqdh.png" alt="" />
                </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card max-md:p-4" spotlightColor="rgba(29, 5, 253, 0.1)">
                <div className='flex justify-center items-center gap-4 px-4 py-2  max-md:flex-col-reverse max-md:px-2 max-md:gap-1'>
                    <img className='w-[25%] border-2 border-[#725ced] rounded-sm max-md:w-[40%]' src="https://res.cloudinary.com/dulfdrdf2/image/upload/v1739163250/efic5fpqdrmlyfyaombm.png" alt="" />
                    <div className='border-r-2 border-[#725ced] pr-4 rounded-md max-md:w-full max-md:pl-2'>
                        <h1 className='text-white font-bold text-2xl py-4 underline max-md:text-lg'>Blog Application ~</h1>
                        <p className='text-white text-lg flex flex-col gap-2 max-md:text-base'>
                            A modern React-based blogging platform powered by Appwrite for
                            backend services. Built with Vite  for fast development and styled
                            using Tailwind CSS  for a sleek UI.
                            Key Technologies:
                            <span>✅ React</span>
                            <span>✅ Vite</span>
                            <span>✅ Appwrite</span>
                            <span>✅ Tailwind CSS</span>
                        </p>
                        <button>
                            <a target='_blank' href="https://github.com/abhi-v017/blog-app-react" className="relative items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group my-2">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#725ced] opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" color="#fff" fill="#fff">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg></span>
                                <span className="absolute inset-0 border-2 border-white/40 rounded-full"></span>
                            </a>
                        </button>
                    </div>
                </div>
            </SpotlightCard>
        </div>
    )
}

export default Project
