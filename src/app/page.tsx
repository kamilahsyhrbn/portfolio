import Skills from "@/containers/skills";
import Hero from "../containers/hero";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-velocity-row";
import Projects from "@/containers/projects";
import ContactForm from "@/containers/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col px-8 md:px-24">
      <Hero />

      <Skills />

      <ScrollVelocityContainer>
        <ScrollVelocityRow
          baseVelocity={10}
          direction={1}
          className="text-xl text-neutral-600 dark:text-neutral-400"
        >
          {" "}
          ⭐️ Frontend Web Developer ⭐️ MERN Stack Developer ⭐️ React
          Developer ⭐️ Web Developer<span className="opacity-0">.</span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <Projects />

      <ContactForm />
    </div>
  );
}
