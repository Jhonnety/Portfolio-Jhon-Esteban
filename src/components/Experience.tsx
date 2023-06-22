import { useContext} from "react";
import { LanguageContext } from "../contexts";
import { CARREAR, CARRERA, SEGUNDA_CARRERA, SECOND_CARREAR, EXPERIENCES } from "../utils/Data";

export const Experience = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="experienceView">
            <h1 id="experience">{language == 'es' ? "Estudios y experiencias" : "Studies and experiences"}</h1>
            <div className="infoContainer">
                <div className="studiesContainer">
                    <h2 className="title"> {language == 'es' ? "Estudios" : "Studies"}</h2>

                    <div className="studyContainer">
                        <span className="spanTitle">{language === "en" ? CARREAR : CARRERA}</span>
                        <div className="bar" style={{
                            background: `linear-gradient(to right, #f82d97 100%, white 50%)`
                        }}>
                            <h2>100%</h2>
                        </div>
                        <a target="_blank" href="https://www.funlam.edu.co/"><i className="fa-regular fa-school"></i> {language === "en" ? "Luis Amigó university" : "Universidad Luis Amigó"}</a>
                    </div>
                    <div className="studyContainer">
                        <span className="spanTitle">{language === "en" ? SECOND_CARREAR : SEGUNDA_CARRERA}</span>
                        <div className="bar" style={{
                            background: `linear-gradient(to right, #f82d97 50%, white 50%)`
                        }}>
                            <h2>50%</h2>
                        </div>
                        <a target="_blank" href="https://unal.edu.co/"><i className="fa-regular fa-school"></i> {language === "en" ? "National university of Colombia" : "Universidad nacional de colombia"}</a>
                    </div>
                    <div className="studyContainer">
                        <span className="spanTitle">{language === "en" ? "English" : "Inglés"}</span>
                        <div className="bar" style={{
                            background: `linear-gradient(to right, #f82d97 67%, white 50%)`
                        }}>
                            <h2>&nbsp;B2</h2>
                        </div>
                        <a target="_blank" href="https://www.efset.org/cert/qRWq4c"><i className="fa-regular fa-file-certificate"></i> {language === "en" ? "EF-SET Certificade" : "Certificado EF-SET"}</a>
                    </div>
                </div>

                <div className="experienceContainer">
                    <div className="line-container">
                        <div className="circle"><h2>{language == "es" ? '6 Meses' : '6 Mounts'}<small>{language == "es" ? 'Labor social' : 'Labor social'}</small></h2></div>
                        <div className="line"></div>
                        <div className="circle"><h2>{language == "es" ? '6 Meses' : '6 Mounts'}<small>{language == "es" ? 'Practicante' : 'Trainee'}</small></h2></div>
                    </div>
                    <div className="experiencesContainer">
                        <h2 className="title"> {language == 'es' ? "Experiencia" : "Experience"}</h2>
                        {EXPERIENCES.map((experiences): any => {
                            return (<div className="experience" key={experiences.id}>
                                <span><i className="fa-solid fa-building"></i> {experiences.title}</span>
                                <small>{language == 'es' ? experiences.jobEs : experiences.jobEn}</small>
                                <span><i className="fa-solid fa-list-check"></i> {language == 'es' ? 'Tasks carried out:' : 'Labores realizadas:'}</span>
                                <p>{language == 'es' ? experiences.descriptionEs : experiences.descriptionEn}</p>
                                <span><i className="fa-solid fa-address-book"></i> {language == 'es' ? 'Contact:' : 'Contacto:'}</span>
                                <p>{experiences.phone} <i className="fa-regular fa-mobile"></i></p>
                                <p>{experiences.email} <i className="fa-regular fa-envelope"></i></p>
                                <div></div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
