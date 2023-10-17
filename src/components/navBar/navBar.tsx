import React from 'react';
import "../navBar/navBar.css"

interface NavBarProps {
    title: string,
    items: string[]
}

const NavBar: React.FC<NavBarProps> = ({ title, items }) => {
    return (
        <nav>
            <div className='navBar'>
                <div className='navBar-title'>{title}</div>
                <ul className='navBar-menu'>
                    {items.map((items, index) => (
                        <li key={index} className='navBar-item'>
                            <a href={`/${items}`} target='_blank'>{items}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;