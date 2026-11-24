import { Code2 } from "lucide-react";

const accentColors = {
  blue: "bg-[#e9f0fc]",
  lavender: "bg-[#f1effb]",
  mint: "bg-[#eaf4f0]",
};

export default function ProjectArtwork({
  project,
  compact = false,
  detail = false,
}) {
  const color = accentColors[project.accent] || accentColors.blue;
  const order = String(project.order || 1).padStart(2, "0");
  const frameClass = detail
    ? "project-artwork relative h-[450px] overflow-hidden p-5 max-md:h-[300px] max-md:p-[13px]"
    : "project-artwork group relative " +
      (compact ? "h-[183px] max-md:h-[190px]" : "h-[220px]") +
      " overflow-hidden p-3";
  const canvasClass =
    "art-canvas " +
    (detail ? "inset-[74px_8%_40px] max-md:inset-[57px_6%_30px]" : "");
  const copyClass =
    "art-copy " + (detail ? "left-[8%] top-[10%] max-md:top-[12%]" : "");
  const shapeClass = detail
    ? "art-shape right-[11%] -bottom-[90px] size-[260px] max-md:right-[6%] max-md:-bottom-[58px] max-md:size-[170px]"
    : "art-shape";
  const iconClass =
    "art-code " +
    (detail ? "right-[8%] top-[10%] size-[34px] max-md:size-6" : "");

  return (
    <div className={frameClass + " " + color} aria-hidden="true">
      <div className="art-browser">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="art-url">portfolio / {project.id}</span>
        <span>•••</span>
      </div>
      <div className={canvasClass}>
        <div className="art-grid-lines" />
        <div className={copyClass}>
          <span>PROJECT PREVIEW</span>
          <strong
            className={
              detail ? "text-[clamp(34px,5vw,58px)] max-md:text-[38px]" : ""
            }
          >
            Design in
            <br />
            <em>progress.</em>
          </strong>
          <i>
            {detail
              ? "ADD PROJECT SCREENSHOT HERE"
              : "REPLACE WITH PROJECT SCREENSHOT"}
          </i>
        </div>
        <div className={shapeClass}>
          <span />
          <span />
          <span />
        </div>
        <Code2 className={iconClass} />
      </div>
      <span className="art-index">
        {detail ? "PLACEHOLDER / " + order : order + " / 03"}
      </span>
    </div>
  );
}
