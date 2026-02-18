import { Zap, Code2, Users, GraduationCap } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Praktyczne cwiczenia",
    description:
      "Kazdy modul zawiera realne workflow n8n, ktore budujesz od zera. Zadnych prezentacji tylko z teoria.",
  },
  {
    icon: Zap,
    title: "Gotowe do produkcji",
    description:
      "Poznaj wzorce i architektury, ktore mozesz wdrozyc natychmiast w swoim biznesie lub dla klientow.",
  },
  {
    icon: Users,
    title: "Dla kazdego poziomu",
    description:
      "Niezaleznie czy jestes developerem, no-code builderem czy analitykiem biznesowym - szkolenie spotyka Cie tam, gdzie jestes.",
  },
  {
    icon: GraduationCap,
    title: "Ustrukturyzowana nauka",
    description:
      "Progresywny program, gdzie kazdy modul buduje na poprzednim. Od fundamentow po zaawansowana automatyzacje RAG.",
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
            {"Stworzone dla praktykow, ktorzy chca wdrazac automatyzacje AI, a nie tylko rozumiec teorie."}
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
