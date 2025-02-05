import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="copyright-text">
                                <p>Copyright <a href="#">©Afriheals Careers</a>  by Afribreath Ltd. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="footer-bottom-menu">
                                <ul>
                                    <li><Link to="/Courses">Courses</Link></li>
                                    <li><Link to="/Bootcamps">Bootcamps</Link></li>
                                    <li><a href="https://lu.ma/user/usr-42H4h2IZIzSI5xb" target="_blank" rel="noopener noreferrer">Events</a></li>
                                    <li><Link to="/Privacy">Privacy Policy</Link></li>
                                    <li><Link to="/Terms">Terms &amp; conditions</Link></li>
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