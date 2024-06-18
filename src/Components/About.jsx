const AboutMe = () => {
  return (
    <div className="w-11/12 mx-auto p-6 mt-6 text-white">
      <section className="mb-12">
        <h2 className="text-5xl font-[teko] text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="relative h-72 min-w-[200px] md:w-1/3 w-full group *:transition-all *:duration-300">
            <img
              src="assets/zoro-v-king.jpg"
              alt="anime"
              className="w-64 object-cover object-center rounded-xl border-[10px] border-gray-200 rotate-6 z-10 absolute top-1/3 right-8 group-hover:w-52 group-hover:translate-y-14"
            />
            <img
              src="assets/fakhar-zaman.png"
              alt="cricket"
              className="w-64 aspect-video object-cover object-top rounded-xl border-[10px] border-gray-200 -rotate-6 absolute bottom-1/3 group-hover:w-52 group-hover:-translate-y-12 group-hover:md:-translate-y-28"
            />
            <img
              src="assets/gargantua.webp"
              alt="astronomy"
              className="w-64 aspect-video object-cover object-top rounded-xl border-[10px] border-gray-200 -rotate-12 absolute top-1/3 right-3 group-hover:w-52 sm:left-1/4 md:left-0 -translate-y-10 group-hover:rotate-6 group-hover:translate-14"
            />

          </div>
          <p className="text-gray-300 text-xl max-w-[80ch] text-pretty">
            Hi there! I'm an enthusiastic web developer with a passion
            for creating dynamic and engaging websites. I love diving into the
            latest technologies and trends to bring innovative ideas to life on
            the web.
            <div className="mt-5">
              When I'm not coding, you can find me enjoying my favorite anime
              series, playing cricket, exploring the wonders of astronomy, or
              solving complex math problems. These interests inspire me to think
              creatively and analytically in my work. Let's build something
              amazing together! 😊
            </div>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
