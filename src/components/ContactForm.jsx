import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const initial = { name: "", email: "", subject: "", message: "" };
function validate(form) {
  const errors = {};
  for (const [key, value] of Object.entries(form))
    if (!value.trim()) errors[key] = "This field is required.";
  if (
    form.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  )
    errors.email = "Enter a valid email address.";
  return errors;
}
export default function ContactForm() {
  const [form, setForm] = useState(initial),
    [errors, setErrors] = useState({}),
    [status, setStatus] = useState("idle"),
    [notice, setNotice] = useState("");
  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
    setNotice("");
    setStatus("idle");
  }
  function submit(event) {
    event.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      setNotice("Please review the fields marked below.");
      const formElement = event.currentTarget;
      window.requestAnimationFrame(() =>
        formElement.querySelector('[aria-invalid="true"]')?.focus(),
      );
      return;
    }
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("idle");
      setNotice(
        "Form check complete. No email service is connected, so your message has not been sent.",
      );
    }, 450);
  }
  function field(name, label, placeholder, type = "text", multiline = false) {
    const id = `contact-${name}`;
    return (
      <label
        className="mb-[15px] flex flex-col gap-[7px] text-[10px] font-medium text-[#484848] max-md:mb-[13px]"
        htmlFor={id}
      >
        <span>{label}</span>
        {multiline ? (
          <textarea
            id={id}
            name={name}
            value={form[name]}
            onChange={update}
            rows="5"
            placeholder={placeholder}
            required
            aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? `error-${name}` : undefined}
            className={`w-full resize-y rounded-md border bg-white px-3 py-[11px] text-[11px] font-normal leading-[1.6] text-ink outline-none transition placeholder:text-[#a6a6a6] focus:border-[#6f96e9] focus:ring-[3px] focus:ring-brand/10 max-md:text-[10px] ${errors[name] ? "border-[#dd7777]" : "border-[#e4e6eb]"}`}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={form[name]}
            onChange={update}
            placeholder={placeholder}
            autoComplete={
              name === "name" ? "name" : name === "email" ? "email" : undefined
            }
            required
            aria-invalid={Boolean(errors[name])}
            aria-describedby={errors[name] ? `error-${name}` : undefined}
            className={`w-full rounded-md border bg-white px-3 py-[11px] text-[11px] font-normal text-ink outline-none transition placeholder:text-[#a6a6a6] focus:border-[#6f96e9] focus:ring-[3px] focus:ring-brand/10 max-md:text-[10px] ${errors[name] ? "border-[#dd7777]" : "border-[#e4e6eb]"}`}
          />
        )}
        {errors[name] && (
          <small
            id={`error-${name}`}
            className="text-[9px] text-[#b74444]"
            role="alert"
          >
            {errors[name]}
          </small>
        )}
      </label>
    );
  }
  return (
    <form
      className="rounded-[10px] border border-border bg-white p-6 shadow-[0_10px_30px_#192a4308] max-md:p-[19px_14px]"
      onSubmit={submit}
      noValidate
    >
      <div className="mb-[21px] flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-[8px] uppercase tracking-[.12em] text-secondary">
            SEND A NOTE
          </p>
          <h2 className="m-0 font-heading text-lg font-semibold tracking-[-.04em] max-md:text-[15px]">
            Tell me what’s on your mind.
          </h2>
        </div>
        <span className="font-mono text-[8px] text-[#a0a0a0]">01 / 01</span>
      </div>
      <div className="grid grid-cols-2 gap-[13px] max-md:grid-cols-1 max-md:gap-0">
        {field("name", "Full name", "Your name")}
        {field("email", "Email address", "you@example.com", "email")}
      </div>
      {field("subject", "Subject", "Internship, collaboration, or a question")}
      {field(
        "message",
        "Message",
        "A little context helps me understand what you have in mind…",
        "text",
        true,
      )}
      <div className="flex flex-wrap items-center gap-[13px]">
        <button
          className="inline-flex min-h-[41px] items-center justify-center gap-3 rounded-[7px] bg-brand px-4 text-[10px] font-semibold text-white transition hover:bg-[#1d4ed8] disabled:cursor-wait disabled:opacity-70"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Checking…" : "Prepare message"}
          {status !== "loading" && <ArrowRight size={16} />}
        </button>
        {notice && (
          <p
            className={`m-0 flex max-w-[310px] items-start gap-1.5 text-[9px] leading-[1.5] ${Object.keys(errors).length ? "text-[#b74444]" : "text-[#527255]"}`}
            role={Object.keys(errors).length ? "alert" : "status"}
            aria-atomic="true"
          >
            {!Object.keys(errors).length && (
              <CheckCircle2 className="shrink-0" size={16} />
            )}{" "}
            {notice}
          </p>
        )}
      </div>
      <p className="mb-0 mt-[14px] text-[8px] leading-[1.6] text-[#969696]">
        This form checks your details in the browser. It will not send or store
        your message until an email service is connected.
      </p>
    </form>
  );
}
