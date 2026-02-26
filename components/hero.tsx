import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Workflow } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary">
          <Bot className="size-3.5" />
          <span>Praktyczne szkolenie z automatyzacji AI</span>
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          {"Opanuj LLM-y i "}
          <span className="text-primary">{"automatyzację n8n"}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {"Od teorii modeli językowych i prompt engineeringu po budowę produkcyjnych workflow-ów RAG w n8n. Wszystko, czego potrzebujesz, by automatyzować z AI."}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 px-8 text-base font-semibold" asChild>
            <a href="mailto:kuba@jknowak.pl?subject=zainteresowanie%20szkoleniem%20n8n">
              Umów szkolenie
              <ArrowRight className="ml-1 size-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 border-accent/40 px-8 text-base text-foreground hover:bg-accent/10"
            asChild
          >
            <a href="#program">
              <Workflow className="mr-1 size-4" />
              Zobacz program
            </a>
          </Button>
        </div>

        <div className="mt-16 grid w-full max-w-lg grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground md:text-3xl">4</span>
            <span className="mt-1 text-sm text-muted-foreground">Bloki</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground md:text-3xl">Praktyka</span>
            <span className="mt-1 text-sm text-muted-foreground">Projekty hands-on</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground md:text-3xl">n8n</span>
            <span className="mt-1 text-sm text-muted-foreground">Napędzane</span>
          </div>
        </div>
      </div>
    </section>
  )
}
