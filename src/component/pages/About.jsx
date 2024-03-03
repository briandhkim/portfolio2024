// import background from '../../assets/images/background.jpg';
import backgroundLight from '../../assets/images/mtn_day1.jpg';
import backgroundDark from '../../assets/images/mtn_night1.jpg';
// import backgroundDark from '../../assets/images/cloud_6.jpg';
import { useOnScreen } from '../../hooks/useOnScreen';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    faHouseChimney,
    faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import StackedWrapperWithFade from '../common/StackedWrapperWithFade';

const About = ({ setCurrentPage, themeData }) => {
    const aboutContent = {
        'Full name': nameDescription(),
        'Current position': 'Full Stack Software Engineer',
        'Current company': bsmLink(),
        Social: socialLinks(),
        Location: locationLink(),
        About: aboutDescription(),
        Resume: resumeLink(),
    };

    const aboutItems = Object.keys(aboutContent).map(label => (
        <div
            key={label}
            className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
        >
            <dt className="text-sm font-semibold leading-6 text-base-content">
                {label}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-base-content sm:col-span-2 sm:mt-0">
                {aboutContent[label]}
            </dd>
        </div>
    ));

    const sectionRef = useRef(null);
    const isOnScreen = useOnScreen(sectionRef);

    useEffect(() => {
        if (isOnScreen) setCurrentPage('About');
    }, [isOnScreen]);

    return (
        <StackedWrapperWithFade
            sectionTitle="About"
            id="About"
            headerBg="bg-base-200"
            bodyBg="bg-gradient-to-b from-base-200 from-10% via-base-200 via-25% to-base-300 to-70%"
            // bodyBg="bg-base-300"
            className="pb-0 sm:pb-4 md:pb-6"
            setMinHeightToScreen={false}
            ref={sectionRef}
        >
            <div className="bg-base-100 rounded-2xl">
                <div className="lg:grid lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-3 lg:h-full xl:col-span-4 ">
                        <img
                            alt=""
                            src={
                                themeData.isDarkMode
                                    ? backgroundDark
                                    : backgroundLight
                            }
                            className={`absolute inset-0 h-full w-full object-cover saturate-[1.25]`}
                        />
                    </aside>
                    <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-9 lg:px-16 lg:py-12 xl:col-span-8">
                        <div className="max-w-xl lg:max-w-3xl">
                            <div className="">
                                <div className="mt-6 border-t border-base-300">
                                    <dl className="divide-y divide-base-300">
                                        {aboutItems}
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StackedWrapperWithFade>
    );
};

export default About;

function nameDescription() {
    return (
        <p>
            Dong Hyun Kim - 동현
            <br />
            (Brian)
        </p>
    );
}

function aboutDescription() {
    return (
        <p>
            Hello there <br />I am currently working as a full-stack software
            engineer for the Engineering Department at BeSmartee in Southern
            California. As a member of the engineering team, I am supporting the
            company's latest endeavor of building out a mortgage POS using{' '}
            <b>React</b>, <b>Next.js</b>, <b>Laravel</b>, and{' '}
            <b>microservice architecture</b>.
        </p>
    );
}

function bsmLink() {
    return (
        <a
            className="link link-accent font-medium "
            target="_blank"
            href="https://www.besmartee.com"
            rel="noreferrer"
        >
            BeSmartee
            <FontAwesomeIcon className="h-5 w-5 ml-1.5" icon={faHouseChimney} />
        </a>
    );
}

function socialLinks() {
    return (
        <>
            <a
                className="link font-medium text-[#0a66c2] hover:text-[#004183]"
                target="_blank"
                href="https://www.linkedin.com/in/bdhk/"
                rel="noreferrer"
            >
                LinkedIn
                <FontAwesomeIcon className="h-5 w-5 ml-1 " icon={faLinkedin} />
            </a>
            ,
            <a
                className="ml-3 link font-medium text-neutral-800 hover:text-neutral-950 dark:text-neutral-100 dark:hover:text-neutral-400"
                target="_blank"
                href="https://github.com/briandhkim"
                rel="noreferrer"
            >
                GitHub
                <FontAwesomeIcon className="h-5 w-5 ml-1" icon={faGithub} />
            </a>
        </>
    );
}

function locationLink() {
    return (
        <a
            className="link link-error font-medium "
            target="_blank"
            href="https://maps.app.goo.gl/HuXK2qSdAmySdZrb9"
            rel="noreferrer"
        >
            Southern California
            <FontAwesomeIcon
                className="h-5 w-5 ml-1.5"
                icon={faMapLocationDot}
            />
        </a>
    );
}

function resumeLink() {
    return (
        <a
            className="link font-medium text-red-500 hover:text-red-700 focus:text-red-700 active:text-red-700"
            target="_blank"
            href="/docs/bdhk_resume.pdf"
            rel="noreferrer"
        >
            Resume
            <FontAwesomeIcon className="h-5 w-5 ml-1.5" icon={faFilePdf} />
        </a>
    );
}
