import React, { useEffect, useRef, useState } from "react";
import { PostOrPage } from "@tryghost/content-api";
import { getSinglePost } from "@services/ghost";
import { ArticleContent } from "@components/Media";
import Loading from "@shared/Loading";
import { useRandomContent } from "./RandomArticleUtils";

interface Props {
  post: PostOrPage;
}

const RandomArticle: React.FC<Props> = ({ post }) => {
  const { id } = post;
  const [fullData, setFullData] = useState<PostOrPage | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const RandomContent = useRandomContent();

  const getAndSetPostData = async () => {
    const postData = await getSinglePost(
      { id },
      {
        fields: ["id", "excerpt", "html"],
        include: ["authors"],
      }
    );

    setFullData({ ...post, ...postData });
  };

  const isInViewport = () => {
    if (!ref.current || typeof window === "undefined") {
      return false;
    }

    const { top } = ref.current.getBoundingClientRect();
    return top >= 0 && top <= window.innerHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (isInViewport()) {
          window.removeEventListener("scroll", handleScroll);
          getAndSetPostData();
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={ref}>
        {!fullData && <Loading />}
        {fullData && <ArticleContent post={fullData} commentsType="facebook" />}
      </div>
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RandomContent />
      </div>
    </>
  );
};

export default RandomArticle;
