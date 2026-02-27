# Personal Portfolio Website - Development Checklist

This document is derived from the *Product Requirements Document (PRD)*, *Design Document*, and *Technology Stack Document*. It breaks the project into structured, actionable development phases optimized for **Next.js**, **Tailwind CSS**, and a **Glassmorphism** design.

---

## 🏗️ Phase 1: Setup & Initialization
*Establishes the foundation, dependencies, and version control.*

- [ ] **Setup 1: Initialize Next.js Project**
  - **Action**: Run `npx create-next-app@latest portfolio --typescript --tailwind --eslint --app`
  - **Dependency**: None
- [ ] **Setup 2: Install Dependencies**
  - **Action**: Install required packages: `framer-motion`, `lucide-react`, `@emailjs/browser`, `clsx`, `tailwind-merge` (for shadcn).
  - **Dependency**: Setup 1
- [ ] **Setup 3: Configure shadcn/ui**
  - **Action**: Run `npx shadcn-ui@latest init` to initialize the dark mode theme. Add basic required components (e.g., button, card, input, textarea).
  - **Dependency**: Setup 2
- [ ] **Setup 4: Configure Tailwind & CSS Variables**
  - **Action**: Update `tailwind.config.ts` with brand colors (Primary Background: `#0F172A`, Accent Glow: `#6366F1`, Secondary: `#22D3EE`). 
  - **Dependency**: Setup 1
- [ ] **Setup 5: Version Control**
  - **Action**: Initialize Git repository, commit initial setup, and push to GitHub.
  - **Dependency**: Setup 1

## 🎨 Phase 2: UI Development (Core System)
*Sets up the typography, grid layouts, and Glassmorphism utilities.*

- [ ] **UI 1: Design System & Glassmorphism Utilities**
  - **Action**: Create a `glass` utility class in `globals.css` (or `tailwind.config.ts`) (e.g., `bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl`).
  - **Dependency**: Setup 4
- [ ] **UI 2: Typography Implementation**
  - **Action**: Implement fonts via `next/font/google`: **Inter** (Primary Body), **Poppins** (Headings), **JetBrains Mono** (Code blocks). Apply to `app/layout.tsx`.
  - **Dependency**: Setup 1
- [ ] **UI 3: Application Shell & Grid**
  - **Action**: Scaffold `app/layout.tsx` targeting a dark mode base (`bg-[#0F172A] text-slate-100`). Create a responsive 12-column grid container component.
  - **Dependency**: UI 2

## 🧩 Phase 3: Component Development
*Building out the static content sections outlined in the PRD.*

- [ ] **Comp 1: Navigation Bar**
  - **Action**: Build a sticky header with glassmorphism containing links to Home, About, Skills, Projects, Resume, Contact.
  - **Dependency**: UI 1, UI 3
- [ ] **Comp 2: Hero Section**
  - **Action**: Build 2-column layout (on desktop) with name, role, tagline, CTA buttons (`#6366F1` primary), and a profile image housed in a glass card.
  - **Dependency**: UI 1
- [ ] **Comp 3: About Me Section**
  - **Action**: Create section displaying biography, background, education, and career goals inside a glassmed section.
  - **Dependency**: UI 1
- [ ] **Comp 4: Skills Section**
  - **Action**: Build individual glass skill cards mapping out programming languages and tools using `lucide-react` icons and progress bars.
  - **Dependency**: UI 1, Setup 2
- [ ] **Comp 5: Projects Section**
  - **Action**: Design standard project cards displaying a preview image, title, tech stack labels, description, and action buttons for Live Demo and GitHub.
  - **Dependency**: UI 1
- [ ] **Comp 6: Resume & Contact Section**
  - **Action**: Combine or build sequentially: Resume section with Quick Highlights and download PDF button. Contact section showing a form (Name, Email, Message) configured with **EmailJS**, and social media links.
  - **Dependency**: Setup 2 (EmailJS), Setup 3 (shadcn inputs)

