import client from './client'
import { Test } from '../../types/works'
import { MicroCMSQueries } from 'microcms-js-sdk'

export default defineEventHandler(async (event) => {
    const queries: MicroCMSQueries = getQuery(event)
    const data = await client.getList<Test>({
            endpoint: 'test',
            queries: queries
        }).catch((err) => console.error(err));
    return data
})