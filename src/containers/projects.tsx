"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { content } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="flex flex-col gap-2 my-8" id="projects">
      <h2 className="max-w-7xl text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <Highlighter action="underline" color="#d0aff0">
          Projects
        </Highlighter>
      </h2>
      <TextAnimate
        animation="slideUp"
        by="word"
        className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 my-2"
      >
        Here are some of my projects
      </TextAnimate>

      <StickyScroll content={content} />

      <div className="flex justify-center">
        <Link
          href="https://github.com/kamilahsyhrbn"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center"
        >
          <ShimmerButton>
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="whitespace-nowrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg flex items-center gap-2"
            >
              <motion.img
                src="/skills/github.svg"
                alt="github"
                width={25}
                height={25}
                className="bg-white rounded-full"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              />
              <span className="relative">See More on GitHub</span>
            </motion.span>
          </ShimmerButton>
        </Link>
      </div>
    </section>
  );
}
