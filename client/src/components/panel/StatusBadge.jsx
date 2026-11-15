const labels = { draft: 'پیش‌نویس', pending: 'در انتظار تأیید', published: 'منتشر شده', rejected: 'رد شده' }

export default function StatusBadge({ status }) {
  return <span className={`rz-badge ${status}`}>{labels[status] ?? status}</span>
}
