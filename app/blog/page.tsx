import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, ExternalLink, User } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
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
              <Link href="/blog" className="text-olive-600 font-medium">
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

        {/* Page Header */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-olive-50 to-stone-100 rounded-2xl p-8 border border-olive-100">
            <h1 className="text-4xl font-bold text-stone-900 mb-4">Blog Archive</h1>
            <p className="text-lg text-stone-700 leading-relaxed">
              A collection of thoughts, reflections, and insights from my academic journey. From personal experiences to
              research musings, these posts capture different moments in my path through computer science and life.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-stone-900">All Posts</h2>
            <div className="text-sm text-stone-500">{2} posts</div>
          </div>

          <div className="space-y-8">
            {/* Life in France Post */}
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>May 25, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Samar Rahmouni</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3">
                  <Link href="/blog/life-in-france" className="text-stone-900 hover:text-olive-600 transition-colors">
                    Life in France
                  </Link>
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Reflections on academic life and cultural experiences during my time in France. Two years after my
                  first post, I'm happy to say that life has turned around. It's been a year since I moved to France for
                  my master, and I was worried—very worried to be honest. My last time away from home, especially in the
                  US, did not go that well.
                </CardDescription>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-olive-100 text-olive-800">
                    Personal
                  </Badge>
                  <Badge variant="secondary" className="bg-olive-100 text-olive-800">
                    Academic Life
                  </Badge>
                  <Badge variant="secondary" className="bg-olive-100 text-olive-800">
                    France
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    asChild
                    variant="outline"
                    className="border-olive-200 text-olive-700 hover:bg-olive-50 bg-transparent"
                  >
                    <Link href="/blog/life-in-france">
                      Read Full Post
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* Burn-out Post */}
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Sep 17, 2022</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Samar Rahmouni</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3">
                  <Link href="/blog/burn-out" className="text-stone-900 hover:text-olive-600 transition-colors">
                    Burn-out
                  </Link>
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Personal thoughts on academic burnout and strategies for maintaining mental health in research. As I
                  graduate, I realize how messed up this entire 'American university culture' has affected my mental.
                  Part of it is satisfying; the endless all-nighter, the companionship, the general suffering, the
                  triumph of surviving an extra day.
                </CardDescription>
                <div className="flex items-center gap-3 mb-4">
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
                <div className="flex items-center justify-between">
                  <Button
                    asChild
                    variant="outline"
                    className="border-olive-200 text-olive-700 hover:bg-olive-50 bg-transparent"
                  >
                    <Link href="/blog/burn-out">
                      Read Full Post
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <h3 className="text-xl font-bold text-stone-900 mb-4">Coming Soon</h3>
            <Card className="border-stone-200 bg-stone-50/50">
              <CardContent className="pt-6">
                <p className="text-stone-600 text-sm leading-relaxed">
                  More posts are in the works! I'm planning to write about my journey through graduate school, my
                  experiences with formal methods research, and reflections on the intersection of symbolic approaches
                  to AI. Stay tuned for updates on my research and academic adventures.
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
