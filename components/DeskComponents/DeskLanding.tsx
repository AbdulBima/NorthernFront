import React from "react";
import Image from "next/image";

const DeskLanding: React.FC = () => {
    return (
        <>
            <DesktopView />
            <MobileView />
        </>
    );
};

const DesktopView: React.FC = () => {
    return (
        <div className='hidden md:flex'>
            <div className="relative h-[100vh] w-full bg-[url('/images/n9.jpg')] bg-cover bg-left md:bg-center bg-no-repeat">
                <Overlay />
                <Content position="bottom-32 left-16" textAlign="text-left" buttonPosition="-bottom-28" />
            </div>
        </div>
    );
};

const MobileView: React.FC = () => {
    return (
        <div className='flex md:hidden'>
            <div className="relative h-[80vh] w-full bg-[url('/images/n9.jpg')] bg-cover bg-left md:bg-center bg-no-repeat">
                <Overlay />
                <div className="absolute top-72 left-4">
                    <span className='headeMenus text-yellow-500 opacity-90'>Leadership</span>
                </div>
                <div className='absolute bottom-40 left-4 mt-2'>
                    <a href='/blog'>
                        <h2 className='mobileLandingTitle text-2xl font-bold text-white mt-10 pr-6 text-left hover:text-yellow-100'>
                            Northern Nigeria Charts a New Course: Political Cooperation and Social Progress Transforming the Region
                        </h2>
                    </a>
                </div>
                <div className="absolute bottom-28 left-4 flex -mt-10 items-center">
                    <span className='h-px w-[85vw] bg-white'></span>
                </div>
                <button className='absolute bottom-10 left-4 readMore'>Read Post</button>
            </div>
        </div>
    );
};

const Overlay: React.FC = () => {
    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-600 opacity-20 to-transparent'></div>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
        </>
    );
};

interface ContentProps {
    position: string;
    textAlign: string;
    buttonPosition: string;
}

const Content: React.FC<ContentProps> = ({ position, textAlign, buttonPosition }) => {
    return (
        <div className={`absolute ${position} flex flex-col items-start h-[40vh] w-[90vw] z-10`}>
            <span className='headeMenus text-white opacity-90'>Leadership</span>
            <div className='mt-2 opacity-90'>
                <a href='/blog'>
                    <h2 className={`mainHeaderD text-white mt-10  text-4xl ${textAlign} pr-80 mr-20 hover:text-yellow-300`}>
                        Northern Nigeria Charts a New Course: Political Cooperation and Social Progress Transforming the Region
                    </h2>
                </a>
            </div>
            <div className="absolute bottom-2 flex mt-2 items-center">
                <span className='h-px w-[90vw] bg-white'></span>
            </div>
            <button className={`readMore ${buttonPosition}`}>Read Post</button>
        </div>
    );
};

export default DeskLanding;
