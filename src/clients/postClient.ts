import { Post } from '@/types/posts'

// pretend this base url is from a environment specific .env file
const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts(limit:number = 10, offset:number=0): Promise<Post[]>{
    const res = await fetch(`${BASE_URL}/posts`, {cache: 'no-store'})
    const posts = await res.json()
    return posts.slice(offset, offset+limit)
}

export async function fetchPost(id: string): Promise<Post> {
    try {
        const res = await fetch(`${BASE_URL}/posts/${id}`, { cache: 'no-store' }) 
        return await res.json()
    } catch (error) {
        throw new Error(error)
    }
}