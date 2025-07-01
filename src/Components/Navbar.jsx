import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";

function Navbar() {
    return (
        <nav className="flex flex-col md:flex-row justify-between items-center px-5 h-auto md:h-16 font-semibold text-lg md:text-2xl mx-5 md:mx-20 py-4 md:py-0">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <IoPersonCircleSharp className="text-3xl md:text-4xl" />
                <h1 className="text-3xl md:text-4xl">
                    <Link to="/home">Portfolio</Link>
                </h1>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col md:flex-row gap-5 md:gap-10 mt-4 md:mt-0 text-lg md:text-2xl">
                {["About", "Skills", "Project", "Contact"].map((item) => (
                    <li key={item} className="relative group px-2 text-center">
                        <Link to={`/${item.toLowerCase()}`} className="text-gray-800">
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar