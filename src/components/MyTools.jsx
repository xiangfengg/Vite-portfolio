import React from 'react';
import { Icon } from '@iconify/react';

const MyTools = () => {
  const icons = [
    <Icon icon="devicon:react" />,
    <Icon icon="vscode-icons:file-type-mongo" />,
    <Icon icon="simple-icons:express" />,
    <Icon icon="devicon:nodejs" />,
    <Icon icon="skill-icons:javascript" />,
    <Icon icon="vscode-icons:file-type-html" />,
    <Icon icon="vscode-icons:file-type-css" />,
    <Icon icon="logos:tableau" />,
    <Icon icon="logos:python" />

  ];


  return (
    <section id="#tools">
      < div className="mx-auto px-6 py-20 max-w-6xl text-gray-500" >
        <div className="text-center">
          <h2 className="text-3xl text-gray-950  dark:text-white font-semibold">Tools in my Arsenal</h2>
          <p className="mt-6 text-2xl text-gray-700 dark:text-gray-300">Some Tools I've Acquired on My Learning Journey</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {icons.map((icon, index) => (
            <div key={index} className="w-24 h-24 m-1 relative overflow-hidden rounded-full bg-dark border border-gray-200 dark:border-gray-800 dark:bg-gray-900 flex items-center justify-center text-6xl">
              {icon}
            </div>
          ))}

        </div>
      </div>
    </section >
  );
};

export default MyTools;
