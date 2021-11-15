import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MainContext = React.createContext();

export default MainContext;

export const MainProvider = ({children}) => {
  const [companiesData, setCompaniesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await axios.get('./shipments.json');
      setCompaniesData(res.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const getSearchText = (payload) => {
    setSearchText(payload);
  }

  const state = {
    companiesData,
    isLoading,
    searchText,
    getSearchText,
  };
  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
};
