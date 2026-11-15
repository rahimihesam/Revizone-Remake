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
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import CriticFilm from './pages/CriticFilm'
import CriticSeries from './pages/CriticSeries'
import CriticGame from './pages/CriticGame'
import ProtectedRoute from './components/common/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<ProtectedRoute roles={['admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="critic/film" element={<ProtectedRoute roles={['critic_film', 'admin']}><CriticFilm /></ProtectedRoute>} />
          <Route path="critic/series" element={<ProtectedRoute roles={['critic_series', 'admin']}><CriticSeries /></ProtectedRoute>} />
          <Route path="critic/game" element={<ProtectedRoute roles={['critic_game', 'admin']}><CriticGame /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}
