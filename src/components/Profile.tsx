import imageProfile from '../assets/images/image-profile.jpg';
import { ABOUT_ME, ADVANCED, BASIC, INTERMEDIATE, SOBRE_MI } from '../utils/Data';
import { LanguageContext } from '../contexts';
import { useContext } from 'react';
import iconTypescript from '../assets/icons/icon-typescript.png';
import iconSql from '../assets/icons/icon-sql.png';
import iconMongo from '../assets/icons/icon-mongo.png';
import iconC from '../assets/icons/icon-c.png';

export const Profile = () => {

    const { language } = useContext(LanguageContext);



    return (
        <>
            <div className="profileContainer">
                <div className="introductionProfile">
                    {(language == 'en' && <h1>Profile</h1>) ||
                        (language == 'es' && <h1>Perfil</h1>)}
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

                    <div>
                        <i className="fa-brands fa-html5 ninety">
                            <h3>{ADVANCED}</h3>
                            <h2>90%</h2>
                        </i>
                        <i className="fa-brands fa-css3-alt ninety">
                            <h3>{ADVANCED}</h3>
                            <h2>85%</h2>
                        </i>
                        <i className="fa-brands fa-square-js seventyFive">
                            <h3>{INTERMEDIATE}</h3>
                            <h2>70%</h2>
                        </i>
                        <img src={iconTypescript} />
                        <h3>{INTERMEDIATE}</h3>
                        <h2>70%</h2>
                        <i className="fa-brands fa-react seventyFive">
                            <h3>{INTERMEDIATE}</h3>
                            <h2>75%</h2>
                        </i>
                        <i className="fa-brands fa-angular seventyFive">
                            <h3>{INTERMEDIATE}</h3>
                            <h2>70%</h2>
                        </i>
                    </div>
                    <div>
                        <i className="fa-brands fa-java fifty">
                            <h3>{INTERMEDIATE}</h3>
                            <h2>50%</h2>
                        </i>
                        <i className="fa-brands fa-python fifty">
                            <h3>{INTERMEDIATE}</h3>
                            <h2>50%</h2>
                        </i>
                        <i className="fa-brands fa-sass seventyFive">
                            <h3>{INTERMEDIATE}</h3>
                            <h2>75%</h2>
                        </i>
                        <img src={iconSql} />
                        <h3>{INTERMEDIATE}</h3>
                        <h2>70%</h2>
                        <img src={iconMongo} />
                        <h3>{BASIC}</h3>
                        <h2>30%</h2>
                        <i className="fa-brands fa-docker twentyFive">
                            <h3>{BASIC}</h3>
                            <h2>25%</h2>
                        </i>
                    </div>
                    <div>
                        <img src={iconC} />
                        <h3>{INTERMEDIATE}</h3>
                        <h2>55%</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
