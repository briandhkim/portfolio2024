import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const Contact = ({ setCurrentPage }) => {
    const sectionRef = useRef(null);
    const isOnScreen = useOnScreen(sectionRef);

    useEffect(() => {
        if (isOnScreen) setCurrentPage('Contact');
    }, [isOnScreen]);

    return (
        <section
            id="Contact"
            className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 "
            ref={sectionRef}
        >
            <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Contact sales
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Aute magna irure deserunt veniam aliqua magna enim
                    voluptate.
                </p>
            </div>
            <div className="mx-auto mt-20 max-w-lg space-y-16">
                <div className="flex gap-x-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                        <ChatBubbleLeftRightIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                        />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold leading-7 text-gray-900">
                            Sales support
                        </h3>
                        <p className="mt-2 leading-7 text-gray-600">
                            Ut cursus est ut amet. Lobortis eget egestas leo
                            vitae eget porttitor risus blandit. Nunc a in lorem
                            vel iaculis porttitor.
                        </p>
                        <p className="mt-4">
                            <a
                                href="#"
                                className="text-sm font-semibold leading-6 text-indigo-600"
                            >
                                Contact us{' '}
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
