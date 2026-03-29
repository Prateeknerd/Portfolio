"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

interface SectionContainerProps {
    children: ReactNode[];
    currentIndex: number;
    onIndexChange: (index: number) => void;
}

const EASE = [0.23, 1, 0.32, 1] as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sectionVariants: Variants = {
    enter: (direction: number) => ({
        y: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.96,
    }),
    center: {
        y: "0%",
        opacity: 1,
        scale: 1,
        transition: { duration: 0.85, ease: EASE },
    },
    exit: (direction: number) => ({
        y: direction > 0 ? "-100%" : "100%",
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.65, ease: EASE },
    }),
};

export function SectionContainer({ children, currentIndex, onIndexChange }: SectionContainerProps) {
    const [direction, setDirection] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const total = children.length;

    const navigate = useCallback((newIndex: number) => {
        if (isTransitioning || newIndex < 0 || newIndex >= total) return;
        setDirection(newIndex > currentIndex ? 1 : -1);
        setIsTransitioning(true);
        onIndexChange(newIndex);
        setTimeout(() => setIsTransitioning(false), 900);
    }, [isTransitioning, currentIndex, total, onIndexChange]);

    useEffect(() => {
        let lastWheelTime = 0;
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const now = Date.now();
            if (now - lastWheelTime < 1000) return;
            lastWheelTime = now;
            if (e.deltaY > 0) navigate(currentIndex + 1);
            else navigate(currentIndex - 1);
        };

        // Touch support
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
        const handleTouchEnd = (e: TouchEvent) => {
            const delta = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(delta) > 50) {
                if (delta > 0) navigate(currentIndex + 1);
                else navigate(currentIndex - 1);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentIndex, navigate]);

    return (
        <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={sectionVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    style={{ position: "absolute", inset: 0 }}
                >
                    {children[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
