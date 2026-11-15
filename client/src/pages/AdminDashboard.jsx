import { useState } from 'react'
import { ROLES, useAuth } from '../context/AuthContext'
import useReviews from '../hooks/useReviews'
import StatCard from '../components/panel/StatCard'
import UsersTable from '../components/panel/UsersTable'
import ReviewList from '../components/panel/ReviewList'
import EditUserModal from '../components/panel/EditUserModal'
import EditReviewModal from '../components/panel/EditReviewModal'
import '../styles/panel.css'

const KINDS = {
  film: { label: 'فیلم', role: 'critic_film', icon: 'fa-film' },
  series: { label: 'سریال', role: 'critic_series', icon: 'fa-tv' },
  game: { label: 'بازی', role: 'critic_game', icon: 'fa-gamepad' },
}
const tabs = [
  ['overview', 'نمای کلی', 'fa-gauge'],
  ['users', 'کاربران', 'fa-users'],
  ['reviews', 'نقدها', 'fa-file-lines'],
  ['film', 'منتقدان فیلم', 'fa-film'],
  ['series', 'منتقدان سریال', 'fa-tv'],
  ['game', 'منتقدان بازی', 'fa-gamepad'],
]
const statusFilters = [['all', 'همه'], ['pending', 'در انتظار'], ['published', 'منتشرشده'], ['rejected', 'ردشده'], ['draft', 'پیش‌نویس']]

