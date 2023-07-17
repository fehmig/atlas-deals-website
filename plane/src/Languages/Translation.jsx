import React from 'react';
import en from './en.json';
import tr from './tr.json';

const translations = {
  en,
  tr
};

const TranslationContext = React.createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = React.useState('en');

  const setLanguage = (language) => {
    setLang(language);
  };

  const translate = (key) => {
    return translations[lang][key] || key;
  };

  const value = {
    lang,
    setLanguage,
    translate
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return React.useContext(TranslationContext);
};
