import { Link } from 'react-router-dom'

export default function Hero({ image, title, subtitle, cta = [] }) {
  return (
    <section className="hero">
      <div className="cover" style={{ backgroundImage: `url('${image}')` }} />
      <div className="overlay" />
      <div className="container hero-inner">
        <div className="hero-card">
          <div className="hero-title">{title}</div>
          <div className="hero-sub">{subtitle}</div>
          <div className="hero-cta">
            {cta.map((b, i) => (
              <Link key={i} to={b.to} className={b.className}>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
