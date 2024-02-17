/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import About from './pages/About';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
];
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-screen">
                <div className=" bg-base-200 pb-32">
                    <header className="py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-white">
                                Dashboard
                            </h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                        {/* Your content */}
                        <About />
                    </div>
                </main>
            </div>
        </>
    );
}
