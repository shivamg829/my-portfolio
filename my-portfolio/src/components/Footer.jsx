import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-50 py-10 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-2xl font-bold mb-1 group cursor-pointer">
              <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                SHIVAM
              </span>
              <span className="text-slate-100 group-hover:text-indigo-300 transition-colors">
                GANGWAR
              </span>
              <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                .
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Full Stack Developer &amp; UI-focused Engineer
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-indigo-400 fill-indigo-400" />
              <span>by Shivam Gangwar</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-200 hover:scale-110 hover:rotate-12 shadow-md shadow-indigo-500/40"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-slate-500 text-xs text-center">
          © {new Date().getFullYear()} Shivam Gangwar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
