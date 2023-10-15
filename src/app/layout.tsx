import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Front - Official wiki',
  description: 'The Front takes place in a post-apocalyptic sandbox world populated by mutants and hostile factions. On this war-torn land, players will engage tyrannical imperial forces, exiles, thugs, and rebels in an epic battle that will determine the fate of humanity. Team up with your friends, explore ruins and enemy areas, craft weapons and equipment, build bases and defend them with tower defense-style traps, upgrade tech, pilot tanks and helicopters, battle the elements, and contend with fearsome foes!',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="https://www.playthefront.com/thefront.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
