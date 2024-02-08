// Footer.js
import React from 'react';
import '../stylesheet/Footer.css';
import { SocialIcon } from 'react-social-icons';
import socialLinks from '../data/socialLinks.json';

// Importa el archivo JSON
import footerLinks from '../data/footerLinks.json';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {footerLinks.line1.map((link, index) => (
                    <React.Fragment key={index}>
                        <a href={link.url}>{link.text}</a>
                        {index < footerLinks.line1.length - 1 && ' - '}
                    </React.Fragment>
                ))}
                <br/>
                <br/>
                {footerLinks.line2.map((link, index) => (
                    <React.Fragment key={index}>
                        <a href={link.url}>{link.text}</a>
                        {index < footerLinks.line2.length - 1 && ' - '}
                    </React.Fragment>
                ))}
            </div>
            <div className="social-icons">
                {socialLinks.map((link, index) => (
                    <SocialIcon key={index} style={{ height: 25, width: 25, marginRight: '15px', marginTop:'15px' }} url={link.url} />
                ))}
            </div>
        </footer>
    );
}

export default Footer;

