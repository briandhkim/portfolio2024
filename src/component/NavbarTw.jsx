import { useEffect, useRef, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { themes, darkThemes } from '../util/constants';

export default function NavbarTw({
    page,
    navHandler,
    themeData,
    setThemeData,
}) {
    const navigation = [
        { name: 'About', href: '#', current: true },
        { name: 'Experience', href: '#', current: false },
        { name: 'Skills', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
    ];

    const [currentPage, setCurrentPage] = useState('About');

    const themeDropdown = useRef(null);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    function themeChange(theme) {
        if (theme === 'random') theme = getRandomTheme();

        const root = document.getElementById('root');
        if (darkThemes.includes(theme)) {
            root.classList.add('dark');
            setThemeData({
                isDarkMode: true,
                currentTheme: theme,
            });
        } else {
            root.classList.remove('dark');
            setThemeData({
                isDarkMode: false,
                currentTheme: theme,
            });
        }
    }

    function getRandomTheme() {
        //length -1 to hopefully exclude the random option
        const idx = Math.floor(Math.random() * (themes.length - 1));
        const theme = themes[idx];

        return theme === themeData.currentTheme ? getRandomTheme() : theme;
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

    return (
        <Disclosure
            as="nav"
            className="bg-base-200 bg-opacity-95 sm:bg-opacity-85 shadow top-0 z-10 sticky w-full float-right clear-both "
        >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-accent hover:bg-primary hover:text-primary-content focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
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
                                    {navigation.map(item => (
                                        <button
                                            key={item.name}
                                            // href={item.href}
                                            className={`${classNames(
                                                item.name === currentPage
                                                    ? 'border-accent text-accent'
                                                    : 'border-transparent hover:border-accent hover:text-accent text-primary'
                                            )} ${themeData.isDarkMode && item.name !== currentPage ? '' : ''} inline-flex items-center border-b-4 px-1 pt-1 text-base font-bold`}
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
                                <details
                                    className="dropdown"
                                    ref={themeDropdown}
                                >
                                    <summary
                                        tabIndex={0}
                                        role="button"
                                        className=" btn px-1 m-1 text-primary hover:text-primary-content hover:bg-gradient-to-b from-primary via-secondary to-accent text-xl"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPalette}
                                            className="fa-2xl "
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
                                                    checked={
                                                        themeData.currentTheme ===
                                                        theme
                                                    }
                                                    onChange={e =>
                                                        themeChange(
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
                                    as="button"
                                    className={classNames(
                                        item.name === currentPage
                                            ? 'bg-base-100 dark:bg-gray-700 border-accent text-accent'
                                            : 'border-transparent hover:border-accent text-primary hover:bg-base-100 hover:dark:bg-gray-700 hover:border-accent hover:text-accent',
                                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium w-full text-left'
                                    )}
                                    aria-current={
                                        item.current ? 'page' : undefined
                                    }
                                    onClick={() => navHandler(item.name)}
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
