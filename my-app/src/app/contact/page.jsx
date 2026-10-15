"use client";
import Container from "@/component/Container";
import PageHeading from "@/component/PageHeading";
import { useState } from "react";

const labelCls =
  "font-outfit font-light text-[clamp(14px,0.2vw+13.3px,16px)] text-[#979797]";
const inputCls =
  "w-full min-w-0 rounded-xl border border-white/20 bg-transparent px-4 py-3 font-outfit text-base text-white placeholder:text-white/40 transition-colors duration-200 hover:border-white/40 focus:border-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 [color-scheme:dark]";
const errorCls = "font-outfit text-sm text-red-400 text-base ";

const initialFields = { name: "", email: "", topic: "New project", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactPage() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState({});
  const [success,setSuccess]=useState(null);

  // one handler for every field; uses the input's `name` attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // clear that field's error otherwise it will be show forever
  };

  const validate = () => {
    const found = {};
    const name = fields.name.trim();
    const message = fields.message.trim();

    if (name.length < 2) found.name = "Name is too short.";
    else if (name.length > 20) found.name = "Name is too long.";

    if (!EMAIL_RE.test(fields.email.trim())) found.email = "Enter a valid email, like name@company.com.";

    if (message.length < 10) found.message = "Message is too short.";
    else if (message.length > 200) found.message = "Message is too long.";

    return found;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page reload

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return; 
    setSuccess(`Thanks ${fields.name}. We will contact you Shortly. `)
    setTimeout(()=>{
        setSuccess(null);
    },3000)
    console.log(fields);
    setFields(initialFields); // reset the form
  };

  return (
    <main className="w-full overflow-x-clip bg-black pb-[clamp(40px,8vw,100px)] pt-[clamp(88px,12vw,160px)] grid place-items-center">
      <Container>
        <div className="px-4 md:px-0 flex flex-col items-center justify-center gap-10">
          <PageHeading
            heading="get in touch"
            spanText1="Contact "
            spanText2="Us"
            para="Tell us about your project and we'll get back to you by email."
          />

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex min-w-0 flex-col gap-5 rounded-2xl border border-white/20 bg-white/[0.03] p-[clamp(16px,4vw,40px)]"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="name" className={labelCls}>Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={fields.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  className={inputCls}
                />
                {errors.name && <p className={errorCls}>{errors.name}</p>}
              </div>

              <div className="flex min-w-0 flex-col gap-2">
                <label htmlFor="email" className={labelCls}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={fields.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  className={inputCls}
                />
                {errors.email && <p className={errorCls}>{errors.email}</p>}
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="topic" className={labelCls}>What is this about?</label>
              <select
                id="topic"
                name="topic"
                value={fields.topic}
                onChange={handleChange}
                className={inputCls}
              >
                <option className="bg-black">New project</option>
                <option className="bg-black">Partnership</option>
                <option className="bg-black">Support</option>
                <option className="bg-black">Something else</option>
              </select>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label htmlFor="message" className={labelCls}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project"
                value={fields.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                className={`${inputCls} min-h-[140px] resize-y`}
              />
              {errors.message && <p className={errorCls}>{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-orange px-8 py-4 text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 active:scale-95 sm:w-fit"
            >
              Send message
            </button>
            {success && <p className="font-outfit text-green-400">{success}</p>}
          </form>
        </div>
      </Container>
    </main>
  );
}