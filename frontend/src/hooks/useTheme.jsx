import { useEffect, useState } from 'react'

export function useTheme () {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme])

  return { theme, toggleTheme }
}
