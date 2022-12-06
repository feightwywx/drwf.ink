/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Dialog,
  Divider as MuiDivider,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import React, { useState } from "react";
import { Variant } from "@mui/material/styles/createTypography";
import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import { typographyStylesMapping } from "../utils/typographyStylesMapping";

declare interface HTMLImageElement {
  properties: {
    alt: string;
    src: string;
  };
};

const Heading: React.FC<{
  children: React.ReactNode;
  id: string;
  level: number;
}> = ({ children, id, level }) => {
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

const Code: React.FC<{
  node: HTMLElement;
  inline: boolean;
  className: string;
  children: React.ReactNode;
}> = ({ node, inline, className, children, ...props }) => {
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

const Paragraph: React.FC<{
  node: HTMLElement;
  children: React.ReactNode;
}> = ({ node, children, ...props }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xl"));
  const [modal, setModal] = useState(false);

  if (node.children[0].tagName === "img") {
    const image = node.children[0] as unknown as HTMLImageElement;
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

export const p = Paragraph;
export const a = Link;
export const h1 = Heading;
export const h2 = Heading;
export const h3 = Heading;
export const h4 = Heading;
export const h5 = Heading;
export const h6 = Heading;
export const hr = Divider;
export const code = Code;
