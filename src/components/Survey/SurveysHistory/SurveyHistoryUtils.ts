import { useEffect, useState } from "react";

export const useClassicResults = (): any[] => {
  const [data, setData] = useState([]);

  const getAndSetData = () => {
    if (typeof window === "undefined") {
      return;
    }

    const item = localStorage.getItem("persist:root");
    const { results } = JSON.parse(item);
    const { resultsHistory } = JSON.parse(results);
    const toNewResult = ({ id, additionDate }) => ({
      id,
      updatedAt: additionDate,
      finished: true,
      quizVersion: {
        quiz: {
          id: "60296526cdd40a2d64febe46",
          slug: "classic",
          logoUrl:
            "https://files.mypolitics.pl/mypolitics2/cdnv2-myp_classic_5610cc9d93.png",
        },
      },
    });

    setData(resultsHistory.map(toNewResult));
  };

  useEffect(() => {
    getAndSetData();
  }, []);

  return data;
};
