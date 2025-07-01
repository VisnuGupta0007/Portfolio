import { FaAward } from "react-icons/fa";
import About_Image from '../Images/ABOUT-Img.jpg'

function About() {
    return (
        <>
            {/* About */}
            <section className="about mt-16 px-6 md:px-12 lg:px-24 mb-20">
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
        </>
    )
}

export default About