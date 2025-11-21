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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Passionate Full Stack Developer
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            I am a dedicated developer focused on building performant and
            visually appealing web applications. With experience across the
            MERN stack, I enjoy turning complex problems into simple, beautiful
            interfaces.
          </p>
          <p className="text-slate-400 leading-relaxed">
            My goal is to create products that are not only technically solid
            but also delightful to use. I care about clean code, consistent UI,
            and thoughtful user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
