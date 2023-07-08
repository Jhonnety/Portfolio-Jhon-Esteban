import { useContext } from "react";
import { LanguageContext } from "../contexts";

export const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="footer">
      <h2>© Copyright <b>JhonWebSite</b>. {language === 'es' ? "Todos los derechos reservados" : "All Rights Reserved"}</h2>
      <h4>{language === 'es' ? "Diseñado por " : "Designed by "} <a target="_blank" href='https://www.instagram.com/101esteban/'>Jhon EVG</a></h4>
    </div>
  )
}
