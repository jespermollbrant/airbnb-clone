const Footer = () => {
    return (
        <footer className="bottom-0 w-full bg-white p-4">
            <div className="container mx-auto text-base text-gray-500 text-center md:text-left flex flex-col gap-2">
                <span>
                    © {new Date().getFullYear()}{" "}
                    <a
                        href="https://coove.studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 hover:text-[1.05em] transition-all"
                    >
                        Coove Studio
                    </a>
                </span>
                <span>
                    Made by Jesper Möllbrant at{" "}
                    <a
                        href="https://coove.studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 hover:text-[1.05em] transition-all"
                    >
                        Coove Studio
                    </a>
                </span>
                <span>
                    Contact us at{" "}
                    <a
                        href="mailto:hello@coove.studio"
                        className="hover:text-gray-900 hover:text-[1.05em] transition-all"
                    >
                        hello@coove.studio
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer; 