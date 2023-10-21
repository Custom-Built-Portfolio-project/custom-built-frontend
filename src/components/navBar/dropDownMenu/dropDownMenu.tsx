import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './dropDownMenu.css';

interface DropdownSubMenuItem {
  text: string;
  path: string;
}

interface DropdownMenuItem {
  text: string;
  path: string;
  submenu?: DropdownSubMenuItem[];
}

interface DropdownMenuGroup {
  title: string;
  items: DropdownMenuItem[];
}

interface DropdownMenuProps {
  groups: DropdownMenuGroup[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ groups }) => {
  const [isOpen, setIsOpen] = useState(false); // Para abrir el menú de categorías
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null); // Para rastrear si Explora o Todos los productos debe abrirse

  const [categoriaIsOpen, setCategoriaIsOpen] = useState<boolean>(false); // Indica si se debe abrir cada categoría

  const [openMenuCategoriesSubMenuIndex, setOpenMenuCategoriesSubMenuIndex] = useState<number | null>(null);
  const [categoriesMenuSUB , setCategoriesMenuSUB] = useState<number | null> (null) // el index del grupo donde estoy parado 

  // Función para abrir o cerrar el menú principal
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Función para rastrear y abrir el menú de Explora o Todos los productos
  const toggleSubmenu = (groupIndex: number | null) => {
    if (openSubmenu === groupIndex) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(groupIndex);
    }
  };
  
  // Función para abrir el submenú de categorías
  const toggleCategoriaSubMenu = () => {
    setCategoriaIsOpen(true);
  };
  console.log("me estoy abriendo como submenude categorias", categoriaIsOpen)

  // Función para cerrar el submenú de categorías
  const notoggleCategoriaSubMenu = () => {
    setCategoriaIsOpen(false);
  };
  
  // Función para rastrear y abrir el submenú de categorías
  const toggleMenuCategoriesSubMenu = (submenuIndex: number | null) => {
    setOpenMenuCategoriesSubMenuIndex(submenuIndex);
  };
  console.log("estoy rastreando el item en la posicion o index ", (openMenuCategoriesSubMenuIndex))

  // Función para establecer la posición en el grupo de categorías
  const seteoDePosicionEnGroup = (setNumber: number | null) => {
    setCategoriesMenuSUB(setNumber);
  }
  console.log("estoy en la cateogia numero ",categoriesMenuSUB)
  
  return (
    <div className='dropdown-menu'>
      <div className='dropdown-menu-header' onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          beat
          size="lg"
          style={{ cursor: 'pointer' }}
        />
      </div>
      {isOpen && (
        <div className='dropdown-menu-modal'>
          <ul className='dropdown-menu-list'>
            {groups.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <li
                  className='dropdown-menu-divider'
                  onClick={() => toggleSubmenu(groupIndex)}
                >
                  {group.title}
                </li>
                {openSubmenu === groupIndex && (
                  <ul>
                    {group.items.map((item, index) => (
                      <li
                        key={index}
                        onMouseEnter={() => { toggleCategoriaSubMenu(); toggleMenuCategoriesSubMenu(index); seteoDePosicionEnGroup(groupIndex); }}
                        onMouseLeave={() => { notoggleCategoriaSubMenu(); toggleMenuCategoriesSubMenu(null); }}
                      >
                        <Link to={item.path}>
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
      {categoriaIsOpen && (
        <React.Fragment>
          <div className='categoria-submenu'>
            <ul className='categoria-submenu-list'>
              {groups[categoriesMenuSUB].items[openMenuCategoriesSubMenuIndex].submenu?.map((subitem, index) => (
                <li
                  key={index}
                  className={openMenuCategoriesSubMenuIndex === index ? 'active' : ''}
                >
                  <Link to={subitem.path}>{subitem.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default DropdownMenu;
