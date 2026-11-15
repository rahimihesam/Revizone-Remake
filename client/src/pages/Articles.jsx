import Hero from '../components/common/Hero'
import ReviewCard from '../cards/ReviewCard'
import SectionTitle from '../components/common/SectionTitle'

const hero = {
  "image": "/images/parasite.png",
  "title": "جدیدترین تحلیل : \"فیلم انگل\"",
  "subtitle": "تحلیل تصویری، روایت و نمادشناسی — نویسنده: حسام رحیمی",
  "cta": [
    {
      "to": "/articles/parasite",
      "label": "مشاهده تحلیل",
      "className": "btn primary"
    }
  ]
}

const reviewsCards = [
  {
    "to": "/articles/inception",
    "image": "/images/Inception.png",
    "title": "تحلیل Inseption",
    "sub": "ژانر - درام",
    "rating": ""
  },
  {
    "to": "/articles/witcher",
    "image": "/images/TheWitcher.png",
    "title": "تحلیل TheWitcher",
    "sub": "ژانر - اکشن",
    "rating": ""
  },
  {
    "to": "/articles/witcher",
    "image": "/images/TheWitcher.png",
    "title": "تحلیل TheWitcher",
    "sub": "ژانر - علمی تخیلی",
    "rating": ""
  },
  {
    "to": "/articles/parasite",
    "image": "/images/parasite.png",
    "title": "تحلیل Parasite",
    "sub": "ژانر - کمدی",
    "rating": ""
  }
]

export default function Articles() {
  return (
    <>
      <main>
        <Hero {...hero} />
        <div className="container">
          <section id="reviews">
            <SectionTitle>تمامی تحلیل ها</SectionTitle>
            <div className="grid-4">
              {reviewsCards.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
