import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      type: "Work Experience",
      title: "CV. Mediatama Web Indonesia",
      role: "Fullstack Developer (Intern)",
      period: "June — October 2024",
      description: "Developed and maintained full-stack web applications, collaborating with the team on client projects.",
    },
    {
      type: "Work Experience",
      title: "PT. Skyworx Indonesia",
      role: "Backend Developer",
      period: "October 2024 - Present",
      description: "Backend-Focused Developer with experience building and maintaining enterprise applications using Java Spring Boot, .NET(C#) and PostgreSQL.",
    },
    {
      type: "Organizational",
      title: "Forum Studi Informatika",
      role: "Backend Developer / Consultant",
      period: "May 2018 — September 2023",
      description: "Contributed to student-led software projects and provided technical consultation for backend architecture.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-16 bg-cream-200">
      <div className="max-w-[1400px] mx-auto">

        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gallery-dark mb-2">
            The Journey
          </h2>
          <div className="section-divider" />
          <p className="text-gallery-muted text-sm uppercase tracking-[0.2em] mt-3">
            Professional & organizational experience
          </p>
        </motion.div>


        <div className="relative">

          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gallery-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-12 md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >

                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-vermillion border-2 border-cream-200" />

                <div className="gallery-card rounded-lg p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-vermillion font-medium">
                        {exp.type}
                      </span>
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-gallery-dark mt-1">
                        {exp.title}
                      </h3>
                      <p className="text-gallery-muted text-sm mt-1">{exp.role}</p>
                    </div>
                    <span className="text-xs text-gallery-muted uppercase tracking-wider whitespace-nowrap mt-1 md:mt-2">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gallery-muted text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;