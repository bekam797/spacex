import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = ({open, setOpen} ) => {
  return (
    <div className="navbar" style={{ width: open ? '100%' : '0' }}>
      <h2 className="navbar__title">Shipment List</h2>
      <ul>
        <CustomLink setOpen={setOpen} to="/amazon">Amazon</CustomLink>
        <CustomLink setOpen={setOpen} to="/americanexpress">American Express</CustomLink>
        <CustomLink setOpen={setOpen} to="/airbnb">Airbnb</CustomLink>
        <CustomLink setOpen={setOpen} to="/apple">Apple</CustomLink>
      </ul>
    </div>
  );
};

export default Navbar;