import client from './client'
import { Post } from '../../types/works'

export default defineEventHandler(async (event) => {
    const params = getQuery(event) //動的に記事のslugを取得
    const slug = params.slug
    const data = client.getListDetail<Post>({
        endpoint: 'works',
        contentId: String(slug),
    })
    return data
})