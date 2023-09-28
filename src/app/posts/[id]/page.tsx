import { Post } from '@/types/posts'
import { fetchPost } from '@/clients/postClient'
import PostDetail from '@/components/postDetail'
import Link from 'next/link'


export default async function PostDetailPage({ params: { id } }: { params: { id: string } }) {
    const post: Post = await fetchPost(id as string)

    return (
        <>
            <div className='flex flex-col flex-grow justify-between'>
                <PostDetail post={post} />
                <div className="flex space-x-4 py-2">
                    <Link className="justify-self-end rounded-lg px-3 py-2 text-slate-100 bg-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" href={'/posts'}> Back to Post List</Link>
                </div>
            </div>
        </>
    )
}