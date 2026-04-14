import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { format, parseISO } from 'date-fns';

export const metadata = {
  title: 'Blog | Kwon Ju-hwan',
};

export default function BlogList() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="blog-list-container animate-fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Blog</h1>
      
      {allPostsData.length === 0 ? (
        <p>게시글이 존재하지 않습니다.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <Link href={`/blog/${id}`} key={id}>
              <article className="glass post-card" style={{ padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h2>
                <small style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '1rem' }}>
                  {date ? format(parseISO(date), 'LLLL d, yyyy') : ''}
                </small>
                <p>{excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
