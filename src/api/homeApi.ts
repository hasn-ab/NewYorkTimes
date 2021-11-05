import axios, {AxiosInstance} from 'axios';
import Config from 'react-native-config';

export const getSectionArticles = (section = '') => {
  const query = `${section || 'home'}.json`;
  const url = `${Config.TOP_STORIES_BASE_URL}${query}?api-key=${Config.NYT_API_KEY}`;
  console.log({url});
  return axios.get(url);
};

//top articles by section
export const getHomeArticles = (section = ''): Promise<AxiosInstance> => {
  const url = `${Config.TOP_STORIES_BASE_URL}home.json?api-key=${Config.NYT_API_KEY}`;
  return axios.get(url);
};

//search articles by query
export const searchArticles = (query: String) => {
  const url = `${Config.SEMANTIC_BASE_URL}${query}&api-key${Config.NYT_API_KEY}`;
  return axios.get(url);
};
