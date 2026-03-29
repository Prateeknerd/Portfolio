"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export function AboutSection() {
    const stats = [
        { value: "2+", label: "Years Coding" },
        { value: "CSE-DS", label: "Specialisation" },
        { value: "MIT", label: "Institute" },
    ];

    return (
        <section
            className="section-root"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr min(100%, 24rem)",
                padding: "clamp(1.5rem, 5vw, 4rem)",
                paddingTop: "clamp(5rem, 9vw, 7rem)",
                gap: "clamp(1rem, 2.5vw, 2rem)",
                alignItems: "start",
                overflow: "hidden",
            }}
        >
            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
                <div>
                    <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.5em",
                        color: "#00E5CC",
                        textTransform: "uppercase",
                        marginBottom: "1.5rem",
                    }}>
                        ✦ About Me
                    </div>

                    <h2 style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(2.5rem, 5.5vw, 5.5vw)",
                        lineHeight: 0.95,
                        letterSpacing: "-0.03em",
                        margin: 0,
                    }}>
                        <span style={{ color: "#ECEFF4" }}>Data Science</span>
                        <br />
                        <span style={{ color: "#ECEFF4" }}>Student &</span>
                        <br />
                        <span style={{
                            fontStyle: "italic",
                            WebkitTextStroke: "1px rgba(94,234,212,0.5)",
                            color: "transparent",
                        }}>
                            Video Editor
                        </span>
                    </h2>
                </div>

                <p style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: "clamp(0.92rem, 1.1vw, 1.1rem)",
                    color: "rgba(236,239,244,0.5)",
                    lineHeight: 1.8,
                    maxWidth: "36rem",
                }}>
                    Sophomore Computer Science Engineering student specializing in Data Science
                    at Manipal Institute of Technology, Bengaluru. I work with Python, Java,
                    and C — building data pipelines, exploring ML, and solving algorithmic problems.
                    <br /><br />
                    Outside of academics, I serve as Video Editing Head for SideQuest Gaming Club —
                    creating motion-edited reels that bring the community&apos;s energy to life.
                </p>

                {/* Resume Button */}
                <div>
                    <a
                        href="/resume.pdf"
                        download="Prateek_Tammisetty_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            background: "rgba(0,229,204,0.1)",
                            border: "1px solid rgba(0,229,204,0.25)",
                            padding: "0.75rem 1.25rem",
                            borderRadius: "0.5rem",
                            color: "#00E5CC",
                            textDecoration: "none",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            cursor: "none",
                            transition: "background 0.3s, transform 0.3s",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(0,229,204,0.2)";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(0,229,204,0.1)";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                    >
                        <span>Download Resume</span>
                        <Download size={16} />
                    </a>
                </div>

                {/* Stats */}
                <div style={{ display: "flex", gap: "clamp(1.5rem, 4vw, 3rem)" }}>
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontWeight: 900,
                                fontSize: "clamp(1.5rem, 2.5vw, 2.5vw)",
                                color: "#ECEFF4",
                                lineHeight: 1,
                                letterSpacing: "-0.02em",
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 9,
                                letterSpacing: "0.4em",
                                color: "rgba(236,239,244,0.25)",
                                textTransform: "uppercase",
                                marginTop: "0.35rem",
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skill pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {["Python", "Java", "C", "Data Science", "SQL", "Pandas", "DaVinci Resolve"].map(skill => (
                        <span key={skill} style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 9,
                            letterSpacing: "0.2em",
                            color: "rgba(0,229,204,0.8)",
                            background: "rgba(0,229,204,0.06)",
                            border: "1px solid rgba(0,229,204,0.15)",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.6rem",
                            textTransform: "uppercase",
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right — profile image, no filters */}
            <div
                data-cursor="hover"
                style={{
                    position: "relative",
                    aspectRatio: "4/5",
                    borderRadius: "2rem",
                    overflow: "hidden",
                    width: "100%",
                    marginTop: "calc(10px + 1.5rem)",
                }}
            >
                {/* Teal glow */}
                <div style={{
                    position: "absolute",
                    bottom: 0, right: 0,
                    width: "55%", height: "55%",
                    background: "radial-gradient(ellipse at bottom right, rgba(0,229,204,0.4), transparent 70%)",
                    filter: "blur(30px)",
                    zIndex: 0,
                    pointerEvents: "none",
                }} />

                <Image
                    src="/profile-pic.jpg"
                    alt="Prateek Tammisetty"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", zIndex: 1 }}
                />

                <div style={{
                    position: "absolute", inset: 0,
                    borderRadius: "2rem",
                    border: "1px solid rgba(0,229,204,0.15)",
                    zIndex: 2,
                    pointerEvents: "none",
                }} />
            </div>
        </section>
    );
}
