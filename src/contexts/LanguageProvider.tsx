import React, { createContext, useState } from 'react';

interface LanguageContextProps {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
}:any) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
