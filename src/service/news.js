import {
  articles_url,
  country_code,
  api_key,
} from '../Config/rest_config';

export async function getArticles(category) {
  try {
    let articles = await fetch(
      `${articles_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          'X-API-KEY': api_key,
        },
      },
    );
    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (error) {
    throw error;
  }
}
