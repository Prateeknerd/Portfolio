"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

const WORK_ITEMS = [
    {
        title: "SideQuest Reel I",
        category: "VIDEO EDITING",
        link: "https://www.instagram.com/p/DQO7nSMjIFL/",
        bg: "#1a0a00",
    },
    {
        title: "SideQuest Reel II",
        category: "MOTION GRAPHICS",
        link: "https://www.instagram.com/p/DTpR-I1k97D/",
        bg: "#120000",
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
                position: "relative",
                gap: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
        >
            {/* Section title */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <h2
                    style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(3.5rem, 9vw, 9vw)",
                        lineHeight: 0.9,
                        letterSpacing: "-0.03em",
                        color: "white",
                        margin: 0,
                    }}
                >
                    Featured
                    <br />
                    <span
                        style={{
                            fontStyle: "italic",
                            WebkitTextStroke: "1px white",
                            color: "transparent",
                        }}
                    >
                        Work
                    </span>
                </h2>
                <div
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.5em",
                        color: "rgba(255,255,255,0.3)",
                        textTransform: "uppercase",
                        paddingBottom: "0.5rem",
                    }}
                >
                    ✦ Selected Projects
                </div>
            </div>

            {/* Cards grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.5rem",
                    flex: 1,
                    minHeight: 0,
                }}
            >
                {WORK_ITEMS.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            display: "block",
                            borderRadius: "1.5rem",
                            border: "1px solid rgba(255,255,255,0.1)",
                            background: item.bg,
                            overflow: "hidden",
                            position: "relative",
                            aspectRatio: "16 / 9",
                            textDecoration: "none",
                            cursor: "none",
                            transition: "border-color 0.4s",
                            borderColor: hoveredIndex === i ? "rgba(255,77,0,0.5)" : "rgba(255,255,255,0.1)",
                        }}
                    >
                        {/* Background gradient */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: `radial-gradient(ellipse at 60% 50%, rgba(255,77,0,0.15), transparent 70%)`,
                                transition: "opacity 0.4s",
                                opacity: hoveredIndex === i ? 1 : 0.4,
                            }}
                        />

                        {/* Hover overlay */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "rgba(0,0,0,0.4)",
                                opacity: hoveredIndex === i ? 1 : 0,
                                transition: "opacity 0.4s cubic-bezier(0.23,1,0.32,1)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                padding: "2rem",
                                gap: "0.5rem",
                                zIndex: 2,
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 10,
                                    letterSpacing: "0.5em",
                                    color: "#FF4D00",
                                    textTransform: "uppercase",
                                }}
                            >
                                {item.category}
                            </div>
                            <div
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 900,
                                    fontSize: "clamp(1.5rem, 2.5vw, 2.5vw)",
                                    color: "white",
                                    letterSpacing: "-0.02em",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                {item.title}
                                <ExternalLink size={18} strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Resting state label */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "1.5rem",
                                left: "1.5rem",
                                opacity: hoveredIndex === i ? 0 : 1,
                                transition: "opacity 0.3s",
                                zIndex: 1,
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 10,
                                    letterSpacing: "0.4em",
                                    color: "rgba(255,255,255,0.3)",
                                    textTransform: "uppercase",
                                }}
                            >
                                {item.category}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
