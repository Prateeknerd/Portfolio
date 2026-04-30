"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
    onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 3rem)",
                pointerEvents: "none",
            }}
        >
            {/* Logo */}
            <div
                style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    color: "white",
                    letterSpacing: "-0.02em",
                    pointerEvents: "all",
                }}
            >
                PT.
            </div>

            {/* Menu button */}
            <button
                onClick={onMenuOpen}
                data-cursor="hover"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    background: "none",
                    border: "none",
                    cursor: "none",
                    color: "white",
                    pointerEvents: "all",
                }}
            >
                <span
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.5em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                    }}
                >
                    MENU
                </span>
                <div
                    className="menu-btn"
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(20px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.3s, border-color 0.3s",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                >
                    <Menu size={18} />
                </div>
            </button>
        </header>
    );
}
