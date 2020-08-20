enum FormatNumber {
    DecimalDefault = 'DecimalDefault',
    ShortDecimal = 'ShortDecimal',
    LongDecimal = 'LongDecimal',
    MaxPrecision = 'MaxPrecision'
}

const formatNumberOptions = {
    [FormatNumber.DecimalDefault]: {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    },
    [FormatNumber.ShortDecimal]: {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    },
    [FormatNumber.LongDecimal]: {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    },
    [FormatNumber.MaxPrecision]: {
        minimumFractionDigits: 0,
        maximumFractionDigits: 20
    }
};

export default formatNumberOptions;
