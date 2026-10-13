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
const data = [
  { number: "99", text: "years of design\nleadership" },
  { number: "450", text: "Complex projects delivered\nevery year" },
  { number: "275", text: "Design And Innovation\nAwards" },
];
const roboticsElectronicsPara = "We are an award winning design and engineering firm specializing in the development of novel consumer electronics, medical devices, drone technology, robotics, and architectural solutions.";
export default function Home() {
  return (
    <div className="w-full h-auto ">
      {/** HERO Section */}
      <section id="Hero" className="w-full h-auto relative ">
        <Image src={HeroBg} alt="HeroBg" quality={80} className="w-full h-auto object-cover z-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center  justify-center pb-17.5 gap-2.5">
          <Heading text={"Future Industries"} />
          <MainHeading text={"Designed Today."} />
          <Paragraph para={"Trusted by top investors and financial partners worldwide"} />
        </div>


      </section>

      <section id="roboticsElectronics" className="w-full h-[668px] flex items-center justify-center relative bg-[#0D0D0D]">
        <Image src={RoboticsElectronics} quality={80} className="absolute bottom-4 left-0 w-full h-auto" />
        <ParaButton para={roboticsElectronicsPara} text="know more" />
      </section>
      <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />


      <section id="featuredWork" className="w-full bg-black grid place-items-center pt-38 gap-10 pb-10">
        <Container>
          <PageHeading heading={"featured work"} spanText1={"Our"} spanText2={"Stunning Projects"} para="Trusted by top investors and financial partners worldwide" />
        </Container>
        <div className="w-full flex items-center justify-center">
          <Container>
            <div className="flex w-full flex-col gap-20">
              {cardDetails.map((item, index) => {
                const flip = index % 2 === 1; // cards 2 and 4 are mirrored

                return (
                  <div key={item.spanText1} className="flex flex-col gap-10 md:flex-row">
                    {/* Card */}
                    <div
                      className={`relative order-1 flex min-h-[320px] w-full max-w-[500px] flex-col gap-3 px-5 pt-5 sm:min-h-[400px] md:min-h-[460px] ${flip ? "md:order-2 md:ml-auto" : "md:order-1"
                        }`}
                    >
                      {/* Glowing background */}
                      <div
                        className={`absolute inset-0 ${flip
                          ? "bg-[linear-gradient(228.09deg,#FFFFFF_0.77%,rgba(0,0,0,0)_77.2%)]"
                          : "bg-[linear-gradient(131.91deg,#FFFFFF_0.77%,rgba(0,0,0,0)_77.2%)]"
                          }`}
                      />

                      {/* Outline image (top) */}
                      <Image
                        src={item.outlineImage}
                        alt=""
                        width={item.outlieImageWidth}
                        className="relative z-10  h-auto lg:max-h-27.5 w-fit self-center object-contain"
                      />

                      {/* Main image (below the outline image, with gap-3 between them) */}
                      <div
                        className={`absolute bottom-0 right-0 h-full w-fit ${item.height ? "max-h-[400px]" : "max-h-[300px]"} flex-1 ${flip ? "md:-left-20 " : "md:-right-20 "
                          }`}
                      >
                        <Image
                          src={item.image}
                          alt={`${item.spanText1} ${item.spanText2}`}
                          className="h-full w-full object-bottom-left"
                        />
                      </div>
                    </div>

                    {/* Text column */}
                    <div
                      className={`order-2 flex w-full flex-col items-center justify-center gap-4 text-left ${flip
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

                        <div className="mt-4 grid place-items-center">
                          <Link
                            href="#"
                            className="group relative isolate flex w-fit items-center justify-center gap-5 overflow-hidden rounded-full border border-orange px-4 py-4 text-base font-medium leading-5 tracking-[-0.03em] whitespace-nowrap text-white transition-colors duration-300 hover:text-black xl:gap-10"
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

      <section id="work" className="relative w-full h-auto grid place-items-center py-20">
        <Image src={CreativeConcept} className="w-full absolute -top-20 left-0 object-cover z-0" />
        <div className='w-full xl:max-w-282 h-auto flex flex-col items-center justify-center gap-25  ' >

          <Button text="All Work" />
          <div className="gap-15 z-10 flex items-center justify-center flex-col">
            <PageHeading heading="services" spanText1="How " spanText2="we help industrial innovators." para="Trusted by top investors and financial partners worldwide" />
            <ParaButton para="Your bold ideas deserve real-world impact. Our design capabilities transform them into products and systems that accelerate production, optimize performance, and shape the future of your industry." text='view our services' />

          </div>

        </div>
      </section>

      <section className="grid max-h-[700px] w-full place-items-center bg-[linear-gradient(111.76deg,#1D1D1D_-0.79%,rgba(0,0,0,0.5)_104.11%)] py-20">
        <Container>
          <div className="flex items-center gap-15">
            <div className="border border-[#5E5E5E] rounded-full p-4">
              <LuChevronLeft className="size-10 " strokeWidth={1} />
            </div>
            <div className="">
                <div className="flex flex-col gap-5 items-center text-center w-full">
              <ParaButton para="“Ergonic fast-paced, collaborative approach significantly increases the speed and effectiveness with which we are delivering our technology to end users.”" />
              <div className="gap-10 flex items-center">
                <Image src={Man} className="size-15 object-cover rounded-full" />
                <div className=" flex flex-col items-start">


                  <h2 className="font-outfit font-regular text-2xl ">
                    Rikki Maroen,

                  </h2>
                  <span className="font-outfit font-thin text-xl">ABB Platform</span>

                </div>
              </div>
              
            </div>
            <div className="flex flex-col gap-5 items-center text-center w-full">
              <ParaButton para="“Ergonic fast-paced, collaborative approach significantly increases the speed and effectiveness with which we are delivering our technology to end users.”" />
              <div className="gap-10 flex items-center">
                <Image src={Man} className="size-15 object-cover rounded-full" />
                <div className=" flex flex-col items-start">


                  <h2 className="font-outfit font-regular text-2xl ">
                    Rikki Maroen,

                  </h2>
                  <span className="font-outfit font-thin text-xl">ABB Platform</span>

                </div>
              </div>
              
            </div>
            </div>
            

            <div className="border border-[#5E5E5E] rounded-full p-4">
              <LuChevronRight className="size-10" strokeWidth={1} />
            </div>

          </div>
          <div className="flex justify-between items-center  gap-10  py-10  w-full px-30">
              {data.map((item)=><TestiData key={item.text} number={item.number} text={item.text}/>)}
          </div>
        </Container>
      </section>
    </div>
  );
}
