import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/panel.css'

export default function Register() {
  const { user, register } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  if (user) return <Navigate to="/" replace />

  function onSubmit(e) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    if (f.password.length < 6) return setError('رمز عبور باید حداقل ۶ کاراکتر باشد.')
    if (f.password !== f.confirm) return setError('رمز عبور و تکرار آن یکسان نیستند.')
    const res = register({ name: f.name, email: f.email, password: f.password, wantsCritic: f.critic })
    if (!res.ok) return setError(res.error)
    navigate('/', { replace: true })
  }

  return (
    <main className="rz-auth rz-auth-tall">
      <form className="rz-auth-card" onSubmit={onSubmit}>
        <h1>ساخت حساب کاربری</h1>
        <p className="rz-muted">به جمع نویسندگان و علاقه‌مندان Revizone بپیوندید.</p>

        {error && <div className="rz-alert" role="alert">{error}</div>}

        <label className="rz-field">
          <span>نام نمایشی</span>
          <input name="name" required minLength={2} autoComplete="name" />
        </label>
        <label className="rz-field">
          <span>ایمیل</span>
          <input name="email" type="email" required autoComplete="email" dir="ltr" />
        </label>
        <div className="rz-row">
          <label className="rz-field">
            <span>رمز عبور</span>
            <input name="password" type="password" required autoComplete="new-password" dir="ltr" />
          </label>
          <label className="rz-field">
            <span>تکرار رمز عبور</span>
            <input name="confirm" type="password" required autoComplete="new-password" dir="ltr" />
          </label>
        </div>
        <label className="rz-field">
          <span>می‌خواهید منتقد باشید؟</span>
          <select name="critic" defaultValue="">
            <option value="">نه، فقط کاربر عادی</option>
            <option value="film">درخواست منتقد فیلم</option>
            <option value="series">درخواست منتقد سریال</option>
            <option value="game">درخواست منتقد بازی</option>
          </select>
          <small className="rz-muted">درخواست منتقد بودن باید توسط مدیر تأیید شود.</small>
        </label>

        <button className="rz-btn primary block" type="submit">ثبت‌نام</button>
        <p className="rz-switch">
          قبلاً ثبت‌نام کرده‌اید؟ <Link to="/login">ورود</Link>
        </p>
      </form>
    </main>
  )
}
