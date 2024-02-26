import { Fragment, useEffect, useRef, useState } from 'react';
import { Disclosure, Menu, RadioGroup, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

export default function NavbarTw({ page, navHandler }) {
    const navigation = [
        { name: 'About', href: '#', current: true },
        { name: 'Experience', href: '#', current: false },
        { name: 'Skills', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
    ];
    const themes = [
        'light',
        'dark',
        'retro',
        'cyberpunk',
        'lofi',
        'wireframe',
        'business',
        'night',
        'dim',
        'nord',
        'sunset',
    ];
    const darkThemes = ['dark', 'business', 'night', 'dim', 'sunset'];

    const [currentPage, setCurrentPage] = useState('About');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('retro');

    const themeDropdown = useRef(null);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    useEffect(() => {
        window.addEventListener('click', e => {
            if (!themeDropdown.current.contains(e.target))
                themeDropdown.current.open = false;
        });
    }, []);

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    useEffect(() => {
        const root = document.getElementById('root');
        if (darkThemes.includes(currentTheme)) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [currentTheme]);

    return (
        <Disclosure
            as="nav"
            className="bg-base-200 bg-opacity-80 shadow top-0 z-10 sticky w-full float-right clear-both "
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <div className="hidden h-8 w-auto lg:block  text-xl font-semibold px-1.5 py-0.5 border border-2 border-base-content text-base-content leading-6 cursor-default">
                                        bdhk
                                    </div>
                                    <div className="block h-8 w-auto lg:hidden  text-xl font-semibold px-1.5 py-0.5 border border-2 border-base-content text-base-content leading-6 cursor-default">
                                        bdhk
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    {navigation.map(item => (
                                        <button
                                            key={item.name}
                                            // href={item.href}
                                            className={`${classNames(
                                                item.name === currentPage
                                                    ? 'border-accent text-accent'
                                                    : 'border-transparent hover:border-accent hover:text-accent text-primary'
                                            )} ${isDarkMode && item.name !== currentPage ? '' : ''} inline-flex items-center border-b-4 px-1 pt-1 text-base font-bold`}
                                            onClick={() =>
                                                navHandler(item.name)
                                            }
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <label className="cursor-pointer grid place-items-center">
                                    <input
                                        type="checkbox"
                                        value="business"
                                        className="toggle theme-controller row-start-1 col-start-1 col-span-2 bg-amber-300 border-blue-300 [--tglbg:theme(colors.blue.400)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)]"
                                        onChange={e =>
                                            setIsDarkMode(e.target.checked)
                                        }
                                    />
                                </label> */}
                                <details
                                    className="dropdown"
                                    ref={themeDropdown}
                                >
                                    <summary
                                        tabIndex={0}
                                        role="button"
                                        className="btn m-1"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPalette}
                                            className="fa-2xl"
                                        />
                                    </summary>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 absolute right-0 z-10 menu"
                                    >
                                        {themes.map((theme, idx) => (
                                            <li key={idx}>
                                                <input
                                                    type="radio"
                                                    name="theme-dropdown"
                                                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                                    aria-label={theme}
                                                    value={theme}
                                                    onChange={e =>
                                                        setCurrentTheme(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pb-4 pt-2">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            {navigation.map(item => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                                    )}
                                    aria-current={
                                        item.current ? 'page' : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
