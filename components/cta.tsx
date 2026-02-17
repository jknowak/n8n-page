import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-t border-border/50 px-4 py-20 md:py-32">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-6 py-16 text-center md:px-16">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="relative">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Ready to Automate with AI?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Join the training and go from understanding LLMs to building
            production-ready n8n workflows with RAG.
          </p>
          <div className="mt-8">
            <Button size="lg" className="h-12 px-8 text-base font-semibold">
              Get Started
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
