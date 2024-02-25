import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnScreen } from '../../hooks/useOnScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = ({ setCurrentPage }) => {
    const sectionRef = useRef(null);
    const isOnScreen = useOnScreen(sectionRef);
    const [showEmail, setShowEmail] = useState(false);
    const [startEmailTransition, setStartEmailTransition] = useState(false);

    useEffect(() => {
        if (isOnScreen) setCurrentPage('Contact');
    }, [isOnScreen]);

    return (
        <section
            id="Contact"
            className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-b from-base-300 to-base-200"
            ref={sectionRef}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1.2 }}
                viewport={{ once: true, amount: 0.35 }}
            >
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Contact
                    </h1>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Let's make things happen
                    </p>
                </div>
                <div className="mx-auto mt-20 max-w-lg space-y-16">
                    <div className="flex gap-x-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500">
                            <FontAwesomeIcon
                                className="h-6 w-6 text-white"
                                icon={faEnvelope}
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold leading-7 text-gray-900">
                                Email
                            </h3>
                            <AnimatePresence initial={false} mode="wait">
                                {!showEmail && (
                                    <motion.p
                                        className="mt-2 leading-7 text-accent bg-accent cursor-pointer tooltip"
                                        data-tip="Show email"
                                        onClick={() => setShowEmail(true)}
                                        exit={{ rotateX: 90, scale: 0.85 }}
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.25,
                                        }}
                                        onAnimationComplete={() => {
                                            setStartEmailTransition(true);
                                        }}
                                    >
                                        &#8192; Show email
                                        &#8192;&#8192;&#8192;&#8192;&#8192;&#8192;&#8192;&#8192;&#8192;&#8192;&#8192;
                                    </motion.p>
                                )}
                                {showEmail && startEmailTransition && (
                                    <motion.p
                                        className="mt-2 select-all"
                                        initial={{ rotateX: 180, scale: 0.85 }}
                                        animate={{ rotateX: 0, scale: 1 }}
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.25,
                                        }}
                                    >
                                        briandhkim93@gmail.com
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex gap-x-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0a66c2]">
                            <FontAwesomeIcon
                                className="h-6 w-6 text-white"
                                icon={faLinkedin}
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold leading-7 text-gray-900">
                                LinkedIn
                            </h3>
                            {/* <p className="mt-2 leading-7 text-gray-600">
                            Message me on LinkedIn
                        </p> */}
                            <p className="mt-4">
                                <a
                                    href="https://www.linkedin.com/in/bdhk/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link text-sm font-semibold leading-6 text-[#0a66c2] hover:text-[#004183] "
                                >
                                    Message me on LinkedIn{' '}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
