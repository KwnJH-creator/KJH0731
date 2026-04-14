import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

export type PostData = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export function getSortedPostsData(): Omit<PostData, 'content'>[] {
  // Get file names under /content
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || '1970-01-01',
      excerpt: matterResult.data.excerpt || '',
    };
  });
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(id: string): PostData | null {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content,
    title: matterResult.data.title || 'Untitled',
    date: matterResult.data.date || '1970-01-01',
    excerpt: matterResult.data.excerpt || '',
  };
}
