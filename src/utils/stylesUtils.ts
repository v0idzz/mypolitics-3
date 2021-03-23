export const flexGap = (gap: number) => `
& > *:not(:first-child) {
  margin-top: ${gap}rem
}`;
