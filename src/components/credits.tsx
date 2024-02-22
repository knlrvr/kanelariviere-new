import Link from 'next/link'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Credits() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="font-light text-xs cursor-default hidden md:inline-flex">&nbsp;&bull;&nbsp;&nbsp;Credits</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1 text-xs text-neutral-500">
            <div className="">
                <span>Built by&nbsp;
                    <Link href="https://github.com/knlrvr" target="_blank" className="inline-flex underline underline-offset-2 hover:text-[var(--text)] transition-colors duration-200">Kane Lariviere</Link>.
                </span>
            </div>
            <div className="">
                <span>Built with&nbsp;
                    <Link href="https://nextjs.org/" target="_blank" className="inline-flex underline underline-offset-2 hover:text-[var(--text)] transition-colors duration-200">Next.js</Link>,&nbsp;
                    <Link href="https://tailwindcss.com/" target="_blank" className="inline-flex underline underline-offset-2 hover:text-[var(--text)] transition-colors duration-200">Tailwind</Link>,&nbsp;&amp;&nbsp;
                    <Link href="https://www.convex.dev/" target="_blank" className="inline-flex underline underline-offset-2 hover:text-[var(--text)] transition-colors duration-200">Convex</Link>.
                </span>
            </div>
            <div className="">
                <span>Source code available on&nbsp;
                    <Link href="https://github.com/knlrvr/kanelariviere-new" target="_blank" className="inline-flex underline underline-offset-2 hover:text-[var(--text)] transition-colors duration-200">GitHub</Link>.
                </span>
            </div>
            <div className="">
                <span>Hosted on&nbsp;
                    <Link href="https://vercel.com" target="_blank" className="inline-flex underline underline-offset-2 hover:text-[var(--text)] transition-colors duration-200">Vercel</Link>.
                </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
