import { Link } from 'react-router-dom'

export default function TopItem({ to, image, title, score }) {
  return (
    <Link className="top-item" to={to}>
      <div className="thumb-sm" style={{ backgroundImage: `url('${image}')` }} />
      <div className="meta">
        <div className="title">{title}</div>
        <div className="score">{score}</div>
      </div>
    </Link>
  )
}
