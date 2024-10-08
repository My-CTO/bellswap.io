/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/57OlB3LmqUj
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function BellsBringerAppHome() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F0F0]">
      <header className="bg-[#FF9900] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-3xl font-bold text-[#333333]" prefetch={false}>
            BellsBringer
          </Link>
          <nav className="hidden md:flex gap-6 text-[#333333] font-medium">
            <Link href="#" prefetch={false}>
              Games
            </Link>
            <Link href="#" prefetch={false}>
              Marketplace
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="px-4 py-2 rounded-full text-[#333333] hover:bg-[#FFCC80]">
            Connect Wallet
          </Button>
          <Avatar className="w-10 h-10 rounded-full border-2 border-[#333333]">
            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 py-12 px-6 md:px-12 lg:px-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-block bg-[#FFCC80] px-3 py-1 rounded-full text-[#333333] text-sm font-medium">
                Adventure Awaits
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#333333]">Explore the World of BellsBringer</h1>
            </div>
            <p className="text-[#666666] text-lg">
              Join the adventure and become a player character in the vibrant world of BellsBringer. Purchase a game
              cartridge to unlock the game and embark on an unforgettable journey.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#FF9900] text-white px-6 py-3 rounded-full hover:bg-[#FFCC80] hover:text-[#333333]">
                Purchase Cartridge
              </Button>
              <Button variant="outline" className="text-[#333333] px-6 py-3 rounded-full hover:bg-[#FFCC80]">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/placeholder.svg"
                alt="Game Character"
                className="w-full h-auto object-contain"
                width="400"
                height="400"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-[#FFCC80] rounded-full p-4 animate-bounce">
                  <PlayIcon className="w-8 h-8 text-[#333333]" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-block bg-[#FFCC80] px-3 py-1 rounded-full text-[#333333] text-sm font-medium">
                Game Cartridge
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">Unlock the Original Light</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#FF9900] rounded-full p-4">
                <CoinsIcon className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#333333]">59.99 $BEL</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Game Character"
                    className="w-full h-auto object-contain"
                    width="200"
                    height="200"
                    style={{ aspectRatio: "200/200", objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-2xl font-bold text-[#333333]">Explore the World</h3>
                  <p className="text-[#666666]">
                    Venture into the vibrant and whimsical world of BellsBringer, filled with charming characters and
                    endless possibilities.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Game Character"
                    className="w-full h-auto object-contain"
                    width="200"
                    height="200"
                    style={{ aspectRatio: "200/200", objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-2xl font-bold text-[#333333]">Collect and Customize</h3>
                  <p className="text-[#666666]">
                    Gather a diverse collection of items, clothing, and accessories to personalize your player character
                    and make it truly your own.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Game Character"
                    className="w-full h-auto object-contain"
                    width="200"
                    height="200"
                    style={{ aspectRatio: "200/200", objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-2xl font-bold text-[#333333]">Engage with the Community</h3>
                  <p className="text-[#666666]">
                    Connect with other players, participate in events, and immerse yourself in the vibrant BellsBringer
                    community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-[#333333] text-white py-6 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-2xl font-bold" prefetch={false}>
              BellsBringer
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" prefetch={false}>
                Games
              </Link>
              <Link href="#" prefetch={false}>
                Marketplace
              </Link>
              <Link href="#" prefetch={false}>
                Community
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#CCCCCC] hover:text-white" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#CCCCCC] hover:text-white" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CoinsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}


function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}
