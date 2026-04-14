import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <section style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Hello, I'm <span style={{ color: 'var(--text-primary)' }}>Juhwan</span>
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          공학 3계열 신입생. 배움을 기록하고 성장하는 소프트웨어 엔지니어입니다.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/about" className="btn">About Me</Link>
          <Link href="/blog" className="btn btn-outline">Read Blog</Link>
        </div>
      </section>
      
      <section>
        <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          Recent Insights
        </h2>
        <div style={{ padding: '2rem', textAlign: 'center', border: '1px dashed var(--border-color)', borderRadius: '8px' }}>
          <p>Posts will appear here once you write them in the markdown folder.</p>
          <Link href="/blog" style={{ textDecoration: 'underline', marginTop: '1rem', display: 'inline-block' }}>Visit Blog</Link>
        </div>
      </section>
    </div>
  );
}
