import {
  Braces,
  Code2,
  Github,
  GitBranch,
  PanelsTopLeft,
  Terminal,
} from "lucide-react";
const icons = {
  HTML5: Code2,
  CSS3: PanelsTopLeft,
  JavaScript: Braces,
  "React.js": Code2,
  "Tailwind CSS": PanelsTopLeft,
  Git: GitBranch,
  GitHub: Github,
  "VS Code": Terminal,
  npm: Terminal,
};
export default function TechList({ items }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item, index) => {
        const Icon = icons[item] || Code2;
        return (
          <li
            className="flex items-center gap-3 border-b border-[#f0f1f3] py-3 text-[11px] text-[#333] last:border-0 last:pb-0"
            key={item}
          >
            <span className="grid size-[27px] place-items-center rounded-md bg-[#f1f5fd] text-brand">
              <Icon size={17} strokeWidth={1.7} />
            </span>
            <span>{item}</span>
            <span className="ml-auto font-mono text-[8px] text-[#b2b2b2]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
