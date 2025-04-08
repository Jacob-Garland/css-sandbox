import { useFontStore } from "../../state/useFontStore";
import { LuHouse, LuMenu, LuPhone } from 'react-icons/lu';

export const TailwindCoffee = () => {
    const { selectedFont } = useFontStore();

    return (
      <div className="font-sans text-gray-800" style={{ fontFamily: selectedFont.family }}>
        {/* Nav Header */}
        <header className="flex flex-row bg-black text-white px-6 py-4">
          <div className=" flex-row justify-between items-center">
            <h2 className="font-bold">Brewed Awakening</h2>
            <nav className="flex-auto gap-4">
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-yellow-400 hover:text-black rounded">
                <LuHouse /> Home
              </button>
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-yellow-400 hover:text-black rounded">
                <LuMenu /> Menu
              </button>
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-yellow-400 hover:text-black rounded">
                <LuPhone /> Contact
              </button>
            </nav>
            <div className="flex">
              <button className="border text-white px-3 py-2 rounded">Log In</button>
              <button className="border text-white px-3 py-2 rounded">Sign Up</button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-black bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center mb-6">
            <div>
            <h1 className="text-5xl font-bold">Brewed Awakening</h1>
            <p className="mt-4 text-xl">Your daily dose of craft coffee</p>
            <button className="mt-6 mb-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold rounded">
              Explore Menu
            </button>
          </div>
        </section>
  
        <section className="py-16 px-4 max-w-5xl mx-auto mb-6">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">About Us</h2>
          <p className="text-center text-black">
            Brewed Awakening is your cozy corner coffee hub. We specialize in organic beans,
            ethically sourced, roasted locally, and brewed fresh with love and precision.
            Our baristas are passionate about coffee and are here to craft the perfect cup for you.
            Whether you prefer a classic espresso or a trendy cold brew, we have something for everyone.
            Our inviting atmosphere is perfect for catching up with friends, studying, or simply enjoying a moment of peace.
            We believe in quality over quantity, and our commitment to sustainability means that every cup you enjoy is made with care for the planet.
            <br />
            <br />
            Join us for a cup and experience the difference of quality coffee made with care. Browse our menu to find your new favorite drink, 
            or ask our baristas for recommendations based on your taste preferences at your nearest Brewed Awakening!
          </p>
        </section>
  
        <section className="bg-white py-16 px-4 mb-6 shadow-lg">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Featured Menu</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Caramel Macchiato", desc: "Rich espresso layered with velvety milk and caramel." },
                { title: "Iced Vanilla Latte", desc: "Cool down with our chilled take on a favorite classic." },
                { title: "Hazelnut Cold Brew", desc: "Slow-brewed and infused with subtle nutty flavor." }
              ].map((item, i) => (
                <div key={i} className="bg-white shadow rounded p-4 mb-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        <section className="py-16 px-4 mb-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Customer Love</h2>
            <blockquote className="italic text-lg text-black">
              "This place is my second home. Great vibes, even better coffee."
            </blockquote>
            <p className="mt-2 font-semibold text-black">– Jessie M.</p>
          </div>
        </section>
  
        <footer className="bg-black text-white text-center p-6">
          © {new Date().getFullYear()} Brewed Awakening. All rights reserved.
        </footer>
      </div>
    );
  };
  