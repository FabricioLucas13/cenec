import React, { useState } from 'react';
import '../stylesheet/Header.css';
import logo from '../imagenes/logo.png';
import menuItems from '../data/menuItems.json';

// Componente para el Submenu
const SubMenu = ({ submenu }) => {
    return submenu ? (
        <ul className='submenu'>
            {submenu.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem.text}</li>
            ))}
        </ul>
    ) : null;
}

const Header = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo de CENECatu" />
            </div>
            <nav className="navigation">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className='menu-item' onMouseEnter={() => setShowSubMenu(true)} onMouseLeave={() => setShowSubMenu(false)}>
                            {item.text}
                            {showSubMenu && <SubMenu submenu={item.submenu} />}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
