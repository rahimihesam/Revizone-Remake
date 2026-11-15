import { Link } from 'react-router-dom'
import '../styles/not-found.css'

export default function NotFound() {
  return (
    <>
      <div className="not-found-page">
        <section className="error-section">
          <div className="container">
            <div className="error-content">
              <div className="error-code">404</div>
              <h1 className="error-title">صفحه‌ای که دنبالش بودی یافت نشد.</h1>
              <p className="error-message">به نظر می‌رسد این صفحه یا حذف شده، یا آدرس آن تغییر کرده است. ممکن است هم فقط گم شده باشد — مثل بسیاری از اثرهای خوبی که هرگز نقد نمی‌شوند.</p>
              <Link to="/" className="btn-home">بازگشت به خانه</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
