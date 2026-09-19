# TODO — Role-Based Pages

## Current state
- Roles (mockData.js:14): `1` Admin (`admin@masaraga.gov.ph`, PIN-gated login), `2` Park Staff/Guide (`staff@masaraga.gov.ph`), `3` Hiker
- Routes (app.jsx): public pages (/, /about, /trail, /booking, /help, /contact, legal, /news/:id, /awards/:id) + hiker pages (/hiker/dashboard, /hiker/transactions, /hiker/passes, /hiker/messages, /hiker/profile)
- No Staff/Guide or Admin pages exist yet.
- Navbar already renders role badges for all 3 roles and lets you switch users (role 2 & 1 currently only see "Hiker Account" links).

## Pages needed — Park Staff / Guide (role 2)
- [ ] `/staff/dashboard` — today's climbs, guide duty, slot alerts (quota, weather/advisory closures), quick stats
- [ ] `/staff/schedules` — assigned groups (1 guide : 5 hikers), dates/trails/group size
- [ ] `/staff/verify` — QR pass & document check-in at jump-off (reuse `HikerTicketPass`, `DocumentChecklistForm`)
- [ ] `/staff/bookings` — approve/reject pending permits + submitted document checklist
- [ ] `/staff/groups/:id` — group roster for assigned hike (lead hiker + members)
- [ ] `/staff/messages` — group chat / announcements (reuse `ConversationList`, `Conversation`, `GCmember`)
- [ ] `/staff/reports` — daily trail log, incidents, summit check-ins

## Pages needed — Admin (role 1)
Everything in Staff, plus:
- [ ] `/admin/dashboard` — KPIs: bookings, revenue, daily quota usage, trail status, user counts
- [ ] `/admin/users` — manage hikers & staff accounts, roles, activation
- [ ] `/admin/bookings` — all bookings: approve/cancel/reschedule/refund
- [ ] `/admin/payments` — payment tracking (GCash/Maya/card/bank, ref numbers), refunds, revenue view
- [ ] `/admin/trails` — schedule & daily slot/quota management, booking calendar (reuse `Calendar`)
- [ ] `/admin/guides` — accredited guide registry + assignments
- [ ] `/admin/content` — create/edit News & Advisories (weather closures, advisories in mockData `NEWS`), awards/gallery
- [ ] `/admin/announcements` — broadcast to the `admin-announcements` channel
- [ ] `/admin/reports` — revenue breakdown (env fee/guide fee/processing), fill rates
- [ ] `/admin/settings` — fees, quotas, maintenance toggle (Maintenance page exists), audit

## Shared / foundation needed
- [ ] Role-aware routing & nav: gate routes by role (1/2 get their own nav sections), redirect unauthenticated -> /login, unauthorized -> /access-denied (exists)
- [ ] Login redirect (login.jsx:53): role-aware — staff -> /staff/dashboard, admin -> /admin/dashboard
- [ ] Stores: mirror `hikerStore.js` into `staffStore` / `adminStore` with new mock data (bookings, users, schedules, payments, content)