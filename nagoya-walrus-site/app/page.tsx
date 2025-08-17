export default function Home() {
  // ここを変更してください！
  const profile = {
    name: "shinji",
    job: "{あなたの職業・専門分野}",
    bio: "{あなたの自己紹介文}"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {profile.name}
          </h1>
          <p className="text-xl text-gray-600">
            {profile.job}
          </p>
        </header>

        {/* メインコンテンツ */}
        <main className="max-w-2xl mx-auto">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🙋‍♂️ 自己紹介
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {profile.bio}
            </p>
          </section>
        </main>

        {/* フッター */}
        <footer className="text-center mt-12 text-gray-500">
          <p>Built with Next.js & hosted on Walrus Site 🚀</p>
        </footer>
      </div>
    </div>
  );
}