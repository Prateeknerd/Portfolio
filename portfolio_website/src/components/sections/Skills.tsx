"use client";

import { Monitor, Code, Database, Layout, Video } from "lucide-react";
import {
    FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
    SiC, SiOracle, SiUbuntu, SiGnubash, SiVercel,
    SiTailwindcss, SiTypescript, SiFramer, SiNextdotjs
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";


const skillCategories = [
    {
        title: "Programming / Web",
        icon: <Code className="h-6 w-6 text-primary" />,
        skills: [
            { name: "Python", icon: <FaPython className="h-8 w-8 text-blue-500" /> },
            { name: "Java", icon: <FaJava className="h-8 w-8 text-orange-500" /> },
            { name: "C", icon: <SiC className="h-8 w-8 text-blue-600" /> },
        ],
    },
    {
        title: "Databases & Tools",
        icon: <Database className="h-6 w-6 text-secondary" />,
        skills: [
            { name: "Oracle SQL", icon: <SiOracle className="h-8 w-8 text-red-500" /> },
            { name: "Ubuntu Linux", icon: <SiUbuntu className="h-8 w-8 text-orange-600" /> },
            { name: "Shell Scripts", icon: <SiGnubash className="h-8 w-8 text-foreground" /> },
            { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-orange-500" /> },
            { name: "GitHub", icon: <FaGithub className="h-8 w-8 text-foreground" /> },
            { name: "VS Code", icon: <TbBrandVscode className="h-8 w-8 text-blue-500" /> },
        ],
    },
    {
        title: "Video Editing & Content",
        icon: <Video className="h-6 w-6 text-primary" />,
        skills: [
            { name: "DaVinci Resolve", icon: <SiDavinciresolve className="h-8 w-8 text-blue-500" /> },
            { name: "After Effects", icon: <SiAdobeaftereffects className="h-8 w-8 text-[#9999FF]" /> },
        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                    Technical Skills
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="glass p-6 md:p-8 rounded-3xl group hover:border-primary/30 transition-all duration-300 flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-poppins font-semibold text-foreground">
                                {category.title}
                            </h3>
                        </div>

                        <div className="grid grid-cols-3 gap-4 flex-grow content-start">
                            {category.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group/skill"
                                    title={skill.name}
                                >
                                    <div className="mb-2 transition-transform duration-300 group-hover/skill:scale-110">
                                        {skill.icon}
                                    </div>
                                    <span className="text-[10px] text-center font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
