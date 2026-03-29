"use client";

import { useEffect, useRef } from "react";

export function MeshBlobs() {
    const blob1 = useRef<HTMLDivElement>(null);
    const blob2 = useRef<HTMLDivElement>(null);
    const blob3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const xFactor = e.clientX / window.innerWidth - 0.5;
            const yFactor = e.clientY / window.innerHeight - 0.5;

            if (blob1.current) {
                blob1.current.style.transform = `translate(${xFactor * 20}px, ${yFactor * 20}px)`;
            }
            if (blob2.current) {
                blob2.current.style.transform = `translate(${xFactor * 40}px, ${yFactor * 40}px)`;
            }
            if (blob3.current) {
                blob3.current.style.transform = `translate(${xFactor * 60}px, ${yFactor * 60}px)`;
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
            {/* Blob 1 — bottom left, 0.5x multiplier */}
            <div
                ref={blob1}
                className="mesh-blob"
                style={{
                    width: 600,
                    height: 600,
                    background: "#FF4D00",
                    opacity: 0.22,
                    bottom: "5%",
                    left: "5%",
                    transition: "transform 0.8s cubic-bezier(0.23,1,0.32,1)",
                }}
            />
            {/* Blob 2 — center right, 1x multiplier */}
            <div
                ref={blob2}
                className="mesh-blob"
                style={{
                    width: 500,
                    height: 500,
                    background: "#B22222",
                    opacity: 0.18,
                    top: "20%",
                    right: "10%",
                    transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
                }}
            />
            {/* Blob 3 — top left, 1.5x multiplier */}
            <div
                ref={blob3}
                className="mesh-blob"
                style={{
                    width: 450,
                    height: 450,
                    background: "#FF8C00",
                    opacity: 0.15,
                    top: "5%",
                    left: "20%",
                    transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
                }}
            />
        </div>
    );
}
