const quizRegex = /https:\/\/(www\.)?mypolitics\.(pl|eu)\/quizzes\/(.+)(\?.+)?/;

export const parseUrl = (url: string): string => {
  const matching = url.match(quizRegex);

  return matching ? matching[3] : "";
};
