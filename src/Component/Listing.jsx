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
  SiDotnet,
} from "react-icons/si";
import { motion } from "framer-motion";

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
      description: "Responsible for identifying and resolving bugs on various pages to enhance user experience and ensure functionality. Implemented new features based on user feedback, contributing to the overall improvement and performance of the content management system.",
    },
    {
      title: "PropertyHub",
      description: "Integrated frontend components with backend services to create dynamic views based on real-time database interactions. Developed a comprehensive order management system that streamlined the ordering process.",
    },
    {
      title: "Hayati Store",
      description: "Developed a simple shopping system that integrates customers and admins. This system allows the admin or owner to perform data grouping using k-means clustering, providing better insights for data analysis.",
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
    { icon: SiDotnet, name: ".NET C#", color: "#06B6D4" },
  ];

  const tabs = ["About me", "Tech Stacks", "Projects"];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-16 bg-cream-100">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gallery-dark mb-2">
            The Exhibition
          </h2>
          <div className="section-divider" />
          <p className="text-gallery-muted text-sm uppercase tracking-[0.2em] mt-3">
            Discover who I am and what I build
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-6 md:gap-10 mb-12 border-b border-gallery-border pb-0">
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

        {/* Tab Content */}
        <div
          className={`transition-opacity duration-300 min-h-[400px] ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* ===== ABOUT ME ===== */}
          {selectedTab === "About me" && (
            <motion.div
              className="flex flex-col lg:flex-row gap-10 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Portrait */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <motion.img
                    src={me}
                    alt="Fi Zilalil Huda"
                    className="w-40 h-40 md:w-52 md:h-52 rounded-sm object-cover shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-vermillion/0 group-hover:bg-vermillion/10 transition-colors duration-500 rounded-sm" />
                  {/* Frame corners */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-vermillion" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-vermillion" />
                </div>
              </div>

              {/* Bio text */}
              <div className="flex-1">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gallery-dark mb-4">
                  Fi Zilalil Huda
                </h3>
                <div className="section-divider" />
                <p className="text-gallery-muted leading-relaxed mt-4 text-sm md:text-base">
                  Hello, my name is Fi Zilalil Huda, but people usually call me
                  Huda, Piji, or Flia (my internet nickname). Since I was a child, I have been interested in
                  computer programming and always wanted to learn more about
                  technology. Besides programming, I also have a passion for
                  music—though my taste leans towards something a bit loud, like
                  metal (lmao).
                </p>
                <p className="text-gallery-muted leading-relaxed mt-4 text-sm md:text-base">
                  Currently, I'm focused on web development and
                  continuously learning to sharpen my skills in programming. I
                  also have experience as a videographer and photographer. In the
                  past, I worked as an editor, which has helped me develop a keen
                  eye for detail and creativity in visual storytelling.
                </p>

                {/* Quick info */}
                <div className="mt-8 flex flex-wrap gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.15em] text-gallery-muted font-medium">Location</span>
                    <p className="text-gallery-dark font-medium mt-1">Jakarta, Indonesia</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.15em] text-gallery-muted font-medium">Focus</span>
                    <p className="text-gallery-dark font-medium mt-1">Backend Developer</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.15em] text-gallery-muted font-medium">Status</span>
                    <p className="text-vermillion font-medium mt-1">Open to Work</p>
                  </div>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-11 gap-4 mb-10">
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
                    <span className="text-xs font-medium text-gallery-dark uppercase tracking-wider">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

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
            </motion.div>
          )}

          {selectedTab === "Projects" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="gallery-card rounded-lg p-6 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-playfair font-bold text-lg text-gallery-dark leading-tight">
                        {project.title}
                      </h4>
                      <span className="text-vermillion text-lg font-playfair italic ml-2 opacity-30 group-hover:opacity-100 transition-opacity">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="section-divider" />
                    <p className="text-gallery-muted text-sm leading-relaxed mt-3">
                      {project.description}
                    </p>
                    {project.items && (
                      <ul className="mt-3 space-y-2">
                        {project.items.map((item, i) => (
                          <li key={i} className="text-gallery-muted text-sm leading-relaxed flex gap-2">
                            <span className="text-vermillion mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}

                {/* GitHub CTA */}
                <motion.a
                  href="https://github.com/akiyamanico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-card rounded-lg p-6 flex flex-col items-center justify-center text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ y: -6 }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C43A31" strokeWidth="1.5" className="mb-3 group-hover:scale-110 transition-transform">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <p className="font-playfair font-bold text-gallery-dark mb-1">
                    More on GitHub
                  </p>
                  <p className="text-xs text-gallery-muted">
                    Explore all my repositories & experiments
                  </p>
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Listing;
