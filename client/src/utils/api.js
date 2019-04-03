import axios from 'axios'
const apiKey = process.env.REACT_APP_TIMES_KEY

export default {

    articleQuery: (query) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`
    return axios.get(url, {crossdomain: true })
    },

    articleQueryByDate: (query, beginDate, endDate) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${beginDate}&end_date=${endDate}&api-key=${apiKey}`
    return axios.get(url, {crossdomain: true })
    }
}
