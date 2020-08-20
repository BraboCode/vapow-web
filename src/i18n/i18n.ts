import portugueseDateFormats from 'i18n/portugueseDateFormats';
import portugueseTranslation, { TranslationKeys } from 'i18n/portugueseTranslation';
import i18n, { StringMap, TFunctionKeys, TFunctionResult, TOptions } from 'i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { initReactI18next, useTranslation, UseTranslationResponse } from 'react-i18next';

enum LanguageKeys {
    portuguese = 'pt'
}

enum ResourceKeys {
    translation = 'translation',
    dateFormats = 'dateFormats'
};

i18n
    .use(initReactI18next)
    .use(intervalPlural)
    .init({
        resources: {
            pt: {
                [ResourceKeys.translation]: portugueseTranslation,
                [ResourceKeys.dateFormats]: portugueseDateFormats
            }
        },
        lng: LanguageKeys.portuguese,
        fallbackLng: LanguageKeys.portuguese,
        interpolation: {
            escapeValue: false
        },
        keySeparator: false
    });

export type TypedTFunction = <
    TResult extends TFunctionResult = string,
    TKeys extends TFunctionKeys = string,
    TInterpolationMap extends object = StringMap
>(translationKey: TranslationKeys | TranslationKeys[], options?: TOptions) => TResult;
type UseTypedTranslationResponse = Omit<UseTranslationResponse, 't' | '0'> &
    [TypedTFunction, UseTranslationResponse[1], UseTranslationResponse[2]] &
{ t: TypedTFunction };
type UseTypedTranslationType = (...params: Parameters<typeof useTranslation>) => UseTypedTranslationResponse;
const useTypedTranslation: UseTypedTranslationType = useTranslation;

export { useTypedTranslation, LanguageKeys, ResourceKeys };
export default i18n;
