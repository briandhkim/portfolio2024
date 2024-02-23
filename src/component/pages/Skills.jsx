import { Fragment, useEffect, useRef, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnScreen } from '../../hooks/useOnScreen';
import { skillList } from '../../util/constants';
import StackedWrapperWithFade from '../common/StackedWrapperWithFade';

const skillFilters = [
    { name: 'All' },
    { name: 'Development' },
    { name: 'Software & Tools' },
];

const Skills = ({ setCurrentPage }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const skills = skillList.sort((a, b) => a.name.localeCompare(b.name));

    skillFilters[0].count = skills.length;
    skillFilters[1].count = skills.filter(
        skill => skill.category === 'Development'
    ).length;
    skillFilters[2].count = skills.filter(
        skill => skill.category === 'Software & Tools'
    ).length;

    const sectionRef = useRef(null);
    const isOnScreen = useOnScreen(sectionRef);
    const shouldFadeIn = useOnScreen(sectionRef, 0.4);

    const [filteredSkills, setFilteredSkills] = useState(skills);
    const [skillFilter, setSkillFilter] = useState(skillFilters[0]);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        if (isOnScreen) setCurrentPage('Skills');
    }, [isOnScreen]);
    useEffect(() => {
        if (shouldFadeIn && !fadeIn) setFadeIn(true);
    }, [shouldFadeIn]);

    useEffect(() => {
        setFilteredSkills([]);
        if (skillFilter.name === 'All') {
            setFilteredSkills(skills);
        } else {
            setTimeout(() => {
                setFilteredSkills(
                    skills.filter(skill => skill.category === skillFilter.name)
                );
            }, 360);
        }
    }, [skillFilter]);

    return (
        <StackedWrapperWithFade
            sectionTitle="Skills"
            id="Skills"
            headerBg="bg-base-100"
            // bodyBg="bg-gradient-to-b from-base-100 from-10% via-base-100 via-45% to-base-300 to-70%"
            bodyBg="bg-base-300"
            setMinHeightToScreen={false}
            className="pb-28"
            ref={sectionRef}
            fadeIn={fadeIn}
        >
            <div className="bg-base-200 px-6 py-8 rounded-2xl ">
                <h2 className="text-lg font-medium text-gray-500">
                    Some of the languages, frameworks, and tools that I had
                    opportunities to work with
                </h2>

                <RadioGroup
                    value={skillFilter}
                    onChange={setSkillFilter}
                    className="mt-2"
                >
                    <RadioGroup.Label className="sr-only">
                        Skill filter
                    </RadioGroup.Label>
                    <div className="flex">
                        <div className="flex items-center font-normal md:font-medium mr-1 ">
                            Filter:
                        </div>
                        {skillFilters.map((option, idx) => (
                            <Fragment key={idx}>
                                <RadioGroup.Option
                                    key={option.name}
                                    value={option}
                                    className={({ active, checked }) =>
                                        classNames(
                                            active ? '' : '',
                                            checked ? '' : ' ',
                                            'cursor-pointer flex items-center justify-center rounded-md py-3 px-3 text-sm md:text-base font-extrabold uppercase bg-transparent relative'
                                        )
                                    }
                                >
                                    {({ checked }) => (
                                        <RadioGroup.Label
                                            as="span"
                                            className={`${checked && 'text-primary underline decoration-[3px] underline-offset-1 decoration-secondary'} `}
                                        >
                                            {option.name}
                                            <sup>{option.count}</sup>
                                        </RadioGroup.Label>
                                    )}
                                </RadioGroup.Option>
                                {idx < skillFilters.length - 1 && (
                                    <span className="text-sm md:text-base font-extrabold flex items-center">
                                        /
                                    </span>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </RadioGroup>

                <ul
                    role="list"
                    className="mt-3 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-7"
                >
                    <AnimatePresence>
                        {filteredSkills.map(skill => (
                            <motion.li
                                key={skill.name}
                                className="col-span-1 flex rounded-md shadow-md"
                                initial={{ opacity: 0.4, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0.25, scale: 0.7 }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 0.35,
                                }}
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
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
        </StackedWrapperWithFade>
    );
};

export default Skills;
