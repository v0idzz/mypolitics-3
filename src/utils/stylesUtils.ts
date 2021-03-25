export const spacingY = (gap: number) => `
& > *:not(:first-child) {
  margin-top: ${gap}rem;
}`;

export const spacingX = (gap: number) => `
& > *:not(:last-child) {
  margin-right: ${gap}rem;
}`;
