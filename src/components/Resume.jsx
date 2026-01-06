import { Trophy, Code } from 'lucide-react';

function Resume() {
  return (
    <section id="resume" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-12">Миний амжилтууд</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Волейбол */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-3xl text-white">
            <Trophy className="mb-4 opacity-50" size={48} />
            <h3 className="text-2xl font-bold mb-3 italic">Сургуулийн волейболын тэмцээн</h3>
            <p className="text-indigo-100 mb-6">Сургуулийн волейболын тэмцээнд тоглож, шилдэг тоглогч болон амжилттай оролцсон.</p>
            <img 
              src="https://images.unsplash.com/photo-1592656670411-2918d7db425a?w=400&q=80" 
              className="absolute -right-10 -bottom-10 w-40 h-40 object-cover rounded-full opacity-40 group-hover:rotate-12 transition" 
              alt="volleyball"
            />
          </div>

          {/* Web Project */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <Code className="text-indigo-600 mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Web хичээлийн төсөл</h3>
            <p className="text-slate-500 mb-6">Web Programming хичээлийн хүрээнд React ашиглан хичээлээ амжилттай хийсэн.</p>
            <button className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition">
              Танилцуулга үзэх
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;