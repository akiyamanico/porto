import { useState, useCallback } from "react";
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
  SiDotnet,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import me from "../../Assets/me.jpg";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import LineReveal from "../../Component/LineReveal";

const Exhibition = () => {
  const [selectedTab, setSelectedTab] = useState("About me");
  const [activeProject, setActiveProject] = useState(null);

  const handleTabClick = (tab) => {
    if (tab !== selectedTab) {
      setSelectedTab(tab);
      setActiveProject(null);
    }
  };

  const projects = [
    {
      title: "Danamon",
      description: "Banking operational tools & reports for Bank Danamon.",
      items: [
        "Report LoanOps (RMS / MISCMS) — Developed operational loan reports.",
        "Report EB — Developed EB reports.",
        "Backdated Payment Simulation (RMS) — Built a backdated payment simulation tool to support transaction analysis.",
        "Job Upload (CMS) - Implemented job upload feature for CMS",
        "Manual Transaction (RMS) - Implemented manual transaction Partial and Settlement"
      ],
    },
    {
      title: "Trenches.id",
      description: "Landing Page",
      items: [
        "Developing web landing page for trenches.id"
      ],
    },
    {
      title: "CBAS",
      description: "Credit Bureau Automation System",
      items: [
        "V2 – Bulk Upload Data Debitor — Implemented a bulk debtor data upload feature within the CBAS newest system.",
        "SKBF SLIK Reporting — Developed SLIK reports including Summary SLIK and Report Row SLIK within the CBAS SKBF system.",
      ],
    },
    {
      title: "Panin",
      description: "E-Form System — Developed a loan application platform enabling debtors to submit financing requests digitally.",
    },
    {
      title: "Pullhair",
      description: "Developed a robust API to facilitate seamless communication between members, cashiers, and admins within a booking system. Implemented features that allowed users to select kapsters based on their availability and packages.",
    },
    {
      title: "SIREPI",
      description: "Led the end-to-end development of the web application, collaborating with stakeholders to gather requirements and ensuring a responsive and user-friendly interface using Tailwind CSS while implementing backend functionalities with Laravel and MySQL.",
    },
    {
      title: "Portal Adabiah Padang",
      description: "Responsible for identifying and resolving bugs on various pages to enhance user experience and ensure functionality. Implemented new features based on user feedback.",
    },
    {
      title: "PropertyHub",
      description: "Integrated frontend components with backend services to create dynamic views based on real-time database interactions. Developed a comprehensive order management system.",
    },
    {
      title: "Hayati Store",
      description: "Developed a simple shopping system that integrates customers and admins with k-means clustering for data analysis.",
    },
  ];

  const techStacks = [
    { icon: SiReact, name: "React.js", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#1A1A1A" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
    { icon: SiGo, name: "Go", color: "#00ADD8" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiDotnet, name: ".NET C#", color: "#512BD4" },
  ];

  const tabs = ["About me", "Tech Stacks", "Projects"];

  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <div className="h-16" />


      <section className="min-h-screen px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/porto" className="text-xs uppercase tracking-[0.2em] text-gallery-muted hover:text-vermillion transition-colors mb-6 inline-block">
              ← Back to Home
            </Link>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-gallery-dark mb-3">
              The Exhibition
            </h1>
            <div className="section-divider" />
            <p className="text-gallery-muted text-sm uppercase tracking-[0.2em] mt-4">
              Discover who I am and what I build
            </p>
          </motion.div>


          <div className="flex gap-6 md:gap-10 mb-16 border-b border-gallery-border pb-0">
            {tabs.map((tab) => (
              <span
                key={tab}
                className={`tab-item ${selectedTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </span>
            ))}
          </div>


          <div>

            {selectedTab === "About me" && (
              <motion.div
                className="flex flex-col lg:flex-row gap-12 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className="flex-shrink-0">
                  <div className="relative group">
                    <motion.img
                      src={me}
                      alt="Fi Zilalil Huda"
                      className="w-48 h-48 md:w-64 md:h-64 rounded-sm object-cover shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-vermillion/0 group-hover:bg-vermillion/10 transition-colors duration-500 rounded-sm" />
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-vermillion" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-vermillion" />
                  </div>
                </div>


                <div className="flex-1 max-w-2xl">
                  <LineReveal delay={0.1}>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gallery-dark mb-4">
                      Fi Zilalil Huda
                    </h3>
                  </LineReveal>
                  <div className="section-divider" />
                  <LineReveal delay={0.2}>
                    <p className="text-gallery-muted leading-relaxed mt-6 text-base">
                      Hello, my name is Fi Zilalil Huda, but people usually call me
                      Huda, Piji, or Flia (my internet nickname). Since I was a child, I have been interested in
                      computer programming and always wanted to learn more about
                      technology. Besides programming, I also have a passion for
                      music—though my taste leans towards something a bit loud, like
                      metal (lmao).
                    </p>
                  </LineReveal>
                  <LineReveal delay={0.3}>
                    <p className="text-gallery-muted leading-relaxed mt-4 text-base">
                      Currently, I'm focused on web development and
                      continuously learning to sharpen my skills in programming. I
                      also have experience as a videographer and photographer. In the
                      past, I worked as an editor, which has helped me develop a keen
                      eye for detail and creativity in visual storytelling.
                    </p>
                  </LineReveal>

                  <div className="mt-10 flex flex-wrap gap-8">
                    <LineReveal delay={0.4}>
                      <div>
                        <span className="text-xs uppercase tracking-[0.15em] text-gallery-muted font-medium">Location</span>
                        <p className="text-gallery-dark font-medium mt-1">Jakarta, Indonesia</p>
                      </div>
                    </LineReveal>
                    <LineReveal delay={0.5}>
                      <div>
                        <span className="text-xs uppercase tracking-[0.15em] text-gallery-muted font-medium">Focus</span>
                        <p className="text-gallery-dark font-medium mt-1">Backend Developer</p>
                      </div>
                    </LineReveal>
                    <LineReveal delay={0.6}>
                      <div>
                        <span className="text-xs uppercase tracking-[0.15em] text-gallery-muted font-medium">Status</span>
                        <p className="text-vermillion font-medium mt-1">Open to Work</p>
                      </div>
                    </LineReveal>
                  </div>
                </div>
              </motion.div>
            )}


            {selectedTab === "Tech Stacks" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4 mb-10">
                  {techStacks.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="gallery-card rounded-lg p-5 flex flex-col items-center gap-3 cursor-default"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      whileHover={{ y: -4 }}
                    >
                      <tech.icon size={36} style={{ color: tech.color }} />
                      <span className="text-xs font-medium text-gallery-dark uppercase tracking-wider text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <LineReveal delay={0.3}>
                  <div className="gallery-card rounded-lg p-6 max-w-2xl">
                    <p className="text-gallery-muted text-sm leading-relaxed">
                      I have experience with a variety of technologies that I use to
                      build full-stack web applications. While I typically use
                      Express.js as a backend framework, I also enjoy working with
                      frameworks like Laravel, Java Spring Boot, and C# .NET for the backend.
                      Golang also seems fun! For the frontend, I work with ReactJS
                      and Next.js, and for databases, I use MongoDB, MySQL, and
                      PostgreSQL.
                    </p>
                  </div>
                </LineReveal>
              </motion.div>
            )}


            {selectedTab === "Projects" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col lg:flex-row min-h-[60vh]">

                  <div className="flex-1 pr-0 lg:pr-12 mb-8 lg:mb-0">
                    {activeProject !== null ? (
                      <motion.div
                        key={activeProject}
                        initial={{ opacity: 1 }}
                      >
                        <LineReveal delay={0.1}>
                          <span className="text-xs uppercase tracking-[0.2em] text-vermillion font-medium">
                            Project {String(activeProject + 1).padStart(2, '0')}
                          </span>
                        </LineReveal>
                        <LineReveal delay={0.2}>
                          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gallery-dark mt-2 mb-4">
                            {projects[activeProject].title}
                          </h3>
                        </LineReveal>
                        <div className="section-divider" />
                        <LineReveal delay={0.3}>
                          <p className="text-gallery-muted text-base leading-relaxed mt-4">
                            {projects[activeProject].description}
                          </p>
                        </LineReveal>
                        {projects[activeProject].items && (
                          <ul className="mt-6 space-y-3">
                            {projects[activeProject].items.map((item, i) => (
                              <LineReveal key={i} delay={0.4 + i * 0.1}>
                                <li className="text-gallery-muted text-sm leading-relaxed flex gap-3">
                                  <span className="text-vermillion mt-0.5 flex-shrink-0">•</span>
                                  <span>{item}</span>
                                </li>
                              </LineReveal>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ) : (
                      <div className="flex items-center h-full min-h-[300px]">
                        <div>
                          <p className="font-playfair italic text-2xl text-gallery-muted/50">
                            Select a project to view details
                          </p>
                          <div className="section-divider mt-4" />
                        </div>
                      </div>
                    )}
                  </div>


                  <div className="hidden lg:flex items-stretch justify-center px-8">
                    <div className="w-px bg-gallery-border" />
                  </div>


                  <div className="flex-1 pl-0 lg:pl-12">
                    <div className="space-y-4">
                      {projects.map((project, index) => (
                        <LineReveal key={index} delay={0.1 + index * 0.08}>
                          <div
                            className={`cursor-pointer py-4 px-5 rounded-lg transition-all duration-300 group border ${
                              activeProject === index
                                ? "border-vermillion bg-vermillion/5"
                                : "border-transparent hover:border-gallery-border hover:bg-cream-200/50"
                            }`}
                            onClick={() => setActiveProject(index)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <span className={`font-playfair italic text-sm transition-colors ${
                                  activeProject === index ? "text-vermillion" : "text-gallery-muted/40 group-hover:text-gallery-muted"
                                }`}>
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <h4 className={`font-playfair font-bold text-lg transition-colors ${
                                  activeProject === index ? "text-vermillion" : "text-gallery-dark"
                                }`}>
                                  {project.title}
                                </h4>
                              </div>
                              <svg
                                width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke={activeProject === index ? "#C43A31" : "#6B6B6B"}
                                strokeWidth="2"
                                className={`transition-all duration-300 ${
                                  activeProject === index ? "opacity-100 rotate-0" : "opacity-0 group-hover:opacity-50 -rotate-45"
                                }`}
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </LineReveal>
                      ))}


                      <motion.a
                        href="https://github.com/akiyamanico"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 py-4 px-5 rounded-lg border border-dashed border-gallery-border hover:border-vermillion/50 transition-all group mt-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C43A31" strokeWidth="1.5">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <span className="font-playfair font-bold text-gallery-dark group-hover:text-vermillion transition-colors">
                          More on GitHub
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Exhibition;
