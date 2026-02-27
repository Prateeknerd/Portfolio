import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { SlideUp } from "@/components/animations/MotionWrappers";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary">
      <Navigation />

      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-[#0F172A]">
        {/* Subtle gradients matching the Tech Stack doc for depth */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-50 translate-y-[-50%] translate-x-[-20%]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-secondary/10 blur-[120px] rounded-full mix-blend-screen opacity-50 translate-x-[20%] translate-y-[20%]"></div>
      </div>

      {/* Main Container - 12 Column Grid Base inherited by sections */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 flex flex-col gap-16 md:gap-24 overflow-hidden">
        <Hero />
        <SlideUp><About /></SlideUp>
        <SlideUp><Skills /></SlideUp>
        <SlideUp><Projects /></SlideUp>
        <SlideUp><Contact /></SlideUp>
      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5 mt-20 relative z-10 bg-background/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Designed & Built with Next.js, Tailwind CSS, & shadcn/ui.</p>
      </footer>
    </div>
  );
}
