import { Link } from 'react-router-dom'

export default function ArticleCard({ to, image, title, lead }) {
  return (
    <Link className="article" to={to}>
      <div className="a-thumb" style={{ backgroundImage: `url('${image}')` }} />
      <div className="a-text">
        <div className="a-title">{title}</div>
        <div className="a-lead">{lead}</div>
      </div>
    </Link>
  )
}
