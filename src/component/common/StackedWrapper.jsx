const StackedWrapper = ({
    children,
    className = '',
    sectionTitle = '',
    id = '',
    headerBg = 'bg-base-200',
    bodyBg = 'bg-base-100',
}) => {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className={`${bodyBg} ${className} min-h-screen`} id={id}>
                <div className={`${headerBg} pb-32 pt-16`}>
                    <header className="py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-primary">
                                {sectionTitle}
                            </h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                        {/* Your content */}
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
};

export default StackedWrapper;
