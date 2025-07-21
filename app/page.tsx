import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Calendar, ExternalLink, Github, Mail, Rss } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-stone-900">
                Rambling <span className="text-olive-600">¬</span> Logician
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
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-olive-50 to-stone-100 rounded-2xl p-8 border border-olive-100">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Welcome to my academic journey</h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Due to the lack of presence on social media, I figured a blog would be better to confirm that I am indeed
              a real person, a reasonable one at that (or at least I hope so). I might randomly ramble at given points,
              expect french or english writings depending on the weather.
            </p>
            <div className="flex items-center gap-4">
              <Button asChild className="bg-olive-600 hover:bg-olive-700 text-white">
                <Link href="/blog">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Latest Posts
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-olive-200 text-olive-700 hover:bg-olive-50 bg-transparent"
              >
                <Link href="mailto:samar.rahmouni@outlook.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <Card className="border-stone-200">
            <CardHeader>
              <CardTitle className="text-2xl text-stone-900">About Me</CardTitle>
              <CardDescription className="text-stone-600">
                A few things that define my academic and personal interests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Computer Science B.S.</h3>
                    <p className="text-stone-600">Concentration in Programming Languages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Research Focus</h3>
                    <p className="text-stone-600">Formal verification, logic programming & proof theory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">AI & Machine Learning</h3>
                    <p className="text-stone-600">Reinforcement Learning & Symbolic AI believer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Personal Interests</h3>
                    <p className="text-stone-600">Dungeons & Dragons Enjoyer</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Posts Section */}
        <section id="posts">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-stone-900">Recent Posts</h2>
          </div>

          <div className="space-y-6">
            <Card className="border-stone-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-stone-500">
                    <Calendar className="w-4 h-4" />
                    May 25, 2024
                  </div>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href="/blog/life-in-france"
                    className="text-stone-900 hover:text-olive-600 transition-colors flex items-center gap-2"
                  >
                    Life in France
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardTitle>
                <CardDescription>
                  Reflections on academic life and cultural experiences during my time in France.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-stone-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-stone-500">
                    <Calendar className="w-4 h-4" />
                    Sep 17, 2022
                  </div>
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href="/blog/burn-out"
                    className="text-stone-900 hover:text-olive-600 transition-colors flex items-center gap-2"
                  >
                    Burn-out
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardTitle>
                <CardDescription>
                  Personal thoughts on academic burnout and strategies for maintaining mental health in research.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-olive-200 text-olive-700 hover:bg-olive-50 bg-transparent"
              asChild
            >
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-stone-900 mb-4">Rambling ¬Logician</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Samar Rahmouni
                <br />
                PhD Student & Researcher
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 mb-4">Connect</h4>
              <div className="space-y-2">
                <Link
                  href="mailto:samar.rahmouni@outlook.com"
                  className="flex items-center gap-2 text-stone-600 hover:text-olive-600 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  samar.rahmouni@outlook.com
                </Link>
                <Link
                  href="https://github.com/natvern"
                  className="flex items-center gap-2 text-stone-600 hover:text-olive-600 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  natvern
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-stone-600 hover:text-olive-600 transition-colors text-sm"
                >
                  <Rss className="w-4 h-4" />
                  RSS Feed
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 mb-4">Philosophy</h4>
              <p className="text-stone-600 text-sm italic">"The Future is Neurosymbolic"</p>
            </div>
          </div>

          <Separator className="my-8 bg-stone-200" />

          <div className="text-center text-stone-500 text-sm">
            <p>© 2024 Samar Rahmouni. Built with care for the academic community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
