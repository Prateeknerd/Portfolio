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
            {/* Mono tag */}
            <div style={{
                position: "absolute",
                top: "clamp(5rem, 9vw, 7rem)",
                left: "clamp(1.5rem, 4vw, 3rem)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.5em",
                color: "rgba(236,239,244,0.5)",
                textTransform: "uppercase",
            }}>
                ✦ CSE / Data Science — Manipal
            </div>

            {/* Main type */}
            <div style={{ position: "relative", zIndex: 10 }}>
                <h1 style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(4rem, 14vw, 14vw)",
                    lineHeight: 0.92,
                    color: "#ECEFF4",
                    letterSpacing: "-0.03em",
                    margin: 0,
                }}>
                    Prateek
                </h1>

                <div style={{ position: "relative", display: "inline-block" }}>
                    <div style={{
                        position: "absolute",
                        inset: "-20% -10%",
                        background: "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)",
                        filter: "blur(40px)",
                        pointerEvents: "none",
                        zIndex: 0,
                    }} />
                    <h1 style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(4rem, 14vw, 14vw)",
                        lineHeight: 0.92,
                        color: "#ECEFF4",
                        letterSpacing: "-0.03em",
                        margin: 0,
                        position: "relative",
                        zIndex: 1,
                    }}>
                        Tammisetty
                    </h1>
                </div>
            </div>

            {/* Footer row */}
            <div style={{
                position: "absolute",
                bottom: "clamp(2rem, 5vw, 4rem)",
                left: "clamp(1.5rem, 4vw, 3rem)",
                right: "clamp(1.5rem, 4vw, 3rem)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
            }}>
                <p style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: "clamp(1rem, 1.4vw, 1.4rem)",
                    color: "rgba(236,239,244,0.4)",
                    maxWidth: "32rem",
                    lineHeight: 1.65,
                    margin: 0,
                }}>
                    Computer Science student specialising in Data Science.
                    Building with Python, Java & C — solving real-world problems through code.
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
                        color: "rgba(236,239,244,0.25)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        transition: "color 0.3s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#ECEFF4")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(236,239,244,0.25)")}
                >
                    SCROLL
                    <ArrowDown size={14} />
                </button>
            </div>
        </section>
    );
}
