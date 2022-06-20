import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/interlock-logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} alt="" className="footer__logo--img" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/books" className="footer__link">Products</Link>
                        <Link to="/cart" className="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2022 Interlock
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
