import React from 'react';
import { Icon } from '@iconify/react';
import { FaGithub } from 'react-icons/fa';
import project1Image from '../assets/movie.jpg';



const Project = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Ecommerce Website',
      sourceCodeLink: 'https://github.com/xiangfengg/Your-E-commence-Store',
      RenderLink: 'https://your-e-commence-store.onrender.com/',
      image: project1Image,
      github: <FaGithub />,
      icons: [
        <Icon icon="devicon:react" />,
        <Icon icon="vscode-icons:file-type-mongo" />,
        <Icon icon="simple-icons:express" />,
        <Icon icon="devicon:nodejs" />,
        <Icon icon="skill-icons:javascript" />
      ],
    },
    {
      id: 2,
      name: 'Portfolio',
      description: 'Portfolio',
      sourceCodeLink: 'https://github.com/xiangfengg/Vite-portfolio',
      RenderLink: 'https://vite-portfolio-sage-alpha.vercel.app/',
      github: <FaGithub />,
      icons: [
        <Icon icon="logos:vitejs" />,
        <Icon icon="devicon:react" />,
        <Icon icon="devicon:tailwindcss" />,
        <Icon icon="skill-icons:javascript" />
      ]
    },
    {
      id: 3,
      name: 'Battleship',
      description: 'Battleship',
      sourceCodeLink: 'https://github.com/xiangfengg/battleship',
      RenderLink: 'https://xiangfengg.github.io/battleship/',
      github: <FaGithub />,
      icons: [
        <Icon icon="vscode-icons:file-type-html" />,
        <Icon icon="skill-icons:javascript" />,

      ]
    }
  ];

  return (
    <section id="projects">
      <div className="mx-auto px-6 py-20 max-w-6xl text-gray-500">
        <div className="text-center">
          <h2 className="text-3xl text-gray-950 dark:text-white font-semibold"> Key Projects</h2>
          <p className="mt-6 text-2xl text-gray-700 dark:text-gray-300">Constantly seeking new and creative tech applications </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <a key={project.id} href={project.RenderLink} className="group" target="_blank" rel="noopener noreferrer">
              <div className="relative overflow-hidden p-8 rounded-xl bg-dark border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                <div className="relative">
                  <div className="flex">
                    {project.icons.map((icon, index) => (
                      <div key={index} className="flex items-center justify-center w-8 h-8 border border-gray-300 dark:border-gray-700 rounded-md mr-2">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <p className="text-gray-700 dark:text-gray-300 ml-2">{project.description}</p>
                  </div>
                  <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                    <a href={project.sourceCodeLink} className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                      <div className="flex">
                        <a href={project.sourceCodeLink}>{project.github}</a>
                      </div>
                      <span className="sr-only">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Project;
