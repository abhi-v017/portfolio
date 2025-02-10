import React from 'react'
import '../App.css'
import SpotlightCard from './SpotlightCard';
import Typed from 'typed.js';

function Home() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer', 'Backend Developer', 'Problem Solver', 'Full Stack Developer'],
            typeSpeed: 100,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <SpotlightCard className="custom-spotlight-card bg-transparent max-sm:p-2" spotlightColor="rgba(148, 148, 148, 0.2)">
            <div className='flex justify-center items-center gap-20 max-md:flex-col  w-full max-md:h-[50vh] max-sm:h-[60vh] max-xl:h-[90vh] h-full max-md:gap-10'>
                <div className='w-1/3 max-lg:1/4'>
                    <img className='shadow' src="https://res.cloudinary.com/dulfdrdf2/image/upload/v1739163155/itnjbh6xzgcgzh3ousrt.png" alt="" />
                </div>
                <div className='text-white w-1/2 text-xl max-md:text-md max-sm:text-sm max-lg:w-full'>
                    <h1 className='font-bold my-4 text-2xl max-md:text-lg max-sm:text-sm '>Hello, I’m <span className='text-[#725ced] underline'>Abhishek Verma</span> — <span ref={el} /></h1>
                    <p className=''>Welcome to my portfolio! I’m a passionate full
                        stack developer who loves turning ideas into
                        powerful, user-friendly web applications.
                    </p>
                    <div className='flex gap-4 mt-4 items-center max-md:justify-center'>
                        <a className='svg-hover' href="https://github.com/abhi-v017" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" fill='#725ced' viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/vermabhi017" target='_blank'>
                            <svg className='svg-hover'  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" fill='#725ced' viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </a>
                        <a href={'https://drive.google.com/file/d/1jNUmP7Z_-q1_YCyg4urlRAWWlQ9dFRWZ/view'} download={true} target='_blank'>

                        <button className="relative items-center justify-start inline-block px-4 py-2 overflow-hidden font-bold rounded-full group cursor-pointer max-sm:text-sm">
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#725ced] opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out">Download CV</span>
                            <span className="absolute inset-0 border-2 border-white/40 rounded-full"></span>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </SpotlightCard>
    )
}

export default Home
