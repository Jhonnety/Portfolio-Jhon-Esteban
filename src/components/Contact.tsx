import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../contexts";
import { useForm } from "../hooks/useForm";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { useWhatsapp } from "../hooks/useWhatsapp";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const { language } = useContext(LanguageContext);
    const { name, email, subject, message, onInputChange, onResetForm } = useForm({ name: "", email: "", subject: "", message: "" })
    const [errors, setErrors] = useState({ emailError: '', nameError: '' });
    const { emailError, nameError } = errors;
    const [first, setfirst] = useState(false)
    const [review, setReview] = useState(true)
    const [loading, setLoading] = useState(false)
    const { sendWhatsapp } = useWhatsapp();
    useEffect(() => {
        if (first) {
            var nameP = '';
            var emailP = '';

            if (!name) {
                nameP = language === 'es' ? "El nombre es requerido" : "Name is required";
            }
            if (!email) {
                emailP = language === 'es' ? "El correo es requerido" : "Email is required";

            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    emailP = language === 'es' ? "Correo no valido" : "Email is not valid";
                }
            }
            setErrors({
                emailError: emailP,
                nameError: nameP
            })

        } else {
            setfirst(true)
        }

    }, [name, email, review])

    useEffect(() => {
        if (errors.emailError || errors.nameError) {
            setReview(!review)
        }


    }, [language])



    const onSubmit = (e: any) => {
        e.preventDefault();
        if ((!nameError && !emailError) && (name != '' && email != '')) {
            setLoading(true);
            const serviceID = 'default_service';
            const templateID = 'template_1zsnlav';

            if (formRef.current) {
                emailjs.init('uBQ1_40vtVfLTwuKV');
                emailjs.sendForm(serviceID, templateID, formRef.current)
                    .then(() => {
                        onResetForm()
                        setLoading(false);
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: language == 'es' ? "Correo enviado correctamente!" : "The email was sent successfully",
                            showConfirmButton: false,
                            timer: 4000
                        })
                    })
                    .catch((err) => {
                        alert(JSON.stringify(err));
                    });
            }
        }
        else {
            setReview(!review)
            Swal.fire(
                'opps',
                language == 'es' ? "Revisa los campos" : "Check the fields",
                'error'
            )
        }
    }


    return (
        <form ref={formRef} id="form" onSubmit={onSubmit} className="form">
            <h1 id="contact">{language == 'es' ? "Contacto" : "Contact"}</h1>
            <div className="formContainer">
                <div className="messageContainer">
                    <textarea
                        placeholder={language == 'es' ? "Mensaje" : "Message"}
                        className="message"
                        name="message"
                        id="message"
                        value={message}
                        onChange={onInputChange}
                    />
                </div>
                <div className="subjectContainer">
                    <div className="inputContainer">
                        <span>{language == 'es' ? "Nombre" : "Name"}</span>
                        <input
                            placeholder={language == 'es' ? "Nombre (requerido)" : "Name (required)"}
                            name="name"
                            id="name"
                            value={name}
                            onChange={onInputChange}
                            type="text"
                        />
                        <small>{nameError}</small>
                    </div>
                    <div className="inputContainer">
                        <span>{language == 'es' ? "Correo" : "Email"}</span>
                        <input
                            placeholder={language == 'es' ? "Correo (requerido)" : "Email (required)"}
                            name="email"
                            id="email"
                            value={email}
                            onChange={onInputChange}
                            type="email"
                        />
                        <small>{emailError}</small>
                    </div>
                    <div className="inputContainer">
                        <span>{language == 'es' ? "Asunto" : "Subject"}</span>
                        <input
                            placeholder={language == 'es' ? "Asunto" : "Subject"}
                            name="subject"
                            id="subject"
                            value={subject}
                            onChange={onInputChange}
                            type="text"
                        />
                    </div>
                    <div className="buttonsContainer">
                        {loading
                            ? <div className="sk-chase">
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                            </div>

                            : <button className="sendForm" type="submit">{language == 'es' ? "Enviar" : "Send"}</button>
                        }

                        <button className="whatsapp" type="button" onClick={sendWhatsapp}>Whatsapp</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Contact;
