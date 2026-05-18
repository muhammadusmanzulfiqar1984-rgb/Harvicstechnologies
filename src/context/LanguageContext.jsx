import { createContext, useContext, useEffect, useState } from 'react'

export const languages = [
  { code: 'en', label: 'English',  native: 'English',  flag: '🇬🇧', dir: 'ltr' },
  { code: 'ur', label: 'Urdu',     native: 'اردو',     flag: '🇵🇰', dir: 'rtl' },
  { code: 'ar', label: 'Arabic',   native: 'العربية',  flag: '🇸🇦', dir: 'rtl' },
  { code: 'hi', label: 'Hindi',    native: 'हिन्दी',     flag: '🇮🇳', dir: 'ltr' },
  { code: 'pa', label: 'Punjabi',  native: 'ਪੰਜਾਬੀ',    flag: '🇮🇳', dir: 'ltr' },
  { code: 'ps', label: 'Pashto',   native: 'پښتو',      flag: '🇦🇫', dir: 'rtl' },
  { code: 'zh', label: 'Chinese',  native: '中文',      flag: '🇨🇳', dir: 'ltr' },
]

const LangContext = createContext({ lang: languages[0], setLang: () => {} })

export function LanguageProvider({ children }) {
  const [code, setCode] = useState(() => localStorage.getItem('harvyoice.lang') || 'en')
  const lang = languages.find((l) => l.code === code) || languages[0]

  useEffect(() => {
    localStorage.setItem('harvyoice.lang', lang.code)
    document.documentElement.lang = lang.code
    document.documentElement.dir = lang.dir
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang: setCode }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
