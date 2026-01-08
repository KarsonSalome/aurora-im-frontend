import { createTranslator } from "next-intl";

export const getMessages = async (locale) => {
  return (await import(`@/locales/${locale}.json`)).default;
};

export const useTranslation = async (locale) => {
  const messages = await getMessages(locale);
  if (!messages) {
    throw new Error(`No messages found for locale: ${locale}`);
  }
  return createTranslator({ locale, messages });
};
