"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const WORK_ITEMS = [
    {
        title: "SideQuest Reel I",
        category: "MOTION DESIGN",
        description: "High-energy promotional reel produced for the SideQuest Gaming Club community.",
        link: "https://www.instagram.com/p/DQO7nSMjIFL/",
        year: "2025",
        num: "01",
    },
    {
        title: "SideQuest Reel II",
        category: "VIDEO EDITING",
        description: "Event highlight reel capturing the competitive energy of the gaming community.",
        link: "https://www.instagram.com/p/DTpR-I1k97D/",
        year: "2025",
        num: "02",
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
                gap: "clamp(2rem, 3vw, 3rem)",
            }}
        >
            {/* Title row */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <h2
                    style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(3.5rem, 9vw, 9vw)",
                        lineHeight: 0.9,
                        letterSpacing: "-0.03em",
                        color: "#ECEFF4",
                        margin: 0,
                    }}
                >
                    Featured
                    <br />
                    <span
                        style={{
                            fontStyle: "italic",
                            WebkitTextStroke: "1px rgba(94,234,212,0.5)",
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
                        color: "rgba(236,239,244,0.2)",
                        textTransform: "uppercase",
                        paddingBottom: "0.5rem",
                    }}
                >
                    ✦ Creative Projects
                </div>
            </div>

            {/* Work list — no images, just clean text cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
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
                            display: "grid",
                            gridTemplateColumns: "3rem 1fr 1fr auto",
                            gap: "2rem",
                            padding: "1.75rem 0",
                            borderBottom: "1px solid rgba(236,239,244,0.07)",
                            textDecoration: "none",
                            cursor: "none",
                            alignItems: "center",
                            transition: "background 0.3s",
                            background: hoveredIndex === i ? "rgba(0,229,204,0.03)" : "transparent",
                        }}
                    >
                        {/* Number */}
                        <span
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 11,
                                letterSpacing: "0.3em",
                                color: hoveredIndex === i ? "#00E5CC" : "rgba(236,239,244,0.2)",
                                transition: "color 0.3s",
                            }}
                        >
                            {item.num}
                        </span>

                        {/* Title + description */}
                        <div>
                            <div
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 900,
                                    fontSize: "clamp(1.5rem, 2.5vw, 2.5vw)",
                                    color: "#ECEFF4",
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.1,
                                    marginBottom: "0.4rem",
                                }}
                            >
                                {item.title}
                            </div>
                            <div
                                style={{
                                    fontFamily: "'Satoshi', sans-serif",
                                    fontSize: "clamp(0.85rem, 1vw, 1rem)",
                                    color: "rgba(236,239,244,0.4)",
                                    lineHeight: 1.5,
                                }}
                            >
                                {item.description}
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
                                    color: "#00E5CC",
                                }}
                            >
                                <ArrowUpRight size={20} strokeWidth={1.5} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Subtle CTA hint */}
            <p
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.4em",
                    color: "rgba(236,239,244,0.18)",
                    textTransform: "uppercase",
                }}
            >
                ↑ Click any row to view on Instagram
            </p>
        </section>
    );
}
