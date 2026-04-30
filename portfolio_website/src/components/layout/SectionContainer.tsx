"use client";

import { useState, useEffect, useCallback, ReactNode, useRef } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

interface SectionContainerProps {
    children: ReactNode[];
    currentIndex: number;
    onIndexChange: (index: number) => void;
}

const EASE = [0.23, 1, 0.32, 1] as const;

const sectionVariants: Variants = {
    enter: (direction: number) => ({
        y: direction > 0 ? "6%" : "-6%",
        opacity: 0,
        scale: 0.98,
    }),
    center: {
        y: "0%",
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: EASE },
    },
    exit: (direction: number) => ({
        y: direction > 0 ? "-6%" : "6%",
        opacity: 0,
        scale: 0.98,
        transition: { duration: 0.4, ease: EASE },
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
        setTimeout(() => setIsTransitioning(false), 700);
    }, [isTransitioning, currentIndex, total, onIndexChange]);

    const lastWheelTime = useRef(0);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // Check if we are inside a scrollable element (like the Projects list)
            const target = e.target as HTMLElement;
            const scrollable = target.closest('[data-scrollable="true"]') as HTMLElement;

            if (scrollable) {
                const isScrollingDown = e.deltaY > 0;
                const canScrollDown = Math.ceil(scrollable.scrollHeight - scrollable.scrollTop) > scrollable.clientHeight;
                const canScrollUp = scrollable.scrollTop > 0;

                if ((isScrollingDown && canScrollDown) || (!isScrollingDown && canScrollUp)) {
                    // Let the internal scroll handle it
                    return;
                }
            }

            e.preventDefault();
            const now = Date.now();
            // Use 1000ms threshold to prevent accidental multi-jumps on high-inertia scrolls
            if (now - lastWheelTime.current < 1000) return;
            
            if (Math.abs(e.deltaY) < 10) return; // Ignore tiny micro-scrolls

            lastWheelTime.current = now;
            if (e.deltaY > 0) navigate(currentIndex + 1);
            else navigate(currentIndex - 1);
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
        const handleTouchEnd = (e: TouchEvent) => {
            // Also check for scrollable elements on touch
            const target = e.target as HTMLElement;
            const scrollable = target.closest('[data-scrollable="true"]') as HTMLElement;
            if (scrollable) {
                const deltaY = touchStartY - e.changedTouches[0].clientY;
                const isScrollingDown = deltaY > 0;
                const canScrollDown = Math.ceil(scrollable.scrollHeight - scrollable.scrollTop) > scrollable.clientHeight;
                const canScrollUp = scrollable.scrollTop > 0;
                if ((isScrollingDown && canScrollDown) || (!isScrollingDown && canScrollUp)) return;
            }

            const delta = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(delta) > 50) {
                const now = Date.now();
                if (now - lastWheelTime.current < 1000) return;
                lastWheelTime.current = now;

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
            {/* Use mode="sync" so both sections animate simultaneously — no blank gap */}
            <AnimatePresence mode="sync" custom={direction}>
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
