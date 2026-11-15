/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

// ⚠️ DEMO ONLY: users live in localStorage and passwords are stored as plain text.
// When the Node server is ready, replace login/register/logout with API calls (hashed passwords + JWT/session).

const USERS_KEY = 'revizone-users'
const SESSION_KEY = 'revizone-session'

export const ROLES = {
  admin: 'مدیر',
  critic_film: 'منتقد فیلم',
  critic_series: 'منتقد سریال',
  critic_game: 'منتقد بازی',
  user: 'کاربر',
}
export const CRITIC_ROLE = { film: 'critic_film', series: 'critic_series', game: 'critic_game' }

export function roleHome(role) {
  return (
    {
      admin: '/admin',
      critic_film: '/critic/film',
      critic_series: '/critic/series',
      critic_game: '/critic/game',
    }[role] || '/'
  )
}

const seedUsers = [
  { id: 'u1', name: 'مدیر سایت', email: 'admin@revizone.ir', password: 'admin123', role: 'admin' },
  { id: 'u2', name: 'منتقد فیلم', email: 'film@revizone.ir', password: 'film123', role: 'critic_film' },
  { id: 'u3', name: 'منتقد سریال', email: 'series@revizone.ir', password: 'series123', role: 'critic_series' },
  { id: 'u4', name: 'منتقد بازی', email: 'game@revizone.ir', password: 'game123', role: 'critic_game' },
]

function read(key, fallback) {
  try {
    const v = localStorage.getItem(key)
    return v ? JSON.parse(v) : fallback
  } catch {
    return fallback
  }
}
function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable: data just won't persist */
  }
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const stored = read(USERS_KEY, null)
    if (stored) return stored
    write(USERS_KEY, seedUsers)
    return seedUsers
  })
  const [sessionId, setSessionId] = useState(() => read(SESSION_KEY, null))

  const saveUsers = useCallback((next) => {
    setUsers(next)
    write(USERS_KEY, next)
  }, [])

  const user = useMemo(() => {
    const u = users.find((x) => x.id === sessionId)
    if (!u) return null
    const { password: _password, ...safe } = u
    return safe
  }, [users, sessionId])

  const login = useCallback(
    (email, password) => {
      const u = users.find((x) => x.email.toLowerCase() === email.trim().toLowerCase())
      if (!u || u.password !== password) return { ok: false, error: 'ایمیل یا رمز عبور اشتباه است.' }
      setSessionId(u.id)
      write(SESSION_KEY, u.id)
      return { ok: true, role: u.role }
    },
    [users],
  )

  const register = useCallback(
    ({ name, email, password, wantsCritic }) => {
      if (users.some((x) => x.email.toLowerCase() === email.trim().toLowerCase()))
        return { ok: false, error: 'این ایمیل قبلاً ثبت شده است.' }
      const u = {
        id: `u${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        password,
        role: 'user',
        requestedRole: wantsCritic ? CRITIC_ROLE[wantsCritic] : undefined,
      }
      saveUsers([...users, u])
      setSessionId(u.id)
      write(SESSION_KEY, u.id)
      return { ok: true }
    },
    [users, saveUsers],
  )

  const logout = useCallback(() => {
    setSessionId(null)
    write(SESSION_KEY, null)
  }, [])

  const updateUser = useCallback(
    (id, patch) => saveUsers(users.map((u) => (u.id === id ? { ...u, ...patch } : u))),
    [users, saveUsers],
  )
  const removeUser = useCallback((id) => saveUsers(users.filter((u) => u.id !== id)), [users, saveUsers])

  const value = useMemo(
    () => ({ user, users, login, register, logout, updateUser, removeUser }),
    [user, users, login, register, logout, updateUser, removeUser],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
