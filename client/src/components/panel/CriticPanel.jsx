import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import useReviews from '../../hooks/useReviews'
import { media } from '../../data/media'
import StatCard from './StatCard'
import StatusBadge from './StatusBadge'
import '../../styles/panel.css'

const kinds = {
  film: { label: 'فیلم', icon: 'fa-film', list: '/movies' },
  series: { label: 'سریال', icon: 'fa-tv', list: '/series' },
  game: { label: 'بازی', icon: 'fa-gamepad', list: '/games' },
}
const empty = { mediaTitle: '', title: '', rating: 7, body: '' }

/** One panel for all three critic types. `kind` is 'film' | 'series' | 'game'. */
export default function CriticPanel({ kind }) {
  const cfg = kinds[kind]
  const { user, logout } = useAuth()
  const { reviews, save, setStatus, remove } = useReviews()
  const [form, setForm] = useState(empty)
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState('')

  const titles = media.filter((m) => m.kind === kind).map((m) => m.title)
  const mine = reviews.filter((r) => r.kind === kind && r.authorId === user.id)
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  function submit(status) {
    if (!form.mediaTitle || !form.title.trim() || form.body.trim().length < 20) {
      setMessage(`${cfg.label}، عنوان و متن نقد (حداقل ۲۰ کاراکتر) را کامل کنید.`)
      return
    }
    save({ ...form, rating: Number(form.rating), id: editingId ?? undefined, kind, authorId: user.id, authorName: user.name, status })
    setForm(empty)
    setEditingId(null)
    setMessage(status === 'pending' ? 'نقد برای تأیید مدیر ارسال شد.' : 'پیش‌نویس ذخیره شد.')
  }

  function edit(r) {
    setForm({ mediaTitle: r.mediaTitle, title: r.title, rating: r.rating, body: r.body })
    setEditingId(r.id)
    setMessage('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const count = (s) => mine.filter((r) => r.status === s).length

  return (
    <main className="rz-panel">
      <div className="container">
        <div className="rz-panel-head">
          <div>
            <h1><i className={`fas ${cfg.icon}`} aria-hidden="true" /> پنل منتقد {cfg.label}</h1>
            <p className="rz-muted">سلام {user.name}، نقدهای {cfg.label} خود را اینجا بنویسید و مدیریت کنید.</p>
          </div>
          <span className="rz-actions">
            <Link className="rz-btn" to={cfg.list}>دیدن {cfg.label}‌ها</Link>
            <button className="rz-btn" onClick={logout}>خروج</button>
          </span>
        </div>

        <div className="rz-stats">
          <StatCard icon="fa-file-lines" label="کل نقدها" value={mine.length} />
          <StatCard icon="fa-circle-check" label="منتشرشده" value={count('published')} />
          <StatCard icon="fa-hourglass-half" label="در انتظار تأیید" value={count('pending')} />
          <StatCard icon="fa-pen" label="پیش‌نویس" value={count('draft')} />
        </div>

        <section className="rz-box">
          <h2>{editingId ? 'ویرایش نقد' : `نقد جدید ${cfg.label}`}</h2>
          {message && <div className="rz-alert info" role="status">{message}</div>}
          <div className="rz-form-grid">
            <label className="rz-field">
              <span>{cfg.label} مورد نقد</span>
              <select value={form.mediaTitle} onChange={set('mediaTitle')}>
                <option value="">انتخاب کنید…</option>
                {titles.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <label className="rz-field">
              <span>امتیاز (از ۱۰)</span>
              <input type="number" min="1" max="10" step="0.5" value={form.rating} onChange={set('rating')} dir="ltr" />
            </label>
          </div>
          <label className="rz-field">
            <span>عنوان نقد</span>
            <input value={form.title} onChange={set('title')} maxLength={120} />
          </label>
          <label className="rz-field">
            <span>متن نقد</span>
            <textarea rows={8} value={form.body} onChange={set('body')} />
          </label>
          <div className="rz-actions">
            <button className="rz-btn primary" onClick={() => submit('pending')}>ارسال برای تأیید</button>
            <button className="rz-btn" onClick={() => submit('draft')}>ذخیره پیش‌نویس</button>
            {editingId && <button className="rz-btn" onClick={() => { setForm(empty); setEditingId(null) }}>انصراف</button>}
          </div>
        </section>

        <section className="rz-box">
          <h2>نقدهای من</h2>
          {mine.length === 0 ? (
            <p className="rz-muted">هنوز نقدی ننوشته‌اید.</p>
          ) : (
            <ul className="rz-reviews">
              {mine.map((r) => (
                <li key={r.id}>
                  <div className="rz-review-top">
                    <strong>{r.title}</strong>
                    <StatusBadge status={r.status} />
                  </div>
                  <div className="rz-muted">{r.mediaTitle} · امتیاز {Number(r.rating).toLocaleString('fa-IR')}/۱۰ · {new Date(r.createdAt).toLocaleDateString('fa-IR')}</div>
                  <div className="rz-actions">
                    {r.status !== 'published' && <button className="rz-btn sm" onClick={() => edit(r)}>ویرایش</button>}
                    {r.status === 'draft' && <button className="rz-btn primary sm" onClick={() => setStatus(r.id, 'pending')}>ارسال برای تأیید</button>}
                    <button className="rz-btn sm danger" onClick={() => window.confirm('این نقد حذف شود؟') && remove(r.id)}>حذف</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}
