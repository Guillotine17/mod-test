import { Post } from "@/types/posts";

export default function PostDetail({ post }: { post: Post }) {
  return (
    <div className='container py-2 px-2 flex flex-col'>
      <h1 className='underline text-2xl font-bold decoration-sky-500'>{post.title}</h1>
      <p style={{
        "whiteSpace": "pre-wrap"
      }}>{post.body}</p>
    </div>
  )
}