import Image from "next/image";

export const content = [
  {
    title: "Zahra Cake & Cookies",
    role: "Fullstack Developer",
    description:
      "Zahra Cake & Cookies is an online bakery website where customers can easily browse cakes and cookies, calculate shipping costs through the RajaOngkir API, and pay securely with Midtrans. The site also lets customers leave reviews on menu items, making the shopping experience more interactive and trustworthy.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/projects/project1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="project1"
        />
      </div>
    ),
    techstack: [
      "react",
      "tailwind",
      "mongodb",
      "express",
      "nodejs",
      "zustand",
      "nodemailer",
      "figma",
      "vercel2",
    ],
    githubLink: "https://github.com/kamilahsyhrbn/zahra-cake-n-cookies",
    demoLink: "https://zahracakencookies.vercel.app/",
  },
  {
    title: "ReLoved",
    role: "UI/UX Designer & Fullstack Developer",
    description:
      " Reloved serves as a marketplace where users can sell or buy high-quality second-hand products. Beyond being a platform for thrifted goods, Reloved promotes a lifestyle that values sustainability, environmental consciousness, and thoughtful consumption. This project was honored as the Best Project by Yayasan Adipurna Inovasi Asia.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/projects/project2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="project2"
        />
      </div>
    ),
    techstack: [
      "react",
      "tailwind",
      "mongodb",
      "express",
      "nodejs",
      "zustand",
      "nodemailer",
      "figma",
      "vercel2",
    ],
    githubLink: "https://github.com/kamilahsyhrbn/reloved",
    demoLink: "https://reloved.vercel.app/",
  },
  {
    title: "BiFlight",
    role: "Frontend Developer",
    description:
      "BiFlight (short for Binar Flight) is designed to help users find the best ticket prices while offering real-time flight information to ensure accuracy and convenience. With its advanced features and intuitive design, BiFlight serves as a comprehensive solution for flight ticket booking, catering to the needs of modern travelers who value simplicity, reliability, and affordability in their travel planning.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/projects/project3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="project3"
        />
      </div>
    ),
    techstack: ["react", "tailwind", "redux", "vercel2"],
    githubLink: "https://github.com/kamilahsyhrbn/biflight",
    demoLink: "https://biflight.vercel.app/",
  },
  {
    title: "MyQuran",
    role: "Frontend Developer",
    description:
      "MyQuran is a web application designed to provide users with easy access to religious information, including the Qur'an, Hadith, Prayers & Dhikr, and Asmaul Husna. MyQuran serves as a comprehensive and user-friendly platform for individuals seeking to deepen their understanding of Islamic teachings and practices.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/projects/project4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="project4"
        />
      </div>
    ),
    techstack: ["react", "tailwind", "redux", "vercel2"],
    githubLink: "https://github.com/kamilahsyhrbn/myquran",
    demoLink: "https://my-quran-vert.vercel.app/",
  },
];
