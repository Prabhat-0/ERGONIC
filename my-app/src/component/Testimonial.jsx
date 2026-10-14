"use client"
import React, { useRef, useState } from 'react'
import Man from "../../public/man.png"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import TestiData from './TestiData';
import ParaButton from './ParaButton';
import Container from './Container';
import Image from 'next/image';

const data = [
    { number: "99", text: "years of design\nleadership" },
    { number: "450", text: "Complex projects delivered\nevery year" },
    { number: "275", text: "Design And Innovation\nAwards" },
];

const testimonials = [
    {
        para: "“Ergonic fast-paced, collaborative approach significantly increases the speed and effectiveness with which we are delivering our technology to end users.”",
        name: "Alias Boron",
        company: "ABB Platform",
    },
    {
        para: "“Ergonic fast-paced, collaborative approach significantly increases the speed and effectiveness with which we are delivering our technology to end users.”",
        name: "Rikki Maroen,",
        company: "ABB Platform",
    },
    {
        para: "“Ergonic fast-paced, collaborative approach significantly increases the speed and effectiveness with which we are delivering our technology to end users.”",
        name: "Ali Qadari,",
        company: "ABB Platform",
    },
];
const Testimonial = () => {
    const scrollRef = useRef(null);
    const [index, setIndex] = useState(0);

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
    };

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setIndex(Math.round(el.scrollLeft / el.clientWidth));
    };

    return (
        <section id="testimonial" className="grid w-full place-items-center bg-[linear-gradient(111.76deg,#1D1D1D_-0.79%,rgba(0,0,0,0.5)_104.11%)] py-10 md:max-h-[700px] md:py-20">
            <Container>
                <div className="flex items-center sm:px-4 gap-2 sm:gap-6 lg:gap-15">
                    <button
                        type="button"
                        onClick={() => scroll(-1)}
                        disabled={index === 0}
                        aria-label="Previous testimonial"
                        className="shrink-0 rounded-full border border-[#5E5E5E] p-2 transition hover:border-orange hover:text-orange disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#5E5E5E] disabled:hover:text-inherit md:p-4"
                    >
                        <LuChevronLeft className="size-4 md:size-10" strokeWidth={1} />
                    </button>

                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="no-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto"
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="flex w-full shrink-0 snap-center flex-col items-center gap-5 px-1 text-center"
                            >
                                <ParaButton para={t.para} />
                                <div className="flex items-center gap-4 md:gap-10">
                                    <Image
                                        src={Man}
                                        alt={t.name}
                                        className="size-12 rounded-full object-cover md:size-15"
                                    />
                                    <div className="flex flex-col items-start">
                                        <h2 className="font-outfit text-base sm:text-md md:text-lg font-normal lg:text-2xl">{t.name}</h2>
                                        <span className="font-outfit text-base font-thin md:text-xl">{t.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => scroll(1)}
                        disabled={index === testimonials.length - 1}
                        aria-label="Next testimonial"
                        className="shrink-0 rounded-full border border-[#5E5E5E] p-2 transition hover:border-orange hover:text-orange disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[#5E5E5E] disabled:hover:text-inherit md:p-4"
                    >
                        <LuChevronRight className="size-4 md:size-10" strokeWidth={1} />
                    </button>
                </div>

                <div className="grid w-full grid-cols-2 gap-6 px-4 md:px-6 py-10 md:flex md:items-center md:justify-between md:gap-10 lg:px-30">
                    {data.map((item) => (
                        <TestiData key={item.text} number={item.number} text={item.text} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Testimonial

