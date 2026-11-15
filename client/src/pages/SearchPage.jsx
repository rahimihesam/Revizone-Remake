import { useSearchParams } from 'react-router-dom'
import ReviewCard from '../cards/ReviewCard'
import SectionTitle from '../components/common/SectionTitle'
import { media } from '../data/media'
import { articles } from '../data/articles'

const ROUTES = { film: '/movies', series: '/series', game: '/games' }

export default function SearchPage() {
  const [params] = useSearchParams()
  const q = (params.get('q') ?? '').trim().toLowerCase()

  const results = q
    ? [
        ...media
          .filter((m) => `${m.title} ${m.subtitle} ${m.slug}`.toLowerCase().includes(q))
          .map((m) => ({
            to: `${ROUTES[m.kind]}/${m.slug}`,
            image: m.poster,
            title: m.title,
            sub: m.subtitle,
            rating: m.rating ? `⭐ ${m.rating}` : '',
          })),
        ...articles
          .filter((a) => a.title.toLowerCase().includes(q))
          .map((a) => ({ to: `/articles/${a.slug}`, image: '/logo.png', title: a.title, sub: a.meta, rating: '' })),
      ]
    : []

  return (
    <main>
      <div className="container">
        <section id="reviews">
          <SectionTitle>نتایج جستجو{q ? `: ${params.get('q')}` : ''}</SectionTitle>
          {results.length > 0 ? (
            <div className="grid-4">
              {results.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
          ) : (
            <p>{q ? 'نتیجه‌ای پیدا نشد.' : 'عبارت جستجو را وارد کنید.'}</p>
          )}
        </section>
      </div>
    </main>
  )
}
