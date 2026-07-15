import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tokyo Canvas",
  description:
    "東京の3D都市空間を巨大なキャンバスとして、自由に飛びながら色を塗る静かなマップペイントゲーム。",
};

export default function TokyoCanvasPage() {
  return (
    <main className="tc-page">
      <nav className="site-nav" aria-label="Site navigation">
        <Link href="/">KIARINA / SITES</Link>
        <a href="#about">ABOUT</a>
        <a href="#vroid">VROID HUB</a>
      </nav>

      <section className="tc-hero">
        <div className="city-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">A QUIET 3D MAP PAINTING GAME</p>
          <h1>Tokyo <span>Canvas</span></h1>
          <p className="hero-lead">
            東京の街を、巨大なキャンバスに。空を自由に移動しながら、建物、道路、屋根、地面へ静かに色を重ねていく。
          </p>
        </div>
        <div className="hero-meta" aria-label="Project information">
          <span>UNREAL ENGINE 5.8</span>
          <span>PLATEAU / TOKYO 23 WARDS</span>
          <span>1–4 PLAYERS</span>
          <span>IN DEVELOPMENT</span>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label">01 / CONCEPT</p>
        <div>
          <h2>目的地も、スコアもない。街と色だけが残る。</h2>
          <p>
            Tokyo Canvasは、東京23区の3D都市モデルを舞台にした探索とペイントのゲームです。
            地面から壁、屋根、空へと重力の向きを変え、好きな場所を見つけて描く。ひとりでも、友達と同じ街を共有しても遊べます。
          </p>
        </div>
      </section>

      <section className="feature-section">
        <p className="section-label">02 / PLAY</p>
        <h2 className="section-heading">A city you can move through, turn over, and paint.</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-index">01</span>
            <h3>Fly through Tokyo</h3>
            <p>PLATEAUの3D都市モデルで再現した東京23区を、区ごとに読み込み、空中を自由に探索します。</p>
          </article>
          <article className="feature-card">
            <span className="feature-index">02</span>
            <h3>Paint any surface</h3>
            <p>ペン、面塗り、塗りつぶし、ラインなどを使い、都市の表面へ自分の色を積み重ねます。</p>
          </article>
          <article className="feature-card">
            <span className="feature-index">03</span>
            <h3>Share the canvas</h3>
            <p>2〜4人のオンラインマルチプレイでは、同じ区とキャンバスを共有して一緒に描けます。</p>
          </article>
        </div>
      </section>

      <section className="vroid-section" id="vroid">
        <div>
          <p className="section-label">03 / AVATAR</p>
          <span className="status-pill">PLANNED INTEGRATION</span>
        </div>
        <div className="vroid-copy">
          <h2 className="section-heading">Play as your VRoid Hub avatar.</h2>
          <p>
            VRoid Hubに登録した自分のモデルを選び、シングルとマルチプレイの両方でアバターとして使える機能を開発しています。
            マルチプレイでは、一緒に遊ぶ参加者それぞれのモデルが全員の画面に表示されます。
          </p>
          <div className="principles" aria-label="VRoid integration principles">
            <div className="principle"><span>01</span><span>公式VRoid SDK for Unreal Engineを使用します。</span></div>
            <div className="principle"><span>02</span><span>VRM本体やOAuthトークンを独自サーバーへ保存・再配布しません。</span></div>
            <div className="principle"><span>03</span><span>モデルの利用条件と必要なクレジットをゲーム内で確認できるようにします。</span></div>
            <div className="principle"><span>04</span><span>モデル取得に失敗しても、組み込みアバターでプレイを継続できます。</span></div>
          </div>
        </div>
      </section>

      <section className="status-section">
        <div>
          <p className="section-label">04 / STATUS</p>
          <h2 className="section-heading">Currently in development.</h2>
          <p>Tokyo Canvasは開発中です。リリース時期、価格、配布ストアは未定です。</p>
        </div>
        <div className="status-links">
          <Link className="button-link" href="/tokyo-canvas/privacy/">Privacy</Link>
          <a className="button-link" href="https://github.com/kiarina" rel="noreferrer">Contact ↗</a>
        </div>
      </section>

      <footer className="tc-footer">
        <span>© Kiarina / Tokyo Canvas</span>
        <span>PLATEAU is an open data project by MLIT Japan.</span>
      </footer>
    </main>
  );
}
