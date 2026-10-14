import React from 'react'
import TechonologyExpert from "../../public/technologyExpert.png";
import Image from 'next/image';
import Container from './Container';
import Button from './Button';
import { Insta, Linkdein, Youtube } from '@/svg';
const address = "180 John Street Suite 313\nToronto, ON M5T 1X5\nCanada"


const style = "font-outfit font-normal text-base md:text-lg xl:text-xl";
const footerLinks = [
    {
        title: "Pages",
        links: ["Home", "Projects", "Be a Client", "Contact us"],
    },
    {
        title: "Company",
        links: ["About us", "What We Do", "How We Wok", "Industries"],
    },
];
const socialStyle="hover:-translate-y-3 transition-all duration-300 ease-in-out"
const socials = [
    { label: "LinkedIn", Icon: <Linkdein className={socialStyle}/> },
    { label: "Instagram", Icon: <Insta className={socialStyle}/> },
    { label: "YouTube", Icon: <Youtube className={socialStyle}/> },
];


const Footer = () => {
    return (
        <footer className='relative w-full px-4 flex flex-col items-center' id="footer">
            <Image
                src={TechonologyExpert}
                alt="Technology expertise"
                quality={80}
                sizes="100vw"
                className='w-full h-auto '
            />

            <Container>
                <div className='flex flex-col gap-10 pb-10 sm:pb-12 lg:gap-15 lg:pb-15'>

                    {/* 1 col mobile, 2 cols tablet, 4 cols desktop */}
                    <div className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] xl:gap-x-16'>
                        <div className='flex flex-col gap-2 sm:col-span-2 lg:col-span-1'>
                            <h1 className='font-outfit font-thin text-3xl sm:text-4xl xl:text-5xl tracking-[-0.03em]'>
                                Ready to create something
                            </h1>
                            <p className='font-metal font-normal text-3xl sm:text-4xl xl:text-5xl tracking-[-0.03em]'>
                                Awesome together?
                            </p>
                        </div>

                        <div className='flex flex-col gap-3 sm:gap-5'>
                            <p className={`${style} whitespace-pre-line`}>{address}</p>
                            <a href="mailto:info@ergonic.ca" className={`${style} break-all`}>
                                info@ergonic.ca
                            </a>
                        </div>

                        {footerLinks.map((group) => (
                            <div key={group.title} className='flex flex-col gap-2 sm:gap-3'>
                                <h4 className='font-outfit font-light text-sm md:text-base text-[#979797]'>
                                    {group.title}
                                </h4>
                                <ul className='flex flex-col gap-2 sm:gap-3'>
                                    {group.links.map((link) => (
                                        <li key={link} className={style}>{link}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col gap-6 w-full sm:gap-10'>
                        <div className='flex flex-col items-start gap-6 w-full sm:flex-row sm:items-center sm:justify-between'>
                            <Button text="Let's Connect" />
                            <div className='flex items-center gap-3 sm:gap-4'>
                                {socials.map(({ label, Icon }) => (
                                    <a key={label} href='#' aria-label={label}>{Icon}</a>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center justify-center w-full sm:justify-end'>
                            <p className='font-outfit font-light text-sm md:text-base xl:text-lg text-[#979797] text-center'>
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