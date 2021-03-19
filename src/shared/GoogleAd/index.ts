import dynamic from "next/dynamic";
import { Props } from "./GoogleAdView";

export default dynamic<Props>(() => import("./GoogleAdView"), {
  ssr: false,
});
