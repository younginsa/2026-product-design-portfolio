# sayoungin.xyz — Cowork Project Context

## Who I am
I'm Youngin Sa, a Product Designer. I'm not a developer — all code in this project was written by Claude and Cursor. When helping me, always explain technical decisions in plain language, and never assume I know what code does unless I ask.

## What this project is
My personal website and blog, live at sayoungin.xyz, hosted on GitHub Pages.

## Tech stack
- **Framework:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + Shadcn/ui (59 components)
- **Icons:** Lucide React
- **Font:** Geist
- **Dark mode:** next-themes
- **Deploy:** Static export → GitHub Pages

## Current folder structure
```
app/
├── layout.tsx
├── page.tsx              ← main homepage
├── globals.css
└── project/[slug]/
    └── page.tsx          ← dynamic project detail pages

components/
├── header.tsx
├── featured-project.tsx
├── project-card.tsx
└── ui/                   ← Shadcn components

lib/
├── projects.ts           ← hardcoded project data
└── utils.ts

public/
├── videos/
└── images/
```

## How I push to GitHub
I use terminal git commands:
```
git add .
git commit -m "message"
git push
```
Always remind me to push after making changes.

## Current goals
1. **Add a blog page** to sayoungin.xyz — does not exist yet, needs to be built from scratch
2. **Add blog content** across these categories:
   - Insights & learnings (design thinking, things I've discovered)
   - Work documentation (case studies, process notes, outputs from Claude chats)
   - Side projects (explorations, experiments)
3. **Keep the site updated** — design, content, and structure improvements over time

## Blog tone & style
- Personal and casual — written like a real human, not a corporate blog
- Reflects my voice as a designer: thoughtful, curious, honest
- Avoid overly technical language unless necessary
- Short paragraphs, easy to read

## How blog posts get written
- Sometimes I write and Claude polishes
- Sometimes Claude drafts from my notes or chat exports
- Always match my casual, personal tone

## Blog post format (default)
Each post should have:
- Title
- Date
- Category tag (Insights, Work Documentation, or Side Project)
- Body content in MDX or markdown
- Optional: images or code snippets

## Important constraints
- This is a **static site** — no CMS, no database
- Blog posts should be stored as `.md` or `.mdx` files in a `/content/blog/` folder
- Next.js should read and render them at build time
- Must remain compatible with GitHub Pages static export (`output: 'export'` in next.config)
- Do not break existing pages (homepage, project detail pages)

## What "done" looks like
- `/blog` route exists and lists all posts
- Individual post pages work at `/blog/[slug]`
- Design matches the existing site style
- Works on both desktop and mobile
- Successfully pushed to GitHub and live on sayoungin.xyz
