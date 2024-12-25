const AboutMe = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 md:p-12 mt-16">
      <section className="relative">
        <h2 className="text-4xl md:text-5xl font-[teko] text-center mb-12 md:mb-16">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="relative h-72 md:h-96 min-w-[250px] md:w-1/3 w-full group perspective-[1000px] cursor-pointer">
            <img
              src="assets/zoro-v-king.jpg"
              alt="anime"
              className="w-64 md:w-72 object-cover object-center rounded-2xl border-4 border-white/10 rotate-6 z-30 absolute top-1/3 right-8 
              transition-all duration-700 
              group-hover:rotate-0 group-hover:scale-110 group-hover:translate-x-12 group-hover:translate-y-8
              group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            />
            <img
              src="assets/fakhar-zaman.png"
              alt="cricket"
              className="w-64 md:w-72 aspect-video object-cover object-top rounded-2xl border-4 border-white/10 -rotate-6 z-20 absolute bottom-1/3 
              transition-all duration-700 
              group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-x-12 group-hover:-translate-y-8
              group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            />
            <img
              src="assets/gargantua.webp"
              alt="astronomy"
              className="w-64 md:w-72 aspect-video object-cover object-top rounded-2xl border-4 border-white/10 -rotate-12 z-10 absolute top-0 right-0 
              transition-all duration-700 
              group-hover:rotate-0 group-hover:scale-110 group-hover:translate-x-2 group-hover:-translate-y-4
              group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            />
          </div>
          <div className="md:w-2/3">
            <div className="space-y-6 md:space-y-8">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                Hi there! I'm an enthusiastic web developer with a passion
                for creating dynamic and engaging websites. I love diving into the
                latest technologies and trends to bring innovative ideas to life on
                the web.
              </p>
              
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                When I'm not coding, you can find me enjoying my favorite anime
                series, playing cricket, exploring the wonders of astronomy, or
                solving complex math problems. These interests inspire me to think
                creatively and analytically in my work. Let's build something
                amazing together! ✨
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;