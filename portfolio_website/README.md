# 🚀 Prateek's Portfolio

A high-performance, visually stunning portfolio website built with the latest web technologies. This project showcases my skills, projects, and professional journey with a focus on seamless animations and premium user experience.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Preview+Coming+Soon)

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router) and React 19.
- **Premium Animations**: Smooth, high-performance animations using **GSAP** and **Framer Motion**.
- **Responsive Design**: Fully optimized for all screen sizes using **Tailwind CSS v4**.
- **Dynamic Content**:
  - **Hero Section**: Engaging introduction with dynamic text.
  - **About Me**: Detailed professional background.
  - **Projects Showcase**: Interactive grid featuring my best work.
  - **Skills Grid**: Visual representation of my technical expertise.
  - **Contact Form**: Fully functional contact section powered by **EmailJS**.
- **Visual Excellence**: Includes grain overlays, section progress tracking, and custom UI components.
- **Performance Optimized**: Leverages Next.js server components and Vercel Analytics.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio_website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio_website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root and add your EmailJS keys:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Project Structure

```text
src/
├── components/
│   ├── core/          # Reusable base components (GrainOverlay, SectionProgress)
│   ├── layout/        # Layout components (Header, Footer)
│   └── sections/      # Page sections (Hero, About, Projects, Skills, Contact)
├── app/               # Next.js App Router pages
└── styles/            # Global styles and Tailwind configuration
```

## 🌐 Deployment

The easiest way to deploy this project is via the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Configure your environment variables in the Vercel dashboard.
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with 💻 and ☕ by [Prateek](https://github.com/Prateeknerd)
