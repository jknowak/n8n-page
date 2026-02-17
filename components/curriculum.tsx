import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    title: "LLMs Theory",
    description:
      "Understand the architecture behind Large Language Models. Transformers, tokenization, attention mechanisms, and how models generate text.",
    icon: Brain,
    tags: ["Transformers", "Tokenization", "Attention"],
  },
  {
    number: "02",
    title: "Prompt Engineering",
    description:
      "Master the art and science of crafting effective prompts. Learn techniques like chain-of-thought, few-shot learning, and structured output formatting.",
    icon: MessageSquareText,
    tags: ["Chain-of-Thought", "Few-shot", "System Prompts"],
  },
  {
    number: "03",
    title: "LLMs vs Workflows vs Agents",
    description:
      "Know when to use a simple LLM call, a structured workflow, or an autonomous agent. Decision frameworks for real-world automation.",
    icon: GitFork,
    tags: ["Decision Frameworks", "Use Cases", "Architecture"],
  },
  {
    number: "04",
    title: "n8n Workflow Basics",
    description:
      "Get hands-on with n8n. Build your first workflows, connect triggers, work with HTTP nodes, and integrate APIs into automated pipelines.",
    icon: Workflow,
    tags: ["Nodes", "Triggers", "HTTP Requests"],
  },
  {
    number: "05",
    title: "RAG Explained",
    description:
      "Deep dive into Retrieval-Augmented Generation. Learn about vector databases, embeddings, chunking strategies, and retrieval pipelines.",
    icon: Database,
    tags: ["Embeddings", "Vector DBs", "Chunking"],
  },
  {
    number: "06",
    title: "RAG Workflows in n8n",
    description:
      "Build complete RAG pipelines in n8n. From document ingestion and embedding to retrieval and LLM-powered response generation.",
    icon: Layers,
    tags: ["Pipelines", "Ingestion", "Production RAG"],
  },
]

export function Curriculum() {
  return (
    <section id="curriculum" className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/5 text-primary"
          >
            Curriculum
          </Badge>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
            What You Will Learn
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Six comprehensive modules taking you from AI fundamentals to building
            production-ready automation workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Card
              key={mod.number}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/20 hover:bg-card/80"
            >
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <mod.icon className="size-5" />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">
                    Module {mod.number}
                  </span>
                </div>
                <CardTitle className="text-lg text-foreground">
                  {mod.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {mod.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
