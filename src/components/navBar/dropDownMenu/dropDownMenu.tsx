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
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const [categoriaIsOpen, setCategoriaIsOpen] = useState<boolean>(false);
  const [openMenuCategoriesSubMenu, setOpenMenuCategoriesSubMenu] = useState<number | null>(null);
  const [categoriesMenuSUB , setCategoriesMenuSUB] = useState<number | null> (null)

  const seteoDePosicionEnGroup=(setNumber)=>{
    setCategoriesMenuSUB(setNumber)
  }
  console.log(categoriaIsOpen)
  console.log(openMenuCategoriesSubMenu)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (groupIndex: number | null) => {
    if (openSubmenu === groupIndex) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(groupIndex);
    }
  };

  const toggleCategoriaSubMenu = () => {
    setCategoriaIsOpen(!categoriaIsOpen);
  };

  const toggleMenuCategoriesSubMenu = (submenuIndex: number | null) => {
    setOpenMenuCategoriesSubMenu(submenuIndex);
  };

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
                      <li key={index}
                        onMouseEnter={() => {toggleCategoriaSubMenu(); toggleMenuCategoriesSubMenu(index); seteoDePosicionEnGroup(index)  }} >   {/*aca es cuando estoy parado en el item se cambia el estado setcategoriaIsopen  a true  * */}
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
              {/* Aquí puedes mapear los elementos del submenú de categorías */}
              {groups[categoriesMenuSUB].items[openMenuCategoriesSubMenu].submenu?.map((subitem, index) => (
                <li
                  key={index}

                  className={openMenuCategoriesSubMenu === index ? 'active' : ''}
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
