import Hero from '@/component/Hero'
import React from 'react'
import CapabilitesBg from "../../../public/capabilitiesBg.png";
import ParaButton from '@/component/ParaButton';
import Testimonial from '@/component/Testimonial';
import Ideas from '@/component/Ideas';
import CapabilitesIdeas from "../../../public/capabilitiesIdeas.png"

const page = () => { 
  return (
    <section>
        <Hero id="capabilitiesHero" image={CapabilitesBg} headerText="Our" MainHeaderText="Capabilities." ParaText="Trusted by top investors and financial partners worldwide"/>
        <section  className="w-full px-4 md:px-6 lg:px-10 xl:px-0 py-16 lg:py-0 h-auto lg:h-[668px] flex items-center justify-center relative">
                
                <ParaButton para="The design work that solves real problems for our emerging futures is complex. Space stations. New modes of mobility. Transformations to industrial systems. These are the kinds of brave endeavors that require audacity and an appetite for the wonderfully difficult. It’s what you do—and it’s what we do, too." text="know more" />
            </section>
            <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
            <Testimonial/> <div className="relative h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_2%,#D9D9D9_50.55%,rgba(0,0,0,0)_100%)]" />
            <Ideas image={CapabilitesIdeas} HeaderText="Let’s Build " MainHeaderText="Ambitious ideas" ButtonText="Build Your Project" opacity="opacity-50"/>
    </section>
    
  )
}

export default page