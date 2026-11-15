import { ROLES } from '../../context/AuthContext'

/** Users table with edit + delete. Pass `reviews` to also show per-user review counts (critic tabs). */
export default function UsersTable({ users, currentUserId, reviews, onEdit, onDelete, emptyText = 'کاربری پیدا نشد.' }) {
  if (users.length === 0) return <p className="rz-muted">{emptyText}</p>
  const mine = (id) => (reviews ? reviews.filter((r) => r.authorId === id) : [])

  return (
    <div className="rz-table-wrap">
      <table className="rz-table">
        <thead>
          <tr>
            <th>نام</th>
            <th>ایمیل</th>
            <th>نقش</th>
            {reviews && <th>نقدها</th>}
            {reviews && <th>منتشرشده</th>}
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td dir="ltr">{u.email}</td>
              <td>
                <span className="rz-role">{ROLES[u.role] ?? u.role}</span>
                {u.requestedRole && <span className="rz-badge pending" title="درخواست تغییر نقش">درخواست {ROLES[u.requestedRole]}</span>}
              </td>
              {reviews && <td>{mine(u.id).length.toLocaleString('fa-IR')}</td>}
              {reviews && <td>{mine(u.id).filter((r) => r.status === 'published').length.toLocaleString('fa-IR')}</td>}
              <td>
                <span className="rz-actions">
                  <button className="rz-btn sm" onClick={() => onEdit(u)}>تغییر</button>
                  <button className="rz-btn sm danger" disabled={u.id === currentUserId} onClick={() => onDelete(u)}>حذف</button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
