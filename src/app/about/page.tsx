export const metadata = {
  title: 'About | Kwon Ju-hwan',
};

export default function About() {
  return (
    <div className="about-container animate-fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me</h1>
      
      <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>권주환 (Kwon Ju-hwan)</h2>
        <p>공학 3계열 신입생</p>
        <p style={{ marginTop: '1rem' }}>
          소프트웨어 엔지니어링에 깊은 관심을 가지고 있으며, 기초부터 탄탄히 학습하여 가치 있는 서비스를 만들어내는 개발자가 되고자 합니다. 
          이 블로그는 저의 학습 기록과 성장 스토리를 남기기 위해 프리미엄 블랙&화이트 테마로 직접 구축하였습니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <section className="glass" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Tech Skills</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '0.5rem' }}>JavaScript / TypeScript</li>
            <li style={{ marginBottom: '0.5rem' }}>React / Next.js</li>
            <li style={{ marginBottom: '0.5rem' }}>HTML & Vanilla CSS</li>
            <li style={{ marginBottom: '0.5rem' }}>C / C++ (기초 다지기)</li>
          </ul>
        </section>
        
        <section className="glass" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact & Links</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
            <p>
              <strong style={{ color: 'var(--text-primary)' }}>Email:</strong><br/>
              <a href="mailto:juhwan.kwon@example.com" style={{ textDecoration: 'underline' }}>juhwan.kwon@example.com</a>
            </p>
            <p>
              <strong style={{ color: 'var(--text-primary)' }}>GitHub:</strong><br/>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>github.com/juhwan-kwon</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
