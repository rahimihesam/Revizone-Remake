import { useCallback, useState } from 'react'

// ⚠️ DEMO ONLY: critic reviews are kept in localStorage until the server exists.
const KEY = 'revizone-critic-reviews'

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? []
  } catch {
    return []
  }
}

export default function useReviews() {
  const [reviews, setReviews] = useState(read)

  const commit = useCallback((next) => {
    setReviews(next)
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch {
      /* storage unavailable */
    }
  }, [])

  const save = useCallback(
    (review) =>
      commit(
        reviews.some((r) => r.id === review.id)
          ? reviews.map((r) => (r.id === review.id ? { ...r, ...review } : r))
          : [{ ...review, id: `r${Date.now()}`, createdAt: Date.now() }, ...reviews],
      ),
    [reviews, commit],
  )
  const setStatus = useCallback(
    (id, status) => commit(reviews.map((r) => (r.id === id ? { ...r, status } : r))),
    [reviews, commit],
  )
  const remove = useCallback((id) => commit(reviews.filter((r) => r.id !== id)), [reviews, commit])

  return { reviews, save, setStatus, remove }
}
