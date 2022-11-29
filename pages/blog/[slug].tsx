import { Container } from "@mui/material";
import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { HeadLine } from "../../components/headline";
import { getAllPostIds, getPostData } from "../../utils/blog";
import rehypeRaw from "rehype-raw";

const Post: NextPage = ({ postData }) => {
  return (
    <div>
      <HeadLine
        title={postData.title}
        subtitle={`编写于 ${postData.created}`}
      />
      <Container>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{postData.content}</ReactMarkdown>
      </Container>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
