import { useCallback, useEffect, useState } from 'react'

const KEY = 'revizone-theme'

function readTheme() {
  try {
    return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* storage unavailable: theme just won't persist */
    }
  }, [theme])

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'light' ? 'dark' : 'light')), [])
  return { theme, toggleTheme }
}
