import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem, FloatingElement } from "@/components/animations/MotionWrappers";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 flex items-center min-h-[90vh]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
                {/* Text Content */}
                <StaggerContainer className="col-span-1 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                    <StaggerItem className="inline-block px-4 py-2 rounded-full glass mb-6 text-sm font-medium text-secondary">
                        Data Science & Video Editing
                    </StaggerItem>
                    <StaggerItem>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold tracking-tight mb-6 text-foreground">
                            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Prateek</span>
                        </h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                            Sophomore Computer Science Engineering student specializing in Data Science at Manipal Academy of Higher Education, Bengaluru. Video Editing Head for SideQuest Gaming Club.
                        </p>
                    </StaggerItem>
                    <StaggerItem className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button asChild size="lg" className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-base">
                            <Link href="#projects">
                                View My Work <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full glass border-white/10 hover:bg-white/10 font-medium text-base">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                Download Resume <Download className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </StaggerItem>
                </StaggerContainer>

                {/* Profile Image Glass Card */}
                <div className="col-span-1 md:col-span-5 flex justify-center order-1 md:order-2">
                    {/* 
            Will add Framer Motion float here in Phase 4 
            Using a placeholder div if no image is available yet 
          */}
                    <FloatingElement delay={0.2} className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:max-w-md aspect-square rounded-full md:rounded-[40px] glass p-2 overflow-hidden shadow-2xl shadow-primary/20 hover:border-primary/50 transition-colors duration-500">
                        {/* Actual Image component - pointing to placeholder until user provides image */}
                        <div className="w-full h-full rounded-full md:rounded-[32px] overflow-hidden bg-muted/50 relative">
                            <Image
                                src="/profile-pic.jpg"
                                alt="Prateek"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </FloatingElement>
                </div>
            </div>
        </section>
    );
}
