"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Program", href: "#program" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-baseline gap-1">
          <span className="text-lg font-bold tracking-tight text-primary">
            n8n
          </span>
          <span className="text-lg font-bold tracking-tight text-muted-foreground mx-1">
            |
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            jknowak
          </span>
          <span className="text-lg font-bold tracking-tight text-accent">
            .pl
          </span>
        </a>

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
          <Button size="sm" className="font-semibold" asChild>
            <a href="mailto:kuba@jknowak.pl?subject=zainteresowanie%20szkoleniem%20n8n">
              Umów szkolenie
            </a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

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
            <Button size="sm" className="mt-2 w-full font-semibold" asChild>
              <a href="mailto:kuba@jknowak.pl?subject=zainteresowanie%20szkoleniem%20n8n">
                Umów szkolenie
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
