function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-black mb-8">Холбоо барих</h1>

        <div className="bg-white p-10 rounded-3xl shadow-lg max-w-xl mx-auto">
          <p className="text-lg mb-4">
            Gmail: <span className="font-semibold">Erkhembileg176@gmail.com</span>
          </p>

          <p className="text-lg mb-8">
            Утас: <span className="font-semibold">9561****</span>
          </p>

          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
            Надтай холбогдох
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;