/*
* Loading data from API
* You can get this retured data using loader router property
*/

export const allTopics = async () => {
  try {
    const topicsData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const topics = await topicsData.json();
    return topics;
  } catch (error) {
    console.log(error);
  };
};

export const topicQuiz = async (id) => {
  try {
    const quizData = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
    const quiz = await quizData.json();
    return quiz;
  } catch (error) {
    console.log(error);
  };
};