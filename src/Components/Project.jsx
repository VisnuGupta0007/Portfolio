import Todo_Project from '../Images/ToDO_Project.png'
import JavaScript_Project from '../Images/JavaScript_Project_1.png';
import Frontend_Landing from '../Images/Frontend_LandingPage.jpeg';
import Uber_Icon from '../Images/Uber_Icon.jpeg';
import Cashify_Icon from '../Images/Cashify_Clone.jpeg';
import Fitness_Studio from '../Images/Fitness_Studio.jpg';
import KFC_Logo from '../Images/KFC_Logo.jpg';
import BootStrap_Icon from '../Images/BootStrap_Icon.png';
import Amazon_Clone from '../Images/Amzon_Clone.jpeg';

function Project() {
    return (
        <>


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
        </>
    )
}

export default Project