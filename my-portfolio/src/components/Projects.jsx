import { Github, ExternalLink, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import imgairbnb from "../assets/airbnb.png";
import imgdayline from "../assets/DayLine.png";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }

    return () => element && observer.unobserve(element);
  }, []);

  const projects = [
    {
      id: 1,
      title: "DayLiner - Task Management",
      description:
        "A full-stack task management application with user authentication, task creation, and real-time updates.",
      image: imgdayline,
      technologies: ["MERN", "Tailwind CSS"],
      category: "Full Stack",
      liveLink: "https://dayline-task.netlify.app",
      githubLink: "https://github.com/shivamg829/DayLine",
    },
    {
      id: 2,
      title: "Airbnb Clone",
      description:
        "A full-stack vacation rental platform featuring booking functionality, property listings, and user authentication.",
      image: imgairbnb,
      technologies: ["MongoDB", "Express", "EJS", "Node.js", "Tailwind CSS"],
      category: "Full Stack",
      liveLink: "https://airbnb-wt7p.onrender.com",
      githubLink: "https://github.com/shivamg829/airbnb-clone-backend",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-indigo-500/6 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-indigo-400 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            A selection of projects showcasing my skills and experience in
            modern web development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group w-full max-w-[400px] bg-slate-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-700 overflow-hidden border border-slate-800 hover:border-indigo-500/80 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 2) * 80}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-950/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-slate-900 transition-all duration-200 border border-slate-700"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-slate-200" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-indigo-500/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-indigo-400 transition-all duration-200"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/40">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-50 mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div
            className={`w-full max-w-[400px] bg-slate-900/40 rounded-xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center p-8 text-center hover:border-slate-600 transition-colors duration-300 min-h-[400px] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-16 h-16 bg-slate-800/70 rounded-full flex items-center justify-center mb-4">
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
            </div>
            <h3 className="text-xl font-bold text-slate-50 mb-2">
              More Projects Coming
            </h3>
            <p className="text-slate-400 text-sm">
              New MERN stack and frontend projects are in progress and will be
              added soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
