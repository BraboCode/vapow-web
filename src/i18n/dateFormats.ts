import { ResourceKeys } from 'i18n/i18n';
import { i18n } from 'i18next';
import { useEffect, useState } from 'react';

enum DateFormats {
    DayMonth = 'DayMonth',
    DayShortMonth = 'DayShortMonth',
    Date = 'Date',
    ShortMonth = 'ShortMonth',
    LongMonth = 'LongMonth',
    ShortMonthShortYear = 'ShortMonthShortYear',
    LongMonthYear = 'LongMonthYear',
    YearMonth = 'YearMonth',
    YearMonthDay = 'YearMonthDay',
    DayLongMonth = 'DayLongMonth'
}

export type DateFormatsDictionary = {
    [key in DateFormats]: string;
};

export const useDateFormats = ({getResourceBundle, language}: i18n): DateFormatsDictionary => {
    const initialFormats = getResourceBundle(language, ResourceKeys.dateFormats);
    const [dateFormats, setDateFormats] = useState(initialFormats);

    useEffect(() => {
        const newValue = getResourceBundle(language, ResourceKeys.dateFormats);
        setDateFormats(newValue);
    }, [getResourceBundle, language]);

    return dateFormats;
};

export default DateFormats;
