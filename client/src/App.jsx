import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Games from './pages/Games'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import MediaReviewPage from './pages/MediaReviewPage'
import SearchPage from './pages/SearchPage'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:slug" element={<MediaReviewPage kind="film" />} />
          <Route path="series" element={<Series />} />
          <Route path="series/:slug" element={<MediaReviewPage kind="series" />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:slug" element={<MediaReviewPage kind="game" />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticlePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
