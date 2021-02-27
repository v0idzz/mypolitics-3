import React, { useCallback, useEffect, useState } from "react";
import { PostOrPage } from "@tryghost/content-api";
import { getSinglePost } from "@services/ghost";
import { ArticleContent } from "@components/Media";
import Loading from "@shared/Loading";
import { useInView } from "react-hook-inview";
import { useRandomContent } from "./RandomArticleUtils";
import { RandomContentWrapper } from "./RandomArticleStyle";

interface Props {
  post: PostOrPage;
}

const RandomArticle: React.FC<Props> = ({ post }) => {
  const { id } = post;
  const [fullData, setFullData] = useState<PostOrPage | undefined>(undefined);
  const RandomContent = useCallback(useRandomContent, [id])();
  const [ref, inView] = useInView({
    unobserveOnEnter: true,
  });

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

  useEffect(() => {
    if (inView) {
      getAndSetPostData();
    }
  }, [inView]);

  return (
    <>
      <div ref={ref}>
        {!fullData && <Loading />}
        {fullData && <ArticleContent post={fullData} commentsType="facebook" />}
      </div>
      {fullData && (
        <RandomContentWrapper>
          <RandomContent />
        </RandomContentWrapper>
      )}
    </>
  );
};

export default RandomArticle;
