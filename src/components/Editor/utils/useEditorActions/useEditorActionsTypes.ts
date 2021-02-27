import { EditorQuizQuery } from "@generated/graphql";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type EditorUpdateFunction = (
  updateData: DeepPartial<EditorQuizQuery>
) => void;

export type EditorGetCurrentDataFunction = () => EditorQuizQuery;
