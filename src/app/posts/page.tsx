import { Suspense } from 'react'
import Loading from '@/app/loading'
import { PostsList } from '@/components/postsList'

export default function Page() {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <PostsList />
            </Suspense>
        </div>
    )
}
