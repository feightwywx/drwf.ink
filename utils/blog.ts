import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllPostIds() {
  const fileNames = fs.readdirSync('blog');

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostData(slug) {
  const fullPath = path.join('blog', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id: slug,
    slug,
    content: matterResult.content,
    ...matterResult.data,
  };
}
