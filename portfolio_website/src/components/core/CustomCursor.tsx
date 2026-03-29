"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const raf = useRef<number>(0);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const loop = () => {
            current.current.x += (pos.current.x - current.current.x) * 0.12;
            current.current.y += (pos.current.y - current.current.y) * 0.12;
            cursor.style.transform = `translate(${current.current.x - (cursor.offsetWidth / 2)}px, ${current.current.y - (cursor.offsetHeight / 2)}px)`;
            raf.current = requestAnimationFrame(loop);
        };

        const onEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.closest("[data-cursor='hover']")) {
                cursor.classList.add("hovering");
            }
        };
        const onLeave = () => cursor.classList.remove("hovering");

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onEnter);
        document.addEventListener("mouseout", onLeave);
        raf.current = requestAnimationFrame(loop);

        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onEnter);
            document.removeEventListener("mouseout", onLeave);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            id="custom-cursor"
            style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999 }}
        />
    );
}
