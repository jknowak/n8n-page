"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Czy potrzebuje doswiadczenia w programowaniu?",
    answer:
      "Nie jest wymagane wczesniejsze doswiadczenie programistyczne. n8n to wizualny kreator workflow i omawiamy wszystko od podstaw. Jednak znajomosc API lub JSON pomoze Ci szybciej przyswajac material.",
  },
  {
    question: "Czym jest n8n i dlaczego warto go uzywac do automatyzacji AI?",
    answer:
      "n8n to open-source-owe narzedzie do automatyzacji workflow, ktore pozwala laczyc dowolne uslugi za pomoca wizualnego edytora opartego na nodach. Jest idealne do automatyzacji AI, poniewaz wspiera integracje z LLM, bazy wektorowe i zlozana logike warunkowa bez pisania kodu.",
  },
  {
    question: "Co bede w stanie zbudowac po tym szkoleniu?",
    answer:
      "Bedziesz w stanie budowac workflow automatyzacji napedzane AI, w tym pipeline RAG do Q&A z dokumentow, chatboty AI z pamiecia, pipeline generowania tresci, workflow przetwarzania danych z inteligencja LLM i wiele wiecej.",
  },
  {
    question: "Jak wyglada format szkolenia?",
    answer:
      "Szkolenie ma strukture progresywnego kursu z praktycznymi cwiczeniami. Kazdy modul buduje na poprzednim, zapewniajac pelne zrozumienie od fundamentow LLM po produkcyjne workflow RAG.",
  },
  {
    question: "Czy potrzebuje wlasnej instancji n8n?",
    answer:
      "Poprowadzimy Cie przez konfiguracje n8n. Mozesz uzyc darmowej wersji self-hosted lub n8n cloud. Szczegolowe instrukcje konfiguracji sa dolaczone do materialow szkoleniowych.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border/50 px-4 py-20 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            FAQ
          </div>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Czesto zadawane pytania"}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left text-base text-foreground hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
