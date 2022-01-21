import React from 'react';
import { FaSquare, FaCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="bg-stone-900 min-h-screen w-full text-slate-50">
      <div className="mt-20">
        <div className="px-6 md:px-[10%] bg-[url('./src/assets/bg-about-mobile.svg')] lg:bg-[url('./src/assets/bg-about-desktop.svg')] bg-no-repeat bg-right-bottom md:bg-right w-full">
          <div className="flex flex-col items-center gap-4 lg:w-1/2">
            <h2 className="text-5xl lg:self-start text-orange-500 font-serif mt-10">
              About me
            </h2>
            <p className="text-lg">
              Hi, I'm William Morales, I'm a junior software web developer with
              full remote working experience as part of a worldwide team. I
              studied web development at Microverse using a project-based
              learning methodology.
              <br /> My first software development works were VBA macros for
              daily office usage, I also used MatLab scripts for my
              undergraduate robotics thesis. Thanks to my past professional
              experience, I'm experienced in team leadership, resource
              management, working under pressure, and dealing with tight
              deadlines. My previous working experience helped me to develop a
              problem-solving mindset.
              <br /> Nowadays, I developed more than 20 independant projects
              with the most used Frameworks in the industry.
              <br /> I have a lot of interest in participating in web
              development projects. If you think I could help you, I'd love to
              talk with you and know about your project.
            </p>
          </div>
          <div className="h-56 self-start mt-6">
            <button className="btn-primary">Get My Resume</button>
          </div>
        </div>

        <div className="p-6 md:px-[10%]">
          <hr />
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:px-[10%] justify-center items-center py-16 gap-8">
          <div className="flex md:w-1/6 flex-col items-center md:items-start text-center gap-2">
            <div className="flex items-center gap-2 text-2xl">
              <span className="text-orange-500 rotate-45">
                <FaSquare />
              </span>
              <span>Languages</span>
            </div>
            <ul className="flex flex-col md:items-start gap-1 text-lg">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Ruby</li>
            </ul>
          </div>

          <div className="flex md:w-1/6 md:items-start flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2 text-2xl">
              <span className="text-orange-500 ">
                <FaSquare />
              </span>
              <span>Frameworks</span>
            </div>
            <ul className="flex flex-col gap-1 md:items-start text-lg">
              <li>Bootstrap</li>
              <li>TailwindCSS</li>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Redux</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>

          <div className="flex md:w-1/6 md:items-start flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2 text-2xl">
              <span className="text-orange-500 ">
                <FaCircle />
              </span>
              <span>Skills</span>
            </div>
            <ul className="flex flex-col gap-1 md:items-start text-lg">
              <li>Terminal</li>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitFlow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
