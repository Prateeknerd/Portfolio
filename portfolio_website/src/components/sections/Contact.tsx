"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, FileText, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const form = e.currentTarget;

        // We'll configure actual EmailJS env variables in Phase 6 Document
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder",
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_placeholder"
            );
            setSubmitStatus("success");
            form.reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            // Reset status message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                    Get in Touch
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                {/* Contact Information & Resume Download */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="glass p-8 rounded-3xl h-full flex flex-col text-left hover:border-primary/20 transition-all duration-300">
                        <h3 className="text-2xl font-poppins font-semibold text-foreground mb-6">
                            Let's talk about your project
                        </h3>
                        <p className="text-muted-foreground mb-10 leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6 flex-grow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-poppins font-semibold text-foreground">Email</h4>
                                    <p className="text-muted-foreground mt-1">prateektammisetty@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-poppins font-semibold text-foreground">Location</h4>
                                    <p className="text-muted-foreground mt-1">Bengaluru, Karnataka</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links & Resume */}
                        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col gap-6">
                            <Button asChild className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground py-6 rounded-xl flex items-center justify-center gap-2 transition-all">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                    <FileText className="w-5 h-5" /> View My Resume
                                </a>
                            </Button>

                            <div className="flex flex-col items-center pt-2">
                                <h4 className="font-poppins font-semibold text-foreground mb-4">Connect on Socials</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Prateeknerd" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:bg-white/10 hover:-translate-y-1 transition-all text-muted-foreground hover:text-foreground">
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/prateek-tammisetty" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:bg-white/10 hover:-translate-y-1 transition-all text-muted-foreground hover:text-foreground">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-7">
                    <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl hover:border-secondary/20 transition-all duration-300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label htmlFor="user_name" className="text-sm font-medium text-foreground ml-1">Name</label>
                                <Input
                                    id="user_name"
                                    name="user_name"
                                    placeholder="John Doe"
                                    required
                                    className="bg-black/20 border-white/10 focus-visible:ring-primary h-12 rounded-xl px-4"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="user_email" className="text-sm font-medium text-foreground ml-1">Email</label>
                                <Input
                                    id="user_email"
                                    type="email"
                                    name="user_email"
                                    placeholder="john@example.com"
                                    required
                                    className="bg-black/20 border-white/10 focus-visible:ring-primary h-12 rounded-xl px-4"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground ml-1">Subject</label>
                            <Input
                                id="subject"
                                name="subject"
                                placeholder="Project Inquiry"
                                required
                                className="bg-black/20 border-white/10 focus-visible:ring-primary h-12 rounded-xl px-4"
                            />
                        </div>

                        <div className="space-y-2 mb-8">
                            <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Hello, I'd like to talk about..."
                                required
                                className="bg-black/20 border-white/10 focus-visible:ring-primary min-h-[160px] rounded-xl p-4 resize-y"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message <Send className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </Button>

                        {/* Form Status Messages */}
                        {submitStatus === "success" && (
                            <p className="mt-4 text-center text-emerald-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
                                Thank you! Your message has been sent successfully.
                            </p>
                        )}
                        {submitStatus === "error" && (
                            <p className="mt-4 text-center text-red-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-2">
                                Oops! Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
