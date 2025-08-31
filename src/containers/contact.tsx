"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Highlighter } from "@/components/magicui/highlighter";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text-props";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (
      !name ||
      !email ||
      !message ||
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      toast.error("Please fill in all the fields.");
      setLoading(false);
      return;
    }

    toast.promise(
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      ),
      {
        loading: "Sending Message...",
        success: "Message sent successfully!",
        error: "Message failed to send.",
      }
    );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center md:flex-row md:items-start gap-4"
    >
      <div>
        <h2 className="max-w-7xl text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          <Highlighter action="underline" color="#d0aff0">
            Contact
          </Highlighter>
        </h2>
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 my-2"
        >
          Feel free to reach out for collaborations, opportunities, or if you’d
          just like to connect!
        </TextAnimate>

        <motion.p
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Location: <AuroraText>Jakarta, Indonesia</AuroraText>
        </motion.p>
      </div>
      <div className="max-w-lg w-full">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="Name" className="relative">
              <input
                type="text"
                id="Name"
                placeholder=""
                name="name"
                autoComplete="off"
                className="peer mt-0.5 w-full p-4 rounded-xl border-gray-300 shadow-sm sm:text-sm dark:border-neutral-900 dark:bg-neutral-900 dark:text-white focus:outline-none"
              />

              <span className="absolute inset-y-0 start-3 -translate-y-5 px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:text-white">
                Name
              </span>
            </label>
          </div>

          <div>
            <label htmlFor="Email" className="relative">
              <input
                type="email"
                id="Email"
                placeholder=""
                name="email"
                autoComplete="off"
                className="peer mt-0.5 w-full p-4 rounded-xl border-gray-300 shadow-sm sm:text-sm dark:border-neutral-900 dark:bg-neutral-900 dark:text-white focus:outline-none"
              />

              <span className="absolute inset-y-0 start-3 -translate-y-5 px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:text-white">
                Email
              </span>
            </label>
          </div>

          <div>
            <label htmlFor="Message" className="relative block">
              <textarea
                id="Message"
                placeholder=""
                rows={4}
                name="message"
                className="peer mt-0.5 w-full p-4 rounded-xl shadow-sm sm:text-sm 
               dark:border-neutral-900 dark:bg-neutral-900 dark:text-white focus:outline-none resize-none"
              ></textarea>

              <span
                className="absolute start-3 top-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 
               transition-transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 
               peer-focus:-translate-y-5 peer-focus:top-3 dark:bg-neutral-900 dark:text-white"
              >
                Message
              </span>
            </label>
          </div>

          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <ShimmerButton type="submit" disabled={loading} className="w-full">
            <span className="relative z-10 text-white">
              {loading ? "Sending..." : "Send"}
            </span>
          </ShimmerButton>
        </form>
      </div>
    </section>
  );
}