export default function AdminDashboard() {
  const { user, users, updateUser, removeUser, logout } = useAuth()
  const { reviews, save, setStatus, remove } = useReviews()
  const [tab, setTab] = useState('overview')
  const [editUser, setEditUser] = useState(null)
  const [editReview, setEditReview] = useState(null)
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [kindFilter, setKindFilter] = useState('all')

  const ofKind = (kind) => reviews.filter((r) => r.kind === kind)
  const criticsOf = (kind) => users.filter((u) => u.role === KINDS[kind].role)
  const byDate = (a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0)
  const pendingRequests = users.filter((u) => u.requestedRole)
  const pendingReviews = reviews.filter((r) => r.status === 'pending')

  const deleteUser = (u) => window.confirm(`حذف ${u.name}؟`) && removeUser(u.id)
  const reviewActions = {
    onPublish: (r) => setStatus(r.id, 'published'),
    onReject: (r) => setStatus(r.id, 'rejected'),
    onEdit: setEditReview,
    onDelete: (r) => window.confirm('این نقد حذف شود؟') && remove(r.id),
  }

  const filteredUsers = users.filter(
    (u) =>
      (roleFilter === 'all' || u.role === roleFilter) &&
      (u.name.includes(query.trim()) || u.email.toLowerCase().includes(query.trim().toLowerCase())),
  )
  const filteredReviews = reviews
    .filter((r) => (statusFilter === 'all' || r.status === statusFilter) && (kindFilter === 'all' || r.kind === kindFilter))
    .sort(byDate)

  return (
    <main className="rz-panel">
      <div className="container">
        <div className="rz-panel-head">
          <div>
            <h1><i className="fas fa-gauge" aria-hidden="true" /> داشبورد مدیریت</h1>
            <p className="rz-muted">سلام {user.name}، همه‌چیز از اینجا مدیریت می‌شود.</p>
          </div>
          <button className="rz-btn" onClick={logout}>خروج</button>
        </div>

        <div className="rz-tabs" role="tablist">
          {tabs.map(([id, label, icon]) => (
            <button key={id} role="tab" aria-selected={tab === id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}>
              <i className={`fas ${icon}`} aria-hidden="true" /> {label}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <>
            <div className="rz-stats">
              <StatCard icon="fa-users" label="کاربران" value={users.length} />
              <StatCard icon="fa-pen-nib" label="منتقدان" value={users.filter((u) => u.role.startsWith('critic')).length} />
              <StatCard icon="fa-hourglass-half" label="نقد در انتظار تأیید" value={pendingReviews.length} />
              <StatCard icon="fa-circle-check" label="نقد منتشرشده" value={reviews.filter((r) => r.status === 'published').length} />
            </div>

            <div className="rz-kind-cards">
              {Object.entries(KINDS).map(([kind, k]) => (
                <section className="rz-kind-card" key={kind}>
                  <h2><i className={`fas ${k.icon}`} aria-hidden="true" /> {k.label}</h2>
                  <dl>
                    <div><dt>منتقدان</dt><dd>{criticsOf(kind).length.toLocaleString('fa-IR')}</dd></div>
                    <div><dt>کل نقدها</dt><dd>{ofKind(kind).length.toLocaleString('fa-IR')}</dd></div>
                    <div><dt>در انتظار</dt><dd>{ofKind(kind).filter((r) => r.status === 'pending').length.toLocaleString('fa-IR')}</dd></div>
                    <div><dt>منتشرشده</dt><dd>{ofKind(kind).filter((r) => r.status === 'published').length.toLocaleString('fa-IR')}</dd></div>
                  </dl>
                  <button className="rz-btn sm" onClick={() => setTab(kind)}>مدیریت منتقدان {k.label}</button>
                </section>
              ))}
            </div>

            <section className="rz-box">
              <h2>درخواست‌های منتقد شدن</h2>
              {pendingRequests.length === 0 ? (
                <p className="rz-muted">درخواستی وجود ندارد.</p>
              ) : (
                <ul className="rz-list">
                  {pendingRequests.map((u) => (
                    <li key={u.id}>
                      <span>{u.name} — {ROLES[u.requestedRole]}</span>
                      <span className="rz-actions">
                        <button className="rz-btn primary sm" onClick={() => updateUser(u.id, { role: u.requestedRole, requestedRole: undefined })}>تأیید</button>
                        <button className="rz-btn sm" onClick={() => updateUser(u.id, { requestedRole: undefined })}>رد</button>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="rz-box">
              <h2>نقدهای در انتظار تأیید</h2>
              <ReviewList items={[...pendingReviews].sort(byDate).slice(0, 5)} emptyText="نقدی در انتظار تأیید نیست." {...reviewActions} />
              {pendingReviews.length > 5 && (
                <button className="rz-btn sm" onClick={() => { setStatusFilter('pending'); setKindFilter('all'); setTab('reviews') }}>
                  دیدن همه ({pendingReviews.length.toLocaleString('fa-IR')})
                </button>
              )}
            </section>
          </>
        )}

        {tab === 'users' && (
          <section className="rz-box">
            <h2>همه‌ی کاربران</h2>
            <div className="rz-toolbar">
              <input type="search" placeholder="جستجوی نام یا ایمیل…" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="جستجوی کاربر" />
              <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} aria-label="فیلتر نقش">
                <option value="all">همه‌ی نقش‌ها</option>
                {Object.entries(ROLES).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
              </select>
            </div>
            <UsersTable users={filteredUsers} currentUserId={user.id} onEdit={setEditUser} onDelete={deleteUser} />
          </section>
        )}

        {tab === 'reviews' && (
          <section className="rz-box">
            <h2>همه‌ی نقدها</h2>
            <div className="rz-toolbar">
              <select value={kindFilter} onChange={(e) => setKindFilter(e.target.value)} aria-label="فیلتر نوع">
                <option value="all">همه‌ی انواع</option>
                {Object.entries(KINDS).map(([id, k]) => <option key={id} value={id}>{k.label}</option>)}
              </select>
            </div>
            <div className="rz-filters">
              {statusFilters.map(([id, label]) => (
                <button key={id} className={statusFilter === id ? 'active' : ''} onClick={() => setStatusFilter(id)}>{label}</button>
              ))}
            </div>
            <ReviewList items={filteredReviews} {...reviewActions} />
          </section>
        )}

        {KINDS[tab] && (
          <>
            <div className="rz-stats">
              <StatCard icon={KINDS[tab].icon} label={`منتقدان ${KINDS[tab].label}`} value={criticsOf(tab).length} />
              <StatCard icon="fa-file-lines" label="کل نقدها" value={ofKind(tab).length} />
              <StatCard icon="fa-hourglass-half" label="در انتظار تأیید" value={ofKind(tab).filter((r) => r.status === 'pending').length} />
              <StatCard icon="fa-circle-check" label="منتشرشده" value={ofKind(tab).filter((r) => r.status === 'published').length} />
            </div>
            <section className="rz-box">
              <h2>منتقدان {KINDS[tab].label}</h2>
              <UsersTable
                users={criticsOf(tab)}
                currentUserId={user.id}
                reviews={ofKind(tab)}
                onEdit={setEditUser}
                onDelete={deleteUser}
                emptyText={`هنوز منتقد ${KINDS[tab].label} ثبت نشده است. از تب «کاربران» نقش یک کاربر را تغییر دهید.`}
              />
            </section>
            <section className="rz-box">
              <h2>نقدهای {KINDS[tab].label}</h2>
              <ReviewList items={[...ofKind(tab)].sort(byDate)} {...reviewActions} />
            </section>
          </>
        )}
      </div>

      {editUser && (
        <EditUserModal
          user={editUser}
          users={users}
          isSelf={editUser.id === user.id}
          onClose={() => setEditUser(null)}
          onSave={(patch) => { updateUser(editUser.id, patch); setEditUser(null) }}
        />
      )}
      {editReview && (
        <EditReviewModal
          review={editReview}
          onClose={() => setEditReview(null)}
          onSave={(patch) => { save({ id: editReview.id, ...patch }); setEditReview(null) }}
        />
      )}
    </main>
  )
}
