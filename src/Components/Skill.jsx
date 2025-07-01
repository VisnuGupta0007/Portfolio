
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { SiMui } from "react-icons/si";

function Skill() {
    return (
        <>
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
        </>
    )
}

export default Skill