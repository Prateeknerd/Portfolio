"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });

    const socialLinks = [
        { icon: <Github size={22} strokeWidth={1.5} />, href: "https://github.com/Prateeknerd", label: "GitHub" },
        { icon: <Linkedin size={22} strokeWidth={1.5} />, href: "https://www.linkedin.com/in/prateek-tammisetty", label: "LinkedIn" },
        { icon: <Mail size={22} strokeWidth={1.5} />, href: "mailto:prateektammisetty@gmail.com", label: "Email" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );
            setSubmitStatus("success");
            setFormData({ user_name: "", user_email: "", message: "" });
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return (
        <section
            className="section-root"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(1.5rem, 4vw, 3rem)",
                paddingTop: "clamp(5rem, 9vw, 7rem)",
                overflow: "hidden",
                textAlign: "center",
                gap: "clamp(1.25rem, 2.5vw, 2rem)",
                background: "#050608",
            }}
        >
            {/* Mono tag */}
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.5em",
                    color: "#00E5CC",
                    textTransform: "uppercase",
                }}
            >
                ✦ Get In Touch
            </div>

            {/* Headline — hover-fill teal */}
            <h2
                style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(3.5rem, 10vw, 10vw)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.03em",
                    WebkitTextStroke: "1px rgba(236,239,244,0.4)",
                    color: "transparent",
                    margin: 0,
                    cursor: "default",
                    transition: "color 0.45s cubic-bezier(0.23,1,0.32,1), -webkit-text-stroke-color 0.45s",
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#00E5CC";
                    (e.currentTarget as HTMLElement).style.webkitTextStrokeColor = "#00E5CC";
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "transparent";
                    (e.currentTarget as HTMLElement).style.webkitTextStrokeColor = "rgba(236,239,244,0.4)";
                }}
            >
                Say Hello.
            </h2>

            {/* Contact form */}
            <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "0.875rem", width: "100%", maxWidth: "34rem" }}
            >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                    {[
                        { id: "user_name", placeholder: "Your Name", type: "text" },
                        { id: "user_email", placeholder: "your@email.com", type: "email" },
                    ].map(field => (
                        <input
                            key={field.id}
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            value={formData[field.id as keyof typeof formData]}
                            onChange={e => setFormData(p => ({ ...p, [field.id]: e.target.value }))}
                            style={{
                                background: "rgba(236,239,244,0.04)",
                                border: "1px solid rgba(236,239,244,0.08)",
                                borderRadius: "0.75rem",
                                padding: "0.875rem 1rem",
                                color: "#ECEFF4",
                                fontFamily: "'Satoshi', sans-serif",
                                fontSize: "1rem",
                                outline: "none",
                            }}
                        />
                    ))}
                </div>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    style={{
                        background: "rgba(236,239,244,0.04)",
                        border: "1px solid rgba(236,239,244,0.08)",
                        borderRadius: "0.75rem",
                        padding: "0.875rem 1rem",
                        color: "#ECEFF4",
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: "1rem",
                        outline: "none",
                        resize: "none",
                    }}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="hover"
                    style={{
                        background: isSubmitting ? "rgba(0,229,204,0.4)" : "#00E5CC",
                        border: "none",
                        borderRadius: "0.75rem",
                        padding: "1rem",
                        color: "#050608",
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                        cursor: "none",
                        transition: "background 0.3s, opacity 0.3s",
                        letterSpacing: "0.02em",
                    }}
                >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
                {submitStatus === "success" && (
                    <p style={{ color: "#00E5CC", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.3em" }}>
                        MESSAGE SENT.
                    </p>
                )}
                {submitStatus === "error" && (
                    <p style={{ color: "#ff6b6b", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.3em" }}>
                        SOMETHING WENT WRONG. TRY AGAIN.
                    </p>
                )}
            </form>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.875rem" }}>
                {socialLinks.map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        style={{
                            width: 52,
                            height: 52,
                            borderRadius: "50%",
                            border: "1px solid rgba(236,239,244,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(236,239,244,0.5)",
                            textDecoration: "none",
                            cursor: "none",
                            transition: "background 0.3s, color 0.3s, border-color 0.3s",
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "rgba(0,229,204,0.12)";
                            el.style.color = "#00E5CC";
                            el.style.borderColor = "rgba(0,229,204,0.4)";
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "transparent";
                            el.style.color = "rgba(236,239,244,0.5)";
                            el.style.borderColor = "rgba(236,239,244,0.1)";
                        }}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Footer */}
            <p
                style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    color: "rgba(236,239,244,0.15)",
                    textTransform: "uppercase",
                }}
            >
                PRATEEK TAMMISETTY — ALL RIGHTS RESERVED © 2026
            </p>
        </section>
    );
}
