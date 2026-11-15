import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { roleHome, useAuth } from '../context/AuthContext'
import '../styles/panel.css'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')

  if (user) return <Navigate to={roleHome(user.role)} replace />

  function onSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const res = login(f.get('email')?.toString() ?? '', f.get('password')?.toString() ?? '')
    if (!res.ok) return setError(res.error)
    navigate(location.state?.from ?? roleHome(res.role), { replace: true })
  }

  return (
    <main className="rz-auth">
      <form className="rz-auth-card" onSubmit={onSubmit} noValidate>
        <h1>ورود به Revizone</h1>
        <p className="rz-muted">برای نوشتن نقد یا مدیریت سایت وارد شوید.</p>

        {error && <div className="rz-alert" role="alert">{error}</div>}

        <label className="rz-field">
          <span>ایمیل</span>
          <input name="email" type="email" autoComplete="email" required dir="ltr" />
        </label>
        <label className="rz-field">
          <span>رمز عبور</span>
          <input name="password" type="password" autoComplete="current-password" required dir="ltr" />
        </label>

        <button className="rz-btn primary block" type="submit">ورود</button>
        <p className="rz-switch">
          حساب ندارید؟ <Link to="/register">ثبت‌نام</Link>
        </p>

        <details className="rz-demo">
          <summary>حساب‌های آزمایشی</summary>
          <ul dir="ltr">
            <li>admin@revizone.ir / admin123</li>
            <li>film@revizone.ir / film123</li>
            <li>series@revizone.ir / series123</li>
            <li>game@revizone.ir / game123</li>
          </ul>
        </details>
      </form>
    </main>
  )
}
