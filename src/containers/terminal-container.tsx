import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/sequence-context-value";

export default function TerminalContainer() {
  return (
    <Terminal>
      <TypingAnimation>
        &gt; pnpm dlx kamilahsyahrabanu@portfolio init
      </TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Checking design vibes ✨
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Booting up Next.js 🚀
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Styling with Tailwind CSS 🎨
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Assembling components 🧩
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Showcasing cool projects 🌟
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Powering up skills & expertise 💡
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Enabling contact gateway ✉️
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Adding smooth animations 🎬
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        ℹ Appearance: <br /> - Dark / Light mode coming soon 🌗
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Success! Portfolio initialization completed.
      </TypingAnimation>
    </Terminal>
  );
}
