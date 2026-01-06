function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center">
      <div className="space-y-4">
        <h2 className="text-indigo-600 font-bold tracking-widest uppercase">
          Сайн байна уу?
        </h2>

        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          <span className="text-indigo-600">
            MVP Эрхээгийн танилцуулганд тавтай морил
          </span>
        </h1>

        <p className="max-w-xl text-lg text-slate-500 font-medium">
          Хошигнох чадвар тэнэг толгойд бус сийрэг толгойд байдаг.
        </p>
      </div>
    </section>
  );
}

export default Home;