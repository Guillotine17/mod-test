import {Post} from '@/types/posts'
import { fetchPost } from '@/clients/postClient'
import PostDetail from '@/components/postDetail'
import Link from 'next/link'


export default async function PostDetailPage({ params: {id} }: { params: { id: string } }) {
    const post:Post = await fetchPost(id as string)

    return (
        <>
        <div className='flex flex-col'>
            <PostDetail post={post} />
            <Link className="absolute bottom-2 left-2 justify-self-end" href={'/posts'}> Back to Post List</Link>
        </div>
        </>
    )
}