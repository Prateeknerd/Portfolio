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
                {
                    user_name: formData.user_name,
                    user_email: formData.user_email,
                    message: formData.message,
                    to_name: "Prateek",
                    reply_to: formData.user_email,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );
            setSubmitStatus("success");
            setFormData({ user_name: "", user_email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    const inputStyle: React.CSSProperties = {
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "0.75rem",
        padding: "0.875rem 1rem",
        color: "#ECEFF4",
        fontFamily: "'Satoshi', sans-serif",
        fontSize: "1rem",
        outline: "none",
        width: "100%",
        transition: "border-color 0.25s",
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
            }}
        >
            {/* Mono tag */}
            <div
                style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.5em",
                    color: "rgba(236,239,244,0.4)",
                    textTransform: "uppercase",
                }}
            >
                ✦ Get In Touch
            </div>

            {/* Headline — hover-fill white */}
            <h2
                style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(3.5rem, 10vw, 10vw)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.03em",
                    WebkitTextStroke: "1px rgba(236,239,244,0.35)",
                    color: "transparent",
                    margin: 0,
                    cursor: "default",
                    transition: "color 0.45s cubic-bezier(0.23,1,0.32,1), -webkit-text-stroke-color 0.45s",
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#ECEFF4";
                    (e.currentTarget as HTMLElement).style.webkitTextStrokeColor = "#ECEFF4";
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "transparent";
                    (e.currentTarget as HTMLElement).style.webkitTextStrokeColor = "rgba(236,239,244,0.35)";
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
                            style={inputStyle}
                            onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
                            onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                        />
                    ))}
                </div>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hi..."
                    required
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    style={{
                        ...inputStyle,
                        resize: "none",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="hover"
                    style={{
                        background: isSubmitting ? "rgba(236,239,244,0.3)" : "#ECEFF4",
                        border: "none",
                        borderRadius: "0.75rem",
                        padding: "1rem",
                        color: "#0a0a0a",
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                        cursor: "none",
                        transition: "background 0.3s, opacity 0.3s, transform 0.2s",
                        letterSpacing: "0.02em",
                        opacity: isSubmitting ? 0.6 : 1,
                    }}
                    onMouseEnter={e => {
                        if (!isSubmitting) (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                </button>

                {submitStatus === "success" && (
                    <p style={{ color: "#a3e4d7", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.3em" }}>
                        ✓ MESSAGE SENT — I&apos;LL GET BACK TO YOU SOON!
                    </p>
                )}
                {submitStatus === "error" && (
                    <p style={{ color: "#ff6b6b", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.3em" }}>
                        SOMETHING WENT WRONG. TRY EMAILING DIRECTLY.
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
                            border: "1px solid rgba(236,239,244,0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(236,239,244,0.45)",
                            textDecoration: "none",
                            cursor: "none",
                            transition: "background 0.3s, color 0.3s, border-color 0.3s",
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "rgba(255,255,255,0.1)";
                            el.style.color = "#ECEFF4";
                            el.style.borderColor = "rgba(255,255,255,0.3)";
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "transparent";
                            el.style.color = "rgba(236,239,244,0.45)";
                            el.style.borderColor = "rgba(236,239,244,0.12)";
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
                    color: "rgba(236,239,244,0.12)",
                    textTransform: "uppercase",
                }}
            >
                PRATEEK TAMMISETTY — ALL RIGHTS RESERVED © 2025
            </p>
        </section>
    );
}
