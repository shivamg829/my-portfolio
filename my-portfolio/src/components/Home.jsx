import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import homeimg from "../assets/Home.jpeg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-indigo-500/6 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-20 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p
              className={`text-indigo-400 font-semibold text-sm tracking-[0.25em] uppercase ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-3"
              } transition-all duration-700`}
            >
              Get Ready to Start Work
            </p>
            <h1
              className={`text-5xl md:text-7xl font-black text-slate-50 leading-tight ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-3"
              } transition-all duration-700 delay-150`}
            >
              I'm
              <span className="text-indigo-400"> Developer</span>
              <br />
              <span className="text-slate-100">Shivam Gangwar</span>
            </h1>
            <p
              className={`text-slate-300 text-lg leading-relaxed max-w-lg ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-3"
              } transition-all duration-700 delay-300`}
            >
              Transforming ideas into seamless digital solutions. I build fast,
              scalable, and beautiful websites designed to elevate your brand
              and achieve your strategic goals.
            </p>
            <div
              className={`flex flex-wrap gap-4 pt-4 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-3"
              } transition-all duration-700 delay-450`}
            >
              <a
                href="#projects"
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/30 text-sm font-medium"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="border border-slate-600 text-slate-100 px-6 py-2.5 rounded-full hover:text-indigo-400 hover:border-indigo-500 transition-all text-sm font-medium"
              >
                Contact Me
              </a>
            </div>
            <div
              className={`flex gap-4 pt-6 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-3"
              } transition-all duration-700 delay-600`}
            >
              <a
                href="https://github.com/shivamg829"
                className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center hover:border-indigo-500 hover:bg-slate-800 hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam0829/"
                className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center hover:border-indigo-500 hover:bg-slate-800 hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center hover:border-indigo-500 hover:bg-slate-800 hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/shivuliftz/"
                className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center hover:border-indigo-500 hover:bg-slate-800 hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div
            className={`relative ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } transition-all duration-700 delay-300`}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative group rounded-3xl bg-slate-900/80 border border-slate-700/80 overflow-hidden shadow-2xl shadow-indigo-500/20">
                <img
                  src={homeimg}
                  alt="Shivam Gangwar - Developer"
                  className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-500/40 rounded-2xl blur-md" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-violet-500/40 rounded-full blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
