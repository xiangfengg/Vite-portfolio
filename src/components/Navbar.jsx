import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Icon } from '@iconify/react';



const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Tools', href: '#tools', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1rYBPcXhiXKAwvp-eUbSlVyl5bzhSMSbO/view', current: false },


    { name: 'Contact', href: '#contact', current: false },

  ];

  const userNavigation = [
    { name: 'Github', href: 'https://github.com/xiangfengg', icon: <Icon icon="mdi:github" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yongxiangfeng/', icon: <Icon icon="mdi:linkedin" /> },
    { name: 'Email', href: 'mailto:yongxiangfeng47@gmail.com', icon: <Icon icon="ic:baseline-email" /> },

  ];

  return (
    <div className="min-h-full py-5 mb-20">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${item.current ? 'bg-gray-900 text-white' : ''}`}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex flex-row text-white text-2xl">
                    {userNavigation.map((item) => (
                      <a key={item.name} href={item.href} className="block rounded-md px-3 py-3">
                        {item.icon}
                      </a>
                    ))}
                  </div>

                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium ${item.current ? 'text-white' : ''}`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-1 pt-1">
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <a key={item.name} href={item.href} className="block rounded-md px-3 py-3">
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div >
  );
}
export default Navbar