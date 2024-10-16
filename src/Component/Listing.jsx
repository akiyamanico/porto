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
  SiGo,
} from "react-icons/si";
import { motion } from "framer-motion";
import codeLogo from "../Assets/github.png";
import Modal from "./Modal";

import me from "../Assets/me.jpg";
import pullhair from "../Assets/Project/Pullhair/1.png";
import sirepi from "../Assets/Project/Sirepi/1.png";
import adabiah from "../Assets/Project/Adabiah/1.png";
import propertyhub from "../Assets/Project/PropertyHub/1.png";
import hayatistore from "../Assets/Project/Hayati Store/1.png";

const Listing = () => {
  const [selectedTab, setSelectedTab] = useState("About me");
  const [isFading, setIsFading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTabClick = (tab) => {
    if (tab !== selectedTab) {
      setIsFading(true);
      setTimeout(() => {
        setSelectedTab(tab);
        setIsFading(false);
      }, 300);
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const projects = [
    {
      title: "Pullhair",
      images: [pullhair],
      description: "Developed a robust API to facilitate seamless communication between members, cashiers, and admins within a booking system. Implemented features that allowed users to select kapsters based on their availability and packages, optimizing the user experience for service delivery.",
      techstack: "Inertia.js (React.js) + Laravel + MySQL",
    },
    {
      title: "SIREPI",
      images: [sirepi],
      description: "Led the end-to-end development of the web application, collaborating with stakeholders to gather requirements and ensuring a responsive and user-friendly interface using Tailwind CSS while implementing backend functionalities with Laravel and MySQL.",
      techstack: "Laravel (Frontend & Backend) + MySQL",
    },
    {
      title: "Portal Adabiah Padang",
      images: [adabiah],
      description: "Responsible for identifying and resolving bugs on various pages to enhance user experience and ensure functionality. Implemented new features based on user feedback, contributing to the overall improvement and performance of the content management system.",
      techstack: "Laravel (Frontend & Backend) + MySQL",
    },
    {
      title: "PropertyHub",
      images: [propertyhub],
      description: "Integrated frontend components with backend services to create dynamic views based on real-time database interactions. Developed a comprehensive order management system that streamlined the ordering process, ensuring accuracy and efficiency in handling user requests.",
      techstack: "Laravel (Frontend & Backend) + MySQL",
    },
    {
      title: "Hayati Store",
      images: [hayatistore],
      description: "Developed a simple shopping system that integrates customers and admins. This system allows the admin or owner to perform data grouping using k-means clustering, providing better insights for data analysis.",
      techstack: "React.js + Express.js + MySQL",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-transparent backdrop-blur-sm text-white p-8 ">
      <div className="flex flex-wrap justify-between items-center mb-4 text-white text-lg">
        <div className="flex space-x-4 sm:space-x-8">
          <span
            className={`cursor-pointer pb-2 transition-all duration-500 ease-in-out ${
              selectedTab === "About me"
                ? "border-b-2 border-teal-500 text-teal-500"
                : "border-b-2 border-transparent text-white"
            }`}
            onClick={() => handleTabClick("About me")}
          >
            About me
          </span>
          <span
            className={`cursor-pointer pb-2 transition-all duration-500 ease-in-out ${
              selectedTab === "Tech Stacks"
                ? "border-b-2 border-teal-500 text-teal-500"
                : "border-b-2 border-transparent text-white"
            }`}
            onClick={() => handleTabClick("Tech Stacks")}
          >
            Tech Stacks
          </span>
          <span
            className={`cursor-pointer pb-2 transition-all duration-500 ease-in-out ${
              selectedTab === "Projects"
                ? "border-b-2 border-teal-500 text-teal-500"
                : "border-b-2 border-transparent text-white"
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
          <div className="flex flex-col lg:flex-row bg-white bg-opacity-20 backdrop:blur-md p-6 rounded-lg shadow-md hover:shadow-lg   transition-transform duration-300 hover:-translate-y-2">
            <div
              className="text-center lg:mr-6 mb-4 lg:mb-0 relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div className="relative group w-32 lg:w-32">
                <motion.img
                  src={me}
                  alt="About Me"
                  className="rounded-full shadow-lg w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                {isHovered && (
                  <motion.div
                    className="absolute"
                    style={{
                      left: mousePosition.x - 100,
                      top: mousePosition.y - 100,
                      pointerEvents: "none",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={codeLogo} alt="Code Logo" className="w-12 h-12" />
                  </motion.div>
                )}

                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>

                <motion.p
                  className="font-Monaco absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Fi Zilalil Huda
                </motion.p>
              </motion.div>
            </div>

            <div className="border-l h-auto lg:h-48 mx-6 hidden lg:block"></div>

            <div className="text-sm lg:text-base">
              <p className="text-white leading-relaxed font-light">
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
            <div className="bg-white bg-opacity-20 backdrop:blur-md p-6 rounded-lg shadow-md hover:shadow-lg   transition-transform duration-300 hover:-translate-y-2">
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
                <SiGo size={50} className="text-blue-400" />
              </div>

              <div className="text-center">
                <p className="text-white text-sm sm:text-base">
                  I have experience with a variety of technologies that I use to
                  build full-stack web applications. While I typically use
                  Express.js as a backend framework, I also enjoy working with
                  frameworks like Laravel and Java Spring Boot for the backend.
                  Golang also seems fun! For the frontend, I work with ReactJS
                  and Next.js, and for databases, I use MongoDB, MySQL, and
                  PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "Projects" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-20 backdrop:blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <p className="underline text-xl mb-2">{project.title}</p>
                  <p className="text-lg">Technologies Used:</p>
                  <p className="text-md">{project.techstack}</p>
                </div>
              ))}
              <div className="bg-white bg-opacity-20 backdrop:blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <p className="underline text-xl mb-2">
                  Take a look on my Repositories for more!
                </p>
                <p className="text-lg">
                  Also all of my dummy project for practice purpose
                </p>
                <p className="text-lg">
                  Are available on my Github Repositories
                </p>
              </div>
            </div>

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              project={selectedProject}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Listing;
