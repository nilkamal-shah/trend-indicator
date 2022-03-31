import axios from 'axios'
const baseUrl = 'http://localhost:8000/'

export async function fetchTrendData(accountId: any) {
    const trendData = await axios.get(`${baseUrl}trendData/?accountId=${accountId}`)
    return trendData;
}
