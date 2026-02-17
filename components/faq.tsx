"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "Do I need programming experience?",
    answer:
      "No prior programming experience is required. n8n is a visual workflow builder, and we cover everything from the basics. However, having some familiarity with APIs or JSON will help you move faster.",
  },
  {
    question: "What is n8n and why use it for AI automation?",
    answer:
      "n8n is an open-source workflow automation tool that lets you connect any service with a visual, node-based editor. It is ideal for AI automation because it supports LLM integrations, vector databases, and complex branching logic without writing code.",
  },
  {
    question: "What will I be able to build after this training?",
    answer:
      "You will be able to build AI-powered automation workflows including RAG pipelines for document Q&A, AI chatbots with memory, content generation pipelines, data processing workflows with LLM intelligence, and more.",
  },
  {
    question: "How is the training delivered?",
    answer:
      "The training is structured as a progressive course with hands-on exercises. Each module builds on the previous one, ensuring you develop a complete understanding from LLM fundamentals to production RAG workflows.",
  },
  {
    question: "Do I need my own n8n instance?",
    answer:
      "We will guide you through setting up n8n. You can use the free self-hosted version or n8n cloud. Detailed setup instructions are included in the course materials.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border/50 px-4 py-20 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/5 text-primary"
          >
            FAQ
          </Badge>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
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
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
