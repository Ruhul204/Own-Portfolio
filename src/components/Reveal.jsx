import useReveal from "../hooks/useReveal.js";

export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
}) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal motion-safe:transition-all ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
