// CategorySubMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CategorySubMenuProps {
  submenu: /*DropdownSubMenuItem[]*/  any //.| undefined;
  openMenuCategoriesSubMenuIndex: number | null;
}

const CategorySubMenu: React.FC<CategorySubMenuProps> = ({ submenu, openMenuCategoriesSubMenuIndex }) => {
  return (
    <div className='categoria-submenu'>
      <ul className='categoria-submenu-list'>
        {submenu?.map((subitem, index) => (
          <li
            key={index}
            className={openMenuCategoriesSubMenuIndex === index ? 'active' : ''}
          >
            <Link to={subitem.path}>{subitem.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySubMenu;
