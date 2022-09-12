const API_KEY = 'de343408ee71dab0921495888bb73ef5';
const axios = require('axios').default;
async function fetchCast (id) {
    const responseData = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    const response = responseData.data.cast;
    return response
}
export default fetchCast;