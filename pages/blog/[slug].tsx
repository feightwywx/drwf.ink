import { Container, Divider, Link, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { HeadLine } from "../../components/headline";
import { getAllPostIds, getPostData } from "../../utils/blog";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import React from "react";
import type { Typography as TypographyType, Variant } from "@mui/material/styles/createTypography";

const typographyStylesMapping = {
  h1: 'headlineLarge',
  h2: 'headlineMedium',
  h3: 'headlineSmall',
  h4: 'titleLarge',
  h5: 'titleMedium',
  h6: 'titleSmall',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1: 'bodyLarge',
  body2: 'bodyMedium',
  button: 'labelLarge',
  caption: 'caption',
  overline: 'overline',
} as { [key in Variant]: keyof TypographyType };

const Heading: React.FC = ({ children, id, level } : { id?: string }) => {
  const variant = `h${Math.min(level, 6)}` as Variant;
  const theme = useTheme();

  return (
    <Typography
      id={id}
      variant={variant}
      style={{
        ...(theme.typography[typographyStylesMapping[variant]] as Object),
        marginTop: "0.5em",
        marginBottom: "0.5em",
      }}
    >
      <Link underline="hover" href={`#${id}`}>{children}</Link>
    </Typography>
  );
};

const Post: NextPage<{ postData: unknown }> = ({ postData }) => {
  return (
    <div>
      <HeadLine
        title={postData.title}
        subtitle={`编写于 ${postData.created}`}
      />
      <Container sx={{ mt: "2em" }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug]}
          components={{
            p: Typography,
            a: Link,
            h1: Heading,
            h2: Heading,
            h3: Heading,
            h4: Heading,
            h5: Heading,
            h6: Heading,
            hr: Divider,
          }}
        >
          {postData.content}
        </ReactMarkdown>
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