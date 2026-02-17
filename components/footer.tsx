import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="airm.pro logo"
            width={24}
            height={24}
            className="size-6"
          />
          <span className="text-sm font-bold text-foreground">
            airm<span className="text-accent">.pro</span>
          </span>
          <span className="text-sm text-muted-foreground">
            / n8n Training
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} airm.pro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
