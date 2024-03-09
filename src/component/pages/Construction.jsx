import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from '../../assets/images/hexa.JPG';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Construction = () => {
    return (
        <>
            <main className="relative isolate min-h-screen flex items-center">
                <img
                    src={background}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
                />
                <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 ">
                    <p className="text-base font-semibold leading-8 text-white">
                        hi
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Coming "soon"
                    </h1>
                    <p className="mt-4 text-base text-white/70 sm:mt-6">
                        Area under construction
                    </p>
                    <div className="mt-10 flex justify-center">
                        <a
                            href="https://www.linkedin.com/in/bdhk/"
                            rel="noreferrer"
                            className="text-sm font-semibold leading-7 text-white "
                        >
                            Linked
                            <FontAwesomeIcon
                                className="ml-[1.5px]"
                                icon={faLinkedin}
                            />
                            <FontAwesomeIcon
                                className="ml-2"
                                icon={faArrowUpRightFromSquare}
                            />
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Construction;
