"use client";

import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
    onNext: () => void;
}

export function HeroSection({ onNext }: HeroSectionProps) {
    return (
        <section
            className="section-root"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "clamp(1.5rem, 4vw, 3rem)",
                paddingTop: "clamp(5rem, 10vw, 8rem)",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Top-left mono tag */}
            <div
                style={{
                    position: "absolute",
                    top: "clamp(5rem, 9vw, 7rem)",
                    left: "clamp(1.5rem, 4vw, 3rem)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.5em",
                    color: "#FF4D00",
                    textTransform: "uppercase",
                }}
            >
                ✦ Data Science & Creative Media — 2026
            </div>

            {/* Main hero text */}
            <div style={{ position: "relative", zIndex: 10 }}>
                {/* Line 1 — solid */}
                <h1
                    style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(4rem, 14vw, 14vw)",
                        lineHeight: 0.92,
                        color: "white",
                        letterSpacing: "-0.03em",
                        margin: 0,
                    }}
                >
                    Prateek
                </h1>

                {/* Line 2 — italic outline with mesh blob behind */}
                <div style={{ position: "relative", display: "inline-block" }}>
                    {/* Depth blob behind outline text */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-20% -10%",
                            background: "radial-gradient(ellipse, rgba(255,77,0,0.35) 0%, transparent 70%)",
                            filter: "blur(40px)",
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    />
                    <h1
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(4rem, 14vw, 14vw)",
                            lineHeight: 0.92,
                            fontStyle: "italic",
                            WebkitTextStroke: "1px white",
                            color: "transparent",
                            letterSpacing: "-0.03em",
                            margin: 0,
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        Tammisetty
                    </h1>
                </div>
            </div>

            {/* Footer descriptor */}
            <div
                style={{
                    position: "absolute",
                    bottom: "clamp(2rem, 5vw, 4rem)",
                    left: "clamp(1.5rem, 4vw, 3rem)",
                    right: "clamp(1.5rem, 4vw, 3rem)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                }}
            >
                <p
                    style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
                        color: "rgba(255,255,255,0.55)",
                        maxWidth: "28rem",
                        lineHeight: 1.6,
                        margin: 0,
                    }}
                >
                    Sophomore CS student specializing in Data Science.
                    Video Editing Head @ SideQuest Gaming Club.
                </p>

                {/* Scroll down cue */}
                <button
                    onClick={onNext}
                    data-cursor="hover"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "none",
                        border: "none",
                        cursor: "none",
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        transition: "color 0.3s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#FF4D00")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                    SCROLL
                    <ArrowDown size={14} />
                </button>
            </div>
        </section>
    );
}
