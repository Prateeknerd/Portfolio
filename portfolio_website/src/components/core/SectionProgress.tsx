"use client";

interface SectionProgressProps {
    current: number;
    total: number;
}

export function SectionProgress({ current, total }: SectionProgressProps) {
    return (
        <div
            style={{
                position: "fixed",
                bottom: "2rem",
                left: "clamp(1.5rem, 4vw, 3rem)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                zIndex: 100,
                pointerEvents: "none",
            }}
        >
            <span
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.3em",
                    color: "#FF4D00",
                    fontWeight: 700,
                }}
            >
                {String(current + 1).padStart(2, "0")}
            </span>
            <div
                style={{
                    width: 48,
                    height: 1,
                    background: "rgba(255,255,255,0.15)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: `${((current + 1) / total) * 100}%`,
                        background: "#FF4D00",
                        transition: "width 0.5s cubic-bezier(0.23,1,0.32,1)",
                    }}
                />
            </div>
            <span
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.3)",
                }}
            >
                {String(total).padStart(2, "0")}
            </span>
        </div>
    );
}
