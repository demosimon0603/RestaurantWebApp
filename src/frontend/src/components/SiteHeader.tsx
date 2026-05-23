export function SiteHeader() {
  return (
    <header className="site-header" aria-label="主要導覽">
      <a className="brand" href="#top" aria-label="La Rue 57 首頁">
        <span className="brand-mark">57</span>
        <span>La Rue</span>
      </a>
      <nav className="site-nav">
        <a href="#menu">菜單</a>
        <a href="#story">餐廳</a>
        <a href="#reservation">訂位</a>
      </nav>
    </header>
  );
}
