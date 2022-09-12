const API_KEY = 'de343408ee71dab0921495888bb73ef5';
const axios = require('axios').default;
async function fetchReview (id) {
    const responseData = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
    const response = responseData.data.results;
    return response
}
export default fetchReview;