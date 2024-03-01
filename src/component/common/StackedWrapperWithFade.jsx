import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

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
            <section
                className={`${bodyBg} ${className} ${setMinHeightToScreen && 'min-h-screen'}`}
                id={id}
                ref={ref}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 1.2 }}
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <div className={`${headerBg} pb-32 pt-16`}>
                        <header className="py-10">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <SectionHeading sectionTitle={sectionTitle} />
                            </div>
                        </header>
                    </div>
                    <div className="-mt-32">
                        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                            {/* Your content */}
                            {children}
                        </div>
                    </div>
                </motion.div>
            </section>
        );
    }
);

export default StackedWrapperWithFade;
