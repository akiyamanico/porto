import { useState } from "react";
import {
  SiSpringboot,
  SiLaravel,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

import me from "../Assets/me.jpg";

const Listing = () => {
  const [selectedTab, setSelectedTab] = useState("About me");
  const [isFading, setIsFading] = useState(false);

  const handleTabClick = (tab) => {
    if (tab !== selectedTab) {
      setIsFading(true);
      setTimeout(() => {
        setSelectedTab(tab);
        setIsFading(false);
      }, 300);
    }
  };

  return (
    <div className="bg-transparent backdrop-blur-sm text-slate-800 p-8 ">
      <div className="flex flex-wrap justify-between items-center mb-4 text-slate-800 text-lg">
        <div className="flex space-x-4 sm:space-x-8">
          <span
            className={`cursor-pointer pb-2 transition-all duration-500 ease-in-out ${
              selectedTab === "About me"
                ? "border-b-2 border-yellow-500 text-yellow-500"
                : "border-b-2 border-transparent text-slate-800"
            }`}
            onClick={() => handleTabClick("About me")}
          >
            About me
          </span>
          <span
            className={`cursor-pointer pb-2 transition-all duration-500 ease-in-out ${
              selectedTab === "Tech Stacks"
                ? "border-b-2 border-yellow-500 text-yellow-500"
                : "border-b-2 border-transparent text-slate-800"
            }`}
            onClick={() => handleTabClick("Tech Stacks")}
          >
            Tech Stacks
          </span>
          <span
            className={`cursor-pointer pb-2 transition-all duration-500 ease-in-out ${
              selectedTab === "Projects"
                ? "border-b-2 border-yellow-500 text-yellow-500"
                : "border-b-2 border-transparent text-slate-800"
            }`}
            onClick={() => handleTabClick("Projects")}
          >
            Projects
          </span>
        </div>
      </div>

      <div
        className={`mt-8 transition-opacity duration-300 min-h-[300px] ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {selectedTab === "About me" && (
          <div className="flex flex-col lg:flex-row items-center lg:items-start p-6 bg-gray-100 backdrop-blur-sm bg-opacity-30 rounded-lg shadow-lg ">
            <div className="text-center lg:mr-6 mb-4 lg:mb-0">
              <div className="relative group w-32 lg:w-32 ">
                <img
                  src={me}
                  alt="About Me"
                  className="rounded-full shadow-lg w-full object-cover transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 rounded-full transition duration-500"></div>
                <p className="font-Monaco absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-500">
                  Fi Zilalil Huda
                </p>
              </div>
            </div>

            <div className="border-l  h-auto lg:h-48 mx-6 hidden lg:block"></div>

            <div className="text-sm lg:text-base">
              <p className="text-slate-800 leading-relaxed font-light">
                Hello, my name is Fi Zilalil Huda, but people usually call me
                Huda, Piji, or Flia (my internet nickname). I was born in Bekasi
                on July 30, 1998. Since I was a child, I have been interested in
                computer programming and always wanted to learn more about
                technology. Besides programming, I also have a passion for
                music—though my taste leans towards something a bit loud, like
                metal (lmao). Currently, I’m focused on web development and
                continuously learning to sharpen my skills in programming. I
                also have experience as a videographer and photographer. In the
                past, I worked as an editor, which has helped me develop a keen
                eye for detail and creativity in visual storytelling.
              </p>
            </div>
          </div>
        )}
        {selectedTab === "Tech Stacks" && (
          <div className="mt-8">
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-8">
              <SiSpringboot size={50} className="text-green-500" />
              <SiLaravel size={50} className="text-red-500" />
              <SiMongodb size={50} className="text-green-600" />
              <SiMysql size={50} className="text-blue-600" />
              <SiPostgresql size={50} className="text-indigo-500" />
              <SiReact size={50} className="text-blue-500" />
              <SiNextdotjs size={50} className="text-black" />
              <SiNodedotjs size={50} className="text-green-400" />
              <SiTailwindcss size={50} className="text-blue-400" />
            </div>

            <div className="text-center">
              <p className="text-slate-800 text-sm sm:text-base">
                I have experience with the following technologies, which I use
                to build full-stack web applications. While I typically use
                Node.js as a backend framework, I also enjoy working with
                frameworks like Laravel and Java Springboot for the backend,
                ReactJS and NextJS for the frontend, and databases like MongoDB,
                MySQL, and PostgreSQL.
              </p>
            </div>
          </div>
        )}

        {selectedTab === "Projects" && (
          <div className="mt-8">
            <p className="text-slate-800 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              nulla elit, pretium non diam a, elementum tincidunt libero.
              Curabitur consectetur est est, et aliquam velit vulputate nec.
              Cras lorem sem, egestas at erat sed, scelerisque porta est. Aenean
              quis ipsum venenatis, varius metus in, vestibulum felis. Phasellus
              tristique ante augue, ut viverra tellus ornare a.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
