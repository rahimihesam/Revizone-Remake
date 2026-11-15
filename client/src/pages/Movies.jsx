import GenreCard from '../cards/GenreCard'
import Hero from '../components/common/Hero'
import ReviewCard from '../cards/ReviewCard'
import SectionTitle from '../components/common/SectionTitle'
import TopItem from '../cards/TopItem'

const hero = {
  "image": "/images/parasite.png",
  "title": "نقد ویژه: \"فیلم انگل\"",
  "subtitle": "تحلیل تصویری، روایت و نمادشناسی — نویسنده: حسام رحیمی",
  "cta": [
    {
      "to": "/movies/parasite",
      "label": "مشاهده نقد",
      "className": "btn primary"
    }
  ]
}

const topratedItems = [
  {
    "to": "/movies/inception",
    "image": "/images/Inception.png",
    "title": "اینسپشن | Inseption",
    "score": "⭐ ۸.۷"
  },
  {
    "to": "/movies/bladerunner2049",
    "image": "/images/BladeRunner2049.png",
    "title": "بلیدرانر2040 | BladeRunner2049",
    "score": "⭐ ۸.۵"
  },
  {
    "to": "/movies/parasite",
    "image": "/images/parasite.png",
    "title": "انگل | parasite",
    "score": "⭐ ۹.۱"
  }
]

const genresList = [
  {
    "to": "/movies",
    "icon": "fas fa-film",
    "label": "اکشن",
    "count": "۱ فیلم"
  },
  {
    "to": "/movies",
    "icon": "fas fa-theater-masks",
    "label": "درام",
    "count": "۱ فیلم"
  },
  {
    "to": "/movies",
    "icon": "fas fa-ghost",
    "label": "ترسناک",
    "count": "۰ فیلم"
  },
  {
    "to": "/movies",
    "icon": "fas fa-brain",
    "label": "معمایی",
    "count": "۰ فیلم"
  },
  {
    "to": "/movies",
    "icon": "fas fa-rocket",
    "label": "علمی-تخیلی",
    "count": "۱ فیلم"
  },
  {
    "to": "/movies",
    "icon": "fas fa-laugh",
    "label": "کمدی",
    "count": "۱ فیلم"
  }
]

const actionCards = [
  {
    "to": "/movies/duneparttwo",
    "image": "/images/DunePartTwo.png",
    "title": "فیلم DunePartTwo",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۷.۹"
  },
  {
    "to": "/movies/duneparttwo",
    "image": "/images/DunePartTwo.png",
    "title": "فیلم DunePartTwo",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۷.۹"
  },
  {
    "to": "/movies/duneparttwo",
    "image": "/images/DunePartTwo.png",
    "title": "فیلم DunePartTwo",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۷.۹"
  },
  {
    "to": "/movies/duneparttwo",
    "image": "/images/DunePartTwo.png",
    "title": "فیلم DunePartTwo",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۷.۹"
  }
]

const dramaCards = [
  {
    "to": "/movies/inception",
    "image": "/images/Inception.png",
    "title": "فیلم Inseption",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۷"
  },
  {
    "to": "/movies/inception",
    "image": "/images/Inception.png",
    "title": "فیلم Inseption",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۷"
  },
  {
    "to": "/movies/inception",
    "image": "/images/Inception.png",
    "title": "فیلم Inseption",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۷"
  },
  {
    "to": "/movies/inception",
    "image": "/images/Inception.png",
    "title": "فیلم Inseption",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۷"
  }
]

const comedyCards = [
  {
    "to": "/movies/parasite",
    "image": "/images/parasite.png",
    "title": "فیلم Parasite",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۹.۱"
  },
  {
    "to": "/movies/parasite",
    "image": "/images/parasite.png",
    "title": "فیلم Parasite",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۹.۱"
  },
  {
    "to": "/movies/parasite",
    "image": "/images/parasite.png",
    "title": "فیلم Parasite",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۹.۱"
  },
  {
    "to": "/movies/parasite",
    "image": "/images/parasite.png",
    "title": "فیلم Parasite",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۹.۱"
  }
]

const scifiCards = [
  {
    "to": "/movies/bladerunner2049",
    "image": "/images/BladeRunner2049.png",
    "title": "فیلم Blande Runner 2049",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۸.۵"
  },
  {
    "to": "/movies/bladerunner2049",
    "image": "/images/BladeRunner2049.png",
    "title": "فیلم Blande Runner 2049",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۸.۵"
  },
  {
    "to": "/movies/bladerunner2049",
    "image": "/images/BladeRunner2049.png",
    "title": "فیلم Blande Runner 2049",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۸.۵"
  },
  {
    "to": "/movies/bladerunner2049",
    "image": "/images/BladeRunner2049.png",
    "title": "فیلم Blande Runner 2049",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۸.۵"
  }
]

export default function Movies() {
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
            <h2 style={{textAlign: "center", margin: "10px", padding: "10px"}} id="action">اکشن</h2>
            <div className="grid-4">
              {actionCards.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
            <h2 style={{textAlign: "center", margin: "10px", padding: "10px"}} id="drama">درام</h2>
            <div className="grid-4">
              {dramaCards.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
            <h2 style={{textAlign: "center", margin: "10px", padding: "10px"}} id="comedy">کمدی</h2>
            <div className="grid-4">
              {comedyCards.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
            <h2 style={{textAlign: "center", margin: "10px", padding: "10px"}} id="scifi">علمی تخیلی</h2>
            <div className="grid-4">
              {scifiCards.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
