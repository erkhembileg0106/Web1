import React from 'react';

const Portfolio = () => {
  // Хуудас дотор зөөлөн шилжих функц
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Навигацийн хэсэг */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Миний Танилцуулга
          </h1>
          <div className="space-x-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-indigo-600 transition-colors font-medium">Танилцуулга</button>
            <button 
              onClick={() => scrollToSection('hobby')}
              className="hover:text-indigo-600 transition-colors font-medium">Хобби</button>
            <button 
              onClick={() => scrollToSection('school')}
              className="hover:text-indigo-600 transition-colors font-medium">Сургууль</button>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <section id="about" className="min-h-[70vh] flex flex-col justify-center border-b border-slate-200">
          <div className="animate-fade-in">
            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Сайн байна уу?</span>
            <h2 className="text-5xl font-extrabold mt-2 mb-6 text-indigo-600">MVP эрхээгийн танилцуулганд тавтай морил.</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Хошигнох чадвар тэнэг толгойд бус сийрэг толгойд байдаг.
            </p>
          </div>
        </section>
        <section id="hobby" className="min-h-[70vh] flex flex-col justify-center border-b border-slate-200">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-8 h-1 bg-indigo-600 mr-4"></span>Миний Хобби
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h3 className="text-xl font-bold mb-2">Спортоор хичээллэх</h3>
              <p className="text-slate-600">Спортоор хичээллэх нь миний эрүүл мэнддээ анхаарч байгаа, багаар ажиллаж сурч байгаагийн минь илрэл.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h3 className="text-xl font-bold mb-2">Аялах</h3>
              <p className="text-slate-600">Байгалийн сайханыг мэдэрч, найзуудтайгаа цагийг өнгөрөөх нь намайг илүү аз жаргалтай болгож, юмсыг илүү сайхнаар бодоход тусалдаг.</p>
            </div>
          </div>
        </section>
        <section id="school" className="min-h-[70vh] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-8 h-1 bg-indigo-600 mr-4"></span>Боловсрол
          </h2>
          <div className="relative border-l-2 border-indigo-100 pl-8 ml-4">
            <div className="mb-10 relative">
              <div className="absolute -left-[41px] w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
              <time className="text-sm font-semibold text-indigo-500">2025 - Одоо</time>
              <h3 className="text-xl font-bold">Монгол коосэн технологийн коллеж</h3>
              <p className="text-slate-600">IT инженер мэргэжлээр суралцдаг.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] w-4 h-4 bg-indigo-200 rounded-full border-4 border-white"></div>
              <time className="text-sm font-semibold text-slate-400">2015 - 2022</time>
              <h3 className="text-xl font-bold">Ган Зам 20-р сургууль</h3>
              <p className="text-slate-600">Математикийн сонгонд суралцаж байсан.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-8 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© 2025</p>
      </footer>
    </div>
  );
};
export default Portfolio;