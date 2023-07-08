import { useContext } from 'react'
import { LanguageContext } from '../contexts';

export const useWhatsapp = () => {
    const { language } = useContext(LanguageContext);
    
    const sendWhatsapp = () => {
        const telefono = '3023639019';
        const mensaje = language == 'es' ? "Hola, ¿cómo estás?" : "Hello, ¿How are you?";
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
    return {sendWhatsapp}
}
