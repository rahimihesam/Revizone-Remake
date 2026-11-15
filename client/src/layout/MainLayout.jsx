import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Drawer from './Drawer'
import Footer from './Footer'
import ScrollToTop from '../components/common/ScrollToTop'
import useTheme from '../hooks/useTheme'

export default function MainLayout() {
  const { theme, toggleTheme } = useTheme()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { pathname } = useLocation()

  // close overlays on navigation
  useEffect(() => {
    setDrawerOpen(false)
    setSearchOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setDrawerOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenDrawer={() => setDrawerOpen(true)}
        searchOpen={searchOpen}
        onToggleSearch={() => setSearchOpen((o) => !o)}
        onCloseSearch={() => setSearchOpen(false)}
      />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Outlet />
      <Footer />
    </>
  )
}
