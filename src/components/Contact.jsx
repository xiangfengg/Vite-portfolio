import React from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
  const userNavigation = [
    { name: 'Github', href: 'https://github.com/xiangfengg', icon: <Icon icon="mdi:github" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yongxiangfeng/', icon: <Icon icon="mdi:linkedin" /> },
    { name: 'Email', href: 'mailto:yongxiangfeng13@gmail.com', icon: <Icon icon="ic:baseline-email" /> },
  ];

  return (
    <div id="contact" className="flex flex-col items-center py-20">
      <h1 className="text-5xl text-gray-950 dark:text-white py-6 mb-4">Let's Create Something Amazing Together</h1>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfINL_0e0rQRS3_5GvtnAL5VyNsj8nNRoP_ThwGzC4nDG8E4A/viewform?embedded=true" width="80%" height="880" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      <h2 className="text-2xl text-gray-950 dark:text-white  mb-4 py-6">Alternatively, you can reach me at yongxiangfeng13@gmail.com or on my other channels</h2>
      <div className="flex gap-6 text-5xl">
        {userNavigation.map((item, index) => (
          <a key={index} href={item.href} className="text-gray-300 hover:text-white">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
