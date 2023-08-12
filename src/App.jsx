import './App.css';
import { ContextHeaderFooter } from './context/ContextHeaderFooter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoutePage from './routePage/RoutePage';
import { useLocation } from 'react-router-dom';

function App() {
  const HeaderContext = <p>Header</p>;
  const FooterContext = <p>Footer</p>
  const location = useLocation();
  const isLogin = location.pathname === '/register' || location.pathname === "/dashboard" || location.pathname === "/articlespage" || location.pathname === "/userpanel" || location.pathname === "/login" || location.pathname === '/payment' || location.pathname === "/register/verifyaccount"

  return (
    <>
      <ContextHeaderFooter.Provider value={{ HeaderContext, FooterContext }}>
        {!isLogin && <Header />}
         <RoutePage />
        {!isLogin && <Footer />}
      </ContextHeaderFooter.Provider>
    </>
  )
}

export default App
