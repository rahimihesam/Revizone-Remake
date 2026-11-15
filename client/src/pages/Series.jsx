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

const topratedItems = [
  {
    "to": "/series/frankenstein",
    "image": "/images/Frankenstein.png",
    "title": "فرانکشتاین | Frankenstein",
    "score": "⭐ ۸.۵"
  },
  {
    "to": "/series/strengthinks",
    "image": "/images/Stranger_Things_5.png",
    "title": "چیز های عجیب | Stranger Things",
    "score": "⭐ ۸.۵"
  },
  {
    "to": "/series/itwelcometoderry",
    "image": "/images/ITWelcometoDerry.png",
    "title": "ایت | ITWelcometoDerry",
    "score": "⭐ ۹.۲"
  }
]

const genresList = [
  {
    "to": "/series",
    "icon": "fas fa-film",
    "label": "اکشن",
    "count": "۱ سریال"
  },
  {
    "to": "/series",
    "icon": "fas fa-theater-masks",
    "label": "درام",
    "count": "۱ سریال"
  },
  {
    "to": "/series",
    "icon": "fas fa-ghost",
    "label": "ترسناک",
    "count": "۰ سریال"
  },
  {
    "to": "/series",
    "icon": "fas fa-brain",
    "label": "معمایی",
    "count": "۰ سریال"
  },
  {
    "to": "/series",
    "icon": "fas fa-rocket",
    "label": "علمی-تخیلی",
    "count": "۲ سریال"
  },
  {
    "to": "/series",
    "icon": "fas fa-laugh",
    "label": "کمدی",
    "count": "۲ سریال"
  }
]

const actionCards = [
  {
    "to": "/series/itwelcometoderry",
    "image": "/images/ITWelcometoDerry.png",
    "title": "سریال ITWelcometoDerry",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۹.۲"
  },
  {
    "to": "/series/itwelcometoderry",
    "image": "/images/ITWelcometoDerry.png",
    "title": "سریال ITWelcometoDerry",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۹.۲"
  },
  {
    "to": "/series/itwelcometoderry",
    "image": "/images/ITWelcometoDerry.png",
    "title": "سریال ITWelcometoDerry",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۹.۲"
  },
  {
    "to": "/series/itwelcometoderry",
    "image": "/images/ITWelcometoDerry.png",
    "title": "سریال ITWelcometoDerry",
    "sub": "ژانر - اکشن",
    "rating": "⭐ ۹.۲"
  }
]

const dramaCards = [
  {
    "to": "/series/frankenstein",
    "image": "/images/Frankenstein.png",
    "title": "سریال Frankenstein",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۵"
  },
  {
    "to": "/series/frankenstein",
    "image": "/images/Frankenstein.png",
    "title": "سریال Frankenstein",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۵"
  },
  {
    "to": "/series/frankenstein",
    "image": "/images/Frankenstein.png",
    "title": "سریال Frankenstein",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۵"
  },
  {
    "to": "/series/frankenstein",
    "image": "/images/Frankenstein.png",
    "title": "سریال Frankenstein",
    "sub": "ژانر - درام",
    "rating": "⭐ ۸.۵"
  }
]

const comedyCards = [
  {
    "to": "/series/thewitcher",
    "image": "/images/TheWitcher.png",
    "title": "سریال TheWitcher",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۸.۰"
  },
  {
    "to": "/series/predatorbadlands",
    "image": "/images/PredatorBadlands.png",
    "title": "سریال PredatorBadlands",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۸.۰"
  },
  {
    "to": "/series/thewitcher",
    "image": "/images/TheWitcher.png",
    "title": "سریال TheWitcher",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۸.۰"
  },
  {
    "to": "/series/predatorbadlands",
    "image": "/images/PredatorBadlands.png",
    "title": "سریال PredatorBadlands",
    "sub": "ژانر - کمدی",
    "rating": "⭐ ۸.۰"
  }
]

const scifiCards = [
  {
    "to": "/series/pluribus",
    "image": "/images/Pluribus.png",
    "title": "سریال Pluribus",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۹.۱"
  },
  {
    "to": "/series/strengthinks",
    "image": "/images/Stranger_Things_5.png",
    "title": "سریال Stranger Things",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۸.۵"
  },
  {
    "to": "/series/pluribus",
    "image": "/images/Pluribus.png",
    "title": "سریال Pluribus",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۹.۱"
  },
  {
    "to": "/series/strengthinks",
    "image": "/images/Stranger_Things_5.png",
    "title": "سریال Stranger Things",
    "sub": "ژانر - علمی تخیلی",
    "rating": "⭐ ۸.۵"
  }
]

export default function Series() {
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
