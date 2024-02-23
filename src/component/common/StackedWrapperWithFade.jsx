import { Transition } from '@headlessui/react';
import { forwardRef } from 'react';

const StackedWrapperWithFade = forwardRef(
    function StackedWrapperWithFade(props, ref) {
        const {
            fadeIn = false,
            unmount = false,
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
                <Transition
                    show={fadeIn}
                    enter="transition-opacity ease-in-out duration-[500ms]"
                    enterFrom="opacity-20"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-in-out duration-[1200ms]"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    unmount={unmount}
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
                </Transition>
            </section>
        );
    }
);

export default StackedWrapperWithFade;
