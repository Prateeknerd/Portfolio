"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
    {
        title: "Gesture Virtual Mouse",
        category: "COMPUTER VISION",
        description: "Hand-gesture controlled mouse using OpenCV and MediaPipe. Controls cursor, clicks, scrolls, and double-clicks via real-time hand tracking — no physical mouse needed.",
        tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
        link: "https://github.com/Prateeknerd",
        year: "2026",
        num: "01",
    },
    {
        title: "Shopping Mall System",
        category: "FULL-STACK",
        description: "Desktop application for mall management with customer, employee, and store modules. Features complete CRUD operations with Oracle SQL backend via Python DB-API.",
        tech: ["Python", "Tkinter", "Oracle SQL", "cx_Oracle"],
        link: "https://github.com/Prateeknerd",
        year: "2026",
        num: "02",
    },
    {
        title: "Aim Trainer",
        category: "GAME DEV",
        description: "JavaFX-based reaction-time training game with dynamic target spawning, score tracking, lives system, and performance analytics across multiple sessions.",
        tech: ["Java", "JavaFX", "OOP"],
        link: "https://github.com/Prateeknerd",
        year: "2026",
        num: "03",
    },
    {
        title: "Vault — Finance Tracker",
        category: "MOBILE APP",
        description: "Cross-platform personal finance app built with Flutter. Tracks income, expenses, and savings with clean data visualisation and local persistence.",
        tech: ["Flutter", "Dart", "Hive DB"],
        link: "https://github.com/Prateeknerd",
        year: "2026",
        num: "04",
    },
    {
        title: "Portfolio Website",
        category: "WEB DEV",
        description: "This very site — built with Next.js, TypeScript, and custom animations. Features interactive wave canvas, magnetic cursor, and cinematic section transitions.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/Prateeknerd/pfolio",
        year: "2026",
        num: "05",
    },
];

export function WorkSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section
            className="section-root"
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "clamp(1.5rem, 4vw, 3rem)",
                paddingTop: "clamp(5rem, 9vw, 7rem)",
                overflow: "hidden",
                gap: "clamp(1rem, 1.5vw, 1.5rem)",
            }}
        >
            {/* Title row */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <h2
                    style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(3rem, 8vw, 8vw)",
                        lineHeight: 0.9,
                        letterSpacing: "-0.03em",
                        color: "#ECEFF4",
                        margin: 0,
                    }}
                >
                    Projects
                </h2>
                <div
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.5em",
                        color: "rgba(236,239,244,0.2)",
                        textTransform: "uppercase",
                        paddingBottom: "0.5rem",
                    }}
                >
                    ✦ Technical Work
                </div>
            </div>

            {/* Project list */}
            <div 
                data-scrollable="true"
                style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "1px", 
                    overflowY: "auto", 
                    flex: 1,
                    paddingRight: "0.5rem", // Add space for potential hidden scrollbar logic
                }}
            >
                {/* Header row */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "3rem 1fr 1fr auto",
                        gap: "2rem",
                        padding: "0 0 0.75rem 0",
                        borderBottom: "1px solid rgba(236,239,244,0.08)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.4em",
                        color: "rgba(236,239,244,0.25)",
                        textTransform: "uppercase",
                    }}
                >
                    <span>No.</span>
                    <span>Project</span>
                    <span>Type</span>
                    <span>Year</span>
                </div>

                {PROJECTS.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "3rem 1fr 1fr auto",
                            gap: "2rem",
                            padding: "1.5rem 0",
                            borderBottom: "1px solid rgba(236,239,244,0.06)",
                            textDecoration: "none",
                            cursor: "none",
                            alignItems: "center",
                            transition: "background 0.3s",
                            background: hoveredIndex === i ? "rgba(255,255,255,0.03)" : "transparent",
                        }}
                    >
                        {/* Number */}
                        <span
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 11,
                                letterSpacing: "0.3em",
                                color: hoveredIndex === i ? "#ECEFF4" : "rgba(236,239,244,0.2)",
                                transition: "color 0.3s",
                            }}
                        >
                            {item.num}
                        </span>

                        {/* Title + description + tech */}
                        <div>
                            <div
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 900,
                                    fontSize: "clamp(1.2rem, 2vw, 2vw)",
                                    color: "#ECEFF4",
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.1,
                                    marginBottom: "0.35rem",
                                }}
                            >
                                {item.title}
                            </div>
                            <div
                                style={{
                                    fontFamily: "'Satoshi', sans-serif",
                                    fontSize: "clamp(0.78rem, 0.9vw, 0.9rem)",
                                    color: "rgba(236,239,244,0.35)",
                                    lineHeight: 1.5,
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {item.description}
                            </div>
                            {/* Tech badges */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                                {item.tech.map(t => (
                                    <span key={t} style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: 8,
                                        letterSpacing: "0.15em",
                                        color: "rgba(236,239,244,0.45)",
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "0.25rem",
                                        padding: "0.15rem 0.45rem",
                                        textTransform: "uppercase",
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Category */}
                        <span
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 10,
                                letterSpacing: "0.35em",
                                color: "rgba(236,239,244,0.3)",
                                textTransform: "uppercase",
                            }}
                        >
                            {item.category}
                        </span>

                        {/* Year + arrow */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 11,
                                    letterSpacing: "0.2em",
                                    color: "rgba(236,239,244,0.25)",
                                }}
                            >
                                {item.year}
                            </span>
                            <div
                                style={{
                                    opacity: hoveredIndex === i ? 1 : 0,
                                    transform: hoveredIndex === i ? "translate(0,0)" : "translate(-6px,6px)",
                                    transition: "opacity 0.25s, transform 0.25s",
                                    color: "#ECEFF4",
                                }}
                            >
                                <Github size={18} strokeWidth={1.5} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* CTA hint */}
            <p
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.4em",
                    color: "rgba(236,239,244,0.15)",
                    textTransform: "uppercase",
                }}
            >
                ↑ Click any row to view on GitHub
            </p>
        </section>
    );
}
