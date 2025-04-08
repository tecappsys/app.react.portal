// src/pages/Main.tsx
import { useEffect, useState } from 'react';
import { MainRouter } from './main-router';
import { THEME_UI,LOCAL_STORAGE_KEY,Navbar,Sidebar,Toolbar,Spinner,useThemeStore } from '@tecappsys/library-react';
import '@tecappsys/library-styles/scss/styles.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Main = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const URL_SEARCH = '/search/';
  
  useEffect(() => {
    const currentTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI);
    const isDark = currentTheme === THEME_UI.DARK;
    handleChangeTheme(isDark);
  }, []);

  const handleChangeTheme = (dark: boolean) => {
    setIsDarkTheme(dark);
    toggleTheme(dark ? THEME_UI.DARK : THEME_UI.LIGHT);
  };

  const handleSearch = (search: string) => {
    if (typeof search === 'string') {
      navigate(`${URL_SEARCH}${search}`);
    }
  };

  const handleBackView = (url: string) => {
    navigate(url);
  };

  return (
    <>
      <Spinner />

      <Sidebar isDarkTheme={isDarkTheme} />

      <div className="tecappsys-main">
        <div className="main-container">
          <Navbar
            isDarkTheme={isDarkTheme}
            changeTheme={handleChangeTheme}
          />

          <Toolbar onSearch={handleSearch} onBackView={handleBackView} location={location} />

          <section className="main-body">
            <MainRouter />
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;