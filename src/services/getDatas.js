import Api from "./api";

export async function getMoveis() {
    const { data: { results } } = await Api.get('/movie/popular')
    
    return results[0]
}
export async function getTopmoveis() {
    const { data: { results } } = await Api.get('/movie/top_rated')
    return results
}

export async function getTopseries() {
    const { data: { results } } = await Api.get('/tv/top_rated')
    return results
}

export async function getPopularseries() {
    const { data: { results } } = await Api.get('/tv/popular')
    return results
}

export async function getToppeople() {
    const { data: { results } } = await Api.get('/person/popular')
    return results
}


export async function getMovievideos(movieId) {
    const { data: { results } } = await Api.get(`/movie/${movieId}/videos`)
    return results
}


export async function getMoviecredits(movieId) {
    const { data: {cast}} = await Api.get(`/movie/${movieId}/credits`)
    return cast
}
export async function getMoviesimilar(movieId) {
    const { data: { results } } = await Api.get(`/movie/${movieId}/similar`)
    return results
}
export async function getMoviebyid(movieId) {
    const { data } = await Api.get(`/movie/${movieId}`)
    return data
}

export async function getSeriestoday() {
    const { data: {results} } = await Api.get('/tv/airing_today')
    return  results  
}
export async function getSeriesair() {
    const { data: {results} } = await Api.get('/tv/on_the_air')
    return  results  
}
export async function getNowmovie() {
    const { data: {results} } = await Api.get('/movie/now_playing')
    return  results  
}
export async function getUpcoming() {
    const { data: {results} } = await Api.get('/movie/upcoming')
    return  results  
}