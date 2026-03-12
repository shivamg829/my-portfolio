const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-10 right-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

<div className="container mx-auto px-6 relative z-10">
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-indigo-400 font-semibold text-sm tracking-[0.25em] uppercase mb-3">
      About Me
    </p>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
      I'm a storyteller who codes<span className="text-indigo-400">.</span>
    </h2>
    
    {/* Humanized Content */}
    <div className="space-y-5 text-lg">
      <p className="text-slate-200 leading-relaxed">
        Every line of code I write is driven by a simple belief—technology should feel human. 
        Over the past few years, I've turned this philosophy into reality by crafting full-stack 
        applications that don't just function, but connect.
      </p>
      
      <p className="text-slate-300 leading-relaxed">
        When I'm not deep in the MERN stack or obsessing over responsive designs, you'll find me 
        breaking down complex problems into elegant solutions. I thrive on that sweet spot where 
        clean code meets intuitive user experience—where performance isn't just fast, it's seamless.
      </p>
      
      <p className="text-slate-400 leading-relaxed border-l-4 border-indigo-500/50 pl-4 italic">
        "I don't just build apps; I build digital experiences that people actually enjoy using. 
        Because at the end of the day, the best technology is the one you don't notice—it just works."
      </p>
      
      <div className="pt-4">
        <p className="text-slate-300">
          Based in <span className="text-indigo-400 font-medium">Phagwara</span> • 
          Available for opportunities that make a difference
        </p>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default About;
