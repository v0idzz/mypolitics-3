import React from "react";
import { IdeologyIcon as IdeologyIconType } from "@generated/graphql";
import * as R from "ramda";

interface Props {
  icon: IdeologyIconType;
}

const IdeologyIcon: React.FC<Props> = ({ icon }) => {
  const { type, value } = icon;

  return R.cond([
    [R.equals("font-awesome"), R.always(<span className={`fa ${value}`} />)],
    [R.T, R.always(<img src={value} alt={value} />)],
  ])(type);
};

export default IdeologyIcon;
