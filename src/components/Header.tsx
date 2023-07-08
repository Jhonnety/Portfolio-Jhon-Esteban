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

  const handlPartSelect = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  };

  return (
    <nav className={`navbar  ${isNavVisible ? 'visible' : 'hidden'} ${prevScrollPos > 50 ?'window' : ''}`}>
      <div className="navbar-brand">
        <img onClick={() => handleLanguageChange("en")} className='imgIdiom' src={iconEnglish} />
        <img onClick={() => handleLanguageChange("es")} className='imgIdiom' src={iconSpanish} />
      </div>
      <button className="navbar-toggle" onClick={toggleNav}>
        <i className="fa-solid fa-bars navbar-toggle-icon"></i>
      </button>
      <ul className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <li className="navbar-item yellow" onClick={() => handlPartSelect('start')}>
          {language === "en" ? "Start" : "Inicio"}
        </li>
        <li className="navbar-item green" onClick={() => handlPartSelect('profile')}>
          {language === "en" ? "Profile" : "Perfil"}
        </li>
        <li className="navbar-item blue"  onClick={() => handlPartSelect('projects')}>
          {language === "en" ? "Proyects" : "Proyectos"}
        </li>
        <li className="navbar-item red" onClick={() => handlPartSelect('experience')}>
          {language === "en" ? "Experience" : "Experiencia"}
        </li>
        <li className="navbar-item purple" onClick={() => handlPartSelect('contact')}>
          {language === "en" ? "Contact" : "Contacto"}
        </li>
      </ul>
    </nav>

  )
}
