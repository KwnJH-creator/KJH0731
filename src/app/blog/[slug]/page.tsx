import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="post-container animate-fade-in" style={{ maxWidth: '750px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{postData.title}</h1>
        <div style={{ color: 'var(--text-secondary)' }}>
          {postData.date ? format(parseISO(postData.date), 'LLLL d, yyyy') : ''}
        </div>
      </header>
      
      <div className="markdown-content">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>

      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <Link href="/blog" className="btn btn-outline">← Back to Blog</Link>
      </div>
    </article>
  );
}
