export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Kwon Ju-hwan. All rights reserved.</p>
        <p>Built with Next.js & Vanilla CSS.</p>
      </div>
    </footer>
  );
}
