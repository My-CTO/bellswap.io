'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Leaf, Zap, Coins, Users, MapPin, Gamepad } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
    const [walletConnected, setWalletConnected] = useState(false)
    const [avatarUrl, setAvatarUrl] = useState("/placeholder.svg?height=40&width=40")
    const [nftPurchased, setNftPurchased] = useState(false)
  
    const connectWallet = () => {
      // Simulating wallet connection
      setWalletConnected(true)
      setAvatarUrl("/placeholder.svg?height=40&width=40") // Replace with actual avatar URL
    }
  
    const purchaseNFT = () => {
      // Simulating NFT purchase
      setNftPurchased(true)
    }
  
    return (
      <div className="flex flex-col min-h-[100dvh] bg-[#e6f7ff]">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-[#7cc9ff] text-white">
          <Link className="flex items-center justify-center" href="#">
            <Bell className="h-6 w-6 mr-2" />
            <span className="font-bold text-lg">BellsBringer</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Community
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Support
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                    Welcome to BellsBringer
                  </h1>
                  <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-lg">
                    Embark on a whimsical adventure inspired by Light Bringer and Animal Crossing!
                  </p>
                </div>
                <div className="space-x-4">
                  <Button className="bg-[#ff9f43] text-white hover:bg-[#ffa94d]">Start Your Adventure</Button>
                  <Button variant="outline" className="bg-white text-[#ff9f43] border-[#ff9f43] hover:bg-[#fff5e6]">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e6f7ff]">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#4a6fa5]">
                Discover BellsBringer Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Leaf className="h-10 w-10 text-[#4a6fa5]" />}
                  title="Lush Landscapes"
                  description="Explore vibrant, ever-changing environments filled with surprises."
                />
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-[#4a6fa5]" />}
                  title="Dynamic Combat"
                  description="Experience thrilling battles with a unique bell-ringing combat system."
                />
                <FeatureCard
                  icon={<Coins className="h-10 w-10 text-[#4a6fa5]" />}
                  title="Bell Economy"
                  description="Collect and trade bells to upgrade your character and village."
                />
                <FeatureCard
                  icon={<Users className="h-10 w-10 text-[#4a6fa5]" />}
                  title="Friendly Villagers"
                  description="Interact with charming characters and build lasting friendships."
                />
                <FeatureCard
                  icon={<MapPin className="h-10 w-10 text-[#4a6fa5]" />}
                  title="Island Customization"
                  description="Design and decorate your own island paradise."
                />
                <FeatureCard
                  icon={<Bell className="h-10 w-10 text-[#4a6fa5]" />}
                  title="Bell Mastery"
                  description="Master the art of bell-ringing to unlock powerful abilities."
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fff5e6]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#4a6fa5]">
                  Get Your Game Cartridge NFT
                </h2>
                <p className="mx-auto max-w-[700px] text-[#7cc9ff] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Own a piece of BellsBringer history and gain base-level entry to the Bells ecosystem!
                </p>
                <div className="w-full max-w-sm space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Gamepad className="h-20 w-20 mx-auto mb-4 text-[#ff9f43]" />
                    <h3 className="text-xl font-bold mb-2 text-[#4a6fa5]">BellsBringer Cartridge NFT</h3>
                    <p className="text-[#7cc9ff] mb-4">Limited edition. Unlock exclusive in-game content!</p>

                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e6f7ff]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#4a6fa5]">
                  Connect Your Wallet
                </h2>
                <p className="mx-auto max-w-[700px] text-[#7cc9ff] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Link your wallet to view your unique BellsBringer avatar and access exclusive features!
                </p>
                <div className="w-full max-w-sm space-y-2">
                  {walletConnected ? (
                    <div className="flex items-center justify-center space-x-4">
                      <Avatar>
                        <AvatarImage src={avatarUrl} alt="Your avatar" />
                        <AvatarFallback>BB</AvatarFallback>
                      </Avatar>
                      <span className="text-[#4a6fa5] font-medium">Wallet Connected!</span>
                    </div>
                  ) : (
                    <Button className="w-full bg-[#ff9f43] text-white hover:bg-[#ffa94d]" onClick={connectWallet}>
                      Connect Wallet
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#7cc9ff]">
          <p className="text-xs text-white">© 2024 BellsBringer. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-white" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-white" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    )
  }

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#4a6fa5]">{title}</h3>
      <p className="text-[#7cc9ff]">{description}</p>
    </div>
  )
}