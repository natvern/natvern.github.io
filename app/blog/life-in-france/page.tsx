import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, User } from "lucide-react"
import Link from "next/link"

export default function LifeInFrancePage() {
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
              <Link href="/about" className="text-stone-700 hover:text-olive-600 transition-colors font-medium">
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

        {/* Article Header */}
        <article className="mb-12">
          <header className="mb-8">
            <div className="bg-gradient-to-br from-olive-50 to-stone-100 rounded-2xl p-8 border border-olive-100">
              <h1 className="text-4xl font-bold text-stone-900 mb-4">Life in France</h1>

              <div className="flex flex-wrap items-center gap-4 text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">May 25, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Samar Rahmouni</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">5 min read</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-olive-200 text-olive-700 hover:bg-olive-50 bg-transparent"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Badge variant="secondary" className="bg-olive-100 text-olive-800">
                  Personal
                </Badge>
                <Badge variant="secondary" className="bg-olive-100 text-olive-800">
                  Academic Life
                </Badge>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-stone max-w-none">
            <Card className="border-stone-200 mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Figuring it out</h2>

                <div className="space-y-6 text-stone-700 leading-relaxed">
                  <p>
                    2 years after my first post, I am happy to say that life has turned around. It's been a year since I
                    moved to France for my master. I was worried, very worried to be honest. My last time away from
                    home, especially in the US, did not go that well. The responsibilities, and the work, and the
                    competitiveness- I was happy to find a certain balance in France, that I was missing in the US.
                  </p>

                  <p>
                    I have met some great people, especially those in my master. We struggle together and we rise
                    together. It's especially interesting to see the different backgrounds of Computer Science everyone
                    comes from and how that affects their understanding of further courses. I always thought my
                    education in CMU was very theoretical, until I met bachelor students in France. Although I have a
                    good understanding of applications of algorithms, and their analysis, I believe the mathematical
                    tools in the French system can be bigger and harder to master. I found this to be the case,
                    especially when talking with researchers and phd students in the field.
                  </p>

                  <p>
                    I came into my master with no knowledge or understanding of what a category is. It is something I
                    first learnt when attending a seminar about homotopy type theory. This seminar is probably one of
                    those I could never forget: it first showed me the problem of equality its implications in type
                    systems, and second, it mentioned a new abstraction of mathematics that solved the superset paradox
                    that was mentioned in my undergrad but never pushed further upon. Last but not least, the presenter
                    ended up becoming a good friend of mine and sparking much of the interest I got now in linear logic
                    and category theory.
                  </p>

                  <p>
                    I don't think I understand enough about the details, or even the formalizations, I will try to use
                    this blog to report on my readings. The first book recommended to me was Tom Lensers' basic category
                    theory. It all sounds like a challenging but fun read. :)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Article Footer */}
          <footer className="mt-12">
            <Separator className="mb-8 bg-stone-200" />

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Link
                href="/blog/burn-out"
                className="flex items-center gap-2 text-stone-600 hover:text-olive-600 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-stone-500 uppercase tracking-wide">Previous Post</p>
                  <p className="font-medium">Burn-out</p>
                </div>
              </Link>

              <Link
                href="/#posts"
                className="flex items-center gap-2 text-stone-600 hover:text-olive-600 transition-colors group"
              >
                <div className="text-right">
                  <p className="text-xs text-stone-500 uppercase tracking-wide">Blog Archive</p>
                  <p className="font-medium">Archive of all previous blog posts</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Posts</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-stone-200 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  Sep 17, 2022
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  <Link href="/blog/burn-out" className="hover:text-olive-600 transition-colors">
                    Burn-out
                  </Link>
                </h3>
                <p className="text-stone-600 text-sm">
                  Personal thoughts on academic burnout and strategies for maintaining mental health in research.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  Coming Soon
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Category Theory Readings</h3>
                <p className="text-stone-600 text-sm">
                  Following up on my journey through Tom Lensers' basic category theory book and other mathematical
                  explorations.
                </p>
              </CardContent>
            </Card>
          </div>
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
