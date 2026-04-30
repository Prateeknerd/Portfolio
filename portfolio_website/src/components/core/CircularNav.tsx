"use client";

import { X } from "lucide-react";

interface CircularNavProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
    currentSection: number;
}

const NAV_LINKS = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Projects", index: 2 },
    { label: "Skills", index: 3 },
    { label: "Contact", index: 4 },
];

export function CircularNav({ isOpen, onClose, onNavigate }: CircularNavProps) {
    const handleNavigate = (index: number) => {
        onNavigate(index);
        onClose();
    };

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#111111",
                zIndex: 1000,
                clipPath: isOpen ? "circle(150% at 95% 5%)" : "circle(0% at 95% 5%)",
                transition: "clip-path 0.8s cubic-bezier(0.23,1,0.32,1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: "clamp(2.5rem, 10vw, 10rem)",
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
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    cursor: "none",
                    transition: "border-color 0.3s, background 0.3s",
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
            >
                <X size={18} />
            </button>

            {/* Nav links */}
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
                {NAV_LINKS.map((link, i) => (
                    <button
                        key={link.label}
                        onClick={() => handleNavigate(link.index)}
                        data-cursor="hover"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "none",
                            fontFamily: "'Cabinet Grotesk', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(3rem, 7vw, 7rem)",
                            lineHeight: 1.05,
                            WebkitTextStroke: "1px rgba(236,239,244,0.3)",
                            color: "transparent",
                            letterSpacing: "-0.02em",
                            textAlign: "left",
                            display: "block",
                            opacity: isOpen ? 1 : 0,
                            transitionProperty: "opacity, color, -webkit-text-stroke-color, transform",
                            transitionDuration: "0.5s, 0.3s, 0.3s, 0.35s",
                            transitionTimingFunction: "ease, ease, ease, cubic-bezier(0.23,1,0.32,1)",
                            transitionDelay: isOpen ? `${i * 0.06 + 0.25}s` : "0s",
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.color = "#ECEFF4";
                            el.style.webkitTextStrokeColor = "#ECEFF4";
                            el.style.transform = "translateX(16px)";
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.color = "transparent";
                            el.style.webkitTextStrokeColor = "rgba(236,239,244,0.3)";
                            el.style.transform = "translateX(0)";
                        }}
                    >
                        {link.label}
                    </button>
                ))}
            </nav>

            {/* Bottom mono label */}
            <div
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "clamp(2.5rem, 10vw, 10rem)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.5em",
                    color: "rgba(236,239,244,0.18)",
                    textTransform: "uppercase",
                }}
            >
                PRATEEK TAMMISETTY
            </div>
        </div>
    );
}
