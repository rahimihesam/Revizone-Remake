import { useParams } from 'react-router-dom'
import { articles } from '../data/articles'
import NotFound from './NotFound'
import '../styles/article.css'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <NotFound />
  const Body = article.Body

  return (
    <main className="article-page">
      <section className="hero-article" style={{ '--hero-image': `url('${article.heroImage}')` }}>
        <div className="hero-content">
          <h1>{article.title}</h1>
          <div className="hero-meta">{article.meta}</div>
        </div>
      </section>
      <section className="article-body">
        <div className="article-container">
          <div className="article-content">
            <Body />
          </div>
        </div>
      </section>
    </main>
  )
}
