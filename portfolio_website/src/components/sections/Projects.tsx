"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "SideQuest Reel 1",
        description: "High-energy promotional reel edited for the Manipal SideQuest Gaming Club to boost engagement.",
        techStack: ["DaVinci Resolve", "After Effects", "Gaming Highlights"],
        embedUrl: "https://www.instagram.com/p/DQO7nSMjIFL/embed",
        githubLink: null,
        liveDemo: "https://www.instagram.com/p/DQO7nSMjIFL/",
    },
    {
        title: "SideQuest Reel 2",
        description: "Event highlight reel showcasing the competitive gaming atmosphere and community.",
        techStack: ["DaVinci Resolve", "Color Grading", "Motion Graphics"],
        embedUrl: "https://www.instagram.com/p/DTpR-I1k97D/embed",
        githubLink: null,
        liveDemo: "https://www.instagram.com/p/DTpR-I1k97D/",
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                    Featured Projects
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 hover:border-primary/40 transition-all duration-300"
                    >
                        {/* Image / Embed Container */}
                        <div className="relative h-[300px] sm:h-[400px] w-full bg-black overflow-hidden flex items-center justify-center">
                            {project.embedUrl ? (
                                <iframe
                                    src={project.embedUrl}
                                    title={project.title}
                                    className="w-full h-full border-none"
                                    scrolling="no"
                                    allow="encrypted-media"
                                    loading="lazy"
                                ></iframe>
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-muted-foreground/50 font-poppins font-medium">
                                    [Project Image]
                                </div>
                            )}
                        </div>

                        {/* Content Container */}
                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-3">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.techStack.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-foreground/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 mt-auto">
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors"
                                    >
                                        <ExternalLink className="h-4 w-4" /> View Post
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 glass text-sm font-medium rounded-xl hover:bg-white/10 transition-colors"
                                    >
                                        <Github className="h-4 w-4" /> Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
