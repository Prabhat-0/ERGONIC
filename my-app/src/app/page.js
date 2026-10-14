
import Image from "next/image";
import HeroBg from "../../public/HeroBg.png";
import Container from "@/component/Container";
import Heading from "@/component/Heading";
import MainHeading from "@/component/MainHeading";
import Paragraph from "@/component/Paragraph";
import RoboticsElectronics from "../../public/RoboticsElectronic.png"
import Button from "@/component/Button";
import PageHeading from "@/component/PageHeading";
import DroneTxt from "../../public/drone-txt.png"
import RobotTxt from "../../public/robot-txt.png"
import WearableTxt from "../../public/wearable-txt.png"
import CNCKitTxt from "../../public/cnc-kit-txt.png"
import Drone from "../../public/drone.png"
import Robot from "../../public/robot.png"
import Wearable from "../../public/wearable.png"
import CNC from "../../public/cncKit.png"
import Link from "next/link";
import { Arrow } from "@/svg";
import CreativeConcept from "../../public/creativeConception.png"
import ParaButton from "@/component/ParaButton";
import { FaAngleLeft, FaAngleRight, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Man from "../../public/man.png"
import TestiData from "@/component/TestiData";
import Testimonial from "@/component/Testimonial";
import Hero from "@/component/Hero";
import UniversityOfToronto from "../../public/universityOfToronto.png";
import UHN from "../../public/uhn.png"
import Asani from "../../public/asani.png"
import Berkely from "../../public/Berkley.png"
import Harding from "../../public/harding.png"
import Afros from "../../public/aero.png"
import Biz from "../../public/bizStori.png"
import ERS from "../../public/ersInterNational.png"
import Maazar from "../../public/maazar.png"
import RoyalTulip from "../../public/royalTulip.png"
import Printerior from "../../public/printeior.png"
import Medal from "../../public/medal.png"
import AmbitiousIdeas from "../../public/ambitiousIdeas.png"
import Ideas from "@/component/Ideas";

const images = [UniversityOfToronto, UHN, Asani, Berkely, Harding, Afros, Biz, ERS, Maazar, RoyalTulip, Printerior, Medal];


const cardDetails = [
    {
        spanText1: "Low-noise",
        spanText2: "MAV Drone",
        para: "We analyzed various geometries based on NACA profiles that suit our aerodynamic needs and designed a proprietary 40 mm diameter 3 bladed propeller with major innovation in reducing vortex generations at the propeller tips, the main source of how noise is created.",
        outlineImage: DroneTxt,
        outlieImageWidth: "max-w-[334px]",
        height: "h-auto",
        image: Drone,
    },
    {
        spanText1: "Autonomous Fruit",
        spanText2: "Picking Robot",
        para: "The robot uses 6 ultrasonic sensors and an intelligent camera to navigate autonomously around the field in order to detect cherries. Once it detects them, the front of the robot aligns with the cherries.",
        outlineImage: RobotTxt,
        outlieImageWidth: "max-w-[323px]",
        image: Robot,
    },
    {
        spanText1: "Pill Reminder Pro",
        spanText2: "",
        para: "This wearable, bracelet-style device has eight compartments - seven of which are dedicated to each day of the week, while the eighth compartment houses additional functionality for vibration, button operations, and charging. Each daily medication compartment can hold up to 3 capsule pills or tablets.",
        outlineImage: WearableTxt,
        outlieImageWidth: "max-w-[567px]",
        image: Wearable,
    },
    {
        spanText1: "Auto Tool Changing",
        spanText2: "CNC Mill kit",
        para: "Magnetic strips are placed around the edges of the circular holes and are attracted to the edges of the collet face. This being in combination with the chamfer on the front end of the R8 collets, slightly sinking into the holes, ensures the collets are able to be kept both upright and stationary.",
        outlineImage: CNCKitTxt,
        outlieImageWidth: "max-w-[567px]",
        image: CNC,
    },
];

const roboticsElectronicsPara = "We are an award winning design and engineering firm specializing in the development of novel consumer electronics, medical devices, drone technology, robotics, and architectural solutions.";
export default function Home() {
    return (
        <div className="w-full h-auto ">
            {/** HERO Section */}
            <Hero image={HeroBg} headerText={"Future Industries"} MainHeaderText={"Designed Today."} ParaText={"Trusted by top investors and financial partners worldwide"} />
            {/**About  */}
            <section id="about" className="w-full h-auto px-4 md:px-6 lg:px-10 xl:px-0 py-10 md:py-16 lg:py-0 lg:h-[668px] flex items-center justify-center relative bg-[#0D0D0D]">
                <Image src={RoboticsElectronics} quality={80} className="absolute bottom-4 left-0 w-full h-auto" />
                <ParaButton para={roboticsElectronicsPara} text="know more" />
            </section>
            <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />

            {/**Projects  */}
            <section id="projects" className="w-full bg-black grid place-items-center pt-10 md:pt-20 lg:pt-30 xl:pt-38 gap-10 pb-10">
                <Container>
                    <PageHeading heading={"featured work"} spanText1={"Our "} spanText2={"Stunning Projects"} para="Trusted by top investors and financial partners worldwide" />
                </Container>
                <div className="w-full flex items-center justify-center">
                    <Container>
                        <div className="flex w-full flex-col gap-20">
                            {cardDetails.map((item, index) => {
                                const flip = index % 2 === 1; // cards 2 and 4 are mirrored

                                return (
                                    <div key={item.spanText1} className="flex flex-col sm:items-center md:items-normal sm:justify-center md:justify-normal gap-10 md:border-none md:flex-row px-4 md:px-0">
                                        {/* Card */}
                                        <div
                                            className={` relative order-1 flex min-h-[320px] w-full max-w-[500px] flex-col gap-3 px-5 pt-5 sm:min-h-[400px] md:min-h-[460px] ${flip ? "md:order-2 md:ml-auto" : "md:order-1"
                                                }`}
                                        >
                                            {/* Glowing background */}
                                            <div
                                                className={`absolute  inset-0 ${flip
                                                    ? "bg-[linear-gradient(228.09deg,#FFFFFF_0.77%,rgba(0,0,0,0)_77.2%)]"
                                                    : "bg-[linear-gradient(131.91deg,#FFFFFF_0.77%,rgba(0,0,0,0)_77.2%)]"
                                                    }`}
                                            />

                                            {/* Outline image (top) */}
                                            <Image
                                                src={item.outlineImage}
                                                alt=""
                                                width={item.outlieImageWidth}
                                                className="relative z-10 h-13 md:h-20  lg:h-27.5 w-fit self-center object-contain"
                                            />

                                            {/* Main image (below the outline image, with gap-3 between them) */}
                                            <div
                                                className={`absolute  bottom-0 right-0 w-fit h-full ${item.height ? "max-h-[400px]" : "max-h-[300px]"} flex-1 ${flip ? "md:-left-20 " : "md:-right-20 "
                                                    }`}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={`${item.spanText1} ${item.spanText2}`}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Text column */}
                                        <div
                                            className={`order-2 flex w-full flex-col px-4 md:px-6 lg:px-0 items-center justify-center gap-4 text-left ${flip
                                                ? "md:order-1 md:items-start md:text-left"
                                                : "md:order-2 md:items-end md:text-right"
                                                }`}
                                        >
                                            <div className="max-w-[405px]">
                                                <span className="font-metal text-center font-regular text-[32px] leading-[36px] tracking-[-0.03em] sm:text-[40px] sm:leading-[44px] lg:text-[50px] lg:leading-[52px]">
                                                    <span className="block">{item.spanText1}</span>
                                                    {item.spanText2 && <span className="block">{item.spanText2}</span>}
                                                </span>

                                                <Paragraph
                                                    para={item.para}
                                                    fontStyle="font-metal font-regular"
                                                    textSize="text-base lg:text-xl text-start"
                                                    leading="leading-[22px] lg:leading-[24px] tracking-[-0.03em]"
                                                />

                                                <div className="mt-4 grid place-items-center relative group z-10">
                                                    <Link
                                                        href="#"
                                                        className=" relative isolate flex w-fit items-center justify-center rounded-full border  group-hover:bg-white/30 transition-all  duration-300 ease-in-out border-orange px-4 py-4 text-base font-medium text-white xl:gap-10"
                                                    >
                                                        <Arrow className="transition-transform duration-300 group-hover:translate-x-2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </div>

            </section>
            {/** services  */}
            <section id="services" className="relative w-full h-auto grid place-items-center px-4 md:px-0  py-10 md:py-20">
                <Image src={CreativeConcept} className="w-full absolute -top-20 left-0 object-cover z-0" />
                <div className='w-full xl:max-w-282 h-auto flex flex-col items-center justify-center gap-8 md:gap-15 lg:gap-25  ' >

                    <Button text="All Work" />


                    <div className=" gap-8 md:gap-12 lg:gap-15 z-10 flex items-center justify-center flex-col">
                        <PageHeading heading="services" spanText1="How " spanText2="we help industrial innovators." para="Trusted by top investors and financial partners worldwide" />
                        <ParaButton para="Your bold ideas deserve real-world impact. Our design capabilities transform them into products and systems that accelerate production, optimize performance, and shape the future of your industry." text='view our services' />

                    </div>

                </div>
            </section>
            <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
            {/**Testimonials comp */}
            <Testimonial />
            <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
            {/**Clients section */}
            <section id="clients" className="w-full h-auto   bg-black flex flex-col justify-center items-center py-10 md:py-15 lg:py-25">
                <Container>

                    <PageHeading heading="Our clients" spanText1={"Trusted by  "} spanText2={"Industry Leaders"} spanStyle="font-metal font-light lg:text-5xl md:text-2xl text-xl xl:text-[60px]" />
                    <div className="mt-2 md:mt-5 w-full grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-2.5 items-center justify-center px-4 md:px-6 lg:px-0">
                        {images.map(image => {
                            return <div key={image} className="w-fit max-w-50 h-fit">
                                <Image src={image} className="object-cover" />
                            </div>
                        })}
                    </div>


                </Container>
            </section> 
            <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
            <Ideas image={AmbitiousIdeas} HeaderText="Let's Buid" MainHeaderText="Ambitious Ideas" ButtonText="Build Your Project" /> <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
        </div>
    );
}
