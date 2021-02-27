const videoIdRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

export const getVideoId = (url: string): string => {
  const match = url.match(videoIdRegExp);
  return match[2];
};
