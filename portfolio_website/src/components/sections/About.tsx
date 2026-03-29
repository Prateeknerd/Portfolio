"use client";

import Image from "next/image";

export function AboutSection() {
    const stats = [
        { value: "2+", label: "Years Coding" },
        { value: "3", label: "Languages" },
        { value: "B.Tech", label: "CSE-DS" },
    ];

    return (
        <section
            className="section-root"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                padding: "clamp(1.5rem, 5vw, 4rem)",
                paddingTop: "clamp(5rem, 9vw, 7rem)",
                gap: "clamp(2rem, 5vw, 4rem)",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Left column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div>
                    <div
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            letterSpacing: "0.5em",
                            color: "#7C3AED",
                            textTransform: "uppercase",
                            marginBottom: "1.5rem",
                        }}
                    >
                        ✦ About Me
                    </div>

                    <h2
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(2.5rem, 6vw, 6vw)",
                            lineHeight: 0.95,
                            letterSpacing: "-0.03em",
                            margin: 0,
                        }}
                    >
                        <span style={{ color: "#F1F5F9" }}>CS Student</span>
                        <br />
                        <span
                            style={{
                                fontStyle: "italic",
                                WebkitTextStroke: "1px rgba(167,139,250,0.7)",
                                color: "transparent",
                            }}
                        >
                            Data Science
                        </span>
                    </h2>
                </div>

                <p
                    style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "clamp(0.95rem, 1.15vw, 1.15rem)",
                        color: "rgba(241,245,249,0.55)",
                        lineHeight: 1.75,
                        maxWidth: "36rem",
                    }}
                >
                    Sophomore Computer Science Engineering student specializing in Data Science
                    at Manipal Academy of Higher Education, Bengaluru. I build with Python, Java,
                    and C — analyzing data, building algorithms, and exploring ML fundamentals.
                    <br /><br />
                    Outside of academics, I lead the video content production for SideQuest Gaming
                    Club, applying the same systematic thinking to creative storytelling.
                </p>

                {/* Stats row */}
                <div style={{ display: "flex", gap: "clamp(1.5rem, 4vw, 3rem)" }}>
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div
                                style={{
                                    fontFamily: "'Cabinet Grotesk', sans-serif",
                                    fontWeight: 900,
                                    fontSize: "clamp(2rem, 3.5vw, 3.5vw)",
                                    color: "#F1F5F9",
                                    lineHeight: 1,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 10,
                                    letterSpacing: "0.4em",
                                    color: "rgba(241,245,249,0.3)",
                                    textTransform: "uppercase",
                                    marginTop: "0.4rem",
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills strip */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {["Python", "Java", "C", "Data Science", "Pandas", "SQL", "DaVinci Resolve"].map(skill => (
                        <span
                            key={skill}
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 10,
                                letterSpacing: "0.2em",
                                color: "rgba(167,139,250,0.8)",
                                background: "rgba(124,58,237,0.12)",
                                border: "1px solid rgba(124,58,237,0.2)",
                                borderRadius: "0.4rem",
                                padding: "0.3rem 0.65rem",
                                textTransform: "uppercase",
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right column — image, NO grayscale or hover filter */}
            <div
                data-cursor="hover"
                style={{
                    position: "relative",
                    aspectRatio: "4/5",
                    borderRadius: "2rem",
                    overflow: "hidden",
                    maxHeight: "75vh",
                    alignSelf: "center",
                }}
            >
                {/* Violet glow bottom-right */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: "60%",
                        height: "60%",
                        background: "radial-gradient(ellipse at bottom right, rgba(124,58,237,0.55), transparent 70%)",
                        filter: "blur(30px)",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                />

                <Image
                    src="/profile-pic.jpg"
                    alt="Prateek Tammisetty"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                        objectFit: "cover",
                        zIndex: 1,
                    }}
                />

                {/* Subtle vignette border overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "2rem",
                        border: "1px solid rgba(124,58,237,0.25)",
                        zIndex: 2,
                        pointerEvents: "none",
                    }}
                />
            </div>
        </section>
    );
}
