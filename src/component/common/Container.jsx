// Narrow constrained with padded content - TailwindUI
const Container = ({ className = '', children }) => {
    return (
        <div
            className={`${className} min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8`}
        >
            <div className="max-w-3xl mx-auto">{children}</div>
        </div>
    );
};

export default Container;
