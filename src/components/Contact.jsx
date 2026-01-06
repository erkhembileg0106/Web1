import { Mail, Phone, MessageSquare } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-slate-200 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block p-3 bg-indigo-50 rounded-2xl mb-4 text-indigo-600">
          <MessageSquare size={32} />
        </div>
        <h1 className="text-4xl font-black mb-4 text-slate-900">Эрүүл мэнд</h1>
        <p className="text-slate-500 mb-12">Та өөртөө амралт өгөөрэй.</p>

        <div className="grid gap-4">
          <a href="mailto:Erkhembileg176@gmail.com" className="flex items-center justify-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-300 hover:bg-white transition group">
            <Mail className="text-indigo-600 group-hover:scale-110 transition" />
            <span className="text-lg font-semibold">Erkhembileg176@gmail.com</span>
          </a>
          
          <div className="flex items-center justify-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <Phone className="text-indigo-600" />
            <span className="text-lg font-semibold">Утас: 9561****</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;