import { Locale } from 'date-fns';
import { pt } from 'date-fns/locale';
import { LanguageKeys } from 'i18n/i18n';
import { i18n } from 'i18next';
import { useEffect, useState } from 'react';

const locales: {
    [key in LanguageKeys]: Locale;
} = {
    [LanguageKeys.portuguese]: pt
};

const getLanguageKey = (language: string): LanguageKeys => {
    const languageKey = Object.values(LanguageKeys).find((value) => value === language);

    return languageKey || LanguageKeys.portuguese;
};

const useLocale = ({language}: i18n) => {
    const languageKey = getLanguageKey(language);
    const initialLocale = locales[languageKey];
    const [locale, setLocale] = useState(initialLocale);

    useEffect(() => {
        const newLocale = locales[languageKey];
        setLocale(newLocale);

    }, [language, languageKey]);

    return locale;
};

export default useLocale;
