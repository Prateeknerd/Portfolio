"use client";

import { useState } from "react";
import {
    FaPython, FaJava, FaReact, FaGitAlt, FaGithub, FaLinux, FaHtml5, FaCss3Alt, FaUbuntu, FaFigma, FaMicrochip
} from "react-icons/fa";
import {
    SiC, SiOracle, SiGnubash, SiFlutter, SiDart,
    SiNextdotjs, SiTypescript, SiTailwindcss, SiPandas,
    SiNumpy, SiScikitlearn, SiOpenai, SiJupyter,
    SiSqlite, SiVercel, SiPostman, SiOpencv, SiFlask,
    SiTableau, SiMysql, SiJavascript,
    SiAutodesk, SiGoogle, SiChartdotjs
} from "react-icons/si";
import { TbBrandVscode, TbBrandReactNative } from "react-icons/tb";
import { Code, Database, Layers, Cpu, Wrench, Globe, BarChart, Smartphone, Plus } from "lucide-react";

const SKILL_CATEGORIES = [
    {
        id: "languages",
        label: "Languages",
        icon: <Code size={16} />,
        skills: [
            { name: "Python", icon: <FaPython size={32} />, color: "#3776AB" },
            { name: "Java", icon: <FaJava size={32} />, color: "#f89820" },
            { name: "C", icon: <SiC size={32} />, color: "#A8B9CC" },
            { name: "TypeScript", icon: <SiTypescript size={32} />, color: "#3178C6" },
            { name: "JavaScript", icon: <SiJavascript size={32} />, color: "#F7DF1E" },
            { name: "Dart", icon: <SiDart size={32} />, color: "#0175C2" },
        ],
    },
    {
        id: "web",
        label: "Web Development",
        icon: <Globe size={16} />,
        skills: [
            { name: "HTML5", icon: <FaHtml5 size={32} />, color: "#E34F26" },
            { name: "CSS3", icon: <FaCss3Alt size={32} />, color: "#1572B6" },
            { name: "Next.js", icon: <SiNextdotjs size={32} />, color: "#cccccc" },
            { name: "Flask", icon: <SiFlask size={32} />, color: "#cccccc" },
        ],
    },
    {
        id: "data",
        label: "Data & Visualization",
        icon: <BarChart size={16} />,
        skills: [
            { name: "Pandas", icon: <SiPandas size={32} />, color: "#150458" },
            { name: "NumPy", icon: <SiNumpy size={32} />, color: "#013243" },
            { name: "Matplotlib", icon: <SiChartdotjs size={32} />, color: "#cccccc" },
            { name: "Seaborn", icon: <SiChartdotjs size={32} />, color: "#cccccc" },
            { name: "Tableau", icon: <SiTableau size={32} />, color: "#E97627" },
        ],
    },
    {
        id: "ai-cv",
        label: "AI / Computer Vision",
        icon: <Cpu size={16} />,
        skills: [
            { name: "OpenCV", icon: <SiOpencv size={32} />, color: "#5C3EE8" },
            { name: "MediaPipe", icon: <SiGoogle size={32} />, color: "#4285F4" },
        ],
    },
    {
        id: "mobile-desktop",
        label: "Mobile & Desktop",
        icon: <Smartphone size={16} />,
        skills: [
            { name: "Flutter", icon: <SiFlutter size={32} />, color: "#02569B" },
            { name: "JavaFX", icon: <FaJava size={32} />, color: "#f89820" },
            { name: "pywebview", icon: <FaPython size={32} />, color: "#3776AB" },
        ],
    },
    {
        id: "databases",
        label: "Databases",
        icon: <Database size={16} />,
        skills: [
            { name: "MySQL", icon: <SiMysql size={32} />, color: "#4479A1" },
            { name: "Oracle SQL", icon: <SiOracle size={32} />, color: "#F80000" },
            { name: "SQLite", icon: <SiSqlite size={32} />, color: "#003B57" },
        ],
    },
    {
        id: "tools",
        label: "Tools & Platforms",
        icon: <Wrench size={16} />,
        skills: [
            { name: "Git", icon: <FaGitAlt size={32} />, color: "#F05032" },
            { name: "GitHub", icon: <FaGithub size={32} />, color: "#cccccc" },
            { name: "Vercel", icon: <SiVercel size={32} />, color: "#cccccc" },
            { name: "Ubuntu Linux", icon: <FaUbuntu size={32} />, color: "#E95420" },
            { name: "Figma", icon: <FaFigma size={32} />, color: "#F24E1E" },
        ],
    },
    {
        id: "ai-devtools",
        label: "AI & Dev Tools",
        icon: <Layers size={16} />,
        skills: [
            { name: "GitHub Copilot", icon: <FaGithub size={32} />, color: "#cccccc" },
            { name: "Google AI Studio", icon: <SiGoogle size={32} />, color: "#4285F4" },
            { name: "Lovable", icon: <SiNextdotjs size={32} />, color: "#cccccc" },
            { name: "OpenAI Codex", icon: <SiOpenai size={32} />, color: "#cccccc" },
            { name: "Google Stitch", icon: <SiGoogle size={32} />, color: "#4285F4" },
        ],
    },
    {
        id: "additional",
        label: "Additional",
        icon: <Plus size={16} />,
        skills: [
            { name: "Verilog", icon: <FaMicrochip size={32} />, color: "#cccccc" },
            { name: "AutoCAD", icon: <SiAutodesk size={32} />, color: "#0696D7" },
        ],
    },
];

