import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DaisyUiIcon from '../icons/DaisyUiIcon';
import ReactIcon from '../icons/ReactIcon';
import TailwindIcon from '../icons/TailwindIcon';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

const navigation = {
    main: [
        { name: 'About' },
        { name: 'Experience' },
        { name: 'Skills' },
        { name: 'Contact' },
    ],
    social: [
        {
            name: 'GitHub',
            href: 'https://github.com/briandhkim',
            icon: props => (
                <FontAwesomeIcon
                    {...props}
                    className="h-6 w-6 text-neutral-800 hover:text-neutral-950 dark:text-neutral-100 dark:hover:text-neutral-400"
                    icon={faGithub}
                />
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/bdhk/',
            icon: props => (
                <FontAwesomeIcon
                    {...props}
                    className="h-6 w-6 text-[#0a66c2] hover:text-[#004183]"
                    icon={faLinkedin}
                />
            ),
        },
        {
            name: 'Resume',
            href: '/docs/bdhk_resume.pdf',
            icon: props => (
                <FontAwesomeIcon 
                    {...props}
                    className="h-6 w-6 text-red-500 hover:text-red-700"
                    icon={faFilePdf}
                />
            )
        }
    ],
};

const Footer = ({ navHandler }) => {
    return (
        <footer className="bg-gradient-to-b from-base-200 to-base-100">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav
                    className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                    aria-label="Footer"
                >
                    {navigation.main.map(item => (
                        <div key={item.name} className="pb-6 text-center">
                            <button
                                onClick={() => navHandler(item.name)}
                                className="text-sm leading-6 text-primary hover:text-accent font-semibold"
                            >
                                {item.name}
                            </button>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map(item => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-500 tooltip"
                            data-tip={item.name}
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-10 text-center text-xs leading-5 text-gray-600 dark:text-gray-400">
                    <div className="mb-1">
                        Made with &#8192;
                        <div
                            className="h-6 w-6 inline-flex tooltip"
                            data-tip="React"
                        >
                            {' '}
                            <ReactIcon />{' '}
                        </div>
                        ,&#8192;
                        <div
                            className="h-6 w-6 inline-flex tooltip"
                            data-tip="Tailwind"
                        >
                            {' '}
                            <TailwindIcon />{' '}
                        </div>
                        ,&#8192; &{' '}
                        <div
                            className="h-6 w-6 inline-flex tooltip"
                            data-tip="daisyUI"
                        >
                            {' '}
                            <DaisyUiIcon />{' '}
                        </div>
                    </div>
                    &copy; {new Date().getFullYear()} | Dong Hyun Kim
                </div>
            </div>
        </footer>
    );
};

export default Footer;
