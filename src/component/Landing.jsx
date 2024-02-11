import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';

const Landing = ({ unlocked, setUnlocked }) => {
    return (
        <div className=" min-h-screen bg-base-200 flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="">
                <div className="mockup-code w-80">
                    <pre className="text-success">
                        <code>brian@bdhk</code>
                    </pre>
                    <pre data-prefix="$" className="">
                        <code>hi</code>
                    </pre>
                </div>
                <div className="text-center mt-4">
                    <button
                        className={`text-primary swap swap-rotate ${!unlocked && 'swap-active'}`}
                        onClick={() => setUnlocked(!unlocked)}
                    >
                        <LockClosedIcon
                            className={`h-10 w-10 swap-on ${!unlocked && 'animate-pulse'}`}
                        />
                        <LockOpenIcon className="h-10 w-10 swap-off" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
