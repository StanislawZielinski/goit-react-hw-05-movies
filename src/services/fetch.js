const API_KEY = 'de343408ee71dab0921495888bb73ef5';
const axios = require('axios').default;
async function fetch (searchValue) {

    const responseData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchValue}`);
    const response = responseData.data.results;
    return response
}
export default fetch;