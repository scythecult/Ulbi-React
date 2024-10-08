import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLanguage, AppLanguageValue, LANG_STORAGE_KEY } from '../../lib';

const getAppLanguage = () => window.localStorage.getItem(LANG_STORAGE_KEY) as AppLanguageValue;
const setAppLanguage = (lang: AppLanguageValue) => window.localStorage.setItem(LANG_STORAGE_KEY, lang);

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<AppLanguageValue>(getAppLanguage());

  const handleLangChange = async () => {
    const newLang = lang === AppLanguage.RU ? AppLanguage.EN : AppLanguage.RU;

    await i18n.changeLanguage(newLang);
    setLang(newLang);
    setAppLanguage(newLang);
  };

  return [lang, handleLangChange] as const;
};