## ✨ Phase 4: Animation (Framer Motion)
*Weaving in motion-driven interaction as per the Design docs.*

- [ ] **Anim 1: Page Load Transitions**
  - **Action**: Add subtle fade-in and slide-up transitions (150-300ms) for the Hero section and initial viewport content.
  - **Dependency**: Comp 2
- [ ] **Anim 2: Scroll Reveal Effects**
  - **Action**: Implement scroll-triggered animations for About, Skills, Projects, and Contact sections using Framer Motion's `whileInView`.
  - **Dependency**: Comp 3, Comp 4, Comp 5
- [ ] **Anim 3: Hover & Interaction Effects**
  - **Action**: Add hover elevations (`hover:-translate-y-1`) and border glow variants (`hover:border-[#6366F1]`) for Project and Skill cards.
  - **Dependency**: Comp 4, Comp 5
- [ ] **Anim 4: Hero Parallax & Float**
  - **Action**: Apply an infinite floating/bobbing animation to the profile glass card in the Hero section.
  - **Dependency**: Comp 2

## 📱 Phase 5: Responsiveness
*Ensuring seamless mobile and tablet viewing.*

- [ ] **Resp 1: Mobile Layout Adjustments (< 768px)**
  - **Action**: Ensure grids collapse to a single stacked column (`grid-cols-1`). Implement a mobile hamburger menu for the Navigation Bar.
  - **Dependency**: Phase 3 Components
- [ ] **Resp 2: Tablet Adjustments (768px - 1024px)**
  - **Action**: Verify the two-column grid (`md:grid-cols-2`) aligns perfectly for Projects and Skills sections.
  - **Dependency**: Phase 3 Components
- [ ] **Resp 3: UI Stress Testing**
  - **Action**: Validate proper touch targets, text size scaling, and padding specifically inside the glass cards across different viewports.
  - **Dependency**: Resp 1, Resp 2

## 🚀 Phase 6: Deployment
*Preparing the site for production and tracking.*

- [ ] **Deploy 1: SEO & Metadata**
  - **Action**: Populate `<title>`, `<meta>` descriptions, keywords, and OpenGraph metadata in Next.js `metadata` export in `app/layout.tsx`.
  - **Dependency**: Phase 3 Component structure
- [ ] **Deploy 2: Performance & Accessibility Audit**
  - **Action**: Ensure `<Image />` component is used everywhere for lazy loading. Validate contrast ratios and keyboard navigation (especially on the Contact Form).
  - **Dependency**: Phase 3, Phase 5
- [ ] **Deploy 3: Vercel Analytics Integration**
  - **Action**: Inject `<Analytics />` from `@vercel/analytics/react`.
  - **Dependency**: Setup 2
- [ ] **Deploy 4: Final Vercel Deployment**
  - **Action**: Push final code to GitHub. Connect repo to Vercel. Set `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` as environment variables in Vercel. Trigger build and verify live URL.
  - **Dependency**: Deploy 1, Deploy 2, Deploy 3

---

## 📌 Recommended Order of Execution & Dependencies

1. **Phase 1 (Setup)** completely unlocks Phase 2. Ensure Tailwind logic and shadcn CLI are operational before writing custom components.
2. **Phase 2 (UI Development)** establishes the base `layout.tsx` and core CSS classes (specifically the `glassmorphism` utility), serving as the foundation for the entire app.
3. **Phase 3 (Component Development)** should be built completely **static** first. Do not worry about animations or mobile views yet. Focus on building the DOM structure and layout correctly using CSS grid/flex.
4. **Phase 5 (Responsiveness)** is next. Once desktop is built, tweak breakpoints (`md:`, `lg:`) so the components stack appropriately on smaller screens.
5. **Phase 4 (Animation)** is applied *after* components are responsive. Applying Framer Motion wrappers after the CSS layout is dialed in prevents motion-based layout bugs.
6. **Phase 6 (Deployment)** wraps it up. Ensure environment variables for EmailJS are strictly set *only* in production and tested.
