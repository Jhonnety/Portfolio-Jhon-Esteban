import { useContext } from 'react';
import gifCircule from '../assets/gifs/gif-circule.gif';
import { LanguageContext } from '../contexts';
import { CARREAR, CARRERA, FRASE, NAME, PHASE } from '../utils/Data';

export const Start = () => {

  const { language } = useContext(LanguageContext);

  return (
    <div className='startContainer'>
      {language == 'es' && 
      <div className='fadeInLeft'>
        <h1>{NAME}</h1>
        <h3>{CARRERA}</h3>
        <h3>{FRASE}</h3>
      </div>}
      {language == 'en' && 
      <div className='fadeInLeft'>
        <h1>{NAME}</h1>
        <h3>{CARREAR}</h3>
        <h3>{PHASE}</h3>
      </div>}
      <img src={gifCircule} />
    </div>
  )
}
