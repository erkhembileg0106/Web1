import React from 'react';

const Portfolio = () => {
  // Зөөлөн гүйлгэх функц
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hobbies = [
    {
      id: 1,
      title: "Спортоор хичээллэх",
      desc: "Спортоор хичээллэх нь миний эрүүл мэнддээ анхаарч байгаа, багаар ажиллаж сурч байгаагийн минь илрэл.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "FPS тоглоом тоглох",
      desc: "Counter-Strike, Valorant зэрэг тоглоомуудыг чөлөөт цагаараа найуудтайгаа, ялангуяа ангийнхантайгаа тоглох зугаатай.",
      image: "https://images.unsplash.com/photo-1542751371-adc38148e658?q=80&w=800&auto=format&fit=crop",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Шүлэг бичих",
      desc: "Сэтгэл хөдлөл болон бодлоо цаасан дээр буулгах нь цаанаа л нэг жаргалтай.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      title: "Аялах",
      desc: "Байгалийн сайханыг мэдэрч, найзуудтайгаа цагийг өнгөрөөх нь намайг илүү аз жаргалтай болгож, юмсыг илүү сайхнаар бодоход тусалдаг.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
      color: "from-green-400 to-emerald-600"
    }
  ];
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent italic">
            Миний танилцуулга
          </span>
          <div className="hidden md:flex space-x-8">
            {['about', 'hobby', 'school'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize font-semibold text-slate-600 hover:text-indigo-600 transition-all"
              >
                {item === 'about' ? 'Танилцуулга' : item === 'hobby' ? 'Хобби' : 'Сургууль'}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto px-6">
        <section id="about" className="min-h-screen flex flex-col justify-center">
          <div className="space-y-4">
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase">Сайн байна уу?</h2>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-tight">
              <br /> <span className="text-indigo-600">MVP эрхээгийн танилцуулганд тавтай морил.</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-500 font-medium">
              Хошигнох чадвар тэнэг толгойд бус сийрэг толгойд байдаг.
            </p>
          </div>
        </section>
        <section id="hobby" className="py-24 border-t border-slate-200">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4">Миний Хобби</h2>
            <div className="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={hobby.image} 
                    alt={hobby.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${hobby.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{hobby.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{hobby.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="school" className="py-24 border-t border-slate-200">
          <h2 className="text-4xl font-black mb-12">Боловсрол</h2>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Монгол коосэн технологийн коллеж</h3>
                <p className="text-indigo-600 font-semibold">IT инженер мэргэжлээр суралцдаг.</p>
              </div>
              <span className="mt-4 md:mt-0 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold">
                2025 - Одоо
              </span>
            </div>
            <p className="text-slate-500 italic">
              "Хүн гэдэг техник биш"    .Эрхэмбилэг
            </p>
          </div>
        </section>
      </main>
      <footer className="py-12 bg-slate-900 text-white text-center">
        <p className="opacity-60 text-sm italic">Created with Passion © 2025</p>
      </footer>
    </div>
  );
};

export default Portfolio;