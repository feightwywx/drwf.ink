/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Container,
  Dialog,
  Divider as MuiDivider,
  Link,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { HeadLine } from "../../components/headline";
import { getAllPostIds, getPostData } from "../../utils/blog";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import TagIcon from "@mui/icons-material/Tag";
import NextImage from "next/legacy/image";

import React, { useState } from "react";
import type {
  Typography as TypographyType,
  Variant,
} from "@mui/material/styles/createTypography";

import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import { borderRadius } from "@mui/system";

const typographyStylesMapping = {
  h1: "headlineLarge",
  h2: "headlineMedium",
  h3: "headlineSmall",
  h4: "titleLarge",
  h5: "titleMedium",
  h6: "titleSmall",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
  body1: "bodyLarge",
  body2: "bodyMedium",
  button: "labelLarge",
  caption: "caption",
  overline: "overline",
} as { [key in Variant]: keyof TypographyType };

const Heading: React.FC = ({ children, id, level }: { id?: string }) => {
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
        fontWeight: 600,
      }}
    >
      <TagIcon color="secondary" fontSize="small" />
      <Link underline="hover" href={`#${id}`}>
        {children}
      </Link>
    </Typography>
  );
};

const Code: React.FC = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return !inline ? (
    <CopyBlock
      text={children}
      language={match ? match[1] : undefined}
      theme={prefersDarkMode ? atomOneDark : atomOneLight}
      showLineNumbers
      codeBlock
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const Divider: React.FC = () => {
  return <MuiDivider style={{ margin: "2rem" }} />;
};

const Paragraph: React.FC = ({ node, children, ...props }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xl"));
  const [modal, setModal] = useState(false);

  if (node.children[0].tagName === "img") {
    const image = node.children[0];
    const metastring = image.properties.alt;

    return (
      <Box
        style={{
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <img
          src={image.properties.src}
          alt={metastring}
          style={{
            display: "block",
            maxWidth: mobile ? "70vw" : "60vw",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "8px",
          }}
          onClick={() => setModal(true)}
        />
        <Box
          style={{
            ...theme.typography.labelLarge,
            marginTop: "8px",
            textAlign: "center",
          }}
        >
          {metastring}
        </Box>
        <Dialog
          open={modal}
          onClose={() => {
            setModal(false);
          }}
          maxWidth="xl"
        >
          <img
            src={image.properties.src}
            alt={metastring}
            onClick={() => {
              setModal(false);
            }}
          />
        </Dialog>
      </Box>
    );
  }
  return <Typography style={{ marginBottom: "8px" }}>{children}</Typography>;
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
            p: Paragraph,
            a: Link,
            h1: Heading,
            h2: Heading,
            h3: Heading,
            h4: Heading,
            h5: Heading,
            h6: Heading,
            hr: Divider,
            code: Code,
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
