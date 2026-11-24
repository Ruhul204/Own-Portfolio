export default function SectionHeading({ eyebrow, title, detail, link }) {
  return (
    <div className="mb-9 flex items-end justify-between gap-6 max-md:mb-6 max-md:flex-col max-md:items-start max-md:gap-3">
      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[.12em] text-secondary max-md:mb-2 max-md:text-[8px]">
          {eyebrow}
        </p>
        <h2 className="m-0 font-heading text-[clamp(30px,4vw,46px)] font-medium leading-[1.15] tracking-[-.065em]">
          {title}
        </h2>
      </div>
      {(detail || link) && (
        <div className="flex items-end gap-5 max-md:flex-col max-md:items-start max-md:gap-2">
          {detail && (
            <p className="m-0 max-w-[320px] text-[11px] leading-[1.7] text-secondary">
              {detail}
            </p>
          )}
          {link}
        </div>
      )}
    </div>
  );
}
