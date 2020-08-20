import { Locale } from 'date-fns';
import useLocale from 'i18n/useLocale';
import { i18n } from 'i18next';
import memoizeFormatConstructor from 'intl-format-cache';
import { useEffect, useState } from 'react';
import { isNullable, Nullable } from 'utils/TypeUtils';

const memoizedFormatter = memoizeFormatConstructor(Intl.NumberFormat);

export type FormatNumberFunction = (value: Nullable<number>, options?: Intl.NumberFormatOptions) => string;

const getFormatNumber = (locale: Locale): FormatNumberFunction => (
    value,
    options?
) => {
    if (isNullable(value) || isNaN(value)) {
        return '';
    }

    const numberFormatter = memoizedFormatter(locale.code, options);
    return numberFormatter.format(value);
};

const useFormatNumber = (i18nInstance: i18n) => {
    const locale = useLocale(i18nInstance);
    const [formatNumber, setFormatNumber] = useState(() => getFormatNumber(locale));

    useEffect(() => {
        setFormatNumber(() => getFormatNumber(locale));
    }, [locale]);

    return formatNumber;
};

export default useFormatNumber;
