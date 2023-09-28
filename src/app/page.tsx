import { redirect } from 'next/navigation'

export default function Home() {
  // posts is the home page.
  redirect('/posts')
}
