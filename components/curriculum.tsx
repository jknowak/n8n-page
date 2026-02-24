import {
  Brain,
  Workflow,
  Database,
  ShieldAlert,
} from "lucide-react"

const modules = [
  {
    number: "01",
    title: "Jak dzialaja LLM-y",
    description:
      "Tokeny, context window, logits, system i user prompt. Zrozumiesz, jak modele generuja tekst, i opanujesz prompt engineering w praktyce.",
    icon: Brain,
    tags: ["Tokeny", "Logits", "Context", "Prompt Engineering"],
  },
  {
    number: "02",
    title: "Wstep do n8n",
    description:
      "Triggery, integracje AI, praca z JSON-em, flow control i petle. Zbudujesz pierwsze workflow od zera i nauczysz sie laczyc node-y w dzialajace pipeline-y.",
    icon: Workflow,
    tags: ["Triggery", "JSON", "Integracje AI", "Petle"],
  },
  {
    number: "03",
    title: "RAG od podstaw",
    description:
      "Halucynacje i sposoby na nie, embeddingi, indeksowanie dokumentow i odpytywanie baz wektorowych. Pelen pipeline Retrieval-Augmented Generation.",
    icon: Database,
    tags: ["Halucynacje", "Embeddingi", "Indeksowanie", "Odpytywanie"],
  },
  {
    number: "04",
    title: "Agenci, ryzyka, co dalej",
    description:
      "Workflow vs agent - kiedy co stosowac. Ryzyka produkcyjne, opcje hostingu, alternatywy dla n8n i plan rozwoju po szkoleniu.",
    icon: ShieldAlert,
    tags: ["Agenci", "Ryzyka", "Hosting", "Alternatywy"],
  },
]

export function Curriculum() {
  return (
    <section id="program" className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Program szkolenia
          </div>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
            Czego sie nauczysz
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"Cztery intensywne bloki, ktore przeprowadza Cie od podstaw AI do budowy produkcyjnych workflow-ow automatyzacji."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/20"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <mod.icon className="size-5" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  {"Blok"} {mod.number}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {mod.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {mod.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {mod.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
