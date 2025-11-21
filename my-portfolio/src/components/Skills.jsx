import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "CPP", level: 70 },
    { name: "React.js", level: 70 },
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 60 },
    { name: "MongoDB", level: 60 },
    { name: "Git & GitHub", level: 70 },
  ];

  const education = [
    {
      year: "2020 - 2021",
      title: "High School",
      institution: "SRM Inter College",
      description:
        "Completed high school (10th grade) with Science stream, building a strong foundation in scientific principles and mathematics.",
    },
    {
      year: "2022 - 2023",
      title: "Intermediate",
      institution: "SRM Inter College",
      description:
        "Completed intermediate (12th grade) with PCM, specializing in Physics, Chemistry, and Mathematics.",
    },
    {
      year: "2023 - Present",
      title:
        "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "Lovely Professional University",
      description:
        "Currently pursuing B.Tech in Computer Science and Engineering.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 150);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector("#skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-indigo-500/6 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-indigo-400 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
                Qualification
              </p>
              <p className="text-slate-50 font-bold text-3xl">Education</p>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`border-l-2 border-indigo-500/80 pl-6 relative group transition-all duration-800 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/40 group-hover:scale-125 transition-all duration-300" />
                  <div className="text-indigo-300 text-xs font-semibold mb-1 uppercase tracking-wide">
                    {edu.year}
                  </div>
                  <h3 className="text-slate-50 text-lg font-semibold mb-1 group-hover:text-indigo-400 transition-colors duration-300">
                    {edu.title}
                  </h3>
                  <p className="text-slate-400 mb-1 group-hover:text-slate-200 transition-colors duration-300">
                    {edu.institution}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-indigo-400 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
                Expertise
              </p>
              <p className="font-bold text-slate-50 text-3xl">My Skills</p>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="space-y-2 transition-all duration-800"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-100 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-indigo-400 font-semibold text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full transition-all duration-700 ease-out relative"
                      style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                    >
                      <div className="absolute inset-0 bg-white/10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
