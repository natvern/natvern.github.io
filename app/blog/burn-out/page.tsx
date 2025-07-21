import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, User } from "lucide-react"
import Link from "next/link"

export default function BurnOutPage() {
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
              <h1 className="text-4xl font-bold text-stone-900 mb-4">Burn-out</h1>

              <div className="flex flex-wrap items-center gap-4 text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Sep 17, 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Samar Rahmouni</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">7 min read</span>
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
                  Mental Health
                </Badge>
                <Badge variant="secondary" className="bg-olive-100 text-olive-800">
                  Academic Life
                </Badge>
                <Badge variant="secondary" className="bg-olive-100 text-olive-800">
                  Personal
                </Badge>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-stone max-w-none">
            <Card className="border-stone-200 mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">The Necessary Evil</h2>

                <div className="space-y-6 text-stone-700 leading-relaxed">
                  <p>
                    Man. As I graduate, I realize how messed up this entire 'american university culture' has affected
                    my mental. Part of it is satisfying; the endless all-nighter, the companionship, the general
                    suffering, the triumph of surviving an extra day.
                  </p>

                  <p>
                    I can't lie. I did learn a lot from the constant struggle. You might say I could have decided to
                    have an 'easier time', but that's not how this works. Competitiveness in the marketplace,
                    considering how good your resume will look from your first year. It's impossible not to consider
                    those in mind. 4 years. 8 semesters. 4 summers. Every possible break is an opportunity to add
                    something new. Every semester is a chance to build your teaching and research experience. A full
                    semester of courses is around 50 hours/week. To be able to afford my daily coffees (just 6, not that
                    much), I need to work 20h/week as a course assistant. Unfortunately, this is not enough, you have to
                    consider an extra 10 hours/week of research, readings, self-learning.
                  </p>

                  <p>
                    The equation adds up to a healthy 80h/week. Basically, a very reasonable amount of hours for a 20
                    years old to function. This work expectation while trying to keep a semblant of socializing in your
                    daily schedule. Sleep becomes fourth on the priority list. Most of my early years, I would sleep on
                    campus to save on money and time. Precious seconds. To be fair, a minute is enough to make a
                    difference between you submitting on time or getting a 25% grade penalty.
                  </p>

                  <p>
                    How sustainable is this lifestyle? Spoiler alert. Not very. My semesters have been ups and downs,
                    and I'd like to think it's not necessarily <em>just</em> because of my diagnosis -which I might talk
                    about in future posts. You can be high-achieving and suffer the ultimate demise of{" "}
                    <strong>burn-out</strong>. All of a sudden, the passion that made me survive all this over-working
                    could not be found anymore. It's like 'what's the point anymore?'. Research I focused on for two
                    years just seems like I wouldn't dare to poke it with 10 meters stick.. and when there's no passion,
                    motivation dies down.
                  </p>

                  <p>
                    'You should find the motivation yourself, it does not appear magically!' Fair, but also too
                    simplistic. I think, as most people who chose computer science as their field, there is this
                    collective interest and fascination with the subject. The usual 'look it works!!' deal. When you
                    lose this interest and fascination, you're just left with confusion. And it's not like taking a
                    break is an option. Remember, it's about consistency, not understanding. You get overwhelmed by 1001
                    assignments every week. Acing exams? Doesn't matter. You missed that one lab, 2 months ago. You are
                    'objectively' inferior.
                  </p>

                  <p>
                    American education. After four years, you'd think I would have gotten used to it. However, I'm at a
                    stage where I can't tell if this is the norm, or if it's just particularly intense at my
                    institution. The competitive environment, the constant pressure to perform, the fear of falling
                    behind - it all becomes a cycle that's hard to break free from.
                  </p>

                  <p>
                    What I've learned is that recognizing burnout is the first step. It's not a personal failing or a
                    sign of weakness. It's a natural response to an unsustainable system. The challenge is finding ways
                    to navigate through it while maintaining your sense of self and your genuine love for learning.
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
              <div className="flex items-center gap-2 text-stone-400">
                <div className="text-left">
                  <p className="text-xs text-stone-500 uppercase tracking-wide">Previous Post</p>
                  <p className="font-medium text-stone-400">First Post</p>
                </div>
              </div>

              <Link
                href="/blog/life-in-france"
                className="flex items-center gap-2 text-stone-600 hover:text-olive-600 transition-colors group"
              >
                <div className="text-right">
                  <p className="text-xs text-stone-500 uppercase tracking-wide">Next Post</p>
                  <p className="font-medium">Life in France</p>
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
                  May 25, 2024
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  <Link href="/blog/life-in-france" className="hover:text-olive-600 transition-colors">
                    Life in France
                  </Link>
                </h3>
                <p className="text-stone-600 text-sm">
                  Reflections on academic life and cultural experiences during my time in France, and finding balance
                  after difficult times.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  Coming Soon
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Mental Health in Academia</h3>
                <p className="text-stone-600 text-sm">
                  Further thoughts on maintaining mental health in academic environments and strategies for sustainable
                  research practices.
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
