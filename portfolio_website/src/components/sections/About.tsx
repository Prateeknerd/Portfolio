"use client";

import Image from "next/image";

export function AboutSection() {
    const stats = [
        { value: "2+", label: "Years Editing" },
        { value: "20+", label: "Reels Published" },
        { value: "CSE", label: "Data Science" },
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
                    {/* Mono label */}
                    <div
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            letterSpacing: "0.5em",
                            color: "#FF4D00",
                            textTransform: "uppercase",
                            marginBottom: "1.5rem",
                        }}
                    >
                        ✦ About Me
                    </div>

                    {/* Display heading */}
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
                        <span style={{ color: "white" }}>Head of</span>
                        <br />
                        <span
                            style={{
                                fontStyle: "italic",
                                WebkitTextStroke: "1px white",
                                color: "transparent",
                            }}
                        >
                            Video Editing
                        </span>
                    </h2>
                </div>

                {/* Bio text */}
                <p
                    style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.75,
                        maxWidth: "36rem",
                    }}
                >
                    Sophomore Computer Science Engineering student specializing in Data Science
                    at Manipal Academy of Higher Education, Bengaluru. I lead visual content
                    production for SideQuest Gaming Club — editing and publishing Instagram reels
                    that capture the energy of our gaming community.
                    <br /><br />
                    Beyond the timeline, I'm proficient in Python, Java and C. I believe the
                    best stories live at the intersection of logic and creativity.
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
                                    color: "white",
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
                                    color: "rgba(255,255,255,0.35)",
                                    textTransform: "uppercase",
                                    marginTop: "0.4rem",
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right column — image */}
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
                {/* Orange glow bottom-right */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: "60%",
                        height: "60%",
                        background: "radial-gradient(ellipse at bottom right, rgba(255,77,0,0.6), transparent 70%)",
                        filter: "blur(30px)",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                />

                <Image
                    src="/profile-pic.jpg"
                    alt="Prateek Tammisetty"
                    fill
                    className="about-image"
                    style={{
                        objectFit: "cover",
                        filter: "grayscale(1) contrast(1.05)",
                        transition: "filter 0.6s cubic-bezier(0.23,1,0.32,1)",
                        zIndex: 1,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(0) contrast(1)")}
                    onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(1) contrast(1.05)")}
                />

                {/* Image border overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "2rem",
                        border: "1px solid rgba(255,255,255,0.1)",
                        zIndex: 2,
                        pointerEvents: "none",
                    }}
                />
            </div>
        </section>
    );
}
