import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Curriculum } from "@/components/curriculum"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Curriculum />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
