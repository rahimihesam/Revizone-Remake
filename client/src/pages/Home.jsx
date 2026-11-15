import ArticleCard from '../cards/ArticleCard'
import GenreCard from '../cards/GenreCard'
import Hero from '../components/common/Hero'
import ReviewCard from '../cards/ReviewCard'
import SectionTitle from '../components/common/SectionTitle'
import TopItem from '../cards/TopItem'

const hero = {
  "image": "/images/TheWitcher.png",
  "title": "نقد ویژه: \"سریال ویچر\"",
  "subtitle": "تحلیل تصویری، روایت و نمادشناسی — نویسنده: حسام رحیمی",
  "cta": [
    {
      "to": "/series/thewitcher",
      "label": "مشاهده نقد",
      "className": "btn primary"
    }
  ]
}

const reviewsCards = [
  {
    "to": "/movies/inception",
    "image": "/images/Inception.png",
    "title": "فیلم Inception",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۷"
  },
  {
    "to": "/series/thewitcher",
    "image": "/images/TheWitcher.png",
    "title": "سریال Witcher",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۳.۵"
  },
  {
    "to": "/movies/bladerunner2049",
    "image": "/images/BladeRunner2049.png",
    "title": "فیلم Blade Runner 2049",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۸.۵"
  },
  {
    "to": "/series/strengthinks",
    "image": "/images/Stranger_Things_5.png",
    "title": "سریال Stranger Things",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۸.۵"
  }
]

const topratedItems = [
  {
    "to": "/movies/inception",
    "image": "/images/Inception.png",
    "title": "اینسپشن | Inseption",
    "score": "⭐ ۸.۷"
  },
  {
    "to": "/series/strengthinks",
    "image": "/images/Stranger_Things_5.png",
    "title": "چیز های عجیب | Stranger Things",
    "score": "⭐ ۸.۵"
  },
  {
    "to": "/games/hades",
    "image": "/images/hades.png",
    "title": "هیدیس | Hades",
    "score": "⭐ ۸.۷"
  },
  {
    "to": "/movies/inception",
    "image": "/images/Inception.png",
    "title": "اینسپشن | Inseption",
    "score": "⭐ ۸.۷"
  },
  {
    "to": "/series/strengthinks",
    "image": "/images/Stranger_Things_5.png",
    "title": "چیز های عجیب | Stranger Things",
    "score": "⭐ ۸.۵"
  },
  {
    "to": "/games/hades",
    "image": "/images/hades.png",
    "title": "هیدیس | Hades",
    "score": "⭐ ۸.۷"
  }
]

const genresList = [
  {
    "to": "/movies#action",
    "icon": "fas fa-film",
    "label": "اکشن",
    "count": "۲ فیلم"
  },
  {
    "to": "/movies#drama",
    "icon": "fas fa-theater-masks",
    "label": "درام",
    "count": "۲ فیلم"
  },
  {
    "to": "/movies#horror",
    "icon": "fas fa-ghost",
    "label": "ترسناک",
    "count": "۰ فیلم"
  },
  {
    "to": "/movies#mystery",
    "icon": "fas fa-brain",
    "label": "معمایی",
    "count": "۰ فیلم"
  },
  {
    "to": "/movies#scifi",
    "icon": "fas fa-rocket",
    "label": "علمی-تخیلی",
    "count": "۱ فیلم"
  },
  {
    "to": "/movies#comedy",
    "icon": "fas fa-laugh",
    "label": "کمدی",
    "count": "۱ فیلم"
  }
]

const genresList2 = [
  {
    "to": "/series#action",
    "icon": "fas fa-film",
    "label": "اکشن",
    "count": "۲ سریال"
  },
  {
    "to": "/series#drama",
    "icon": "fas fa-theater-masks",
    "label": "درام",
    "count": "۲ سریال"
  },
  {
    "to": "/series#horror",
    "icon": "fas fa-ghost",
    "label": "ترسناک",
    "count": "۰ سریال"
  },
  {
    "to": "/series#mystery",
    "icon": "fas fa-brain",
    "label": "معمایی",
    "count": "۰ سریال"
  },
  {
    "to": "/series#scifi",
    "icon": "fas fa-rocket",
    "label": "علمی-تخیلی",
    "count": "۱ سریال"
  },
  {
    "to": "/series#comedy",
    "icon": "fas fa-laugh",
    "label": "کمدی",
    "count": "۱ سریال"
  }
]

const genresList3 = [
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

const articlesList = [
  {
    "to": "/articles/witcher",
    "image": "/images/mini_witcher.jpg",
    "title": "تحلیل سریال ویچر | Witcher",
    "lead": "بررسی نقش گیم‌پلی و تعامل بازیکن در شکل‌دهی تجربه داستانی بازی‌."
  },
  {
    "to": "/articles/parasite",
    "image": "/images/mini_parasite.jpg",
    "title": "انگل فیلمی که روایت پیچیده دارد",
    "lead": "نگاهی به فیلمی که داستان و شخصیت‌ها را به چالش می‌کشد."
  },
  {
    "to": "/articles/inception",
    "image": "/images/mini_inseption.jpg",
    "title": "تحلیل تصویری فیلم‌ برنده اسکار",
    "lead": "نمادشناسی و عناصر بصری."
  }
]

export default function Home() {
  return (
    <>
      <main>
        <Hero {...hero} />
        <div className="container">
          <section id="reviews">
            <SectionTitle>نقدهای تازه</SectionTitle>
            <div className="grid-4">
              {reviewsCards.map((item, i) => (
                <ReviewCard key={i} {...item} />
              ))}
            </div>
          </section>
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
            <SectionTitle>دسته بندی ها</SectionTitle>
            <h2 style={{textAlign: "center", margin: "5px", padding: "5px", fontSize: "20px"}}>فیلم</h2>
            <div className="genres">
              {genresList.map((item, i) => (
                <GenreCard key={i} {...item} />
              ))}
            </div>
          </section>
          <section id="genres">
            <h2 style={{textAlign: "center", margin: "5px", padding: "5px", fontSize: "20px"}}>سریال</h2>
            <div className="genres">
              {genresList2.map((item, i) => (
                <GenreCard key={i} {...item} />
              ))}
            </div>
          </section>
          <section id="genres">
            <h2 style={{textAlign: "center", margin: "5px", padding: "5px", fontSize: "20px"}}>بازی</h2>
            <div className="genres">
              {genresList3.map((item, i) => (
                <GenreCard key={i} {...item} />
              ))}
            </div>
          </section>
          <section id="articles">
            <SectionTitle>مقالات و تحلیل‌ها</SectionTitle>
            <div className="featured">
              {articlesList.map((item, i) => (
                <ArticleCard key={i} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
