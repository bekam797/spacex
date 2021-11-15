import React, {useContext, useState} from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

import Logo from '../../assets/Logo.png';
import SearchIcon from '../../assets/search.png';
import { useLocation, useNavigate } from 'react-router';
import MainContext from '../../context/mainContext';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getSearchText } = useContext(MainContext);

  return (
    <div className="header">
      <div className="header__content">
        <img onClick={() => navigate('/')} className="header__logo" src={Logo} alt="SpaceX" />
        <div className={`header__menu ${open && 'open'}`} onClick={() => setOpen(pre => !pre)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {location.pathname === '/' && <div className="header__search__container">
        <img className="header__search__icon" src={SearchIcon} alt="search" />
        <input 
          type="text"
          placeholder="Search"
          className="header__search"
          onChange={(e) => getSearchText(e.target.value)}
        />
      </div>}
      <Navbar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
