import { useEffect } from 'react'

export default function Modal({ title, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="rz-modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="rz-modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="rz-modal-top">
          <h2>{title}</h2>
          <button type="button" className="rz-modal-close" onClick={onClose} aria-label="بستن">✕</button>
        </div>
        {children}
      </div>
    </div>
  )
}
