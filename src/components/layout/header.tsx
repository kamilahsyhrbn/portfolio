"use client";
import React from "react";
import {
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "../ui/resizable-navbar";

const links = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Header() {
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={links} />

        <div className="flex items-center gap-2">
          <NavbarButton
            href="https://github.com/kamilahsyhrbn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="m5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0 1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3" />
              <path d="m5.25 13.75c-1.5.5-3-.5-3.5-1" />
            </svg>
          </NavbarButton>
          <NavbarButton
            href="https://www.linkedin.com/in/kamilah-syahrabanu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="#000000"
              width="25px"
              height="25px"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              className="jam jam-linkedin"
            >
              <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z" />
            </svg>
          </NavbarButton>
          <NavbarButton
            href="mailto:kamilahsyahrabanu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="#000000"
              width="25px"
              height="25px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>gmail</title>
              <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path>
            </svg>
          </NavbarButton>
        </div>
      </NavBody>
    </Navbar>
  );
}
