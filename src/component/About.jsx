import { PaperClipIcon, SunIcon } from '@heroicons/react/24/solid';
import background from '../assets/images/background.jpg';
import StackedWrapper from './common/StackedWrapper';
import { useOnScreen } from '../hooks/useOnScreen';
import { useEffect, useRef } from 'react';

const About = ({ setCurrentPage }) => {
    const aboutContent = {
        'Full name': 'Brian Kim, 동현',
        'Current position': 'Full Stack Software Engineer',
        'Current company': bsmLink(),
        Social: 'LinkedIn, GitHub',
        Location: 'Southern California',
        About: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
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

    function bsmLink() {
        return (
            <a
                className="link link-primary font-medium"
                target="_blank"
                href="https://www.besmartee.com"
                rel="noreferrer"
            >
                BeSmartee
                <SunIcon className="h-5 w-5 ml-1.5 inline " />
            </a>
        );
    }

    const sectionRef = useRef(null);
    const isOnScreen = useOnScreen(sectionRef);

    useEffect(() => {
        if (isOnScreen) setCurrentPage('About');
    }, [isOnScreen]);

    return (
        <StackedWrapper
            sectionTitle="About"
            id="About"
            headerBg="bg-base-200"
            // bodyBg="bg-gradient-to-b from-base-200 from-10% via-base-200 via-25% to-base-300 to-70%"
            bodyBg="bg-base-300"
            ref={sectionRef}
        >
            <div className="bg-base-100 rounded-2xl">
                <div className="lg:grid lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-3 lg:h-full xl:col-span-4">
                        <img
                            alt=""
                            src={background}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>
                    <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-9 lg:px-16 lg:py-12 xl:col-span-8">
                        <div className="max-w-xl lg:max-w-3xl">
                            <div className="">
                                {/* <div className=" px-4 sm:px-0">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                                        About me
                                    </h3>
                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                        Personal details and application.
                                    </p>
                                </div> */}
                                {/* <div className=" pb-6 pt-4 sm:pb-20 ">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="mx-auto max-w-2xl lg:mx-0">
                                            <h2 className=" text-3xl font-semibold tracking-tight sm:text-5xl">
                                                About
                                            </h2>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="mt-6 border-t border-base-300">
                                    <dl className="divide-y divide-base-300">
                                        {aboutItems}
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">
                                                Attachments
                                            </dt>
                                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                <ul
                                                    role="list"
                                                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                                >
                                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                                        <div className="flex w-0 flex-1 items-center">
                                                            <PaperClipIcon
                                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                                <span className="truncate font-medium">
                                                                    resume_back_end_developer.pdf
                                                                </span>
                                                                <span className="flex-shrink-0 text-gray-400">
                                                                    2.4mb
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a
                                                                href="#"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            >
                                                                Download
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                                        <div className="flex w-0 flex-1 items-center">
                                                            <PaperClipIcon
                                                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                                <span className="truncate font-medium">
                                                                    coverletter_back_end_developer.pdf
                                                                </span>
                                                                <span className="flex-shrink-0 text-gray-400">
                                                                    4.5mb
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a
                                                                href="#"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            >
                                                                Download
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StackedWrapper>
    );
};

export default About;
