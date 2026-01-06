function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-12">Миний төслүүд</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h3>
            <p className="text-slate-500 mb-6">
              React болон Tailwind CSS ашиглан хийсэн хувийн portfolio сайт.
              Өөрийн танилцуулга, чадвар, төслүүдийг харуулсан.
            </p>

            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
              Project үзэх
            </button>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              HTML / CSS Website
            </h3>
            <p className="text-slate-500 mb-6">
              HTML, CSS ашиглан хийсэн анхны веб сайт.
              Layout, өнгөний зохицол сурсан.
            </p>

            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;