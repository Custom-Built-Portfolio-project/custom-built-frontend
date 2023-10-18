import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './dropDownMenu.css'

interface DropdownMenuItem {
  text: string;
  path: string;
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown-menu'>
      <div className='dropdown-menu-header' onClick={toggleMenu}>
        <span>Explora</span>
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
        />
      </div>
      {isOpen && (
        <div className='dropdown-menu-modal'>
          <ul className='dropdown-menu-list'>
            {groups.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <li className='dropdown-menu-divider'>{group.title}</li>
                {group.items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.text}</Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
