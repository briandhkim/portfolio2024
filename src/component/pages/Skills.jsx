import { useEffect, useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import StackedWrapper from '../common/StackedWrapper';
import { Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

const Skills = ({ setCurrentPage }) => {
    const projects = [
        {
            name: 'Graph API',
            initials: 'GA',
            href: '#',
            members: 16,
            bgColor: 'bg-pink-600',
        },
        {
            name: 'Component Design',
            initials: 'CD',
            href: '#',
            members: 12,
            bgColor: 'bg-purple-600',
        },
        {
            name: 'Templates',
            initials: 'T',
            href: '#',
            members: 16,
            bgColor: 'bg-yellow-500',
        },
        {
            name: 'React Components',
            initials: 'RC',
            href: '#',
            members: 8,
            bgColor: 'bg-green-500',
        },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const sectionRef = useRef(null);
    const isOnScreen = useOnScreen(sectionRef);
    const shouldFadeIn = useOnScreen(sectionRef, 0.4);

    useEffect(() => {
        if (isOnScreen) setCurrentPage('Skills');
    }, [isOnScreen]);

    return (
        <StackedWrapper
            sectionTitle="Skills"
            id="Skills"
            headerBg="bg-base-100"
            // bodyBg="bg-gradient-to-b from-base-100 from-10% via-base-100 via-45% to-base-300 to-70%"
            bodyBg="bg-base-300"
            ref={sectionRef}
        >
            <Transition
                show={shouldFadeIn}
                enter="transition-opacity duration-[1200ms]"
                enterFrom="opacity-20"
                enterTo="opacity-100"
                leave="transition-opacity duration-[1500ms]"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="bg-base-200 px-6 py-8 rounded-2xl">
                    <h2 className="text-lg font-medium text-gray-500">
                        Pinned Projects
                    </h2>
                    <ul
                        role="list"
                        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
                    >
                        {projects.map(project => (
                            <li
                                key={project.name}
                                className="col-span-1 flex rounded-md shadow-sm"
                            >
                                <div
                                    className={classNames(
                                        project.bgColor,
                                        'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                                    )}
                                >
                                    {project.initials}
                                </div>
                                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                    <div className="flex-1 truncate px-4 py-2 text-sm">
                                        <a
                                            href={project.href}
                                            className="font-medium text-gray-900 hover:text-gray-600"
                                        >
                                            {project.name}
                                        </a>
                                        <p className="text-gray-500">
                                            {project.members} Members
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 pr-2">
                                        <button
                                            type="button"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <span className="sr-only">
                                                Open options
                                            </span>
                                            <EllipsisVerticalIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Transition>
        </StackedWrapper>
    );
};

export default Skills;
