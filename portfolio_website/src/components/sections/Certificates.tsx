"use client";

import { useState } from "react";
import { Award, ExternalLink, FileText, Download } from "lucide-react";

const CERTIFICATES = [
    {
        title: "AI Course Completion",
        issuer: "Academic",
        file: "245816372_AI_Course.pdf",
    },
    {
        title: "IBM SkillsBuild Completion",
        issuer: "IBM",
        file: "Completion Certificate _ SkillsBuild.pdf",
    },
    {
        title: "Coursera Specialization",
        issuer: "Coursera",
        file: "Coursera 5RGOQPR1HJVP.pdf",
    },
    {
        title: "Deloitte Virtual Internship",
        issuer: "Deloitte",
        file: "Delloite Virtual Internship.pdf",
    },
    {
        title: "Technical Achievement",
        issuer: "Academic",
        file: "Prateek_245816372 (2).pdf",
    },
];

export function CertificatesSection() {
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
                gap: "clamp(2rem, 3vw, 4rem)",
                maxWidth: "75rem",
                margin: "0 auto",
                width: "100%",
            }}
        >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                    <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.5em",
                        color: "rgba(236,239,244,0.3)",
                        textTransform: "uppercase",
                        marginBottom: "1rem",
                    }}>
                        ✦ Recognition
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(3rem, 6.5vw, 6.5vw)",
                            lineHeight: 0.9,
                            letterSpacing: "-0.03em",
                            color: "#ECEFF4",
                            margin: 0,
                        }}
                    >
                        Certificates &
                        <br />
                        <span style={{ color: "#ECEFF4" }}>
                            Achievements
                        </span>
                    </h2>
                </div>
            </div>

            {/* Certificates Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(clamp(16rem, 25vw, 22rem), 1fr))",
                gap: "1.5rem",
                width: "100%",
            }}>
                {CERTIFICATES.map((cert, i) => (
                    <div
                        key={i}
                        data-cursor="hover"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            position: "relative",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "1.25rem",
                            padding: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                            transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                            transform: hoveredIndex === i ? "translateY(-8px)" : "translateY(0)",
                            borderColor: hoveredIndex === i ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                            backgroundBlendMode: "overlay",
                            overflow: "hidden",
                        }}
                    >
                        {/* Glow effect on hover */}
                        <div style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "100px",
                            height: "100px",
                            background: "radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 70%)",
                            opacity: hoveredIndex === i ? 1 : 0,
                            transition: "opacity 0.4s ease",
                            pointerEvents: "none",
                        }} />

                        {/* Icon */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div style={{
                                width: "3.5rem",
                                height: "3.5rem",
                                borderRadius: "1rem",
                                background: "rgba(255,255,255,0.05)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: hoveredIndex === i ? "#ECEFF4" : "rgba(236,239,244,0.4)",
                                transition: "all 0.3s ease",
                                transform: hoveredIndex === i ? "scale(1.1)" : "scale(1)",
                            }}>
                                <Award size={24} />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <div style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 9,
                                letterSpacing: "0.25em",
                                color: "rgba(236,239,244,0.4)",
                                textTransform: "uppercase",
                                marginBottom: "0.5rem",
                            }}>
                                {cert.issuer}
                            </div>
                            <h3 style={{
                                fontFamily: "'Cabinet Grotesk', sans-serif",
                                fontWeight: 800,
                                fontSize: "1.25rem",
                                color: "#ECEFF4",
                                margin: 0,
                                lineHeight: 1.2,
                                letterSpacing: "-0.01em",
                            }}>
                                {cert.title}
                            </h3>
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
                            <a
                                href={`/certificates/${cert.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                    padding: "0.75rem",
                                    borderRadius: "0.75rem",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#ECEFF4",
                                    textDecoration: "none",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: 9,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                                }}
                            >
                                <ExternalLink size={12} />
                                View
                            </a>
                            <a
                                href={`/certificates/${cert.file}`}
                                download
                                style={{
                                    width: "3rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "0.75rem",
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    color: "rgba(236,239,244,0.4)",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.color = "#ECEFF4";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.color = "rgba(236,239,244,0.4)";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                                }}
                            >
                                <Download size={14} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
