import React from 'react';
import { Link } from 'react-router-dom';
import { useResolvedPath, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <li 
        className="navbar__listitem"
        style={{ 
          background: match ? 'linear-gradient(90deg, rgba(45, 48, 56, 0) 22.92%, #2D3038 100%)' : 'transparent',
          borderRadius: match ? '10px' : 0,
        }}
        onClick={() => props.setOpen(false)}
      >
        <Link
          style={{ color: match ? '#ffffff' : '#979797' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default CustomLink;
