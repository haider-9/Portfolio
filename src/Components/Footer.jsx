const Footer = () => {
  return (
    <div className="py-6 mt-12">
      <div className="container mx-auto px-4 pb-8 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="lg:text-center">
            <p className="text-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Islamabad, Pakistan
            </p>
          </div>
          
          <div className="lg:text-center">
            <a 
              href="mailto:haiderahmad352@gmail.com"
              className="text-lg flex items-center gap-2 underline underline-offset-4 decoration-wavy decoration-purple-500 hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              haiderahmad352@gmail.com
            </a>
          </div>
          
          <div className="lg:text-center">
            <p className="text-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +92-303-7287953
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-white/70 font-light">
            Made with &lt; / &gt; by Haider Ahmad @ 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
