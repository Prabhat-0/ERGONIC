"use client";
import Container from "@/component/Container";
import PageHeading from "@/component/PageHeading";
import { useEffect, useRef, useState } from "react";

const labelCls =
  "font-outfit font-light text-[clamp(14px,0.2vw+13.3px,16px)] text-[#979797]";
const inputCls =
  "w-full min-w-0 rounded-xl border border-white/20 bg-transparent px-4 py-3 font-outfit text-base text-white placeholder:text-white/40 transition-colors duration-200 hover:border-white/40 focus:border-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 [color-scheme:dark]";
const errorCls = "font-outfit text-sm text-red-400 px-4 ";

//initializing the state values as both fields and error will take the same
const initialFields = { name: "", email: "", topic: "New project", message: "" };

// for testing if there is valid email or not 
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

//dropDown fields 
const queries= ["New Project","Partnership","Support","Something Else"];
export default function ContactPage() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const timerRef = useRef(null);

  
//logic for navigating to the input fields through enter 
const inputRef=useRef([]);
const handleEnter=(e,i)=>{
  if(i==1 )return;
  if(e.key!=='Enter')return;
  const next=inputRef.current[i+1];
  console.log(next);
  e.preventDefault();
  inputRef.current=next;
  next.focus();
  console.log(inputRef, " this inputRef is printed after all the handling of enter");
}

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const found = {};
    const name = fields.name.trim();
    const message = fields.message.trim();
    if(name.length==0) found.name="Name is required";
    else if (name.length < 2) found.name = "Name is too short.";
    else if (name.length > 20) found.name = "Name is too long.";

    if(fields.email.trim().length==0)found.email="Email is required";
    else if (!EMAIL_RE.test(fields.email.trim()))
      found.email = "Enter a valid email, like name@company.com.";

    if(message.length==0)found.message="Message is required";
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
    <main className="w-full overflow-x-clip px-4 pb-[clamp(40px,8vw,100px)] pt-[clamp(88px,12vw,160px)] md:px-8 xl:px-0">
      <Container>
        <div className="flex w-full flex-col items-center justify-center gap-10 z-10">
          <PageHeading
            heading="get in touch"
            spanText1="Contact "
            spanText2="Us"
            para="Tell us about your project and we'll get back to you by email."
          />

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex w-full min-w-0 flex-col gap-5 rounded-2xl border border-white/20 bg-white/3 p-[clamp(16px,4vw,40px)]"
          >
            {/** Input for full Name section  */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="name" className={labelCls}>Full name <span className="text-red-400 text-2xl ml-1">*</span></label>
                <input
                ref={el=>inputRef.current[0]=el}
                onKeyDown={(e)=>handleEnter(e,0)}
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
                {errors.name && <p id="name-error" className={errorCls}>{errors.name}</p>}
              </div>

              {/** Input for Email section */}
              <div className="flex min-w-0 flex-col gap-2 relative">
                <label htmlFor="email" className={labelCls}>Email
                  <span className="text-red-400 text-2xl ml-1">*</span>
                </label>
                <input
                ref={el=>inputRef.current[1]=el}
                 onKeyDown={(e)=>handleEnter(e,1)}
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
            
                {errors.email && <p id="email-error" className={errorCls}>{errors.email}</p>}
              </div>
            </div>
            {/** DropDown section */}
            <div className="flex min-w-0 flex-col gap-2">
              
              <label htmlFor="topic" className={labelCls}>What is this about?<span className="text-red-400 text-2xl ml-1">*</span></label>
              <div className="relative">
                <select
                  id="topic"
                  name="topic"
                  value={fields.topic}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none pr-12`}
                >
                  {queries.map((q)=><option key={q} className="bg-black">{q}</option>)}
                  
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

            {/** message box */}
            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="message" className={labelCls}>Message <span className="text-red-400 text-2xl ml-1">*</span></label>
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
              {errors.message && <p id="message-error" className={errorCls}>{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-orange px-8 py-4 text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-white/10 active:scale-95 sm:w-fit"
            >
              Send message
            </button>

            {success && (
              <p role="status" className="font-outfit text-green-400">{success}</p>
            )}
          </form>
        </div>
      </Container>
    </main>
  );
}