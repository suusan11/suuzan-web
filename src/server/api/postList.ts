import client from './client'
import { Post } from '../../types/works'
import { MicroCMSQueries } from 'microcms-js-sdk'

export default defineEventHandler(async (event) => {
    const queries: MicroCMSQueries = getQuery(event)
    const data = await client.getList<Post>({
            endpoint: 'works',
            queries: queries
        })
    return data
})