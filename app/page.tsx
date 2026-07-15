import Link from "next/link";

export default function Home() {
  return (
    <main className="hub-shell">
      <header className="hub-header">
        <p className="eyebrow">KIARINA / PROJECTS</p>
        <h1>Sites</h1>
        <p className="hub-intro">制作中のゲームやプロジェクトを紹介する小さな入口です。</p>
      </header>

      <section className="project-grid" aria-label="Projects">
        <Link className="project-card" href="/tokyo-canvas/">
          <span className="project-number">01</span>
          <div>
            <p className="project-status">IN DEVELOPMENT</p>
            <h2>Tokyo Canvas</h2>
            <p>東京の3D都市空間を、静かに飛び、色を塗る。</p>
          </div>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </Link>
      </section>

      <footer className="hub-footer">© Kiarina</footer>
    </main>
  );
}
