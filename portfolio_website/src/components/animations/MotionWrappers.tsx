"use client";

import { motion } from "framer-motion";

export const FadeIn = ({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const SlideUp = ({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
                hidden: {},
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FloatingElement = ({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => {
    return (
        <motion.div
            animate={{
                y: ["0%", "-5%", "0%"],
            }}
            transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
