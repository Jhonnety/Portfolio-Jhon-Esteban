import { useContext, useEffect, useState } from 'react'
import iconEnglish from '../assets/icons/icon-english.png';
import iconSpanish from '../assets/icons/icon-spanish.png';
import { LanguageContext } from '../contexts';

export const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) setIsNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos === 0;

    setIsNavVisible(isVisible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage: string) => {
    changeLanguage(newLanguage);
  };
  
  return (
    <nav className={`navbar ${isNavVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-brand">
        <img onClick={() => handleLanguageChange("en")} className='imgIdiom' src={iconEnglish} />
        <img onClick={() => handleLanguageChange("es")} className='imgIdiom' src={iconSpanish} />
      </div>
      <button className="navbar-toggle" onClick={toggleNav}>
        <i className="fa-solid fa-bars navbar-toggle-icon"></i>
      </button>
      {language == 'es' && <ul className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <li className="navbar-item green">Inicio</li>
        <li className="navbar-item yellow">Perfil</li>
        <li className="navbar-item blue">Proyectos</li>
        <li className="navbar-item red">Experiencia</li>
        <li className="navbar-item purple">Contacto</li>
      </ul> }
      {language == 'en' && <ul className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <li className="navbar-item green">Start</li>
        <li className="navbar-item yellow">Profile</li>
        <li className="navbar-item blue">Proyects</li>
        <li className="navbar-item red">Experience</li>
        <li className="navbar-item purple">Contact</li>
      </ul> }
    </nav>

  )
}
