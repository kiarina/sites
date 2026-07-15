import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tokyo Canvas Privacy",
  description: "Tokyo Canvasの開発中プライバシー方針。",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-shell">
      <Link className="text-link" href="/tokyo-canvas/">← Tokyo Canvas</Link>
      <h1>Privacy</h1>
      <p className="privacy-note">
        本ページは開発中の方針です。製品版の配布前に、実際の機能と配布先に合わせて正式版へ更新します。
      </p>

      <h2>このWebサイト</h2>
      <p>現在、この紹介サイトにはアカウント機能、問い合わせフォーム、広告、独自のアクセス解析を設置していません。</p>

      <h2>オンラインプレイ</h2>
      <p>
        Tokyo Canvasは、オンライン接続とプレイヤー識別にEpic Online Servicesを使用する予定です。
        接続に必要な識別子とセッション情報は、オンラインプレイの提供と不正防止のために扱われます。
      </p>

      <h2>VRoid Hub連携</h2>
      <p>
        VRoid Hub連携はユーザーが明示的に選んだ場合のみ利用します。認証とモデル取得には公式VRoid SDKを使用し、
        Tokyo Canvas独自のサーバーへVRM本体、ダウンロードURL、OAuthトークンを保存または再配布しません。
      </p>

      <h2>保存データ</h2>
      <p>
        ゲーム設定、選択した区、キャンバスなどのゲームデータを端末へ保存します。クラウド保存を提供する場合は、
        配布プラットフォームの機能と正式版ポリシーで対象データを明示します。
      </p>

      <h2>問い合わせ</h2>
      <p><a className="text-link" href="https://github.com/kiarina">Kiarina on GitHub</a></p>

      <p className="project-status">LAST UPDATED / 2026-07-15</p>
    </main>
  );
}
