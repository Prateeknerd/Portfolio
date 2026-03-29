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

            // Blobs move at different parallax speeds
            if (blob1.current) {
                blob1.current.style.transform = `translate(${xFactor * 20}px, ${yFactor * 20}px)`;
            }
            if (blob2.current) {
                blob2.current.style.transform = `translate(${xFactor * 40}px, ${yFactor * 40}px)`;
            }
            if (blob3.current) {
                blob3.current.style.transform = `translate(${xFactor * 60}px, ${yFactor * 60}px)`;
            }

            // Subtle cursor-reactive background gradient
            if (bgGlow.current) {
                const xPct = (e.clientX / window.innerWidth) * 100;
                const yPct = (e.clientY / window.innerHeight) * 100;
                bgGlow.current.style.background = `radial-gradient(circle 600px at ${xPct}% ${yPct}%, rgba(124,58,237,0.07) 0%, transparent 70%)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 0,
            }}
        >
            {/* Cursor-reactive subtle bg glow */}
            <div
                ref={bgGlow}
                style={{
                    position: "absolute",
                    inset: 0,
                    transition: "background 0.3s ease",
                }}
            />

            {/* Blob 1 — bottom left, violet */}
            <div
                ref={blob1}
                className="mesh-blob"
                style={{
                    width: 700,
                    height: 700,
                    background: "#7C3AED",
                    opacity: 0.12,
                    bottom: "-10%",
                    left: "-5%",
                    transition: "transform 0.8s cubic-bezier(0.23,1,0.32,1)",
                }}
            />
            {/* Blob 2 — center right, cyan */}
            <div
                ref={blob2}
                className="mesh-blob"
                style={{
                    width: 500,
                    height: 500,
                    background: "#06B6D4",
                    opacity: 0.08,
                    top: "10%",
                    right: "5%",
                    transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
                }}
            />
            {/* Blob 3 — top left, lavender */}
            <div
                ref={blob3}
                className="mesh-blob"
                style={{
                    width: 400,
                    height: 400,
                    background: "#A78BFA",
                    opacity: 0.1,
                    top: "0%",
                    left: "30%",
                    transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
                }}
            />
        </div>
    );
}
