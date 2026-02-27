"use client";

import { BookOpen, Code2, Clapperboard, GraduationCap } from "lucide-react";

export function About() {
    const highlights = [
        {
            icon: <Code2 className="h-6 w-6 text-primary" />,
            title: "Data Science",
            description: "Specializing in Data Science at Manipal Academy.",
        },
        {
            icon: <Clapperboard className="h-6 w-6 text-secondary" />,
            title: "Video Editing",
            description: "Head of Video Editing for SideQuest Gaming Club.",
        },
        {
            icon: <BookOpen className="h-6 w-6 text-primary" />,
            title: "Creative Storytelling",
            description: "Producing engaging visual content and reels.",
        },
        {
            icon: <GraduationCap className="h-6 w-6 text-secondary" />,
            title: "Education",
            description: "B.Tech in Computer Science Engineering (Sophomore).",
        },
    ];

    return (
        <section id="about" className="py-20 md:py-32">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                    About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Biography text */}
                <div className="glass p-8 md:p-10 rounded-3xl order-2 lg:order-1 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-2xl font-poppins font-semibold mb-4 text-foreground">
                        My Journey
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            I am a Sophomore Computer Science Engineering student specializing in Data Science at
                            Manipal Academy of Higher Education, Bengaluru. I have a proven track record in technical leadership
                            and professional digital content creation.
                        </p>
                        <p>
                            As the Video Editing Head for SideQuest Gaming Club, I lead visual content production, edit and
                            publish engaging Instagram reels, and collaborate directly with club members to drive creative
                            storytelling within our college gaming community.
                        </p>
                        <p>
                            Beyond coding in C, Java, and Python, my soft skills emphasize strong communication,
                            interpersonal adaptability, and team collaboration. I enjoy badminton, gaming, exploring cities,
                            and experiencing diverse food cultures!
                        </p>
                    </div>
                </div>

                {/* Highlight Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="p-3 rounded-lg bg-background/50 border border-white/5">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
