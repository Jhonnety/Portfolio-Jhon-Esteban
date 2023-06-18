import imageProfile from '../assets/images/image-profile.jpg';
import { ABOUT_ME, ADVANCED, AVANZADO, BASIC, BASICO, CARREAR, CARRERA, INTERMEDIATE, INTERMEDIO, PERFIL, PROFILE, SECOND_CARREAR, SEGUNDA_CARRERA, SOBRE_MI, TECHNOLOGIES, TECNOLOGIAS } from '../utils/Data';
import { LanguageContext } from '../contexts';
import { useContext, useEffect, useState } from 'react';
import iconTypescript from '../assets/icons/icon-typescript.png';
import iconSql from '../assets/icons/icon-sql.png';
import iconMongo from '../assets/icons/icon-mongo.png';
import iconC from '../assets/icons/icon-c.png';
import iconNet from '../assets/icons/icon-net.png';
import iconVite from '../assets/icons/icon-vite.png';
import iconGit from '../assets/icons/icon-git.png';
import iconFireBase from '../assets/icons/icon-firebase.png';
import iconPs from '../assets/icons/icon-ps.png';

import { Logo } from './Logo';
import { ImageLogo } from './ImageLogo';


export const Profile = () => {

    const { language } = useContext(LanguageContext);
    const [level, setLevel] = useState({
        advanced: ADVANCED,
        intermediate: INTERMEDIATE,
        basic: BASIC
    })
    useEffect(() => {
        if (language == "en") {
            setLevel({
                advanced: ADVANCED,
                intermediate: INTERMEDIATE,
                basic: BASIC
            })
        }
        else {
            setLevel({
                advanced: AVANZADO,
                intermediate: INTERMEDIO,
                basic: BASICO
            })
        }

    }, [language])



    return (
        <>
            <div className="profileContainer">
                <div className="introductionProfile">
                    <h1>{language === "en" ? PROFILE : PERFIL}</h1>
                    <div className='othersContainer'>
                        <span>{language === "en" ? CARREAR : CARRERA}</span>
                        <div className='haundredPorcent'><h2>100%</h2></div>
                        <span>{language === "en" ? SECOND_CARREAR : SEGUNDA_CARRERA}</span>
                        <div className='fiftyPorcent'><h2>50%</h2></div>
                        <h3>Others</h3>
                        <div>
                            <img src={iconVite} />
                            <img src={iconFireBase} /> 
                            <img src={iconGit} />
                            <img src={iconPs} /> 
                        </div>

                    </div>
                </div>
                <div className="personalInformation">
                    <div className="profileContainer"><div></div></div>
                    <div className="profileImage"><img src={imageProfile} /></div>
                    {(language == 'en' && <h3>{ABOUT_ME}</h3>) ||
                        (language == 'es' && <h3>{SOBRE_MI}</h3>)}
                    <div className='developerExperiencieLinks'>
                        <a target="_blank" href='https://github.com/Jhonnety'><i className="fa-brands fa-github"></i></a>
                        <a target="_blank" href='https://www.linkedin.com/in/jhon-esteban-velasquez-gomez-b9613a27a/'><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="skillContainer">
                    <h1>{language === "en" ? TECHNOLOGIES : TECNOLOGIAS}</h1>
                    <div>
                        <div>
                            <Logo className="fa-html5" level={level.advanced}
                                porcent="90%" classPorcent="ninety" />

                            <Logo className="fa-css3-alt" level={level.advanced}
                                porcent="85%" classPorcent="ninety" />

                            <Logo className="fa-square-js" level={level.intermediate}
                                porcent="70%" classPorcent="seventyFive" />

                            <ImageLogo src={iconTypescript} level={level.intermediate} porcent='70%' />

                            <Logo className="fa-react" level={level.intermediate}
                                porcent="75%" classPorcent="seventyFive" />

                            <Logo className="fa-angular" level={level.intermediate}
                                porcent="70%" classPorcent="seventyFive" />

                        </div>
                        <div>
                            <Logo className="fa-java" level={level.intermediate}
                                porcent="50%" classPorcent="fifty" />

                            <Logo className="fa-python" level={level.intermediate}
                                porcent="50%" classPorcent="fifty" />

                            <Logo className="fa-sass" level={level.intermediate}
                                porcent="75%" classPorcent="seventyFive" />

                            <ImageLogo src={iconSql} level={level.intermediate} porcent='70%' />

                            <ImageLogo src={iconMongo} level={level.basic} porcent='30%' />

                            <Logo className="fa-docker" level={level.basic}
                                porcent="25%" classPorcent="twentyFive" />

                        </div>
                        <div>
                            <ImageLogo src={iconC} level={level.intermediate} porcent='55%' />

                            <ImageLogo src={iconNet} level={level.basic} porcent='40%' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
