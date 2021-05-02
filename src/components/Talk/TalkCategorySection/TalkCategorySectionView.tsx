import { BasicTalkPartsFragment, Enum_Talk_Type } from "@generated/graphql";
import { Container, Header, Image } from "./TalkCategorySectionStyle";
import {
  BaseSectionBackground,
  BaseSectionContent,
  BaseSectionList,
} from "@shared/BaseSection";
import TalkLink from "@components/Talk/TalkLink";

const assets = {
  [Enum_Talk_Type.Mvsp]: {
    logoAsset: require("@assets/images/talk/mvsp.png"),
    background: "linear-gradient(74.82deg, #8E2DE2 0%, #4A00E0 100%)",
    alt: "Młodzież vs Politycy",
  },
  [Enum_Talk_Type.Ring]: {
    logoAsset: require("@assets/images/talk/ring.png"),
    background: "linear-gradient(91.81deg, #E2D02D 0%, #E00051 96.93%)",
    alt: "Ring Polityczny",
  },
  [Enum_Talk_Type.Expert]: {
    logoAsset: require("@assets/images/talk/expert.png"),
    background: "linear-gradient(254.81deg, #2DE2D7 0%, #7D00E0 100.01%)",
    alt: "Okiem Eksperta",
  },
  [Enum_Talk_Type.Classic]: {
    logoAsset: require("@assets/images/talk/classic.png"),
    background: `url(${require("@assets/images/talk/classic_bg.png")})`,
    alt: "Debata Młodzieżówek",
  },
};

interface Props {
  type: Enum_Talk_Type;
  talks: BasicTalkPartsFragment[];
}

const TalkCategorySection: React.FC<Props> = ({ talks, type }) => {
  const { logoAsset, background, alt } = assets[type];

  return (
    <Container className="container">
      <Header background={background}>
        <Image src={logoAsset} alt={alt} />
      </Header>
      <BaseSectionContent>
        <BaseSectionBackground />
        <BaseSectionList numberOfColumns={3}>
          {talks.map((t) => (
            <TalkLink data={t} />
          ))}
        </BaseSectionList>
      </BaseSectionContent>
    </Container>
  );
};

export default TalkCategorySection;
