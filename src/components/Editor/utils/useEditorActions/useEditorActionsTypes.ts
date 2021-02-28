import { EditorQuizQuery } from "@generated/graphql";
import { DeepPartial } from "@typeDefs/common";

export type EditorUpdateFunction = (
  updateData: DeepPartial<EditorQuizQuery>
) => void;

export type EditorGetCurrentDataFunction = () => EditorQuizQuery;
