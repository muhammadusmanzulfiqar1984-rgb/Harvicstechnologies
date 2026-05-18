import { useState, useRef, useEffect } from 'react'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { languages, useLang } from '../context/LanguageContext.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full p-2 text-gray-700 hover:bg-gray-100"
        aria-label="Change language"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden text-xs font-medium uppercase sm:inline">{lang.code}</span>
        <ChevronDown className="hidden h-3 w-3 sm:inline" />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <div className="px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            Choose language
          </div>
          <ul className="max-h-80 overflow-y-auto py-1">
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => { setLang(l.code); setOpen(false) }}
                  className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition hover:bg-gray-50 ${
                    l.code === lang.code ? 'bg-gray-50 text-[var(--color-accent-blue)]' : 'text-gray-700'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base leading-none">{l.flag}</span>
                    <span>
                      <span className="block leading-tight">{l.label}</span>
                      <span className="block text-xs text-gray-500" dir={l.dir}>{l.native}</span>
                    </span>
                  </span>
                  {l.code === lang.code && <Check className="h-4 w-4" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
