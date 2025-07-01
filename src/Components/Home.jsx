import React, { useEffect, useState } from 'react'
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";
import { SiMui } from "react-icons/si";


import Profile_Image from '../Images/PROFILE-Img.jpg'
import About_Image from '../Images/ABOUT-Img.jpg'
import Todo_Project from '../Images/ToDO_Project.png'
import JavaScript_Project from '../Images/JavaScript_Project_1.png';
import Frontend_Landing from '../Images/Frontend_LandingPage.jpeg';
import Uber_Icon from '../Images/Uber_Icon.jpeg';
import Cashify_Icon from '../Images/Cashify_Clone.jpeg';
import Fitness_Studio from '../Images/Fitness_Studio.jpg';
import KFC_Logo from '../Images/KFC_Logo.jpg';
import BootStrap_Icon from '../Images/BootStrap_Icon.png';
import Amazon_Clone from '../Images/Amzon_Clone.jpeg';

function Home() {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>

            {/* Profile */}
            <section className="profile flex flex-col md:flex-row items-center justify-center mt-28 px-6 md:px-12 lg:px-24 gap-14 md:gap-20">
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={Profile_Image}
                        alt="Visnu Gupta"
                        className="object-cover object-center h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] rounded-full shadow-lg"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-700">Hello, I'm</h4>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Visnu Gupta</h1>
                    <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold mt-2">Frontend Developer</h3>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6">
                        <button
                            className="border-2 border-slate-400 cursor-pointer text-lg sm:text-xl p-3 w-40 sm:w-44 rounded-full font-semibold hover:bg-zinc-700 hover:text-white hover:animate-pulse hover:border-0"
                            onClick={() =>
                                window.open(
                                    'https://drive.google.com/file/d/1I06EgRz5BW4NSnhaf1v2IoFvY_M9n_5N/view?usp=sharing',
                                    '_blank'
                                )
                            }
                        >
                            Show CV
                        </button>
                        <Link to="/contact">
                            <button className="border-2 bg-zinc-700 cursor-pointer text-white text-lg sm:text-xl p-3 w-40 sm:w-44 rounded-full font-semibold hover:bg-black hover:animate-pulse">
                                Contact Info
                            </button>
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center items-center gap-6 text-3xl sm:text-4xl mt-6">
                        <a
                            href="https://www.linkedin.com/in/visnu-gupta-2b363631a/"
                            className="hover:text-gray-600 transition"
                        >
                            <TbBrandLinkedinFilled />
                        </a>
                        <a
                            href="https://github.com/VisnuGupta0007/VisnuGupta0007"
                            className="hover:text-gray-600 transition"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </section>



            {/* About */}
            <section className="about mt-16 px-6 md:px-12 lg:px-24">
                {/* Section Header */}
                <div className="text-center">
                    <h4 className="font-semibold text-gray-700 text-lg sm:text-xl">Get To Know More</h4>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">About Me</h1>
                </div>

                {/* Image & Content Section */}
                <div className="flex flex-col-reverse md:flex-row items-center mt-12 gap-10">
                    {/* Image */}
                    <img
                        src={About_Image}
                        alt="About Me"
                        className="object-cover w-full max-w-[400px] sm:max-w-[450px] h-[500px] sm:h-[570px]  rounded-3xl shadow-2xl"
                    />

                    {/* Content */}
                    <div className="flex flex-col gap-6 w-full md:w-2/3">
                        {/* Training & Education Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-2 border-black rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
                                <FaAward className="text-3xl sm:text-4xl mb-2 text-zinc-700" />
                                <h1 className="text-xl sm:text-2xl font-semibold">Training</h1>
                                <p className="text-gray-700">Web Designing</p>
                                <p className="text-gray-700">MERN Stack</p>
                            </div>
                            <div className="border-2 border-black rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
                                <FaAward className="text-3xl sm:text-4xl mb-2 text-zinc-700" />
                                <h1 className="text-xl sm:text-2xl font-semibold">Education</h1>
                                <p className="text-gray-700">Bachelor Of Arts</p>
                            </div>
                        </div>

                        {/* About Description */}
                        <p className="text-gray-700 font-medium text-justify text-sm sm:text-base leading-relaxed">
                            Web Developer with strong experience in building responsive, accessible, and user-friendly websites using modern technologies such as HTML, CSS, JavaScript, React.js, and Tailwind CSS. Skilled in developing clean, well-structured, and reusable code while focusing on performance, accessibility, and cross-browser compatibility. Proficient in using Git for version control and comfortable working in Agile teams to deliver high-quality features efficiently. Capable of turning design mockups into functional web interfaces, ensuring a smooth and consistent user experience. Familiar with component-based architecture and maintaining scalable codebases. Passionate about web development, always eager to learn new tools and technologies to stay updated with industry trends.
                        </p>

                        {/* Certificates */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-center mt-4">Certificates</h1>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-2 mt-4">
                            {/* Web Designing Certificate */}
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://drive.google.com/file/d/1KYnhPIIQiO1_WM5ECpjnRVZkE9g-Fews/view',
                                        '_blank'
                                    )
                                }
                                className="w-full sm:w-44 text-base sm:text-lg font-semibold cursor-pointer text-white bg-zinc-500 border-2 border-zinc-500 rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-white hover:animate-pulse hover:text-zinc-800 hover:shadow-xl hover:border-zinc-800"
                            >
                                Web Designing
                            </button>

                            {/* MERN Stack Certificate */}
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://drive.google.com/file/d/1KSMUdZ_PVbclZ0hpUZDnR5UX8PEFzQuO/view',
                                        '_blank'
                                    )
                                }
                                className="w-full sm:w-44 text-base sm:text-lg font-semibold cursor-pointer text-white bg-zinc-500 border-2 border-zinc-500 rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-white hover:animate-pulse hover:text-zinc-800 hover:shadow-xl hover:border-zinc-800"
                            >
                                MERN Stack
                            </button>
                        </div>

                    </div>
                </div>
            </section>



            {/* Skills */}
            <section className="skills flex flex-col items-center mt-10 px-5 md:px-10">
                <div className="text-center">
                    <h1 className="text-gray-700 text-2xl font-medium md:text-3xl">
                        Explore My
                    </h1>
                    <h1 className="text-5xl font-bold mt-2 md:text-4xl">Skills</h1>
                </div>

                <div className="border-2 mt-10 rounded-3xl border-black p-5 md:p-8 w-full max-w-4xl">
                    <h1 className="text-4xl font-bold text-gray-700 text-center mt-5 md:text-3xl">
                        Frontend Development
                    </h1>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 p-5">
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaHtml5 className=" text-2xl" />
                            <h3>HTML</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <IoLogoCss3 className=" text-2xl" />
                            <h3>CSS</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <RiJavascriptFill className=" text-2xl" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <DiJqueryLogo className=" text-2xl" />
                            <h3>jQuery</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaBootstrap className=" text-2xl" />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaReact className=" text-2xl" />
                            <h3>ReactJS</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <SiDaisyui className=" text-2xl" />
                            <h3>DaisyUI</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <RiTailwindCssFill className=" text-2xl" />
                            <h3>TailwindCSS</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaGitAlt className=" text-2xl" />
                            <h3>Git</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaGithub className=" text-2xl" />
                            <h3>GitHub</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <VscVscodeInsiders className=" text-2xl" />
                            <h3>Vs Code</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <SiVite className=" text-2xl" />
                            <h3>Vite</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <SiMui className=" text-2xl" />
                            <h3>Material UI</h3>
                        </div>
                    </div>
                </div>
            </section>


            {/* Project */}

            <section className='project flex flex-col items-center mt-10 px-6 md:px-12 lg:px-24'>
                <div className='text-center'>
                    <h4 className='text-gray-700 text-2xl font-medium'>Browse My Recent</h4>
                    <h1 className='text-4xl md:text-5xl font-bold mt-2'>Projects</h1>
                </div>


                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4">

                    {/* Card 1 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={Frontend_Landing}
                                alt="Frontend_Landing"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200  shadow-2xl object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://tailwind-react-app-orpin.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={Uber_Icon}
                                alt="Clone_Uber"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200  shadow-2xl object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://clone-uber-henna.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={Cashify_Icon}
                                alt="Clone_Cashify"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200  shadow-2xl border-gray-200 border-2 object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://clone-cashify-tailwind-app.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>

                    {/* Card 4 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={Fitness_Studio}
                                alt="Fitness_Studio"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200  shadow-2xl object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://fitness-xi-two.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>

                    {/* Card 5 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={Todo_Project}
                                alt="To_Do_List"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200  shadow-2xl object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://redux-to-do-app-ruddy.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>


                    {/* Card 6 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={JavaScript_Project}
                                alt="JavaScript_Project"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200  shadow-2xl object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://java-script-project-1-nine.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>

                    {/* Card 7 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={KFC_Logo}
                                alt="Clone_KFC"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200  shadow-2xl object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://clone-kfc-tailwind-app.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>


                    {/* Card 8 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={BootStrap_Icon}
                                alt="BootStrap_Landing"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200  shadow-2xl object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://bootstrap-landing-five.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>



                    {/* Card 9 */}
                    <div className=" p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
                        <div className="flex justify-center">
                            <img
                                src={Amazon_Clone}
                                alt="Amazon_Clone"
                                className="w-full h-60 md:h-80  rounded-3xl shadow-gray-200 shadow-2xl object-cover"
                            />
                        </div>
                        <button className="flex shadow-gray-300 shadow-lg border-gray-50 border-2 items-center justify-center h-12 p-4  rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
                            <a
                                href="https://rawcdn.githack.com/VisnuGupta0007/HTML-AND-CSS-AMAZON-DUMMY-/6adb767b0fb2d8c8214599766c477b826d926ccb/AMAZON.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono"
                            >
                                Go Live
                            </a>
                        </button>
                    </div>




                </div>

            </section>


            {/* Contact */}
            <section className="contact flex flex-col items-center mt-20 px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center">
                    <h4 className="text-gray-700 text-xl sm:text-2xl font-medium">Get in Touch</h4>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Contact Me</h1>
                </div>

                {/* Contact Buttons */}
                <div className="mt-10 w-full flex flex-col md:flex-row justify-center gap-6 px-2">
                    {/* Email Button */}
                    <a
                        href="mailto:visnugupta7788@gmail.com"
                        className="flex items-center justify-center gap-4 border-2 border-black text-base sm:text-lg p-4 rounded-2xl w-full md:w-auto transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 shadow-md hover:shadow-xl"
                    >
                        <IoIosMail className="text-2xl sm:text-3xl" />
                        <span className="font-semibold tracking-wide">VisnuGupta7788@gmail.com</span>
                    </a>

                    {/* LinkedIn Button */}
                    <a
                        href="https://www.linkedin.com/in/visnu-gupta-2b363631a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-4 border-2 border-black text-base sm:text-lg p-4 rounded-2xl w-full md:w-auto transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:border-0 hover:scale-105 shadow-md hover:shadow-xl"
                    >
                        <TbBrandLinkedinFilled className="text-2xl sm:text-3xl" />
                        <span className="font-semibold tracking-wide">LinkedIn</span>
                    </a>
                </div>


                {/* Navigation Links */}
                <div className="mt-12">
                    <ul className="flex flex-wrap justify-center gap-6 text-base sm:text-lg md:text-2xl font-semibold mb-12">
                        <li className="relative group cursor-pointer">
                            <Link to="/About" className="transition-colors duration-200 group-hover:text-gray-700">
                                About
                            </Link>
                            <span className="block h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full mt-1"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <Link to="/Skills" className="transition-colors duration-200 group-hover:text-gray-700">
                                Skills
                            </Link>
                            <span className="block h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full mt-1"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <Link to="/Project" className="transition-colors duration-200 group-hover:text-gray-700">
                                Project
                            </Link>
                            <span className="block h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full mt-1"></span>
                        </li>
                        <li className="relative group cursor-pointer">
                            <Link to="/Contact" className="transition-colors duration-200 group-hover:text-gray-700">
                                Contact
                            </Link>
                            <span className="block h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full mt-1"></span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* === Scroll to Top Button === */}
            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 cursor-pointer bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-black transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <IoIosArrowUp className="text-2xl" />
                </button>
            )}


        </>
    )
}

export default Home