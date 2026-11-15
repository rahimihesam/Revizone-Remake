import { Link } from 'react-router-dom'

export default function Footer() {
  return (
      <footer>
        <div className="container footer-grid" style={{transition: "0.3s"}}>
          <div>
            <h3>درباره Revizone</h3>
            <p>Revizone یک پلتفرم جامع برای نقد و بررسی فیلم‌ها، سریال‌ها و بازی‌ها است. تحلیل‌ها و مقالات ما به شما کمک می‌کند بهترین انتخاب‌ها را تجربه کنید.</p>
            <br />
            <Link to="/about" className="btn">درباره ما بیشتر بدانید</Link>
          </div>
          <div style={{transition: "0.5s"}}>
            <h3>لینک‌های سریع</h3>
            <ul>
              <li style={{transition: "0.5s"}}>
                <Link to="/movies">فیلم‌ها</Link>
              </li>
              <li style={{transition: "0.5s"}}>
                <Link to="/series">سریال‌ها</Link>
              </li>
              <li style={{transition: "0.5s"}}>
                <Link to="/games">بازی‌ها</Link>
              </li>
              <li style={{transition: "0.5s"}}>
                <Link to="/articles">مقالات</Link>
              </li>
            </ul>
          </div>
          <div style={{transition: "0.5s"}}>
            <h3>ما را دنبال کنید</h3>
            <div className="socials" style={{transition: "0.5s"}}>
              <a href="#" style={{background: "#b8925a", transition: "0.3s"}}>
                <i className="fab fa-facebook-f" style={{color: "var(--bg)"}} />
              </a>
              <a href="#" style={{background: "#b8925a", transition: "0.3s"}}>
                <i className="fab fa-twitter" style={{color: "var(--bg)"}} />
              </a>
              <a href="#" style={{background: "#b8925a", transition: "0.3s"}}>
                <i className="fab fa-instagram" style={{color: "var(--bg)"}} />
              </a>
            </div>
          </div>
        </div>
        <div style={{borderTop: "1px solid rgba(0, 0, 0, 0.05)", padding: "5px 0", textAlign: "center", color: "var(--muted)", fontSize: "13px"}}>© 2025 Revizone. همه حقوق محفوظ است.</div>
      </footer>
  )
}
