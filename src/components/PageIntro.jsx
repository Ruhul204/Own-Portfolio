import Reveal from "./Reveal.jsx";

export default function PageIntro({
  eyebrow,
  title,
  description,
  className = "",
}) {
  return (
    <Reveal
      as="header"
      className={`max-w-[800px] pb-14 pt-2 max-md:pb-10 ${className}`}
    >
      <p className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[.12em] text-secondary max-md:mb-4 max-md:text-[8px]">
        <span className="eyebrow-dot" />
        {eyebrow}
      </p>
      <h1 className="m-0 font-heading text-[clamp(49px,7vw,82px)] font-semibold leading-[1.02] tracking-[-.075em] text-ink [&_em]:not-italic [&_em]:text-brand max-md:text-[clamp(44px,12vw,65px)]">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-[580px] text-sm leading-[1.8] text-secondary max-md:mt-3 max-md:text-xs">
          {description}
        </p>
      )}
    </Reveal>
  );
}
