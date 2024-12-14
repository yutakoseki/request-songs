import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>ブログ投稿アプリ</h1>
      <Link href='/login/'><input type="button" value="会員ログイン" /></Link>
    </main>
  );
}