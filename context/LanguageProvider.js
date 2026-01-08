"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { createTranslator } from "next-intl";
import { getMessages } from "@/i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("ch");
  const [t, setT] = useState(null);

  useEffect(() => {
    // Load messages for the current locale, then create the translator
    getMessages(locale).then((messages) => {
      // Ensure that messages is a valid object with your translations
      if (!messages) {
        console.error(`No messages found for locale "${locale}"`);
        return;
      }
      const translator = createTranslator({ locale, messages });
      setT(() => translator);
    });
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
