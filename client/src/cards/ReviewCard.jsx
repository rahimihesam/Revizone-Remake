import { Link } from 'react-router-dom'

export default function ReviewCard({ to, image, title, sub, rating }) {
  return (
    <Link className="card" role="article" to={to}>
      <div className="thumb" style={{ backgroundImage: `url('${image}')` }} />
      <div className="meta">
        <div className="title">{title}</div>
        <div className="sub">{sub}</div>
        <div className="rating">{rating}</div>
      </div>
    </Link>
  )
}
