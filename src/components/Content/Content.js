import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Content.css';
import MainContext from '../../context/mainContext';

const Content = () => {
  const location = useLocation();
  const [filteredData, setFilteredData] = useState([]);
  const { companiesData, isLoading, searchText } = useContext(MainContext);

  useEffect(() => {
    const findWithQuery = () => {
      const pathname = location.pathname;
      const shipmentPathName = pathname.substring(1, pathname.length - 1);
      
      const filtered = companiesData.filter(obj => {
        if(pathname === '/') {
          return (obj.name).replace(/\s/g, '').toLowerCase().includes(searchText);
        } else {
          return (obj.name).replace(/\s/g, '').toLowerCase().includes(shipmentPathName);
        }
      });
      setFilteredData(filtered);
    }
    findWithQuery();
  }, [location, companiesData, searchText]);
  
  return (
    <>
      {!isLoading ?
        !(filteredData.length === 0 && searchText?.length > 0) ?
        (filteredData && filteredData.length > 0 ? filteredData : companiesData)
        .map(obj => (
          <main key={obj?.id} className="content">
            <h2 className="content__title">{obj?.name}</h2>
            <p className="content__email">{obj?.email}</p>
            <h3 className="content__box__title">Cargo boxes</h3>
            <div className="content__box">{obj?.boxes}</div>
            <h2 className="content__required">Number of required cargo bays</h2>
            <h3 className="content__num">{Math.ceil(obj?.boxes.split(',').reduce((a, b) => Number(a) + Number(b), 0) / 10)}</h3>
          </main>
        )) : <div className="content__nodata">No Data</div>
      : <div>Loading...</div>}
    </>
  );
};

export default Content;
