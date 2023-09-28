import Link from "next/link"

export default function PostsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen px-4 py-4 flex flex-col">
      <nav>
        <div className="flex space-x-4 py-2">
          <Link className="rounded-lg px-3 py-2 text-slate-100 bg-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" href="/posts">Posts</Link>
        </div>
      </nav>
      <div className="container py-2 flex-grow flex">
        {children}
      </div>
    </section>
  )
}