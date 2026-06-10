export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Open Brief Lab home">
        <span className="brand-mark" aria-hidden="true">OBL</span>
        <span>
          <strong>Open Brief Lab</strong>
          <small>Public-source analysis studio</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#generator">Generator</a>
        <a href="#samples">Samples</a>
        <a href="#methodology">Methodology</a>
        <a href="#sources">Sources</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}
