import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const socials = [
  { name: "GitHub", Icon: Github, href: "https://github.com/Ruhul204" },
  { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/in/ruhul204/" },
];
export default function SocialLinks({ compact = false }) {
  return (
    <div
      className={`mt-5 flex items-center gap-4 text-[#575757] ${compact ? "m-0 justify-end gap-3" : ""}`}
    >
      {socials.map(({ name, Icon, href }) =>
        href ? (
          <a
            key={name}
            className="inline-flex items-center gap-1.5 text-[10px] transition hover:text-brand"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {!compact && <Icon size={15} />} {name}
            <ArrowUpRight size={14} />
          </a>
        ) : null,
      )}
    </div>
  );
}
