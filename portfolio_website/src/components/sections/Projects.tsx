"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const WORK_ITEMS = [
    {
        title: "SideQuest Reel I",
        category: "MOTION DESIGN",
        link: "https://www.instagram.com/p/DQO7nSMjIFL/",
        thumb: "/reel1-thumb.png",
        year: "2025",
    },
    {
        title: "SideQuest Reel II",
        category: "VIDEO EDITING",
        link: "https://www.instagram.com/p/DTpR-I1k97D/",
        thumb: "/reel2-thumb.png",
        year: "2025",
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
                gap: "clamp(1.5rem, 2.5vw, 2rem)",
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
                        color: "#F1F5F9",
                        margin: 0,
                    }}
                >
                    Featured
                    <br />
                    <span
                        style={{
                            fontStyle: "italic",
                            WebkitTextStroke: "1px rgba(167,139,250,0.6)",
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
                        color: "rgba(241,245,249,0.25)",
                        textTransform: "uppercase",
                        paddingBottom: "0.5rem",
                    }}
                >
                    ✦ Creative Projects
                </div>
            </div>

            {/* Cards grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
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
                            border: `1px solid ${hoveredIndex === i ? "rgba(124,58,237,0.4)" : "rgba(241,245,249,0.08)"}`,
                            overflow: "hidden",
                            position: "relative",
                            aspectRatio: "16 / 9",
                            textDecoration: "none",
                            cursor: "none",
                            transition: "border-color 0.4s, transform 0.4s cubic-bezier(0.23,1,0.32,1)",
                            transform: hoveredIndex === i ? "scale(1.01)" : "scale(1)",
                        }}
                    >
                        {/* Thumbnail image */}
                        <Image
                            src={item.thumb}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{
                                objectFit: "cover",
                                transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
                                transform: hoveredIndex === i ? "scale(1.04)" : "scale(1)",
                            }}
                        />

                        {/* Always-visible dark gradient at bottom for text legibility */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: "50%",
                                background: "linear-gradient(to top, rgba(8,12,20,0.9) 0%, transparent 100%)",
                                zIndex: 1,
                            }}
                        />

                        {/* Hover tint */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "rgba(8,12,20,0.5)",
                                opacity: hoveredIndex === i ? 1 : 0,
                                transition: "opacity 0.4s",
                                zIndex: 2,
                            }}
                        />

                        {/* Info — always visible */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "1.5rem",
                                left: "1.5rem",
                                right: "1.5rem",
                                zIndex: 3,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: 10,
                                        letterSpacing: "0.45em",
                                        color: "#A78BFA",
                                        textTransform: "uppercase",
                                        marginBottom: "0.35rem",
                                    }}
                                >
                                    {item.category} — {item.year}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'Cabinet Grotesk', sans-serif",
                                        fontWeight: 900,
                                        fontSize: "clamp(1.25rem, 2vw, 2vw)",
                                        color: "#F1F5F9",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {item.title}
                                </div>
                            </div>

                            <div
                                style={{
                                    opacity: hoveredIndex === i ? 1 : 0,
                                    transform: hoveredIndex === i ? "translateY(0)" : "translateY(6px)",
                                    transition: "opacity 0.3s, transform 0.3s",
                                }}
                            >
                                <ExternalLink size={20} color="#A78BFA" strokeWidth={1.5} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
