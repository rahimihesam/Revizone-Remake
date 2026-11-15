import { Link } from 'react-router-dom'

export default function GenreCard({ to, icon, label, count }) {
  return (
    <div className="genre">
      <Link to={to}>
        <div className="ico">
          <i className={icon} />
        </div>
        <div className="g-text">
          <strong>{label}</strong>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>{count}</div>
        </div>
      </Link>
    </div>
  )
}
