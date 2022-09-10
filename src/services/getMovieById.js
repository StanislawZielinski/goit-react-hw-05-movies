const API_KEY = 'de343408ee71dab0921495888bb73ef5';
const axios = require('axios').default;
async function getMovieById (id) {
    const responseData = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const response = responseData.data;
    return response
}
export default getMovieById;