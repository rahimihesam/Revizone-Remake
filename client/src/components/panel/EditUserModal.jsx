import { useState } from 'react'
import { ROLES } from '../../context/AuthContext'
import Modal from './Modal'

export default function EditUserModal({ user, users, isSelf, onSave, onClose }) {
  const [error, setError] = useState('')

  function submit(e) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    const email = f.email.trim()
    if (f.name.trim().length < 2) return setError('نام باید حداقل ۲ کاراکتر باشد.')
    if (users.some((u) => u.id !== user.id && u.email.toLowerCase() === email.toLowerCase()))
      return setError('این ایمیل برای کاربر دیگری ثبت شده است.')
    if (f.password && f.password.length < 6) return setError('رمز عبور جدید باید حداقل ۶ کاراکتر باشد.')

    const role = isSelf ? user.role : f.role
    const patch = { name: f.name.trim(), email, role }
    if (f.password) patch.password = f.password
    if (role === user.requestedRole) patch.requestedRole = undefined
    onSave(patch)
  }

  return (
    <Modal title={`تغییر مشخصات ${user.name}`} onClose={onClose}>
      <form className="rz-modal-form" onSubmit={submit}>
        {error && <div className="rz-alert" role="alert">{error}</div>}
        <label className="rz-field">
          <span>نام</span>
          <input name="name" defaultValue={user.name} required autoFocus />
        </label>
        <label className="rz-field">
          <span>ایمیل</span>
          <input name="email" type="email" defaultValue={user.email} required dir="ltr" />
        </label>
        <label className="rz-field">
          <span>نقش</span>
          <select name="role" defaultValue={user.role} disabled={isSelf}>
            {Object.entries(ROLES).map(([id, label]) => (
              <option key={id} value={id}>{label}</option>
            ))}
          </select>
          {isSelf && <small className="rz-muted">نقش حساب خودتان را نمی‌توانید تغییر دهید.</small>}
        </label>
        <label className="rz-field">
          <span>رمز عبور جدید</span>
          <input name="password" type="password" autoComplete="new-password" placeholder="خالی = بدون تغییر" dir="ltr" />
        </label>
        <div className="rz-actions">
          <button type="submit" className="rz-btn primary">ذخیره تغییرات</button>
          <button type="button" className="rz-btn" onClick={onClose}>انصراف</button>
        </div>
      </form>
    </Modal>
  )
}