export function SkillsSection() {
    const [activeTab, setActiveTab] = useState("languages");
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const activeCategory = SKILL_CATEGORIES.find(c => c.id === activeTab)!;

    return (
        <section
            className="section-root"
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "clamp(1.5rem, 4vw, 3rem)",
                paddingTop: "clamp(5rem, 9vw, 7rem)",
                overflow: "hidden",
                gap: "clamp(1.25rem, 2vw, 2rem)",
            }}
        >
            {/* Title row */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <h2
                    style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(3rem, 8vw, 8vw)",
                        lineHeight: 0.9,
                        letterSpacing: "-0.03em",
                        color: "#ECEFF4",
                        margin: 0,
                    }}
                >
                    Technical
                    <br />
                    <span style={{ color: "#ECEFF4" }}>
                        Skills
                    </span>
                </h2>
                <div
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        letterSpacing: "0.5em",
                        color: "rgba(236,239,244,0.2)",
                        textTransform: "uppercase",
                        paddingBottom: "0.5rem",
                    }}
                >
                    ✦ What I use
                </div>
            </div>

            {/* Tab bar */}
            <div style={{
                display: "flex",
                gap: "0",
                borderBottom: "1px solid rgba(236,239,244,0.08)",
                overflowX: "auto",
                flexShrink: 0,
            }}>
                {SKILL_CATEGORIES.map(cat => (
                    <button
                        key={cat.id}
                        data-cursor="hover"
                        onClick={() => setActiveTab(cat.id)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            background: "none",
                            border: "none",
                            borderBottom: activeTab === cat.id
                                ? "2px solid #ECEFF4"
                                : "2px solid transparent",
                            padding: "0.5rem 0.9rem",
                            color: activeTab === cat.id ? "#ECEFF4" : "rgba(236,239,244,0.3)",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 9,
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            cursor: "none",
                            transition: "color 0.25s, border-color 0.25s",
                            marginBottom: "-1px",
                            whiteSpace: "nowrap",
                        }}
                        onMouseEnter={e => {
                            if (activeTab !== cat.id)
                                (e.currentTarget as HTMLElement).style.color = "rgba(236,239,244,0.65)";
                        }}
                        onMouseLeave={e => {
                            if (activeTab !== cat.id)
                                (e.currentTarget as HTMLElement).style.color = "rgba(236,239,244,0.3)";
                        }}
                    >
                        {cat.icon}
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Skills grid */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                alignContent: "flex-start",
                flex: 1,
            }}>
                {activeCategory.skills.map(skill => (
                    <div
                        key={skill.name}
                        data-cursor="hover"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.6rem",
                            width: "clamp(5rem, 9vw, 7rem)",
                            padding: "1.25rem 0.75rem",
                            background: hoveredSkill === skill.name
                                ? "rgba(255,255,255,0.06)"
                                : "rgba(255,255,255,0.03)",
                            border: `1px solid ${hoveredSkill === skill.name
                                ? "rgba(255,255,255,0.2)"
                                : "rgba(255,255,255,0.07)"}`,
                            borderRadius: "0.875rem",
                            cursor: "none",
                            transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                            transform: hoveredSkill === skill.name ? "translateY(-4px)" : "translateY(0)",
                        }}
                    >
                        {/* Icon — colored on hover, gray at rest */}
                        <div style={{
                            color: hoveredSkill === skill.name ? skill.color : "rgba(236,239,244,0.4)",
                            transition: "color 0.3s",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            {skill.icon}
                        </div>
                        <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 7.5,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            textAlign: "center",
                            color: hoveredSkill === skill.name
                                ? "rgba(236,239,244,0.8)"
                                : "rgba(236,239,244,0.3)",
                            transition: "color 0.3s",
                            lineHeight: 1.4,
                        }}>
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Skill count */}
            <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.4em",
                color: "rgba(236,239,244,0.12)",
                textTransform: "uppercase",
                flexShrink: 0,
            }}>
                {activeCategory.skills.length} SKILLS IN {activeCategory.label.toUpperCase()}
            </div>
        </section>
    );
}
