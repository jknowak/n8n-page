"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="airm.pro logo"
            width={32}
            height={32}
            className="size-8"
          />
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-foreground">
              airm<span className="text-accent">.pro</span>
            </span>
            <span className="hidden text-xs font-medium tracking-wide uppercase text-primary sm:inline">
              n8n Training
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="font-semibold">
            Enroll Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 w-full font-semibold">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
