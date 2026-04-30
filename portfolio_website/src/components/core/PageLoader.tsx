"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
    onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);

    const statusMessages = ["BOOTING SYSTEM...", "LOADING ASSETS...", "CALIBRATING...", "ALMOST THERE...", "READY."];

    useEffect(() => {
        const duration = 2000;
        const start = performance.now();
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * 100));
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setTimeout(() => { setVisible(false); setTimeout(onComplete, 500); }, 200);
            }
        };
        requestAnimationFrame(tick);
    }, [onComplete]);

    const statusIndex = Math.min(Math.floor(count / 20), statusMessages.length - 1);
    if (!visible) return null;

    return (
        <div style={{
            position: "fixed", inset: 0,
            background: "#050608",
            zIndex: 10000,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "2.5rem",
        }}>
            {/* White glow orb */}
            <div style={{
                position: "absolute",
                width: 280, height: 280,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,0.9), rgba(180,180,180,0.3))",
                filter: "blur(60px)",
                opacity: 0.15,
                animation: "pulse-orb 2s ease-in-out infinite",
            }} />

            {/* Counter */}
            <div style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(6rem, 15vw, 12rem)",
                color: "#ECEFF4",
                lineHeight: 1,
                position: "relative", zIndex: 1,
                letterSpacing: "-0.04em",
            }}>
                {String(count).padStart(2, "0")}
            </div>

            {/* Status */}
            <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, letterSpacing: "0.5em",
                color: "rgba(236,239,244,0.3)",
                position: "relative", zIndex: 1,
                textTransform: "uppercase",
            }}>
                {statusMessages[statusIndex]}
            </div>

            <style>{`
        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); filter: blur(50px); }
          50%       { transform: scale(1.4); filter: blur(70px); }
        }
      `}</style>
        </div>
    );
}
