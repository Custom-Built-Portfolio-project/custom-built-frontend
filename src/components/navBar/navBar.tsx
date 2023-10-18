import React from 'react';
import { Link } from 'react-router-dom';
import '../navBar/navBar.css';

import DropdownMenu from './dropDownMenu/dropDownMenu'; // Asegúrate de que la ruta del import sea correcta


interface NavBarProps {
    title: string;
    items: string[];
}

const NavBar: React.FC<NavBarProps> = ({ title, items }) => {
    return (
        <nav className='navBar'>
            <div className='navBar-title'>
                <DropdownMenu
                    groups={[
                        {
                            title: 'Explora',
                            items: [
                                { text: 'Las mejores ofertas del día', path: '/ofertas' },
                                { text: 'Construya su Propia PC personalizada', path: '/pc-personalizada' },
                                { text: 'Ideas de regalo', path: '/regalos' },
                                { text: 'Los más vendidos', path: '/mas-vendidos' },
                                { text: 'Juegos para PC', path: '/juegos-pc' },
                            ],
                        },
                        {
                            title: 'Todos los Productos',
                            items: [
                                { text: 'Componentes de Almacenamiento', path: '/almacenamiento' },
                                { text: 'Sistemas informáticos', path: '/sistemas' },
                                { text: 'Periféricos de PC', path: '/perifericos' },
                                { text: 'Servidores y Redes', path: '/redes' },
                                { text: 'Soluciones de Oficina', path: '/oficina' },
                                { text: 'Juegos de PC y Realidad Virtual', path: '/juegos-virtual' },
                                { text: 'Software y Servicios', path: '/software' },
                                { text: 'Drones', path: '/drones' },
                            ],
                        },
                    ]}
                />

            </div>
            <Link to='/'>{title}</Link>
            <ul className='navBar-menu'>
                {items.map((item, index) => (
                    <li key={index} className='navBar-item'>
                        <Link to={`/${item}`} target='_blank'>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
