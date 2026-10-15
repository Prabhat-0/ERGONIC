import React from 'react'
import TechonologyExpert from "../../public/technologyExpert.png";
import Image from 'next/image';
import Container from './Container';
import Button from './Button';
import { Insta, Linkdein, Youtube } from '@/svg';
const address = "180 John Street Suite 313\nToronto, ON M5T 1X5\nCanada"

// fluid body text: 16px -> 20px
const style = "font-outfit font-normal text-[clamp(16px,0.4vw+14.4px,20px)] leading-snug";
// fluid heading text: 28px -> 48px (smaller range on lg where the heading sits in a narrow column)
const headingSize = "text-[clamp(28px,5.5vw+10px,44px)] md:text-[clamp(34px,3vw+14px,48px)] lg:text-[clamp(26px,2.9vw,48px)]";

const footerLinks = [
    {
        title: "Pages",
        links: ["Home", "Projects", "Be a Client", "Contact us"],
    },
    {
        title: "Company",
        links: ["About us", "What We Do", "How We Work", "Industries"],
    },
];
const socialStyle = "hover:-translate-y-3 transition-all duration-300 ease-in-out"
const socials = [
    { label: "LinkedIn", Icon: <Linkdein className={socialStyle} /> },
    { label: "Instagram", Icon: <Insta className={socialStyle} /> },
    { label: "YouTube", Icon: <Youtube className={socialStyle} /> },
];


const Footer = () => {
    return (
        <footer className='relative w-full px-4 h-auto flex flex-col items-center overflow-x-clip' id="footer">
            <Image
                src={TechonologyExpert}
                alt="Technology expertise"
                quality={[75,90]}
                sizes="100vw"
                className='w-full h-auto'
            />

            <Container>
                <div className='flex flex-col w-full px-4 md:px-6 lg:px-0 pb-10 sm:pb-14 md:pb-20'>
                    {/* 2 cols mobile, 3 cols tablet, 4 cols desktop */}
                    <div className='grid grid-cols-2 gap-x-[clamp(16px,3vw,64px)] gap-y-8 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]'>
                        {/* Heading: full row until lg */}
                        <div className='col-span-2 md:col-span-3 lg:col-span-1 flex min-w-0 flex-col gap-2'>
                            <h1 className={`font-outfit font-thin ${headingSize} leading-[1.1] tracking-[-0.03em]`}>
                                Ready to create <span className='md:hidden'>something</span>
                            </h1>
                            <h2 className={`hidden md:block font-outfit font-thin ${headingSize} leading-[1.1] tracking-[-0.03em]`}>
                                something
                            </h2>
                            <p className={`font-metal font-normal ${headingSize} leading-[1.1] tracking-[-0.03em]`}>
                                Awesome together?
                            </p>
                        </div>

                        {/* Address + email */}
                        <div className='col-span-2 md:col-span-1 flex min-w-0 flex-col gap-3 sm:gap-5'>
                            <p className={`${style} whitespace-pre-line`}>{address}</p>
                            <a href="mailto:info@ergonic.ca" className={`${style} break-words border-t border-white/40`}>
                                info@ergonic.ca
                            </a>
                        </div>

                        {footerLinks.map((group) => (
                            <div key={group.title} className='flex min-w-0 flex-col gap-2 sm:gap-3 '>
                                <h4 className='font-outfit font-light text-[clamp(14px,0.2vw+13.3px,16px)] text-[#979797]'>
                                    {group.title}
                                </h4>
                                <ul className='flex flex-col  border-t pt-2 border-white/30  gap-2 sm:gap-3'>
                                    {group.links.map((link) => (
                                        <li key={link} className={style}>{link}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className='mt-[clamp(40px,6vw,60px)] flex w-full flex-col gap-6 sm:gap-10 '>
                        <div className='flex w-full gap-6 flex-row items-center justify-between'>
                            <Button text="Let's Connect" />

                            <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
                                {socials.map(({ label, Icon }) => (
                                    <a
                                        key={label}
                                        href='#'
                                        aria-label={label}
                                        className='block size-8 shrink-0 md:size-10 lg:size-12 [&>svg]:h-full [&>svg]:w-full'
                                    >
                                        {Icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className='flex w-full items-center justify-center border-t border-white/20 pt-4 sm:justify-end'>
                            <p className='font-outfit font-light text-[clamp(14px,0.4vw+12.4px,18px)] text-[#979797] text-center'>
                                © 2025 Ergonic. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer