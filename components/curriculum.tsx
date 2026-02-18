import {
  Brain,
  MessageSquareText,
  GitFork,
  Workflow,
  Database,
  Layers,
} from "lucide-react"

const modules = [
  {
    number: "01",
    title: "Teoria LLM",
    description:
      "Zrozum architekture duzych modeli jezykowych. Transformery, tokenizacja, mechanizmy uwagi i sposob generowania tekstu.",
    icon: Brain,
    tags: ["Transformery", "Tokenizacja", "Uwaga"],
  },
  {
    number: "02",
    title: "Prompt Engineering",
    description:
      "Opanuj sztuke tworzenia skutecznych promptow. Techniki chain-of-thought, few-shot learning i formatowanie strukturalnych odpowiedzi.",
    icon: MessageSquareText,
    tags: ["Chain-of-Thought", "Few-shot", "System Prompts"],
  },
  {
    number: "03",
    title: "LLM vs Workflow vs Agenci",
    description:
      "Wiedz, kiedy uzyc prostego wywolania LLM, kiedy ustrukturyzowanego workflow, a kiedy autonomicznego agenta. Ramki decyzyjne dla realnych zastosowan.",
    icon: GitFork,
    tags: ["Ramki decyzyjne", "Przypadki uzycia", "Architektura"],
  },
  {
    number: "04",
    title: "Podstawy n8n",
    description:
      "Praktyczna praca z n8n. Buduj pierwsze workflow, podlaczaj triggery, pracuj z HTTP nodes i integruj API w zautomatyzowane pipeline-y.",
    icon: Workflow,
    tags: ["Node-y", "Triggery", "Zapytania HTTP"],
  },
  {
    number: "05",
    title: "RAG od podstaw",
    description:
      "Zaglebienie w Retrieval-Augmented Generation. Bazy wektorowe, embeddingi, strategie chunkowania i pipeline-y wyszukiwania.",
    icon: Database,
    tags: ["Embeddingi", "Bazy wektorowe", "Chunking"],
  },
  {
    number: "06",
    title: "Workflow RAG w n8n",
    description:
      "Buduj kompletne pipeline-y RAG w n8n. Od pozyskiwania dokumentow i embeddingu po wyszukiwanie i generowanie odpowiedzi z LLM.",
    icon: Layers,
    tags: ["Pipeline-y", "Ingestion", "Produkcyjny RAG"],
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
            {"Szesc kompleksowych modulow, ktore przeprowadza Cie od podstaw AI do budowy produkcyjnych workflow-ow automatyzacji."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  {"Modul"} {mod.number}
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
