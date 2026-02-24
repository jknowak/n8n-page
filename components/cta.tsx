import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-t border-border/50 px-4 py-20 md:py-32">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-6 py-16 text-center md:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/8 blur-[100px]" />
        </div>

        <div className="relative">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Gotowy na automatyzacje z AI?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            {"Dolacz do szkolenia i przejdz od zrozumienia LLM-ow do budowy produkcyjnych workflow-ow n8n z RAG."}
          </p>
          <div className="mt-8">
            <Button size="lg" className="h-12 px-8 text-base font-semibold" asChild>
              <a href="mailto:jakub.k.nowak@protonmail.com?subject=Zapis%20na%20szkolenie%20LLM%20%26%20n8n">
                Rozpocznij
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
