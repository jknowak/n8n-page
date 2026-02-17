import { Zap, Code2, Users, GraduationCap } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Hands-On Practice",
    description:
      "Every module comes with real n8n workflows you build from scratch. No theory-only slides.",
  },
  {
    icon: Zap,
    title: "Production-Ready",
    description:
      "Learn patterns and architectures you can deploy immediately in your business or for clients.",
  },
  {
    icon: Users,
    title: "For All Levels",
    description:
      "Whether you are a developer, no-code builder, or business analyst, the training meets you where you are.",
  },
  {
    icon: GraduationCap,
    title: "Structured Learning",
    description:
      "Progressive curriculum that builds on each module. From fundamentals to advanced RAG automation.",
  },
]

export function Features() {
  return (
    <section className="border-t border-border/50 px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Why This Training
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Built for practitioners who want to ship AI automation, not just
            understand theory.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="group flex flex-col items-start">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
