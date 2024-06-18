import React from 'react';

const Footer = () => {
  return (
    <div className=" py-6">
      <div className="container mx-auto px-4 pb-8 flex flex-col items-center">
        <div className="flex flex-wrap gap-8">
          <div className="lg:text-center">
            <p className="text-lg">
              <i className="fa fa-map-marker-alt text-red-500 mr-2"></i>
              Islamabad, Pakistan
            </p>
          </div>
          <div className="lg:text-center">
            <p className="text-lg min-w-max">
              <a href="mailto:haiderahmad352@gmail.com" className="underline underline-offset-4 decoration-wavy decoration-yellow-500">
                <i className="fa fa-at text-neutral-400 mr-2"></i>
                haiderahmad352@gmail.com
              </a>
            </p>
          </div>
          <div className="lg:text-center">
            <p className="text-lg">
              <i className="fa fa-phone text-green-400 mr-2"></i>
              +92-303-7287953
            </p>
          </div>
        </div>
        <div className="mt-6 ">
          <p className="text-xs">
            Made with &lt;/&gt; by Haider Ahmad. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
