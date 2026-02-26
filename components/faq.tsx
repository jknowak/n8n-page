"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Czy potrzebuję doświadczenia w programowaniu?",
    answer:
      "Nie jest wymagane wcześniejsze doświadczenie programistyczne. n8n to wizualny kreator workflow i omawiamy wszystko od podstaw. Jednak znajomość API lub JSON pomoże Ci szybciej przyswajać materiał.",
  },
  {
    question: "Czym jest n8n i dlaczego warto go używać do automatyzacji AI?",
    answer:
      "n8n to open-source'owe narzędzie do automatyzacji workflow, które pozwala łączyć dowolne usługi za pomocą wizualnego edytora opartego na węzłach. Jest idealne do automatyzacji AI, ponieważ wspiera integracje z LLM, bazy wektorowe i złożoną logikę warunkową bez pisania kodu.",
  },
  {
    question: "Co będę w stanie zbudować po tym szkoleniu?",
    answer:
      "Będziesz w stanie budować workflow automatyzacji napędzane AI, w tym pipeline RAG do Q&A z dokumentów, chatboty AI z pamięcią, pipeline generowania treści, workflow przetwarzania danych z inteligencją LLM i wiele więcej.",
  },
  {
    question: "Jak wygląda format szkolenia?",
    answer:
      "Szkolenie odbywa się jako otwarty cohort dla zainteresowanych indywidualnie lub jako dedykowany warsztat zamknięty dla organizacji — NGO, firm i zespołów. Napisz, żebyśmy ustalili formę i termin.",
  },
  {
    question: "Czy potrzebuję własnej instancji n8n?",
    answer:
      "Przeprowadzimy Cię przez konfigurację n8n. Możesz użyć darmowej wersji self-hosted lub n8n cloud. Szczegółowe instrukcje konfiguracji są dołączone do materiałów szkoleniowych.",
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
            Często zadawane pytania
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
