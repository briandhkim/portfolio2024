import { useEffect, useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import { motion } from 'framer-motion';
import StackedWrapperWithFade from '../common/StackedWrapperWithFade';
import RailsIcon from '../icons/RailsIcon';
import RubyIcon from '../icons/RubyIcon';
import VueIcon from '../icons/VueIcon';
import LaravelIcon from '../icons/LaravelIcon';
import JQueryIcon from '../icons/JQueryIcon';
import BootstrapIcon from '../icons/BootstrapIcon';
import TailwindIcon from '../icons/TailwindIcon';
import ReactIcon from '../icons/ReactIcon';
import NextIcon from '../icons/NextIcon';
import MySqlIcon from '../icons/MySqlIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
    faCodeBranch,
    faDesktop,
    faDiagramProject,
    faScrewdriverWrench,
    faSitemap,
} from '@fortawesome/free-solid-svg-icons';

const Experience = ({ setCurrentPage }) => {
    const sectionRef = useRef(null);
    const isOnScreen = useOnScreen(sectionRef, 0.4); //need to set threshold because this is a longer section

    useEffect(() => {
        if (isOnScreen) setCurrentPage('Experience');
    }, [isOnScreen]);

    function timeBetweenNowAndGiven(dateString) {
        //month - january is 0 because it's 0 indexed

        const timeNow = new Date().getTime();
        const timeInitial = new Date(dateString).getTime();
        const timeDiff = timeNow - timeInitial;

        const minutes = 1000 * 60;
        const hours = minutes * 60;
        const days = hours * 24;
        const months = days * 30;
        const years = days * 365;

        const y = Math.floor(timeDiff / years);
        const m = Math.floor(timeDiff / months) - y * 12;

        let timeStr = '';
        if (y) {
            timeStr += y === 1 ? `${y} yr` : `${y} yrs`;
        }
        if (m) {
            timeStr += m === 1 ? ` ${m} mo` : ` ${m} mos`;
        }
        return timeStr;
    }
    const overallTimeDifference = timeBetweenNowAndGiven('July 11, 2018');

    return (
        <StackedWrapperWithFade
            sectionTitle="Experience"
            id="Experience"
            headerBg="bg-base-300"
            bodyBg="bg-gradient-to-b from-base-300 from-10% via-base-300 via-45% to-base-100 to-70%"
            // bodyBg="bg-base-100"
            ref={sectionRef}
        >
            <div className="bg-base-100 px-6 py-8 rounded-2xl">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight md:ml-5 text-zinc-600 dark:text-zinc-400">
                    BeSmartee -{' '}
                    <span className="font-semibold italic text-zinc-800 dark:text-zinc-200">
                        Full Stack Software Engineer
                    </span>
                </h2>
                <h3 className="text-sm sm:text-base font-semibold tracking-tight md:ml-5 text-zinc-600 dark:text-zinc-400">
                    Jul. 2018 - Present{' '}
                    <span className="">({overallTimeDifference})</span>
                </h3>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li className="">
                        <div className="timeline-middle">
                            <FontAwesomeIcon
                                className="h-5 w-5 text-primary"
                                icon={faCodeBranch}
                            />
                        </div>
                        <motion.div
                            className="timeline-start md:text-end mb-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: 'easeInOut', duration: 1.2 }}
                            viewport={{ once: true, amount: 0.35 }}
                        >
                            <time className="font-mono italic">Feb. 2023</time>
                            <div className="text-lg font-black">
                                Engineering Team
                            </div>
                            <ul className="list-[hangul-consonant] text-left ml-6">
                                <li>
                                    Developed new microservice application using{' '}
                                    <b>React</b>, <b>Next.js</b>,{' '}
                                    <b>Tailwind</b>, <b>Laravel</b>, and{' '}
                                    <b>MySQL</b>
                                    <div>
                                        <div className="h-6 w-6 inline-flex">
                                            <ReactIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <NextIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <TailwindIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <LaravelIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <MySqlIcon />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    Built internal tools designed to improve
                                    workflow efficiency across multiple
                                    departments
                                </li>
                                <li>
                                    Identified areas for optimization with the
                                    web application and implemented solutions
                                </li>
                                <li>
                                    Developed web service supporting thousands
                                    of daily users managing mortgage
                                    applications
                                </li>
                                <li>
                                    Oversaw major version releases, identifying
                                    and resolving critical issues prior to the
                                    release and ensuring deployments without
                                    major outage
                                </li>
                                <li>
                                    Collaborated with various departments
                                    including developers, client support, and
                                    implementation to develop various
                                    quality-of-life solutions
                                </li>
                            </ul>
                        </motion.div>
                        <hr />
                    </li>
                    <li className="">
                        <hr />
                        <div className="timeline-middle">
                            <FontAwesomeIcon
                                className="h-5 w-5"
                                icon={faSitemap}
                            />
                        </div>
                        <motion.div
                            className="timeline-end mb-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: 'easeInOut', duration: 1.2 }}
                            viewport={{ once: true, amount: 0.75 }}
                        >
                            <time className="font-mono italic">Jul. 2022</time>
                            <div className="text-lg font-black">
                                Service Team
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    className="text-yellow-500"
                                    icon={faStar}
                                />
                                <b>Achievement:</b> 2022 6th Person of the Year
                            </div>
                            <ul className="list-[hangul-consonant] ml-6">
                                <li>
                                    Participated in planning, designing, and
                                    developing of new <b>microservice</b>{' '}
                                    applications
                                </li>
                                <li>
                                    Rapidly learned to develop with new language
                                    and framework, <b>Ruby on Rails</b>
                                    <div>
                                        <div className="h-6 w-6 inline-flex">
                                            <RubyIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <RailsIcon />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                        <hr />
                    </li>
                    <li className="">
                        <hr />
                        <div className="timeline-middle">
                            <FontAwesomeIcon
                                className="h-5 w-5"
                                icon={faScrewdriverWrench}
                            />
                        </div>
                        <motion.div
                            className="timeline-start md:text-end mb-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: 'easeInOut', duration: 1.2 }}
                            viewport={{ once: true, amount: 0.75 }}
                        >
                            <time className="font-mono italic">Oct. 2020</time>
                            <div className="text-lg font-black">
                                Production Defect Team, <br />
                                <span className="text-base">
                                    Deployment Specialist
                                </span>
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    className="text-yellow-500"
                                    icon={faStar}
                                />
                                <b>Achievement:</b> 2021 All Star Engineering
                            </div>
                            <ul className="list-[hangul-consonant] text-left ml-6">
                                <li>
                                    Evaluated risks and issues to ensure minimal
                                    interruption for the essential business
                                    operational services
                                </li>
                                <li>
                                    Collaborated with members of various
                                    departments to identify common and/or
                                    critical issues, and developed appropriate
                                    solutions
                                </li>
                                <li>
                                    Determined short-term resolutions for
                                    eliminating defects, and designed long-term
                                    improvements for system enhancement
                                </li>
                                <li>
                                    Provided guidance for various departments
                                    throughout the company including
                                    Development, QA, Client Success,
                                    Implementation, and Sales
                                </li>
                            </ul>
                        </motion.div>
                        <hr />
                    </li>
                    <li className="">
                        <hr />
                        <div className="timeline-middle">
                            <FontAwesomeIcon
                                className="h-5 w-5"
                                icon={faDiagramProject}
                            />
                        </div>
                        <motion.div
                            className="timeline-end mb-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: 'easeInOut', duration: 1.2 }}
                            viewport={{ once: true, amount: 0.75 }}
                        >
                            <time className="font-mono italic">Feb. 2019</time>
                            <div className="text-lg font-black">
                                Implementation Team
                            </div>
                            <ul className="list-[hangul-consonant] ml-6">
                                <li>
                                    Upgraded the encryption tool used by the
                                    core application to enforce secure data
                                    storage
                                </li>
                                <li>
                                    Developed a new, single-page application (
                                    <b>SPA</b>) using <b>Vue.js</b>, designed to
                                    create customizable user experience
                                    <div>
                                        <div className="h-6 w-6 inline-flex">
                                            <VueIcon />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    Developed applications with{' '}
                                    <b>PHP Laravel</b> framework, utilizing
                                    test-driven development (<b>TDD</b>)
                                    methodology
                                    <div>
                                        <div className="h-6 w-6 inline-flex">
                                            <LaravelIcon />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    Quickly adapted to developing with various
                                    frameworks/libraries including <b>jQuery</b>
                                    , <b>Vue.js</b>, <b>Bootstrap</b>,{' '}
                                    <b>Tailwind</b>, and <b>Laravel</b>
                                    <div>
                                        <div className="h-6 w-6 inline-flex">
                                            <JQueryIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <VueIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <BootstrapIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <TailwindIcon />
                                        </div>
                                        <div className="h-6 w-6 inline-flex ml-2">
                                            <LaravelIcon />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    Created clean, reusable code for frontend
                                    and backend development
                                </li>
                                <li>
                                    Provided guidance and advice for other
                                    developers on feature development
                                </li>
                            </ul>
                        </motion.div>
                        <hr />
                    </li>
                    <li className="">
                        <hr />
                        <div className="timeline-middle">
                            <FontAwesomeIcon
                                className="h-5 w-5 "
                                icon={faDesktop}
                            />
                        </div>
                        <motion.div
                            className="timeline-start md:text-end mb-10 "
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: 'easeInOut', duration: 1.2 }}
                            viewport={{ once: true, amount: 0.75 }}
                        >
                            <time className="font-mono italic">Jul. 2018</time>
                            <div className="text-lg font-black">UX Team</div>
                            <div>
                                <FontAwesomeIcon
                                    className="text-yellow-500"
                                    icon={faStar}
                                />
                                <b>Achievement:</b> 2018 Rookie of the Year
                            </div>
                            <ul className="list-[hangul-consonant] text-left ml-6">
                                <li className="">
                                    Updated existing and created new UI focused
                                    on <b>web accessibility</b>
                                </li>
                                <li className="">
                                    Developed intuitive, responsive user
                                    interface to create effective and learnable
                                    user experience
                                </li>
                            </ul>
                        </motion.div>
                    </li>
                </ul>
            </div>
        </StackedWrapperWithFade>
    );
};

export default Experience;
