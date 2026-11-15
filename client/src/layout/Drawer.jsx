import { Link } from 'react-router-dom'
import { roleHome, useAuth } from '../context/AuthContext'

const links = [
  ['/', 'خانه'],
  ['/movies', 'فیلم‌ها'],
  ['/series', 'سریال‌ها'],
  ['/games', 'بازی‌ها'],
  ['/articles', 'مقالات'],
  ['/about', 'داستان ما'],
]

export default function Drawer({ open, onClose }) {
  const { user } = useAuth()
  const all = user ? [...links, [roleHome(user.role), 'پنل من']] : [...links, ['/login', 'ورود'], ['/register', 'ثبت‌نام']]
  return (
    <>
      <div className={`drawer-backdrop${open ? ' open' : ''}`} tabIndex={-1} onClick={onClose} />
      <aside className={`drawer${open ? ' open' : ''}`} aria-hidden={!open} aria-label="منوی اصلی موبایل">
        <button className="close" aria-label="بستن" onClick={onClose}>
          ✕
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6 }}>
          {all.map(([to, label]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
