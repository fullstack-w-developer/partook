import './App.css';
import { ContextHeaderFooter } from './context/ContextHeaderFooter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RoutePage from './routePage/RoutePage';

function App() {
  const HeaderContext = <p>Header</p>;
  const FooterContext = <p>Footer</p>
  return (
    <>
      <ContextHeaderFooter.Provider value={{HeaderContext, FooterContext}}>
        <Header />
        <RoutePage />
        <Footer />
      </ContextHeaderFooter.Provider>
    </>
  )
}

export default App
