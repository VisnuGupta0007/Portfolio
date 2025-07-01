import React from 'react';
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Profile_Image from '../Images/PROFILE-Img.jpg';

function Profile() {
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
                            className="border-2 border-slate-400 text-lg sm:text-xl p-3 w-40 sm:w-44 rounded-full font-semibold hover:bg-zinc-700 hover:text-white hover:animate-pulse"
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
                            <button className="border-2 bg-zinc-700 text-white text-lg sm:text-xl p-3 w-40 sm:w-44 rounded-full font-semibold hover:bg-black hover:animate-pulse">
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
        </>
    )
}

export default Profile