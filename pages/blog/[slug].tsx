import { Box, Container, Link, Modal } from "@mui/material";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import ReactMarkdown from "react-markdown";
import { HeadLine } from "../../components/headline";
import { getAllPostIds, getPostData } from "../../utils/blog";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import React from "react";

import * as markdownComponents from "../../components/markdownComponents";
import { TagChip } from "../../components/TagChip";
import { BlogData } from "../../utils/types";

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  postData,
}) => {
  return (
    <div>
      <HeadLine
        title={postData.title}
        subtitle={`编写于 ${postData.created}`}
      />
      <Container sx={{ mt: "2em" }}>
        <Box style={{ marginBottom: "24px" }}>
          <TagChip tags={postData.tags} />
        </Box>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug]}
          components={markdownComponents as {[nodeType: string]: React.ElementType}}
        >
          {postData.content}
        </ReactMarkdown>
      </Container>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds().map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  { postData: BlogData },
  { slug: string }
> = ({ params }) => {
  if (params?.slug) {
    const postData = getPostData(params.slug);
    return {
      props: {
        postData,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Post;
