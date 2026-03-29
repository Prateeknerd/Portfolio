"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface NavLink {
    label: string;
    index: number;
    preview?: string;
}

interface CircularNavProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
    currentSection: number;
}

const NAV_LINKS: NavLink[] = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Work", index: 2, preview: "/profile-pic.jpg" },
    { label: "Contact", index: 3 },
];

export function CircularNav({ isOpen, onClose, onNavigate, currentSection }: CircularNavProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleNavigate = (index: number) => {
        onNavigate(index);
        onClose();
    };

    return (
        <div
            id="circular-nav"
            className={isOpen ? "open" : ""}
            style={{
                position: "fixed",
                inset: 0,
                background: "#080808",
                zIndex: 1000,
                clipPath: isOpen ? "circle(150% at 95% 5%)" : "circle(0% at 95% 5%)",
                transition: "clip-path 0.8s cubic-bezier(0.23,1,0.32,1)",
                display: "flex",
                alignItems: "center",
                pointerEvents: isOpen ? "all" : "none",
            }}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                data-cursor="hover"
                style={{
                    position: "absolute",
                    top: "clamp(1.5rem, 3vw, 2.5rem)",
                    right: "clamp(1.5rem, 4vw, 3rem)",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    cursor: "none",
                    transition: "border-color 0.3s, background 0.3s",
                    backdropFilter: "blur(20px)",
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#7C3AED";
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
            >
                <X size={18} />
            </button>

            {/* Nav links */}
            <nav
                style={{
                    paddingLeft: "clamp(2.5rem, 10vw, 10rem)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >
                {NAV_LINKS.map((link, i) => (
                    <button
                        key={link.label}
                        onClick={() => handleNavigate(link.index)}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        data-cursor="hover"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "none",
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(3.5rem, 8vw, 8rem)",
                            lineHeight: 1.05,
                            WebkitTextStroke: hoveredIndex === i ? "0px" : "1px rgba(241,245,249,0.5)",
                            color: hoveredIndex === i ? "#A78BFA" : "transparent",
                            transform: hoveredIndex === i ? "translateX(20px)" : "translateX(0)",
                            transition: "color 0.35s cubic-bezier(0.23,1,0.32,1), transform 0.35s cubic-bezier(0.23,1,0.32,1), -webkit-text-stroke 0.35s",
                            opacity: isOpen ? 1 : 0,
                            transitionDelay: isOpen ? `${i * 0.07 + 0.3}s` : "0s",
                            textAlign: "left",
                            display: "block",
                        }}
                    >
                        {link.label}
                    </button>
                ))}
            </nav>

            {/* Preview image */}
            {hoveredIndex !== null && NAV_LINKS[hoveredIndex]?.preview && (
                <div
                    style={{
                        position: "absolute",
                        right: "clamp(4rem, 12vw, 12rem)",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 280,
                        height: 380,
                        borderRadius: "1rem",
                        overflow: "hidden",
                        opacity: 0.8,
                        pointerEvents: "none",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={NAV_LINKS[hoveredIndex].preview}
                        alt="preview"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            )}

            {/* Mono label bottom */}
            <div
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "clamp(2.5rem, 10vw, 10rem)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.5em",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                }}
            >
                PORTFOLIO — 2026
            </div>
        </div>
    );
}
