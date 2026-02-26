import { Zap, Code2, Users, GraduationCap } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Praktyczne ćwiczenia",
    description:
      "Każdy moduł zawiera realne workflow n8n, które budujesz od zera. Żadnych prezentacji tylko z teorią.",
  },
  {
    icon: Zap,
    title: "Gotowe do produkcji",
    description:
      "Poznaj wzorce i architektury, które możesz wdrożyć natychmiast w swoim biznesie lub dla klientów.",
  },
  {
    icon: Users,
    title: "Dla każdego poziomu",
    description:
      "Niezależnie czy jesteś developerem, no-code builderem czy analitykiem biznesowym — szkolenie spotyka Cię tam, gdzie jesteś.",
  },
  {
    icon: GraduationCap,
    title: "Ustrukturyzowana nauka",
    description:
      "Progresywny program, gdzie każdy moduł buduje na poprzednim. Od fundamentów po zaawansowaną automatyzację RAG.",
  },
]

export function Features() {
  return (
    <section className="border-t border-border/50 px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Dlaczego to szkolenie
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            {"Stworzone dla praktyków, którzy chcą wdrażać automatyzację AI, a nie tylko rozumieć teorię."}
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
