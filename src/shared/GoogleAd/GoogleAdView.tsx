import React, { useEffect } from "react";
import { AdId, adsIdsSlots } from "./GoogleAdUtils";
import { MockupAd, Text } from "./GoogleAdStyle";

interface Props {
  id: AdId;
}

const GoogleAd: React.FC<Props> = ({ id }) => {
  const slot = adsIdsSlots[id];

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return (
      <MockupAd>
        <Text>
          <span>AD:</span>
          {id}
        </Text>
      </MockupAd>
    );
  }

  return (
    <ins
      style={{
        display: "block",
        width: "100%",
      }}
      className="adsbygoogle"
      data-ad-client="ca-pub-2006154132998057"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAd;
