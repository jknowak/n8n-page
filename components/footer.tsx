export function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-bold text-foreground">
            jknowak
          </span>
          <span className="text-sm font-bold text-accent">
            .pl
          </span>
          <span className="ml-2 text-sm text-muted-foreground">
            / Szkolenie n8n
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} jknowak.pl. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
