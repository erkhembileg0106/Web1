function Resume() {
  return (
    <section id="resume" className="py-24 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-12">Миний амжилтууд</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievement 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              Сургуулийн волейболын тэмцээн
            </h3>
            <p className="text-slate-500 mb-6">
              Сургуулийн волейболын тэмцээнд тоглож, шилдэг тоглогч
              болон амжилттай оролцсон.
            </p>

            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
              Дэлгэрэнгүй
            </button>
          </div>

          {/* Achievement 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              Web хичээлийн төсөл
            </h3>
            <p className="text-slate-500 mb-6">
              Web Programming хичээлийн хүрээнд
              React ашиглан хичээлээ амжилттай хийсэн.
            </p>

            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
              Танилцуулга үзэх
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;