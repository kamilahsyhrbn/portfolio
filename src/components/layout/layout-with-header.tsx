"use client";
import React from "react";
import { HeroHighlight } from "../ui/hero-highlight";
import Header from "./header";
import { SmoothCursor } from "../magicui/smooth-cursor-props";

export const LayoutWithHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeroHighlight>
        <SmoothCursor />
        <Header />

        {children}

        <footer className="text-sm text-center text-zinc-600 p-4">
          © 2025{" "}
          <a
            href="https://github.com/kamilahsyhrbn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kamilah Syahrabanu
          </a>
          . All rights reserved.
        </footer>
      </HeroHighlight>
    </div>
  );
};
