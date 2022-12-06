import { Button, Card, CardContent } from "@dotdirewolf/mui-m3-theme";
import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HeadLine } from "../../components/headline";
import { getBlogPreviewList } from "../../utils/blog";
import * as markdownComponents from "../../components/markdownComponents";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { TagChip } from "../../components/TagChip";
import { BlogPreview } from "../../utils/types";

const BlogCard: React.FC<{ blog: BlogPreview }> = ({ blog }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box>
      <Card
        variant="contained"
        onClick={() => {
          router.push(`/blog/${blog.slug}`);
        }}
        hoverable
        clickable
      >
        <CardContent>
          <Typography style={theme.typography.headlineSmall}>
            {blog.title}
          </Typography>
          <Typography style={theme.typography.labelLarge}>
            {blog.created}
          </Typography>
          {blog.preview ? (
            <Box sx={{ mt: 2 }}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
                components={markdownComponents as {[nodeType: string]: React.ElementType}}
              >
                {blog.preview}
              </ReactMarkdown>
            </Box>
          ) : null}
        </CardContent>
        {blog.tags.length ? (
          <>
            <Divider />
            <Box sx={{p: 2}}>
              <TagChip  tags={blog.tags} />
            </Box>
            
          </>
        ) : null}
      </Card>
    </Box>
  );
};

const BlogIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs }) => {
  return (
    <div>
      <HeadLine title="Blogs" />
      <Container sx={{ mt: { xs: -2, sm: "-5vh", md: -16 } }}>
        <Stack spacing={2}>
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{blogs: BlogPreview[]}> = () => {
  const blogs = getBlogPreviewList();

  return {
    props: {
      blogs,
    },
  };
};

export default BlogIndex;
