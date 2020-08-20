import DateFormats, { DateFormatsDictionary } from 'i18n/dateFormats';

const portugueseDateFormats: DateFormatsDictionary = {
    [DateFormats.DayMonth]: 'dd/MM',
    [DateFormats.Date]: 'dd/MM/yyyy',
    [DateFormats.DayShortMonth]: 'dd/MMM',
    [DateFormats.ShortMonth]: 'MMM',
    [DateFormats.LongMonth]: 'MMMM',
    [DateFormats.ShortMonthShortYear]: 'MMM/yy',
    [DateFormats.LongMonthYear]: 'MMMM yyyy',
    [DateFormats.YearMonth]: 'yyyy-MM',
    [DateFormats.YearMonthDay]: 'yyyy-MM-dd',
    [DateFormats.DayLongMonth]: 'dd MMMM'
};

export default portugueseDateFormats;
