import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-6">
      <div className="space-y-6 flex-1">
        <h2 className="text-indigo-600 font-bold tracking-widest uppercase">
          Сайн байна уу?
        </h2>
        <h1 className="text-6xl md:text-8xl font-black leading-tight text-slate-900">
          <span className="text-indigo-600">MVP Эрхээгийн</span> танилцуулга
        </h1>
        <p className="max-w-xl text-xl text-slate-500 font-medium italic border-l-4 border-indigo-600 pl-4">
          "Хошигнох чадвар тэнэг толгойд бус сийрэг толгойд байдаг."
        </p>
        <button className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200">
          Төслүүд үзэх <ArrowRight className="group-hover:translate-x-1 transition" />
        </button>
      </div>
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
          alt="Profile" 
          className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl grayscale hover:grayscale-0 transition duration-700"
        />
      </div>
    </section>
  );
}

export default Home;