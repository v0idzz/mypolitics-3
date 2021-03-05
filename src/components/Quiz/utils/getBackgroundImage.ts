import { createCanvas } from "canvas";

export const getBackgroundImage = (title: string): string => {
  const canvas = createCanvas(900, 600);
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#005669");
  gradient.addColorStop(1, "#004655");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `bold 48px Poppins`;
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.textBaseline = "middle";
  ctx.fillText(title, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/jpeg", 0.8);
};
