import { FlattenSimpleInterpolation } from "styled-components";
import React from "react";

export type Size = "middle" | "large";
export type Sizes = Record<Size, FlattenSimpleInterpolation>;

export type Background = "blue" | "black" | "gray";
export type Backgrounds = Record<Background, FlattenSimpleInterpolation>;

export interface StyleProps {
  size?: Size;
  background?: Background;
  showShadow?: boolean;
}

export interface ButtonProps
  extends StyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  beforeIcon?: React.ReactNode;
  as?: any;
}
