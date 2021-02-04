import { ResultsPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";

type IdeologyRectangle = [[number, number], [number, number]];

interface IdeologyConfigElement {
  id: string;
  range: IdeologyRectangle[];
}

const ideologiesConfig: IdeologyConfigElement[] = [
  {
    id: "e84642622ce79db59c79b101650cd342",
    range: [
      [
        [-1, 0.7],
        [-0.7, 1],
      ],
    ],
  },
  {
    id: "5d7ed94a1045ee03d113d6ff8ac0fd21",
    range: [
      [
        [-0.7, 0.8],
        [-0.2, 1],
      ],
    ],
  },
  {
    id: "d205a81b8749ba9815224f30d4378380",
    range: [
      [
        [-0.2, 0.8],
        [0.2, 1],
      ],
    ],
  },
  {
    id: "7ac22d90e079d52413de4bf313abb5a8",
    range: [
      [
        [0.2, 0.8],
        [0.7, 1],
      ],
    ],
  },
  {
    id: "e81131795dbcd0e9aa2df7cad0469dbd",
    range: [
      [
        [0.7, 0.7],
        [1, 1],
      ],
    ],
  },
  {
    id: "f78793d37d2f256c190a4f2b5f5ef72e",
    range: [
      [
        [-1, -0.4],
        [-0.8, 0],
      ],
      [
        [-1, 0],
        [-0.6, 0.7],
      ],
      [
        [-0.7, 0.7],
        [-0.6, 0.8],
      ],
    ],
  },
  {
    id: "bbdae02075351dfcfef18f82fe76ac4b",
    range: [
      [
        [-0.6, 0],
        [-0.2, 0.8],
      ],
      [
        [-0.2, 0.2],
        [0, 0.8],
      ],
    ],
  },
  {
    id: "f06c01c4e2b54c391dc24c478557ce9d",
    range: [
      [
        [0, 0.4],
        [0.7, 0.8],
      ],
      [
        [0.7, 0.4],
        [1, 0.7],
      ],
    ],
  },
  {
    id: "c96cb0f5a6aef182513caf03b320c0ed",
    range: [
      [
        [0, 0.2],
        [0.7, 0.4],
      ],
      [
        [0.3, 0.1],
        [0.7, 0.2],
      ],
    ],
  },
  {
    id: "aeb2f0fe859d3d840a4eef1e15c1f5b4",
    range: [
      [
        [0.8, -0.2],
        [1, 0.4],
      ],
    ],
  },
  {
    id: "8dac303a993812f4115549b61ace48b8",
    range: [
      [
        [-0.3, -0.2],
        [0.3, 0.2],
      ],
    ],
  },
  {
    id: "2776bcfeeeadaae581c2283dea68516f",
    range: [
      [
        [0.3, -0.2],
        [0.7, 0.1],
      ],
    ],
  },
  {
    id: "71506c04f97f716e2d8b6537eb3bb93b",
    range: [
      [
        [-0.8, -0.4],
        [-0.3, 0],
      ],
      [
        [-0.3, -0.4],
        [-0.2, -0.2],
      ],
    ],
  },
  {
    id: "d2d1c8ba3fd291fb122cd3315b848ea9",
    range: [
      [
        [-1, -0.7],
        [-0.4, -0.4],
      ],
      [
        [-0.7, -0.8],
        [-0.4, -0.7],
      ],
    ],
  },
  {
    id: "9042e3760f1dd9e27dd7a32d3ab05399",
    range: [
      [
        [-1, -1],
        [-0.7, -0.7],
      ],
    ],
  },
  {
    id: "18ddec23a18de5352780b95eebd814fa",
    range: [
      [
        [-0.4, -0.8],
        [0, -0.4],
      ],
      [
        [-0.2, -0.4],
        [0, -0.2],
      ],
    ],
  },
  {
    id: "37e56f7a2b1b9ddfe5c9963c9d61fc37",
    range: [
      [
        [-0.7, -1],
        [0, -0.8],
      ],
    ],
  },
  {
    id: "0e9c1fda905589e201751d712e8bc147",
    range: [
      [
        [0, -1],
        [0.5, -0.8],
      ],
    ],
  },
  {
    id: "72f8fe391101c447cc467ee2dcdcd9e8",
    range: [
      [
        [0, -0.8],
        [0.5, -0.2],
      ],
    ],
  },
  {
    id: "652cbd1d722c2fcd8e06aa34f8aa22fe",
    range: [
      [
        [0.5, -1],
        [0.7, -0.7],
      ],
      [
        [0.5, -0.7],
        [1, -0.2],
      ],
    ],
  },
  {
    id: "6410ff914a95dfcb1359e16f005b8abc",
    range: [
      [
        [0.7, -1],
        [1, -0.7],
      ],
    ],
  },
];

export const useIdeology = ([x, y]: number[]): string => {
  const { t } = useTranslation("quiz");
  let ideologyId = "default";

  for (let i = 0; i < ideologiesConfig.length; i += 1) {
    const { range, id } = ideologiesConfig[i];
    for (let j = 0; j < range.length; j += 1) {
      const [[x1, y1], [x2, y2]] = range[j];
      const pointInRange = x >= x1 && x <= x2 && y >= y1 && y <= y2;
      if (pointInRange) {
        ideologyId = id;
      }
    }
  }

  return t(`ideologies.${ideologyId}`);
};
