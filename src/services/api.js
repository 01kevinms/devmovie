import axios from 'axios'

const Api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params: {
        api_key:'ff9301fafde03f69bc3ae70959a6fdc1',
        language: 'pt-BR',
        page: 1

    }
})
export default Api