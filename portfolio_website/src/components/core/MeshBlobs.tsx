"use client";

import { useEffect, useRef } from "react";

export function MeshBlobs() {
    const blob1 = useRef<HTMLDivElement>(null);
    const blob2 = useRef<HTMLDivElement>(null);
    const blob3 = useRef<HTMLDivElement>(null);
    const bgGlow = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const xFactor = e.clientX / window.innerWidth - 0.5;
            const yFactor = e.clientY / window.innerHeight - 0.5;

            if (blob1.current)
                blob1.current.style.transform = `translate(${xFactor * 20}px, ${yFactor * 20}px)`;
            if (blob2.current)
                blob2.current.style.transform = `translate(${xFactor * 40}px, ${yFactor * 40}px)`;
            if (blob3.current)
                blob3.current.style.transform = `translate(${xFactor * 60}px, ${yFactor * 60}px)`;

            // Subtle teal cursor glow
            if (bgGlow.current) {
                const xPct = (e.clientX / window.innerWidth) * 100;
                const yPct = (e.clientY / window.innerHeight) * 100;
                bgGlow.current.style.background = `radial-gradient(circle 500px at ${xPct}% ${yPct}%, rgba(0,229,204,0.055) 0%, transparent 70%)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
            <div ref={bgGlow} style={{ position: "absolute", inset: 0, transition: "background 0.25s ease" }} />

            {/* Teal blob — bottom left */}
            <div ref={blob1} className="mesh-blob" style={{
                width: 650, height: 650,
                background: "#00E5CC", opacity: 0.07,
                bottom: "-15%", left: "-5%",
                transition: "transform 0.8s cubic-bezier(0.23,1,0.32,1)",
            }} />

            {/* Violet blob — top right */}
            <div ref={blob2} className="mesh-blob" style={{
                width: 500, height: 500,
                background: "#8B5CF6", opacity: 0.07,
                top: "5%", right: "0%",
                transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            }} />

            {/* Teal blob — center */}
            <div ref={blob3} className="mesh-blob" style={{
                width: 380, height: 380,
                background: "#5EEAD4", opacity: 0.05,
                top: "35%", left: "40%",
                transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
            }} />
        </div>
    );
}
