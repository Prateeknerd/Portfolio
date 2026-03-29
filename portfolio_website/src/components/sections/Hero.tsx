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
                    color: "#7C3AED",
                    textTransform: "uppercase",
                }}
            >
                ✦ CSE / Data Science — Manipal 2026
            </div>

            {/* Main hero text */}
            <div style={{ position: "relative", zIndex: 10 }}>
                {/* Solid line */}
                <h1
                    style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(4rem, 14vw, 14vw)",
                        lineHeight: 0.92,
                        color: "#F1F5F9",
                        letterSpacing: "-0.03em",
                        margin: 0,
                    }}
                >
                    Prateek
                </h1>

                {/* Italic outline with violet depth blob */}
                <div style={{ position: "relative", display: "inline-block" }}>
                    <div
                        style={{
                            position: "absolute",
                            inset: "-20% -10%",
                            background: "radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 70%)",
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
                            WebkitTextStroke: "1px rgba(167,139,250,0.6)",
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

            {/* Footer row */}
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
                        fontSize: "clamp(1rem, 1.4vw, 1.4rem)",
                        color: "rgba(241,245,249,0.45)",
                        maxWidth: "32rem",
                        lineHeight: 1.65,
                        margin: 0,
                    }}
                >
                    Computer Science student specialising in Data Science.
                    Building with Python, Java & C — and occasionally a timeline.
                </p>

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
                        color: "rgba(241,245,249,0.3)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        transition: "color 0.3s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#A78BFA")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(241,245,249,0.3)")}
                >
                    SCROLL
                    <ArrowDown size={14} />
                </button>
            </div>
        </section>
    );
}
