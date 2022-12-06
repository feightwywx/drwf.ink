import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import { BlogData, BlogFrontMatter, BlogPreview } from "./types";

export function matterParser(fileContents: string) {
  const matterResult = matter(fileContents);
  const content = matterResult.content;
  const data = matterResult.data as unknown as BlogFrontMatter;

  return { content, data };
}

export function getAllPostIds() {
  const fileNames = fs
    .readdirSync("blog")
    .map((fileName) => fileName.replace(/\.md$/, ""));

  return fileNames;
}

export function getPostData(slug: string): BlogData {
  const fullPath = path.join("blog", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matterParser(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}

export function getBlogPreviewList(): BlogPreview[] {
  const fileNames = fs.readdirSync("blog");

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join("blog", fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matterParser(fileContents);

      const prevSplits = content.split(/<!--[\s]*more[\s]*-->/);

      return {
        slug,
        preview: prevSplits.length > 1 ? prevSplits[0] : null,
        ...data,
      };
    })
    .sort((a, b) => {
      return moment(a.created).unix() < moment(b.created).unix() ? 1 : -1;
    });
}
