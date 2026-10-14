import Link from 'next/link'
import { Arrow } from '@/svg'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <main className="grid min-h-dvh w-full place-items-center bg-[linear-gradient(111.76deg,#1D1D1D_-0.79%,rgba(0,0,0,0.5)_104.11%)] px-4 pt-28 pb-16 sm:px-6">
      <div className="flex max-w-xl flex-col items-center gap-6 text-center sm:gap-8">
        <p
          aria-hidden="true"
          className="font-metal text-[7rem] leading-none font-normal tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_#F3823F] sm:text-[10rem] lg:text-[14rem]"
        >
          404
        </p>

        <div className="flex flex-col gap-3">
          <h1 className="font-outfit text-3xl font-thin tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Page not found
          </h1>
          <p className="font-outfit text-base font-light text-[#979797] sm:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-full border border-orange px-6 py-3 font-outfit text-base font-medium text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange sm:text-lg"
        >
          Go to Home
          <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  )
}