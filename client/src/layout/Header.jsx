import { Link, useNavigate } from 'react-router-dom'

const genres = [
  ['action', 'اکشن'],
  ['drama', 'درام'],
  ['horror', 'ترسناک'],
  ['mystery', 'معمایی'],
  ['scifi', 'علمی-تخیلی'],
  ['comedy', 'کمدی'],
]

const menu = [
  { label: 'فیلم‌ها', to: '/movies', items: genres },
  { label: 'سریال‌ها', to: '/series', items: genres },
  { label: 'بازی‌ها', to: '/games', items: genres.filter(([id]) => ['action', 'horror', 'mystery', 'scifi'].includes(id)) },
]

export default function Header({ theme, onToggleTheme, onOpenDrawer, searchOpen, onToggleSearch, onCloseSearch }) {
  const navigate = useNavigate()

  function handleSearchSubmit(e) {
    e.preventDefault()
    const q = new FormData(e.currentTarget).get('q')?.toString().trim() ?? ''
    if (!q) {
      alert('لطفاً عبارت جستجو را وارد کنید.')
      return
    }
    onCloseSearch()
    navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header>
      <div className="container header-main">
        <div className="brand">
          <Link to="/">
            <img className="logo" src="/logo.png" alt="Revizone logo" />
          </Link>
          <Link to="/">
            <div className="site-name">Revizone</div>
          </Link>
        </div>

        <nav className="primary" aria-label="منوی اصلی">
          <Link to="/">خانه</Link>
          {menu.map((m) => (
            <div className="menu-item" key={m.to}>
              <Link to={m.to}>{m.label}</Link>
              <ul className="dropdown">
                {m.items.map(([id, label]) => (
                  <li key={id}>
                    <Link to={`${m.to}#${id}`}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link to="/articles">مقالات</Link>
          <Link to="/about">داستان ما</Link>
        </nav>

        <div className="header-actions">
          <button className="search-icon-btn icon-btn" aria-label="جستجو" onClick={onToggleSearch}>
            <i className="fas fa-search" />
          </button>
          <button className="search-icon-btn icon-btn" aria-label="تغییر تم" onClick={onToggleTheme}>
            <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'} />
          </button>
          <button className="icon-btn js-drawer-open" aria-label="باز کردن منو" onClick={onOpenDrawer}>
            ☰
          </button>
        </div>
      </div>

      <div className={`mobile-search-panel${searchOpen ? ' open' : ''}`} aria-hidden={!searchOpen}>
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            name="q"
            type="search"
            placeholder="جستجو در نقدها، مقالات، فیلم‌ها..."
            aria-label="جستجو"
            autoFocus={searchOpen}
            style={{ flex: 1, padding: 10, border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: 8 }}
          />
          <button type="submit" className="search-btn" style={{ padding: '10px 12px' }}>
            جستجو
          </button>
          <button type="button" className="icon-btn" aria-label="بستن جستجو" onClick={onCloseSearch}>
            ✕
          </button>
        </form>
      </div>
    </header>
  )
}
