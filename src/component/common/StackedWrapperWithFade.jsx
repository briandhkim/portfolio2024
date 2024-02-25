import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const StackedWrapperWithFade = forwardRef(
    function StackedWrapperWithFade(props, ref) {
        const {
            children,
            className = '',
            sectionTitle = '',
            id = '',
            headerBg = 'bg-base-200',
            bodyBg = 'bg-base-100',
            setMinHeightToScreen = true,
        } = props;

        return (
            <motion.section
                className={`${bodyBg} ${className} ${setMinHeightToScreen && 'min-h-screen'}`}
                id={id}
                ref={ref}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true, amount: 0.35 }}
            >
                <div className={`${headerBg} pb-32 pt-16`}>
                    <header className="py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight ">
                                {sectionTitle}
                            </h1>
                        </div>
                    </header>
                </div>

                <div className="-mt-32">
                    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                        {/* Your content */}
                        {children}
                    </div>
                </div>
            </motion.section>
        );
    }
);

export default StackedWrapperWithFade;
