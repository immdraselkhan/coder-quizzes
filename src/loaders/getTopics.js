/*
* Loading data from API
* You can get this retured data using loader router property
*/

export const allTopics = async () => {
  const topicsData = await fetch('https://openapi.programming-hero.com/api/quiz');
  const topics = await topicsData.json();
  return topics;
}