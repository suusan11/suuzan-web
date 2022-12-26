import client from './client'
import { Post } from '../../types/works'

export default defineEventHandler(async (event) => {
    const queries = getQuery(event)
    const data = await client
        .getList<Post>({
            endpoint: 'works',
            queries: queries
        })
    return data
})