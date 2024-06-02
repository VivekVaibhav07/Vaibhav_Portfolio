import React from 'react';

function Navbar() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <div
            onClick={() => handleScroll('home')}
            className="text-[#16f2b3] text-3xl font-bold cursor-pointer"
          >
            VIVEK VAIBHAV
          </div>
        </div>
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100">
          <li>
            <div
              onClick={() => handleScroll('about')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer"
            >
              ABOUT
            </div>
          </li>
          <li>
            <div
              onClick={() => handleScroll('skills')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer"
            >
              SKILLS
            </div>
          </li>
          <li>
            <div
              onClick={() => handleScroll('education')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer"
            >
              EDUCATION
            </div>
          </li>
          <li>
            <div
              onClick={() => handleScroll('projects')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer"
            >
              PROJECTS
            </div>
          </li>
          <li>
            <div
              onClick={() => handleScroll('contact')}
              className="block px-4 py-2 no-underline outline-none hover:no-underline text-sm text-white transition-colors duration-300 hover:text-pink-600 cursor-pointer"
            >
              CONTACT ME
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
