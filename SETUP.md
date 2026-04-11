# 🚀 Developer Portfolio — Setup Guide

## Supabase Setup

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click **"New Project"**, fill in name & password
3. Copy your **Project URL** and **Anon Key** from Settings → API

### 2. Create the `projects` table
Go to **Table Editor → New Table** or run this SQL in the **SQL Editor**:

```sql
create table if not exists projects (
  id            bigint primary key generated always as identity,
  title         text not null,
  description   text,
  image         text,
  tech_stack    text[] default '{}',
  live_url      text,
  github_url    text,
  created_at    timestamptz default now()
);

-- Enable Row Level Security
alter table projects enable row level security;

-- Allow public read
create policy "Public read" on projects
  for select using (true);
```

### 3. Create the `messages` table

```sql
create table if not exists messages (
  id          bigint primary key generated always as identity,
  name        text not null,
  email       text not null,
  message     text not null,
  created_at  timestamptz default now()
);

alter table messages enable row level security;

-- Allow public insert (contact form submissions)
create policy "Public insert" on messages
  for insert with check (true);
```

### 4. Seed sample project data

```sql
insert into projects (title, description, image, tech_stack, live_url, github_url) values
(
  'E-Commerce Dashboard',
  'Full-featured admin dashboard with real-time analytics and order tracking.',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  array['React', 'Supabase', 'Tailwind'],
  'https://your-live-demo.com',
  'https://github.com/yourusername/project'
),
(
  'Weather App',
  'Beautiful weather app with 7-day forecasts and geolocation support.',
  'https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80',
  array['React', 'JavaScript', 'CSS'],
  'https://your-live-demo.com',
  'https://github.com/yourusername/project'
);
```

---

## Environment Variables

Create a `.env` file at the project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

> ⚠️ Never commit `.env` to Git. It's already in `.gitignore`.

---

## AOS (Animate On Scroll) Usage

AOS is initialized in `src/App.jsx`:

```js
AOS.init({
  duration: 700,       // Animation duration in ms
  easing: 'ease-out-cubic',
  once: true,          // Animate only once on scroll
  offset: 60,          // Offset from viewport edge
})
```

### Available AOS attributes used in this project:

| Attribute | Effect |
|-----------|--------|
| `data-aos="fade-up"` | Fades in from below |
| `data-aos="fade-down"` | Fades in from above |
| `data-aos="fade-right"` | Slides in from left |
| `data-aos="fade-left"` | Slides in from right |
| `data-aos="zoom-in"` | Zooms in |
| `data-aos="flip-left"` | Flips from left |
| `data-aos-delay="200"` | Adds 200ms delay |
| `data-aos-duration="1000"` | Custom duration |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav with smooth scroll
│   ├── Hero.jsx         # Landing section with animations
│   ├── About.jsx        # Bio + stats
│   ├── Skills.jsx       # Progress bars + badges
│   ├── Projects.jsx     # Grid with filter tabs
│   ├── Contact.jsx      # Form with validation
│   └── Footer.jsx       # Footer with scroll-to-top
├── services/
│   ├── supabase.js      # Supabase client init
│   ├── projectsService.js  # Fetch projects
│   └── contactService.js   # Submit form
├── hooks/
│   └── useProjects.js   # Projects + filter state
├── App.jsx              # Root + AOS init
├── main.jsx
└── index.css            # Global styles + Tailwind
```

---

## Local Development

```bash
npm install
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
```

---

## Customization Checklist

- [ ] Replace "Alex Chen" with your name in `Hero.jsx` and `About.jsx`
- [ ] Update social links in `Hero.jsx` and `Contact.jsx`
- [ ] Add your actual projects to Supabase
- [ ] Update contact email in `Contact.jsx`
- [ ] Replace avatar initials "AC" in `About.jsx` with your photo
- [ ] Update title/tagline to match your role
- [ ] Set your `.env` values from Supabase dashboard
