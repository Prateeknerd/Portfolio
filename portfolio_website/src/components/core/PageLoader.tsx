"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
    onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);

    const statusMessages = [
        "INITIALIZING SYSTEM...",
        "LOADING ASSETS...",
        "CALIBRATING ENVIRONMENT...",
        "RENDERING EXPERIENCE...",
        "READY.",
    ];

    useEffect(() => {
        const duration = 2200;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * 100));

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setTimeout(() => {
                    setVisible(false);
                    setTimeout(onComplete, 600);
                }, 300);
            }
        };

        requestAnimationFrame(tick);
    }, [onComplete]);

    const statusIndex = Math.min(Math.floor(count / 20), statusMessages.length - 1);

    if (!visible) return null;

    return (
        <div
            id="page-loader"
            style={{
                position: "fixed",
                inset: 0,
                background: "#080808",
                zIndex: 10000,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3rem",
                transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1)",
            }}
        >
            {/* Glowing Orb */}
            <div
                style={{
                    position: "absolute",
                    width: 256,
                    height: 256,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #FF4D00, #B22222)",
                    filter: "blur(50px)",
                    opacity: 0.5,
                    animation: "pulse-orb 2s ease-in-out infinite",
                }}
            />

            {/* Counter */}
            <div
                style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(6rem, 15vw, 12rem)",
                    color: "white",
                    lineHeight: 1,
                    position: "relative",
                    zIndex: 1,
                    letterSpacing: "-0.04em",
                }}
            >
                {String(count).padStart(2, "0")}
            </div>

            {/* Status */}
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.5em",
                    color: "rgba(255,255,255,0.4)",
                    position: "relative",
                    zIndex: 1,
                    textTransform: "uppercase",
                }}
            >
                {statusMessages[statusIndex]}
            </div>

            <style>{`
        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); filter: blur(40px); }
          50%       { transform: scale(1.5); filter: blur(60px); }
        }
      `}</style>
        </div>
    );
}
