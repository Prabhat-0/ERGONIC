"use client";
import Container from "@/component/Container";
import PageHeading from "@/component/PageHeading";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";


const labelCls =
  "font-outfit font-light text-[clamp(14px,0.2vw+13.3px,16px)] text-[#979797]";
const inputCls =
  "w-full min-w-0 rounded-xl border border-white/20 bg-transparent px-4 py-3 font-outfit text-base text-white placeholder:text-white/40 transition-colors duration-200 hover:border-white/40 focus:border-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 [color-scheme:dark]";
const errorCls = "font-outfit text-sm text-red-400 px-4";

// initial values for the form fields
const initialFields = { name: "", email: "", topic: "New Project", message: "" };

// checks that the email looks valid
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// dropdown options
const queries = ["New Project", "Partnership", "Support", "Something Else"];

export default function Career() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [popUPMessage, setPopUPMessage] = useState(null);

  const timerRef = useRef(null);
  const popupTimer = useRef(null);
  const previousIndex = useRef(-1);
  const inputRef = useRef([]);

  // ---------- Enter-key navigation (test fields) ----------
  const closePopup = () => {
    clearTimeout(popupTimer.current);
    setPopUPMessage(null);
  };

  const handleEnter = (e, i) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const next = inputRef.current[i + 1];
    if (!next) return; // last input: nothing to focus
    previousIndex.current = i; // remember where we came from
    next.focus();
    setPopUPMessage("Moved to the next field");
    clearTimeout(popupTimer.current);
    popupTimer.current = setTimeout(() => setPopUPMessage(null), 3000);
  };

  // Cancel: go back to the previous field
  const handleCancel = () => {
    inputRef.current[previousIndex.current]?.focus();
    closePopup();
  };

  // OK: stay on the new field
  const handleOk = () => closePopup();

  // clear timers on unmount
  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
      clearTimeout(popupTimer.current);
    },
    []
  );

  // ---------- Form logic ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const found = {};
    const name = fields.name.trim();
    const message = fields.message.trim();

    if (name.length === 0) found.name = "Name is required";
    else if (name.length < 2) found.name = "Name is too short.";
    else if (name.length > 20) found.name = "Name is too long.";

    if (fields.email.trim().length === 0) found.email = "Email is required";
    else if (!EMAIL_RE.test(fields.email.trim()))
      found.email = "Enter a valid email, like name@company.com.";

    if (message.length === 0) found.message = "Message is required";
    else if (message.length < 10) found.message = "Message is too short.";
    else if (message.length > 200) found.message = "Message is too long.";

    return found;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSuccess(`Thanks ${fields.name.trim()}. We will contact you shortly.`);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setSuccess(null), 3000);

    setFields(initialFields);
  };

  return (
    <main className="relative isolate w-full overflow-x-clip bg-[#030304] px-4 pb-[clamp(40px,8vw,100px)] pt-[clamp(88px,12vw,160px)] md:px-8 xl:px-0">
      {/* 1. grid lines (bottom layer) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:120px_120px]"
      />
      {/* 2. radial fade (above the grid) */}
      <div
        aria-hidden="true"
        className="w-1/2 pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10 bg-[radial-gradient(82.71%_100%_at_50%_0%,rgba(3,3,4,0.3)_0%,rgba(3,3,4,0.88)_36.28%,#030304_70.03%)]"
      />

      <Container>
        {/* popup */}
       {popUPMessage !== null &&
  createPortal(
    <div
      className="fixed top-0 left-1/2 -translate-x-1/2 z-9999 flex items-center justify-center backdrop-blur-md"
      onClick={handleCancel}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-describedby="popup-message"
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-sm flex-col gap-6 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/50 backdrop-blur-2xl"
      >
        <p id="popup-message" className="font-outfit text-base text-white">
          {popUPMessage}
        </p>

        <div className="flex items-center justify-center gap-10">
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-full border border-red-400/60 px-6 py-2 text-sm text-red-300 transition-colors hover:bg-red-500/20 active:scale-95"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleOk}
            className="rounded-full border border-green-400/60 px-6 py-2 text-sm text-green-300 transition-colors hover:bg-green-500/20 active:scale-95"
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.body
  )}
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-10">
          <PageHeading
            heading="no Header"
            spanText1="Practice "
            spanText2="Page"
            para="This is the practice page where i play with css and hooks ."
          />

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex w-full  backdrop-blur-sm min-w-0 flex-col gap-5 rounded-2xl border border-white/20 bg-white/3 p-[clamp(16px,4vw,40px)]"
          >
            {/* TEST BLOCK: 5 inputs for Enter navigation. Remove when done testing. */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex min-w-0 flex-col gap-2">
                  <label htmlFor={`field-${i}`} className={labelCls}>
                    Field {i + 1}
                    <span className="ml-1 text-2xl text-red-400">*</span>
                  </label>
                  <input
                    id={`field-${i}`}
                    ref={(el) => (inputRef.current[i] = el)}
                    onKeyDown={(e) => handleEnter(e, i)}
                    type="text"
                    placeholder={`Field ${i + 1}`}
                    className={inputCls}
                  />
                </div>
              ))}
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="name" className={labelCls}>
                  Full name
                  <span className="ml-1 text-2xl text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={fields.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputCls}
                />
                {errors.name && (
                  <p id="name-error" className={errorCls}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="relative flex min-w-0 flex-col gap-2">
                <label htmlFor="email" className={labelCls}>
                  Email
                  <span className="ml-1 text-2xl text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={fields.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputCls}
                />
                {errors.email && (
                  <p id="email-error" className={errorCls}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Dropdown */}
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="topic" className={labelCls}>
                What is this about?
                <span className="ml-1 text-2xl text-red-400">*</span>
              </label>
              <div className="relative">
                <select
                  id="topic"
                  name="topic"
                  value={fields.topic}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none pr-12`}
                >
                  {queries.map((q) => (
                    <option key={q} value={q} className="bg-black">
                      {q}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60"
                >
                  <path d="M5 8l5 5 5-5" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="message" className={labelCls}>
                Message
                <span className="ml-1 text-2xl text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project"
                value={fields.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputCls} min-h-35 resize-y`}
              />
              {errors.message && (
                <p id="message-error" className={errorCls}>
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-orange px-8 py-4 text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-white/10 active:scale-95 sm:w-fit"
            >
              Send message
            </button>

            {success && (
              <p role="status" className="font-outfit text-green-400">
                {success}
              </p>
            )}
          </form>
        </div>
      </Container>
    </main>
  );
}