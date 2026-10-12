import Image from "next/image";
import HeroBg from "../../public/HeroBg.png";
import Container from "@/component/Container";
import Heading from "@/component/Heading";
import MainHeading from "@/component/MainHeading";
import Paragraph from "@/component/Paragraph";
import RoboticsElectronics from "../../public/RoboticsElectronic.png"
import Button from "@/component/Button";
const roboticsElectronicsPara="We are an award winning design and engineering firm specializing in the development of novel consumer electronics, medical devices, drone technology, robotics, and architectural solutions."
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

      <section id="roboticsElectronics" className="w-full h-[668px] flex items-center justify-center relative bg-background[ linear-gradient(90deg, #2C2C2C 0%, #000000 134.68%)]">
          <Image src={RoboticsElectronics} quality={80} className="absolute bottom-0 left-0 w-full h-auto -z-10"/>
          <div className='w-full xl:max-w-282 h-auto flex items-center justify-center gap-2.5 z-10'>
              <Paragraph text={roboticsElectronicsPara} textSize="text-[50px]" lineHeight="leading-[60px]"/> 
              <Button text="know more"/>
          </div>
              
            
      </section>

    </div>
  );
}
