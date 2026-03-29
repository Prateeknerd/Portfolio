"use client";

export function GrainOverlay() {
    return (
        <svg
            id="grain-overlay"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9998 }}
        >
            <filter id="grain-filter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-filter)" opacity="0.05" />
        </svg>
    );
}
