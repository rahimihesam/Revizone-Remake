import { useState } from 'react'
import Modal from './Modal'

export default function EditReviewModal({ review, onSave, onClose }) {
  const [error, setError] = useState('')

  function submit(e) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    if (!f.title.trim() || f.body.trim().length < 20) return setError('عنوان و متن نقد (حداقل ۲۰ کاراکتر) را کامل کنید.')
    onSave({ title: f.title.trim(), rating: Number(f.rating), body: f.body.trim() })
  }

  return (
    <Modal title="تغییر نقد" onClose={onClose}>
      <form className="rz-modal-form" onSubmit={submit}>
        {error && <div className="rz-alert" role="alert">{error}</div>}
        <div className="rz-form-grid">
          <label className="rz-field">
            <span>عنوان نقد</span>
            <input name="title" defaultValue={review.title} required autoFocus />
          </label>
          <label className="rz-field">
            <span>امتیاز (از ۱۰)</span>
            <input name="rating" type="number" min="1" max="10" step="0.5" defaultValue={review.rating} dir="ltr" />
          </label>
        </div>
        <label className="rz-field">
          <span>متن نقد</span>
          <textarea name="body" rows={9} defaultValue={review.body} />
        </label>
        <div className="rz-actions">
          <button type="submit" className="rz-btn primary">ذخیره تغییرات</button>
          <button type="button" className="rz-btn" onClick={onClose}>انصراف</button>
        </div>
      </form>
    </Modal>
  )
}
