import { IconCloud } from "./magicui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "tailwindcss",
  "nginx",
  "vercel",
  "python",
  "docker",
  "git",
  "github",
  "php",
  "sql",
  "gitlab",
  "visualstudiocode",
];

export function Cloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex h-[300px] w-[300px] max-md:h-[180px] max-md:w-[180px] max-w-lg bg-slate-800 backdrop-blur-lg items-center justify-center rounded-xl overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
