import { useParams } from 'react-router-dom'
import { media } from '../data/media'
import NotFound from './NotFound'
import '../styles/media-review.css'

/**
 * One template for every movie / series / game review.
 * `kind` is 'film' | 'series' | 'game'; the content comes from data/media.js.
 */
export default function MediaReviewPage({ kind }) {
  const { slug } = useParams()
  const item = media.find((m) => m.kind === kind && m.slug === slug)
  if (!item) return <NotFound />

  return (
    <div className={`media-review ${kind}`}>
      <section className={`hero-${kind}`} style={item.heroStyle}>
        <div className="container">
          <div className="hero-content">
            <img className="poster" src={item.poster} alt={item.posterAlt} />
            <div className="info">
              <h1>{item.title}</h1>
              {item.subtitle && <div className="subtitle">{item.subtitle}</div>}
              {item.rating && (
                <div className="rating">
                  <span>⭐</span>
                  <span className="rating-number">{item.rating}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {item.details.length > 0 && (
        <section className="details-section">
          <div className="container">
            <div className="details-grid">
              {item.details.map((d, i) => (
                <div className="detail-item" key={i}>
                  <div className="detail-label">{d.label}</div>
                  <div className="detail-value">{d.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="synopsis-section">
        <div className="container">
          <div className="synopsis-content">
            <h2>{item.synopsisTitle}</h2>
            {item.synopsis.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {item.reviews.length > 0 && (
        <section className="review-section">
          <div className="container">
            <div className="review-content">
              <h2>{item.reviewTitle}</h2>
              {item.reviews.map((r, i) => (
                <div key={i}>
                  {i > 0 && <div className="review-divider" />}
                  <div className="review-subsection">
                    <h3>{r.title}</h3>
                    {r.text.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                    {r.score && <div className="score">{r.score}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {item.trailerImage && (
        <section className="trailer-section">
          <div className="container">
            <h2 className="section-title">{item.trailerTitle}</h2>
            <div className="trailer-card">
              <img src={item.trailerImage} alt={item.trailerAlt} />
              <div className="play-icon">▶</div>
            </div>
          </div>
        </section>
      )}

      {item.footerText && (
        <section className={`${kind}-footer`}>
          <div className="container">
            <p>{item.footerText}</p>
          </div>
        </section>
      )}
    </div>
  )
}
