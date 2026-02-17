import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
        <Badge
          variant="outline"
          className="mb-8 gap-2 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
        >
          <Bot className="size-3.5" />
          <span>Practical AI Automation Training</span>
        </Badge>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Master LLMs &{" "}
          <span className="text-primary">n8n Automation</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          From LLM theory and prompt engineering to building production-ready
          RAG workflows in n8n. Everything you need to automate with AI.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 px-8 text-base font-semibold">
            Enroll Now
            <ArrowRight className="ml-1 size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 border-accent/40 px-8 text-base text-foreground hover:bg-accent/10"
          >
            <Workflow className="mr-1 size-4" />
            View Curriculum
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid w-full max-w-lg grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground md:text-3xl">6</span>
            <span className="mt-1 text-sm text-muted-foreground">Modules</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground md:text-3xl">Hands-on</span>
            <span className="mt-1 text-sm text-muted-foreground">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground md:text-3xl">n8n</span>
            <span className="mt-1 text-sm text-muted-foreground">Powered</span>
          </div>
        </div>
      </div>
    </section>
  )
}
