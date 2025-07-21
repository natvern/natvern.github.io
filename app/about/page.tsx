import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, ExternalLink, Github, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-stone-900">
                <Link href="/" className="hover:text-olive-600 transition-colors">
                  Rambling <span className="text-olive-600">¬</span> Logician
                </Link>
              </h1>
              <p className="text-sm text-stone-600 mt-1">PhD Student & Researcher</p>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="/blog" className="text-stone-700 hover:text-olive-600 transition-colors font-medium">
                Blog Archive
              </Link>
              <Link href="/about" className="text-olive-600 font-medium">
                About me
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-olive-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Profile Header */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-olive-50 to-stone-100 rounded-2xl p-8 border border-olive-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src="/images/new-profile-photo.png"
                    alt="Samar Rahmouni"
                    width={280}
                    height={280}
                    className="rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10"></div>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-4xl font-bold text-stone-900 mb-2">Samar Rahmouni</h1>
                <p className="text-xl text-olive-700 font-medium mb-4">Master's Student in Computer Science Research</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-stone-600">
                    <MapPin className="w-4 h-4" />
                    École Polytechnique, Paris
                  </div>
                </div>

                <div className="bg-white/60 rounded-lg p-4 mb-6">
                  <p className="text-stone-700 font-medium mb-1">Research Focus</p>
                  <p className="text-stone-600">Formal Verification & Reinforcement Learning</p>
                  <p className="text-olive-600 italic mt-2">"The future is neurosymbolic ——"</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-olive-600 hover:bg-olive-700 text-white">
                    <Link href="/cv/samar-rahmouni-cv.pdf" download="Samar_Rahmouni_CV.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-olive-200 text-olive-700 hover:bg-olive-50 bg-transparent"
                  >
                    <Link href="mailto:samar.rahmouni@outlook.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Education</h2>

          <div className="space-y-6">
            {/* Current Master's Program */}
            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">Master en Recherche Informatique</CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      École Polytechnique, Paris
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    2023 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-2">Current Research</h4>

                    <div className="bg-stone-50 rounded-lg p-4">
                      <h5 className="font-medium text-stone-900 mb-1">
                        Stage M2: Formalizing the Decidability proof for IS4 in Coq
                      </h5>
                      <p className="text-stone-600 text-sm mb-2">
                        Working on formalizing the decidability proof for IS4 (intuitionistic modal logic) in Coq. The
                        proof proceeds on a labelled sequent calculus of IS4, formalizing syntax and semantics.
                        Currently proving that cut elimination is admissible in this logic.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                        <span>Advised by</span>
                        <Badge variant="secondary" className="text-xs">
                          Lutz Straßburger
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-500">
                        <span>Institution:</span>
                        <Badge variant="secondary" className="text-xs">
                          Partout - INRIA Saclay
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-olive-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-stone-600 text-sm">
                          <span className="font-medium text-stone-900">Focus:</span> Formal verification and proof
                          theory
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carnegie Mellon Education */}
            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      Carnegie Mellon University, Pittsburgh, PA
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    2018 - 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-olive-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-stone-600 text-sm">
                        <span className="font-medium text-stone-900">Honors Thesis:</span> Domain Informed Oracle for
                        Reinforcement Learning
                      </p>
                      <p className="text-stone-500 text-xs mt-1">
                        Advised by Giselle Reis, Gianni Di Caro and Eduardo Feo Flushing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-olive-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-stone-600 text-sm">
                        <span className="font-medium text-stone-900">Concentration:</span> Programming Languages
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Research Projects</h2>

          <div className="space-y-6">
            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">Proof Search in Pomset and BV logic</CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      Partout - INRIA Saclay
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    Apr 2024 - Aug 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Implementation was done in OCaml while making use of the 'Logical' tool for the proof search of BV,
                  specifically. Proof search in Pomset was implemented as the search of cycles on graphs: restricted to
                  balanced formulas. The implementation in Pomset was used as a benchmark for testing the proof search
                  on BV.
                </p>
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
                  <span>Advised by</span>
                  <Badge variant="secondary" className="text-xs">
                    Lutz Straßburger
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    OCaml
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Proof Search
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    BV Logic
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Pomset Logic
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">
                      Proof Assistant for Categories encoded in an Equational Graphical Language
                    </CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      École Polytechnique, Paris
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    Sep 2023 - Jan 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Research on the link between equational and graphical structures. Transforming the categorical
                  definition of a terminal object to an equational definition using the work done by Albert Burroni.
                  Defined the relevant type system and its rules for terms, contexts and equalities.
                </p>
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
                  <span>Advised by</span>
                  <Badge variant="secondary" className="text-xs">
                    Samuel Mimram
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Agda
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Category Theory
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Graphical Algebra
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Type Systems
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">
                      Domain Informed Oracle for Reinforcement Learning
                    </CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      Carnegie Mellon University
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    Sep 2021 - Dec 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Implemented a domain-informed module in ProgLog to guide the reward shaping of a Reinforcement
                  Learning (RL) module. Independently gathered related work to better identify the problem of reward
                  shaping in RL and investigate possible solutions. Adapted a deep-learning architecture to include a
                  logic module, the model was formalized accordingly.
                </p>
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
                  <span>Advised by</span>
                  <Badge variant="secondary" className="text-xs">
                    Giselle Reis
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Gianni Di Caro
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Eduardo Feo Flushing
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Link
                    href="https://natvern.github.io/main.pdf"
                    className="inline-flex items-center gap-1 text-olive-600 hover:text-olive-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Paper
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Reinforcement Learning
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Logic Programming
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Reward Shaping
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Deep Learning
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">
                      Behavioral Modulation of a Reinforcement Learning Controller using Artificial Emotions
                    </CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      Carnegie Mellon University Qatar
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    May 2020 - Sep 2020
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Formalized and implemented a survival game scenario based on predators and preys. Action is determined
                  by behavior and decision in the environment. Experimenting on outcomes of behavioral modulations and
                  its learned effects on decisions.
                </p>
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
                  <span>Advised by</span>
                  <Badge variant="secondary" className="text-xs">
                    Gianni Di Caro
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
                  <span>Funded by</span>
                  <Badge variant="secondary" className="text-xs">
                    QSIURP 2021
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Reinforcement Learning
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Artificial Emotions
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Game Theory
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Behavioral Modeling
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">
                      Proof Search and Certificates for Evidential Transactions
                    </CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      Carnegie Mellon University Qatar
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    Dec 2020 - Feb 2021
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Provided a logical framework for distributed evidential transactions. Compiled relevant related work
                  and proved cut-elimination for the logic (interesting proof found in annex of the paper).
                </p>
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
                  <span>Co-authors</span>
                  <Badge variant="secondary" className="text-xs">
                    Vivek Nigam
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Giselle Reis
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Harald Ruess
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Link
                    href="https://nigam.info/docs/cade21.pdf"
                    className="inline-flex items-center gap-1 text-olive-600 hover:text-olive-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    CADE28 Paper
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Proof Theory
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Distributed Systems
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Cut Elimination
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Logic Frameworks
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Work Experience</h2>

          <div className="space-y-6">
            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">Stagiaire M1</CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      Partout - INRIA Saclay
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    Apr 2024 - Aug 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Implemented proof search for Pomset and BV logic, as part of the effort to have a useful tool for
                  researchers. In the process of both verifying the correctness of the prover and choosing heuristics to
                  optimize the search.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    OCaml
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Proof Search
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    BV Logic
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Pomset Logic
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">Course Assistant</CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      Carnegie Mellon University Qatar
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    Aug 2023 - Jan 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Course Assistant for Constructive Logic (15-317) and Artificial Intelligence (15-281). Provided 1-on-1
                  tutoring, created autograders for programming assignments, and reviewed midterms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Teaching
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Logic
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AI
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Tutoring
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-stone-900">Teaching Assistant</CardTitle>
                    <CardDescription className="text-olive-600 font-medium mt-1">
                      Carnegie Mellon University
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="border-olive-200 text-olive-700">
                    Aug 2022 - Dec 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Teaching Assistant for Software Foundations of Security and Privacy (15-316). Proctored examinations,
                  collaborated with teaching staff, and wrote homework solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Security
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Privacy
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Software Foundations
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Research Interests</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-lg text-stone-900">Formal Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm">
                  Exploring mathematical methods to verify the correctness of software and hardware systems, with focus
                  on proof theory and automated reasoning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-lg text-stone-900">Reinforcement Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm">
                  Investigating machine learning approaches where agents learn optimal behavior through interaction with
                  their environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-lg text-stone-900">Category Theory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm">
                  Applying categorical structures to computer science problems, particularly in the context of graphical
                  algebra and proof systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-lg text-stone-900">Neurosymbolic AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm">
                  Bridging symbolic reasoning and neural networks to create more interpretable and robust artificial
                  intelligence systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Beyond Research</h2>

          <Card className="border-stone-200">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎲</span>
                  </div>
                  <h4 className="font-semibold text-stone-900 mb-1">Dungeons & Dragons</h4>
                  <p className="text-stone-600 text-sm">Founder and President of D&D club</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="font-semibold text-stone-900 mb-1">Languages</h4>
                  <p className="text-stone-600 text-sm">Fluent in French, English, and Arabic</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h4 className="font-semibold text-stone-900 mb-1">Writing</h4>
                  <p className="text-stone-600 text-sm">Occasional blogger and rambler</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Get in Touch</h2>

          <Card className="border-stone-200">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <Link
                      href="mailto:samar.rahmouni@outlook.com"
                      className="flex items-center gap-3 text-stone-600 hover:text-olive-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>samar.rahmouni@outlook.com</span>
                    </Link>
                    <Link
                      href="https://github.com/natvern"
                      className="flex items-center gap-3 text-stone-600 hover:text-olive-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>github.com/natvern</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-stone-900 mb-4">Academic Collaboration</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    I'm always interested in discussing research opportunities, collaborations, or simply exchanging
                    ideas about formal methods, AI, and the intersection of symbolic and neural approaches to
                    computation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-stone-500 text-sm">
            <p>© 2024 Samar Rahmouni. Built with care for the academic community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
