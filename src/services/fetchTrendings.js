const API_KEY = 'de343408ee71dab0921495888bb73ef5';
const axios = require('axios').default;
async function fetchTrendings () {

    const responseData = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
    const response = responseData.data.results;
    return response
}
export default fetchTrendings;