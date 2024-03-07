import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Construction = () => {
    return (
        <>
            <main className="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-green-600">hi</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
                        Coming "soon"
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                        Area under construction
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/bdhk/"
                            rel="noreferrer"
                            className="rounded-md bg-[#0a66c2] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#004183] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004183]"
                        >
                            LinkedIn
                            <FontAwesomeIcon
                                className="h-5 w-5 ml-1"
                                icon={faLinkedin}
                            />
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Construction;
