import axios from "axios";

const API_KEY = "zPfqKHlY8f2W7Z-xNLRkx9ipN25JRq5Yw0Irf_pQgQ8";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 20,
};
const getPhotos = async (query, page) => {
  const response = await axios.get(`search/photos?query=cat>`);
  console.log(response.data);
  return response;
};

export default getPhotos;
