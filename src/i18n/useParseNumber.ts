import { Locale } from 'date-fns';
import useLocale from 'i18n/useLocale';
import { i18n } from 'i18next';
import memoizeFormatConstructor from 'intl-format-cache';
import { useEffect, useState } from 'react';
import { isNullable, Nullable } from 'utils/TypeUtils';

const memoizedFormatter = memoizeFormatConstructor(Intl.NumberFormat);

const getParseNumber = (locale: Locale) => (
    value: Nullable<string>,
    options?: Intl.NumberFormatOptions
) => {
    if (isNullable(value)) {
        return NaN;
    }

    const parts: Intl.NumberFormatPart[] = memoizedFormatter(locale.code, options).formatToParts(12345.6);
    const numerals = [...memoizedFormatter(locale.code, { useGrouping: false }).format(9876543210)].reverse();

    const arabicNumbersMap = new Map(numerals.map((digit, idx) => [digit, String(idx)]));

    const findGroups = parts.find(({ type }: Intl.NumberFormatPart) => type === 'group')?.value;
    const findDecimal = parts.find(({ type }: Intl.NumberFormatPart) => type === 'decimal')?.value;

    const group = new RegExp(`[${findGroups}]`, 'g');
    const decimal = new RegExp(`[${findDecimal}]`);
    const numeral = new RegExp(`[${numerals.join('')}]`, 'g');

    const replaceDigit = (digit: string) => arabicNumbersMap.get(digit) ?? '';

    const formattedValue = value.trim()
        .replace(group, '')
        .replace(decimal, '.')
        .replace(numeral, replaceDigit);

    return formattedValue ? Number(formattedValue) : NaN;
};

const useParseNumber = (i18nInstance: i18n) => {
    const locale = useLocale(i18nInstance);
    const [parseNumber, setParseNumber] = useState(() => getParseNumber(locale));

    useEffect(() => {
        setParseNumber(() => getParseNumber(locale));
    }, [locale]);

    return parseNumber;
};

export default useParseNumber;
