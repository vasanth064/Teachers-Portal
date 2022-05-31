import React, { useContext, useState, useEffect } from 'react';

const UiContext = React.createContext();
export const useUI = () => {
  return useContext(UiContext);
};

const UiProvider = ({ children }) => {
  const backgrounds = [
    'royalBlue',
    'olive',
    'blueviolet',
    'chocolate',
    'crimson',
    'orange',
  ];
  const litebgs = [
    '#99add3',
    '#adad68',
    '#a777d3',
    '#cc9772',
    '#d4778a',
    '#e2b86b',
  ];
  const [themeColor, setThemeColor] = useState(0);

  useEffect(() => {
    if (localStorage.bgID) {
      setThemeColor(parseInt(localStorage.getItem('bgID')));
    }
  }, []);

  const getTheme = () => {
    return {
      themeColor,
      background: backgrounds[themeColor],
      liteBg: litebgs[themeColor],
    };
  };

  const setTheme = () => {
    setThemeColor(backgrounds.length - 1 <= themeColor ? 0 : themeColor + 1);
    localStorage.removeItem('bgID');
    localStorage.setItem(
      'bgID',
      backgrounds.length - 1 <= themeColor ? 0 : themeColor + 1
    );
  };

  const value = { getTheme, setTheme };
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export default UiProvider;
