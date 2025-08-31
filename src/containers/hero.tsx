import { FlipWords } from "@/components/ui/flip-words";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import TerminalContainer from "./terminal-container";
import { AuroraText } from "@/components/magicui/aurora-text-props";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Highlighter } from "@/components/magicui/highlighter";

export default function Home() {
  const words = ["Frontend Web", "React", "Web", "MERN Stack"];
  return (
    <section
      className="pt-10 md:pt-20 w-full flex flex-col lg:flex-row gap-4 items-center lg:items-start justify-between"
      id="home"
    >
      <div className="w-full lg:w-1/2">
        <div
          className={cn(
            "group rounded-full mb-2 border w-max border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Welcome to My Portfolio</span>
          </AnimatedShinyText>
        </div>
        <h2 className="text-2xl">
          Hi, I&apos;m{" "}
          <AuroraText className="font-bold">Kamilah Syahrabanu</AuroraText>
        </h2>
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          a
          <FlipWords words={words} />
          Developer who
        </div>
        <PointerHighlight
          containerClassName="mt-1 text-4xl font-bold z-10"
          pointerClassName="text-yellow-500"
          rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
        >
          <span className="relative z-10 md:px-2">
            Judges a book by its cover
          </span>
        </PointerHighlight>
        <h4 className="my-2">
          Because if the cover does not impress you what else can?
        </h4>

        <p className="my-5 lg:mt-8">
          I’m a <AuroraText>Junior Frontend Web Developer</AuroraText> who loves
          creating{" "}
          <Highlighter action="underline" color="#FF9800">
            clean and interactive
          </Highlighter>{" "}
          websites. I usually work with React, Tailwind CSS, and the MERN stack,
          and right now I’m diving into{" "}
          <Highlighter action="highlight" color="#FF9800">
            Next.js and TypeScript
          </Highlighter>
          . I enjoy learning emerging technologies, improving best practices in
          frontend development, and gradually expanding my backend skills for a
          stronger fullstack foundation.
        </p>
      </div>
      <TerminalContainer />
    </section>
  );
}
