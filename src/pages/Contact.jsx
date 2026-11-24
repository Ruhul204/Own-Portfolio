import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import PageIntro from "../components/PageIntro.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Reveal from "../components/Reveal.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

const details = [
  {
    Icon: Mail,
    label: "EMAIL",
    title: "mdruhulaminshovon10@gmail.com",
    description: "Email me about opportunities or collaboration.",
    href: "mailto:mdruhulaminshovon10@gmail.com",
  },
  {
    Icon: MapPin,
    label: "LOCATION",
    title: "Dhaka, Bangladesh",
    description: "Open to frontend internship opportunities.",
  },
  {
    Icon: Github,
    label: "GITHUB",
    title: "github.com/Ruhul204",
    description: "View my GitHub profile and repositories.",
    href: "https://github.com/Ruhul204",
  },
  {
    Icon: Linkedin,
    label: "LINKEDIN",
    title: "linkedin.com/in/ruhul204",
    description: "Connect with me on LinkedIn.",
    href: "https://www.linkedin.com/in/ruhul204/",
  },
];
export default function Contact() {
  usePageMeta(
    "Contact",
    "Get in touch with Md. Ruhul Amin Shovan about frontend development opportunities, internships, or collaborations.",
  );
  return (
    <div className="mx-auto w-[calc(100%_-_64px)] max-w-[1200px] pb-[100px] pt-20 max-md:w-[calc(100%_-_40px)] max-md:pb-[72px] max-md:pt-[52px]">
      <PageIntro
        eyebrow="Start a conversation"
        title={
          <>
            Let’s build
            <br />
            <em>something together.</em>
          </>
        }
        description="I’m always interested in connecting with developers, exploring opportunities, and discussing thoughtful ideas."
      />
      <div className="grid grid-cols-[.75fr_1.25fr] items-start gap-[8%] border-t border-border pt-[37px] max-lg:gap-[5%] max-md:grid-cols-1 max-md:gap-[34px] max-md:pt-[25px]">
        <Reveal className="pt-[5px]">
          <p className="mb-[14px] font-mono text-[10px] uppercase tracking-[.12em] text-secondary">
            CONTACT DETAILS
          </p>
          <h2 className="mb-[27px] mt-0 font-heading text-[25px] font-medium leading-[1.35] tracking-[-.05em] max-md:mb-[19px] max-md:text-[22px]">
            Good work starts
            <br />
            with a conversation.
          </h2>
          <div className="border-t border-border">
            {details.map(({ Icon, label, title, description, href }) => (
              <div
                className="flex items-start gap-[13px] border-b border-border py-4 max-md:py-[13px]"
                key={label}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#f0f5ff] text-brand">
                  <Icon size={17} />
                </span>
                <div className="flex flex-col gap-1">
                  <small className="font-mono text-[8px] tracking-[.1em] text-[#9a9a9a]">
                    {label}
                  </small>
                  <strong className="text-[11px] font-semibold">
                    {href ? (
                      <a
                        className="contact-link"
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </strong>
                  <span className="text-[9px] text-[#888]">{description}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-[21px] flex items-center gap-[7px] text-[9px] text-[#696969]">
            <span className="status-dot" />
            Open to internships &amp; junior opportunities
          </p>
        </Reveal>
        <ContactForm />
      </div>
      <Reveal className="mt-[38px] flex items-center justify-between border-t border-border pt-[22px] font-mono text-[8px] tracking-[.1em] text-[#9a9a9a] max-md:mt-7">
        <span>GOOD CONVERSATIONS START SOMEWHERE</span>
        <ArrowUpRight size={17} className="text-brand" />
      </Reveal>
    </div>
  );
}
