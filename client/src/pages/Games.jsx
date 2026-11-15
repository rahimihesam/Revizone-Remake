import GenreCard from '../cards/GenreCard'
import Hero from '../components/common/Hero'
import ReviewCard from '../cards/ReviewCard'
import SectionTitle from '../components/common/SectionTitle'
import TopItem from '../cards/TopItem'

const hero = {
  "image": "/images/hades.png",
  "title": "جدیدترین نقد : \"بازی هیدیس\"",
  "subtitle": "تحلیل تصویری، روایت و نمادشناسی — نویسنده: حسام رحیمی",
  "cta": [
    {
      "to": "#",
      "label": "مشاهده نقد",
      "className": "btn primary"
    }
  ]
}

const topratedItems = [
  {
    "to": "/games/hades",
    "image": "/images/hades.png",
    "title": "هیدیس | Hades",
    "score": "⭐ ۸.۷"
  },
  {
    "to": "/games/assassincreed",
    "image": "/images/AssassinCreed.jpg",
    "title": "اساسینزکرید |Assassin's creed",
    "score": "⭐ ۸.۰"
  },
  {
    "to": "/games/hollowknight",
    "image": "/images/HollowKnight.png",
    "title": "شوالیه توخالی | HollowKnight",
    "score": "⭐ ۹.۹"
  }
]

const genresList = [
  {
    "to": "/games#action",
    "icon": "fas fa-gamepad",
    "label": "اکشن",
    "count": "۲ بازی"
  },
  {
    "to": "/games#horror",
    "icon": "fas fa-ghost",
    "label": "ترسناک",
    "count": "۰ بازی"
  },
  {
    "to": "/games#mystery",
    "icon": "fas fa-brain",
    "label": "معمایی",
    "count": "۱ بازی"
  },
  {
    "to": "/games#scifi",
    "icon": "fas fa-rocket",
    "label": "علمی-تخیلی",
    "count": "۱ بازی"
  }
]

const reviewsCards = [
  {
    "to": "/games/hades",
    "image": "/images/hades.png",
    "title": "بازی Hades",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۸.۷"
  },
  {
    "to": "/games/hades",
    "image": "/images/hades.png",
    "title": "بازی Hades",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۸.۷"
  },
  {
    "to": "/games/witcher",
    "image": "/images/Witcher3.png",
    "title": "بازی Witcher",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۷.۹"
  },
  {
    "to": "/games/witcher",
    "image": "/images/Witcher3.png",
    "title": "بازی Witcher",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۷.۹"
  }
]

const reviewsCards2 = [
  {
    "to": "/games/hollowknight",
    "image": "/images/HollowKnight.png",
    "title": "بازی Hollow Knight",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۹.۹"
  },
  {
    "to": "/games/hollowknight",
    "image": "/images/HollowKnight.png",
    "title": "بازی Hollow Knight",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۹.۹"
  },
  {
    "to": "/games/hollowknight",
    "image": "/images/HollowKnight.png",
    "title": "بازی Hollow Knight",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۹.۹"
  },
  {
    "to": "/games/hollowknight",
    "image": "/images/HollowKnight.png",
    "title": "بازی Hollow Knight",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۹.۹"
  }
]

const reviewsCards3 = [
  {
    "to": "/games/assassincreed",
    "image": "/images/AssassinCreed.jpg",
    "title": "بازی Assassin's Creed",
    "sub": "ژانر - معمایی",
    "rating": "⭐ ۸.۰"
  },
  {
    "to": "/games/assassincreed",
    "image": "/images/AssassinCreed.jpg",
    "title": "بازی Assassin's Creed",
    "sub": "ژانر - معمایی",
    "rating": "⭐ ۸.۰"
  },
  {
    "to": "/games/assassincreed",
    "image": "/images/AssassinCreed.jpg",
    "title": "بازی Assassin's Creed",
    "sub": "ژانر - معمایی",
    "rating": "⭐ ۸.۰"
  },
  {
    "to": "/games/assassincreed",
    "image": "/images/AssassinCreed.jpg",
    "title": "بازی Assassin's Creed",
    "sub": "ژانر - معمایی",
    "rating": "⭐ ۸.۰"
  }
]

export default function Games() {
  return (
    <>
      <main>
        <Hero {...hero} />
        <div className="container">
          <section id="top-rated">
            <SectionTitle>برترین‌ها</SectionTitle>
            <div className="top-grid">
              {topratedItems.map((item, i) => (
                <TopItem key={i} {...item} />
              ))}
            </div>
          </section>
          <section id="genres">
            <br />
            <SectionTitle>دسته بندی</SectionTitle>
            <div className="genres">
              {genresList.map((item, i) => (
                <GenreCard key={i} {...item} />
              ))}
            </div>
          </section>
          <section id="reviews">
            <SectionTitle>تمامی نقد ها</SectionTitle>
            <h2 style={{textAlign: "center", margin: "10px", padding: "10px"}}>اکشن</h2>
            <div className="grid-4" id="action">
              {reviewsCards.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
            <h2 style={{textAlign: "center", margin: "10px", padding: "10px"}}>علمی تخیلی</h2>
            <div className="grid-4" id="scifi">
              {reviewsCards2.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
            <h2 style={{textAlign: "center", margin: "10px", padding: "10px"}}>معمایی</h2>
            <div className="grid-4" id="mystery">
              {reviewsCards3.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
