This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
<div className=" flex gap-10">
                {/* Card */}
                <div className="relative order-1 min-h-[280px] w-full max-w-[500px] justify-self-start sm:min-h-[360px] md:min-h-[420px]">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-[linear-gradient(131.91deg,#FFFFFF_0.77%,rgba(0,0,0,0)_77.2%)]" />

                  {/* Outline text */}
                  <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center font-sans text-[56px] font-extrabold tracking-[-3%] leading-[56px] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] sm:text-[80px] sm:leading-[76px] lg:text-[100px] lg:leading-[96px]">
                    Robot
                  </div>

                  {/* Drone */}
                  <div className="absolute bottom-0 right-0 h-full w-fit text-center md:-right-20 ">
                    <Image src={Drone} alt="Drone" className="h-full w-full object-bottom-left" />
                  </div>
                </div>

                {/* Text column */}
                <div className="order-2 float-right flex flex-col items-center justify-center gap-4 text-left md:items-end md:text-right w-full">
                  <div className="max-w-[405px] max-h-[315px]">
                    <span className="font-metal font-regular text-center text-[32px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[44px] lg:leading-[52px] tracking-[-0.03em]">
                      <span className="md:block">Low-noise</span>
                      <span className="md:block">MAV Drone</span>
                    </span>


                    <Paragraph
                      para="We analyzed various geometries based on NACA profiles that suit our aerodynamic needs and designed a proprietary 40 mm diameter 3 bladed propeller with major innovation in reducing vortex generations at the propeller tips, the main source of how noise is created."
                      fontStyle="font-metal font-regular "
                      textSize="text-base lg:text-xl text-start"
                      leading="leading-[22px] lg:leading-[24px] tracking-[-0.03em]"
                    />
                    <div className="grid place-items-center">
                      <Link
                        href="#"
                        className="group relative isolate w-fit gap-5 overflow-hidden rounded-full border border-orange px-4 py-4 text-base font-medium leading-5 tracking-[-0.03em] whitespace-nowrap text-white transition-colors duration-300 hover:text-black xl:gap-10"
                      >
                        <Arrow className="transition-transform duration-300 group-hover:translate-x-2" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>


              <div className="flex flex-col gap-10 md:flex-row">
                {/* Text column: left side */}
                <div className="order-2 flex w-full flex-col items-center justify-center gap-4 text-left md:order-1 md:items-start md:text-left">
                  <div className="max-w-[405px] max-h-[315px]">
                    <span className="font-metal font-regular text-[32px] leading-[36px] tracking-[-0.03em] sm:text-[40px] sm:leading-[44px] lg:text-[50px] lg:leading-[52px]">
                      <span className="block">Low-noise</span>
                      <span className="block">MAV Drone</span>
                    </span>

                    <Paragraph
                      para="We analyzed various geometries based on NACA profiles that suit our aerodynamic needs and designed a proprietary 40 mm diameter 3 bladed propeller with major innovation in reducing vortex generations at the propeller tips, the main source of how noise is created."
                      fontStyle="font-metal font-regular"
                      textSize="text-base lg:text-xl text-start"
                      leading="leading-[22px] lg:leading-[24px] tracking-[-0.03em]"
                    />

                    <div className="grid place-items-center">
                      <Link
                        href="#"
                        className="group relative isolate flex w-fit items-center justify-center gap-5 overflow-hidden rounded-full border border-orange px-4 py-4 text-base font-medium leading-5 tracking-[-0.03em] whitespace-nowrap text-white transition-colors duration-300 hover:text-black xl:gap-10"
                      >
                        <Arrow className="transition-transform duration-300 group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card: right side */}
                <div className="relative order-1 min-h-[280px] w-full max-w-[500px] sm:min-h-[360px] md:order-2 md:min-h-[420px] md:ml-auto">
                  {/* Glowing background: mirrored, glow starts from top-right */}
                  <div className="absolute inset-0 bg-[linear-gradient(228.09deg,#FFFFFF_0.77%,rgba(0,0,0,0)_77.2%)]" />

                  {/* Outline text */}
                  <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center font-sans text-[56px] font-extrabold leading-[56px] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] sm:text-[80px] sm:leading-[76px] lg:text-[100px] lg:leading-[96px]">
                    Robot
                  </div>

                  {/* Drone: sticks out on the left, anchored to the bottom */}
                  <div className="absolute bottom-0 left-0 h-full w-fit text-center md:-left-20">
                    <Image src={Drone} alt="Drone" className="h-full w-full object-right-bottom" />
                  </div>
                </div>
              </div>