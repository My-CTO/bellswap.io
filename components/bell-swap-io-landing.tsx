/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/pY0d3klf0he
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
import { Card } from "@/components/ui/card"

export function BellSwapIoLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
            <ShuffleIcon className="h-6 w-6 text-primary" />
            <span className="text-lg">Bellswap</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Benefits
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Wallets
            </Link>
            <Button variant="outline" className="h-9 px-4">
              Get Started
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-20 text-primary-foreground">
          <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Seamless Cross-Chain Swaps</h1>
              <p className="text-lg leading-relaxed">
                Easily exchange Bellscoin and Fractal Bitcoin tokens with our intuitive and secure cryptocurrency swap
                app.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button variant="secondary" className="h-10 px-6">
                  Get Started
                </Button>
                <Button variant="outline" className="h-10 px-6 text-primary-foreground">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Bellswap App"
                className="rounded-xl"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section id="features" className="py-20">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Innovative Features</h2>
              <p className="text-muted-foreground">
                Our Bellswap app offers a range of cutting-edge features to enhance your cryptocurrency trading
                experience.
              </p>
              <ul className="grid gap-3">
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CloudLightningIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instant Swaps</h3>
                    <p className="text-muted-foreground">
                      Execute trades in seconds with our lightning-fast swap engine.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <WalletIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Wallet Integration</h3>
                    <p className="text-muted-foreground">
                      Seamlessly connect your Nintondo and Unisat wallets to access your digital assets.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Advanced Security</h3>
                    <p className="text-muted-foreground">
                      Enjoy peace of mind with our robust security measures to protect your funds.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Bellswap Features"
                className="rounded-xl"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section id="benefits" className="bg-muted/40 py-20">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Bellswap Benefits"
                className="rounded-xl"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Unlock the Benefits</h2>
              <p className="text-muted-foreground">
                Our Bellswap app offers a range of benefits to enhance your cryptocurrency trading experience.
              </p>
              <ul className="grid gap-3">
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CoinsIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Low Fees</h3>
                    <p className="text-muted-foreground">
                      Enjoy competitive transaction fees when swapping Bellscoin and Fractal Bitcoin.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast Settlements</h3>
                    <p className="text-muted-foreground">
                      Experience near-instant settlement times for your cryptocurrency trades.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <DiffIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Asset Diversity</h3>
                    <p className="text-muted-foreground">
                      Access a wide range of digital assets across different blockchain networks.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="wallets" className="py-20">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Supported Wallets</h2>
              <p className="text-muted-foreground">
                Connect your preferred wallet to start swapping Bellscoin and Fractal Bitcoin tokens.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="flex flex-col items-center gap-3 rounded-xl border bg-background p-6 text-center shadow-sm">
                  <img
                    src="/placeholder.svg"
                    width={48}
                    height={48}
                    alt="Nintondo Wallet"
                    className="rounded-full"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                  />
                  <h3 className="font-semibold">Nintondo Wallet</h3>
                  <p className="text-muted-foreground">Securely manage your Bellscoin and Fractal Bitcoin tokens.</p>
                  <Button variant="outline" className="mt-auto">
                    Connect
                  </Button>
                </Card>
                <Card className="flex flex-col items-center gap-3 rounded-xl border bg-background p-6 text-center shadow-sm">
                  <img
                    src="/placeholder.svg"
                    width={48}
                    height={48}
                    alt="Unisat Wallet"
                    className="rounded-full"
                    style={{ aspectRatio: "48/48", objectFit: "cover" }}
                  />
                  <h3 className="font-semibold">Unisat Wallet</h3>
                  <p className="text-muted-foreground">Seamlessly manage your digital assets across chains.</p>
                  <Button variant="outline" className="mt-auto">
                    Connect
                  </Button>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Supported Wallets"
                className="rounded-xl"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted/40 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <ShuffleIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Bellswap</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CloudLightningIcon(props) {
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
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}


function CoinsIcon(props) {
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


function DiffIcon(props) {
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
      <path d="M12 3v14" />
      <path d="M5 10h14" />
      <path d="M5 21h14" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function ShuffleIcon(props) {
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
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  )
}


function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
