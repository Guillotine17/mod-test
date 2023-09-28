import { Suspense, use } from 'react'
import { Post } from '@/types/posts'
import Loading from '@/app/loading'
import {PostsList} from '@/components/postsList'

export default function Page() {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <PostsList />
            </Suspense>
        </div>
    )
}
