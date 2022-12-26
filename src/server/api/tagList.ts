import client from './client'
import { Cat } from '../../types/works'

export default defineEventHandler(async (event) => {
    // これ以上は増えない、という値
    const queries = {
        limit: 100,
    }
    const data = await client.getList<Cat>({
        endpoint: 'category',
        queries: queries
    })
    return data
})