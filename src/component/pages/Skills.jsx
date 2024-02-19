import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import StackedWrapper from '../common/StackedWrapper';
import { Transition } from '@headlessui/react';
import { skillList } from '../../util/constants';

const Skills = ({ setCurrentPage }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const skills = skillList.sort((a, b) => a.name.localeCompare(b.name));

    const sectionRef = useRef(null);
    const isOnScreen = useOnScreen(sectionRef);
    const shouldFadeIn = useOnScreen(sectionRef, 0.4);
    const [filteredSkills, setFilteredSkills] = useState(skills);

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
                        className="mt-3 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-7"
                    >
                        {filteredSkills.map(skill => (
                            <li
                                key={skill.name}
                                className="col-span-1 flex rounded-md shadow-md"
                            >
                                <div
                                    className={classNames(
                                        skill.bgColor,
                                        'bg-base-300 bg-opacity-50 flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                                    )}
                                >
                                    <div className="flex flex-1 h-5/6 w-auto justify-center">
                                        {skill.icon}
                                    </div>
                                </div>
                                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                    <div className="flex-1 truncate px-4 py-2 text-sm">
                                        <p className="font-medium text-gray-900">
                                            {skill.name}
                                        </p>
                                        <p className="text-gray-500">
                                            {skill.category}
                                        </p>
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
