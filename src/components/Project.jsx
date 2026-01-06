import { ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "React болон Tailwind CSS ашиглан хийсэн хувийн portfolio сайт.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
    },
    {
      title: "HTML / CSS Website",
      desc: "HTML, CSS ашиглан хийсэн анхны веб сайт. Layout, өнгөний зохицол сурсан.",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-black mb-12">Миний төслүүд</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition duration-300">
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-500 mb-6">{p.desc}</p>
                <button className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800">
                  Project үзэх <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;