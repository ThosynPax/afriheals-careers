import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="copyright-text">
                                <p>2025 © the Pax Company. All Rights Reserved.</p>
                            </div>
                        </div>
                    
                        <div className="col-lg-8">
                            <div className="footer-bottom-menu">
                                <ul>
                                    <li><Link to="/"></Link></li>
                                    <li><Link to="/"></Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer