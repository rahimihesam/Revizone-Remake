import StatusBadge from './StatusBadge'

const kindLabel = { film: 'فیلم', series: 'سریال', game: 'بازی' }

export default function ReviewList({ items, onPublish, onReject, onEdit, onDelete, emptyText = 'نقدی در این بخش نیست.' }) {
  if (items.length === 0) return <p className="rz-muted">{emptyText}</p>
  return (
    <ul className="rz-reviews">
      {items.map((r) => (
        <li key={r.id}>
          <div className="rz-review-top">
            <strong>{r.title}</strong>
            <StatusBadge status={r.status} />
          </div>
          <div className="rz-muted">
            {kindLabel[r.kind]} · {r.mediaTitle} · {r.authorName} · امتیاز {Number(r.rating).toLocaleString('fa-IR')}/۱۰
          </div>
          <p>{r.body}</p>
          <div className="rz-actions">
            {r.status !== 'published' && <button className="rz-btn primary sm" onClick={() => onPublish(r)}>انتشار</button>}
            {r.status !== 'rejected' && <button className="rz-btn sm" onClick={() => onReject(r)}>رد</button>}
            <button className="rz-btn sm" onClick={() => onEdit(r)}>تغییر</button>
            <button className="rz-btn sm danger" onClick={() => onDelete(r)}>حذف</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
