import { fetchPosts } from '@/clients/postClient'
import { Post } from '@/types/posts'
import Link from 'next/link'

function PostListEntry({ post }: { post: Post }) {
 return (
     <Link href={`/posts/${post.id}`} >
         <div className="flex justify-between gap-x-6 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">
             <div className="flex min-w-0 gap-x-4 px-2">
                 <div className="min-w-0 flex-auto flex sm:justify-center space-x-4">
                     <div>{post.id}</div>
                     <div>{post.title}</div>

                 </div>
             </div>
         </div>
     </Link>
 )
}

export async function PostsList() {
    const posts = await fetchPosts()
    return (
        <>
            <div role='list' className='divide-y divide-slate-900'>
                {posts.map((post) => (
                    <PostListEntry key={post.id} post={post} />
                ))}
            </div>
        </>
    )
}