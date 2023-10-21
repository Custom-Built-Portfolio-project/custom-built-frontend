import React from 'react';
import { Link } from 'react-router-dom';
import '../navBar/navBar.css';

import DropdownMenu from './dropDownMenu/dropDownMenu'; 
import SearchNavBar from './SearchNavBar/SearchNavBar';

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
                                { text: 'Componentes y Almacenamiento', path: '/componentes-almacenamiento', submenu: [ 
                                    { text: 'Componente 1', path: '/componente-1' },
                                    { text: 'Componente 2', path: '/componente-2' } ]
                                },
                                { text: 'Sistemas informáticos', path: '/sistemas',  submenu: [ 
                                    { text: 'Componente 4 ', path: '/componente-1' },
                                    { text: 'Componente 5', path: '/componente-2' } ] 
                                },
                                { text: 'Periféricos de PC', path: '/perifericos',  submenu: [ 
                                    { text: 'Componente 6', path: '/componente-1' },
                                    { text: 'Componente 7', path: '/componente-2' } ]
                                 },
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
            <div><SearchNavBar/></div>
            <Link to='/'>{title}</Link>
            <ul className='navBar-menu'>
                {items.map((item, index) => (
                    <li key={index} className='navBar-item'>
                        <Link to={`/${item.toLowerCase()}`} target='_blank'>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
