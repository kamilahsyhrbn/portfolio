"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import { TextAnimate } from "@/components/magicui/text-animate";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="flex flex-col gap-2 my-8">
      <h2 className="max-w-7xl text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <Highlighter action="underline" color="#d0aff0">
          Skills
        </Highlighter>
      </h2>
      <TextAnimate
        animation="slideUp"
        by="word"
        className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 my-2"
      >
        I constantly try to improve
      </TextAnimate>
      <div className="flex flex-row flex-wrap gap-2 justify-center items-center my-3">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex items-center gap-2 bg-white text-black py-2 px-4 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={skill.icon}
              alt={skill.name}
              width={24}
              height={24}
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="text-sm"
              initial={{ x: 0 }}
              whileHover={{ x: -4 }}
              transition={{ duration: 0.3 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
