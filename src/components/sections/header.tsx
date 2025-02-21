import { useEffect, useState } from "react";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

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

    return (
        <header className={`main-header ${isFixed ? "fixed-header" : ""}`}>
            {/* Top Banner */}
            <div className="top-banner">
                <p>
                    The booking fee is <strong>₦10,000 ($8) </strong> and will be applied as a deduction from your program cost upon enrollment.
                </p>
            </div>

            {/* Header Upper */}
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
                        <div className="nav-outer clearfix">
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header mobile-cta">
                                    <div className="mobile-logo">
                                        <a href="/">
                                            <img src="/images/logos/logo.png" alt="Logo" title="Logo" />
                                        </a>
                                    </div>
                                    <ul className="navigation clearfix onepage">
                                        <li>
                                            <a href="/schools">Join a class</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation clearfix onepage">
                                        <li>
                                            <a href="/schools">Join a class</a>
                                        </li>
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
