import { useEffect, useState } from "react";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowPos = window.scrollY;
            if (windowPos >= 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`main-header ${isFixed ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo">
                                <a href="/">
                                    <img src="/images/logos/logo.png" alt="Logo" title="Logo" />
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button (hamburger) */}
                        <button 
                            className="mobile-menu-toggler" 
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                        </button>

                        <div className="nav-outer clearfix">
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                        <a href="/">
                                            <img src="/images/logos/logo.png" width="350px" alt="Logo" title="Logo" />
                                        </a>
                                    </div>
                                </div>

                                {/* Mobile Menu */}
                                <div className={`mobile-menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
                                    <ul className="navigation clearfix onepage">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/story">Our Story</a></li>
                                         <li><a href="/portfolio">Portfolio</a></li>
                                        {/* Add more menu items as needed */}
                                    </ul>
                                </div>

                                {/* Desktop Menu */}
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation clearfix onepage">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/story">Our Story</a></li>
                                         <li><a href="/portfolio">Portfolio</a></li>
                                        {/* Add more menu items as needed */}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;