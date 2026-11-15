export default function StatCard({ icon, label, value }) {
  return (
    <div className="rz-stat">
      <i className={`fas ${icon}`} aria-hidden="true" />
      <div>
        <div className="rz-stat-value">{Number(value).toLocaleString('fa-IR')}</div>
        <div className="rz-stat-label">{label}</div>
      </div>
    </div>
  )
}
