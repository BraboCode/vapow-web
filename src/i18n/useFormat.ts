import { format } from 'date-fns';
import useLocale from 'i18n/useLocale';
import { i18n } from 'i18next';
import { useEffect, useState } from 'react';

type formatType = typeof format;
type formatParams = Parameters<typeof format>;

const getFormat = (locale: Locale) => (...params: formatParams) => {
    const [date, formatString, options] = params;

    return format(date, formatString, {
        locale,
        ...options
    });
};

const useFormat = (i18nInstance: i18n): typeof format => {
    const locale = useLocale(i18nInstance);

    const [dateFormat, setDateFormat] = useState<formatType>(() => getFormat(locale));

    useEffect(() => {
        setDateFormat(() => getFormat(locale));
    }, [locale]);

    return dateFormat;
};

export default useFormat;
