const quizRegex = /https:\/\/(www\.)?mypolitics\.pl\/quizzes\/(.+)(\?.+)?/;

export const parseUrl = (url: string): string => {
  const matching = url.match(quizRegex);

  return matching ? matching[2] : "";
};
