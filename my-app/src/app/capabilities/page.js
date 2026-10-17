import Hero from '@/component/Hero'
import React from 'react'
import CapabilitesBg from "../../../public/capabilitiesBg.png";
import ParaButton from '@/component/ParaButton';
import Testimonial from '@/component/Testimonial';
import Ideas from '@/component/Ideas';
import CapabilitesIdeas from "../../../public/capabilitiesIdeas.png"
import Container from '@/component/Container';
import PageHeading from '@/component/PageHeading';
import Button from '@/component/Button';
import CreativeConceptionImg from "../../../public/creativeConception.png"
import Image from 'next/image';
import IndustryDesignImg from "../../../public/industryDesignImg.png";
import ElectronicsDesignImg from "../../../public/electronicsDesignImg.png";
import PrototypingAndTestingImg from '../../../public/prototypingImg.png';
import ManufacturingAndAssemblyImg from "../../../public/manufacturingAssemblyImg.png"
import Custom3DPrintPartImg from "../../../public/3DprintPartImg.png";
import CNCMilledPartImg from '../../../public/CNCMilledPartIMg.png';
import ArchitecturalImg from "../../../public/architectImg.png";

const cardData = [{ header: "Creative Conception:", text: "Transform ideas into tangible designs with sketches, renderings, and mood boards that capture your vision." }, { header: "User-Centered Aesthetics:", text: "raft products that look stunning and feel intuitive, balancing form, function, and ergonomics.", }, { header: "Brand Alignment:", text: "Ensure every curve and finish reflects your brand identity, from minimalist to bold.", }, { header: "Color, Materials, Finish:", text: "Leverage cutting-edge materials, colors, and finishes to elevate design and performance.", }]

const images = [IndustryDesignImg, ElectronicsDesignImg, PrototypingAndTestingImg, ManufacturingAndAssemblyImg, Custom3DPrintPartImg, CNCMilledPartImg, ArchitecturalImg];
const heading = ["Industry Design", "Electronics Design ", "Prototyping and Testing", "Design for Manufacturing & Assembly", "Custom 3D Printed Part ", "Custom CNC Milled Part ", "Architectural Design  "];

const article = "The design work that solves real problems for our emerging futures is complex. Space stations. New modes of mobility. Transformations to industrial systems. These are the kinds of brave endeavors that require audacity and an appetite for the wonderfully difficult. It’s what you do—and it’s what we do, too."

const experties = ["Industry Design", "3D CAD Modeling & Simulation", "Electronics Design ", "Prototyping and Testing", "Design for Manufacturing & Assembly", "Custom 3D Printed Part ", "Custom CNC Milled Part ", "Architectural Design  "];

const page = () => {
	let i = 0;
	return (
		<section>
			<Hero id="capabilitiesHero" image={CapabilitesBg} headerText="Our" MainHeaderText="Capabilities." ParaText="Trusted by top investors and financial partners worldwide" />

			{/**  ParaSection  */}
			<section className="w-full px-4 md:px-6 lg:px-10 xl:px-0 py-16 lg:py-0 h-auto lg:h-167 flex items-center justify-center relative">

				<ParaButton para="The design work that solves real problems for our emerging futures is complex. Space stations. New modes of mobility. Transformations to industrial systems. These are the kinds of brave endeavors that require audacity and an appetite for the wonderfully difficult. It’s what you do—and it’s what we do, too." text="know more" />
			</section>
			{/**Capabilities and experties */}
			<section id="capabilities" className="w-full px-4 md:px-6 lg:px-10 xl:px-0 pt-10 pb-0 md:py-16 lg:py-20 h-auto flex items-center justify-center relative bg-[#0D0D0D]">
				<Container>
					<PageHeading heading="what do we do" spanText1="Our " spanText2="Capabilities & Expertise" />
					<div className='grid mt-0 md:mt-6 lg:mt-8 xl:mt-10 grid-cols-2 items-start gap-5 md:gap-10 lg:gap-15 xl:gap-25'>
						<div className='w-full xl:max-w-282 flex flex-col items-start justify-center gap-6 md:gap-10 lg:gap-12.5 z-10 max-w-113.25'>
							<article className='font-metal text-base md:text-xl lg:text-2xl leading-5 md:leading-7.5 tracking-[-3%]' >{article}</article>
							<Button text={"Know More"} path='/contact'/>
						</div>

						<ul className='flex flex-col justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10'>
							{experties.map((e) => <li key={e} className='font-metal text-xl md:text-2xl lg:text-3xl xl:text-[40px] tracking-[-3%] sm:whitespace-nowrap'>{e}</li>)}
						</ul>
					</div>
				</Container>
			</section>

			{/**Industry Design */}
			<section className="relative flex w-full items-center justify-center overflow-hidden bg-[#0D0D0D] px-4 md:px-6 lg:px-10 xl:px-0">
				{/* Background image */}
				<Image
					src={CreativeConceptionImg}
					alt="Creative conception background"
					quality={[75,90]}
					loading="lazy"
					className="pointer-events-none absolute left-0 top-0 z-0 h-auto w-full opacity-60"
				/>

				{/* Dark gradient overlay for readability */}
				<div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-[#0D0D0D]/40 via-[#0D0D0D]/80 to-[#0D0D0D]" />

				<Container>
					<div className="relative z-10 flex w-full flex-col gap-2 py-5 md:py-10 sm:gap-10 md:gap-16 lg:gap-22.5 lg:py-16 xl:py-40">
						{images.map((img, index) => (
							<div
								key={index}
								className="group flex flex-col gap-2 md:gap-6 lg:gap-8 rounded-2xl hover:border bg-transparent p-4 sm:p-5 md:p-8  lg:p-10 shadow-lg shadow-black/30 hover:backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/6 hover:shadow-2xl  md:rounded-3xl "
							>
								{/* Page heading */}
								<PageHeading spanText2={heading[index]}  wrap='whitespace-pre-line'/>

								<div className="grid grid-cols-1 items-center gap-6 md:gap-8 lg:grid-cols-2 lg:gap-11.2">
									{/* Text column */}
									<div className="order-2 flex h-full w-full flex-col justify-center gap-2 py-2 md:gap-6 lg:order-1 lg:max-w-122.5">
										{cardData.map((card, cardIndex) => (
											<div
												key={cardIndex}
												className="border-l-2 border-white/15 pl-4 transition-colors duration-300 group-hover:border-white/40"
											>
												<h6 className="font-outfit text-sm font-semibold text-white sm:text-base md:text-lg lg:text-2xl">
													{card.header}
												</h6>
												<article className="mt-1 font-metal text-sm leading-relaxed text-white/70 sm:text-base lg:text-xl">
													{card.text}
												</article>
											</div>
										))}
									</div>

									{/* Image column */}
									<div className="order-1 w-full lg:order-2">
										<div className="overflow-hidden rounded-xl border border-white/10 bg-black/30  md:rounded-2xl">
											<Image
												src={img}
												alt={heading[index] || `Design image ${index + 1}`}
												quality={[75,90]}
												loading="lazy"
												className="h-auto w-full rounded-lg object-contain transition-transform duration-500 ease-out group-hover:scale-105 md:rounded-xl"
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			<div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
			<Testimonial /> <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
			<Ideas image={CapabilitesIdeas} HeaderText="Let’s Build " MainHeaderText="Ambitious ideas" ButtonText="Build Your Project" opacity="opacity-50" />
		</section>

	)
}

export default page