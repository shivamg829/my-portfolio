import { Award, Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!isNaN(index)) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const experienceItems = document.querySelectorAll(".experience-item");
    experienceItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experience = [
    {
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      period: "Jan 2020 - Present",
      location: "New York, NY",
      description:
        "Developed and maintained the front end of the company's main product using React and Tailwind CSS.",
      achievements: [
        "Led the migration to functional components and hooks, improving maintainability.",
        "Implemented a responsive design system that increased mobile engagement.",
      ],
      skills: ["React", "Tailwind CSS", "JavaScript", "Git"],
    },
    {
      company: "Web Innovators",
      position: "Junior Web Developer",
      period: "Jun 2018 - Dec 2019",
      location: "San Francisco, CA",
      description:
        "Assisted in building client websites and web applications using HTML, CSS, and JavaScript.",
      achievements: [
        "Collaborated on over 15 client projects delivered on time.",
        "Optimized website performance leading to reduced load times.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      company: "Creative Agency",
      position: "Intern Developer",
      period: "Jan 2018 - May 2018",
      location: "Los Angeles, CA",
      description:
        "Supported the development team in creating and testing web UIs.",
      achievements: [
        "Contributed to a marketing website that improved engagement.",
        "Gained practical experience with version control and agile practices.",
      ],
      skills: ["HTML", "CSS", "Basic JavaScript", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-indigo-500/6 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-indigo-400 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Career Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            My Experience
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            A snapshot of roles and responsibilities that shaped my journey as a
            developer.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-[3px] h-full bg-slate-800 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-indigo-500 via-violet-500 to-slate-800" />
            </div>

            {experience.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`experience-item relative flex items-start mb-16 md:mb-20 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } transition-all duration-800 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 -mt-1 bg-slate-950 border-4 border-slate-950 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-md shadow-indigo-500/50" />
                </div>

                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-slate-900/90 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/80 transition-all duration-500 shadow-lg shadow-slate-950/70">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <div className="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                          {exp.company}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-xs md:text-sm text-indigo-300">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-indigo-300 text-sm font-semibold mb-1 uppercase tracking-wide">
                        {exp.position}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-slate-100 mb-2 flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-indigo-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <li
                            key={i}
                            className="text-slate-300 text-sm flex items-start gap-2"
                          >
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-slate-800 text-slate-100 text-xs font-medium px-3 py-1 rounded-full border border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
