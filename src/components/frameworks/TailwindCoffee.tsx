export const TailwindCoffee = () => {
    return (
      <div className="font-sans text-gray-800">
        <section className="bg-[url('../../../public/coffee-bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center">
            <div>
            <h1 className="text-5xl font-bold">Brewed Awakening</h1>
            <p className="mt-4 text-xl">Your daily dose of craft coffee</p>
            <button className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded">
              Explore Menu
            </button>
          </div>
        </section>
  
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-center text-lg leading-relaxed">
            Brewed Awakening is your cozy corner coffee hub. We specialize in organic beans,
            ethically sourced, roasted locally, and brewed fresh with love and precision.
          </p>
        </section>
  
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Menu</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Caramel Macchiato", desc: "Rich espresso layered with velvety milk and caramel." },
                { title: "Iced Vanilla Latte", desc: "Cool down with our chilled take on a favorite classic." },
                { title: "Hazelnut Cold Brew", desc: "Slow-brewed and infused with subtle nutty flavor." }
              ].map((item, i) => (
                <div key={i} className="bg-white shadow rounded p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Customer Love</h2>
            <blockquote className="italic text-lg">
              "This place is my second home. Great vibes, even better coffee."
            </blockquote>
            <p className="mt-2 font-semibold">– Jessie M.</p>
          </div>
        </section>
  
        <footer className="bg-black text-white text-center p-6">
          © {new Date().getFullYear()} Brewed Awakening. All rights reserved.
        </footer>
      </div>
    );
  };
  