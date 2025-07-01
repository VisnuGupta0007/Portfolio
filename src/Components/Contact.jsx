import { IoIosMail } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

function Contact() {
    return (
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
    )
}

export default Contact