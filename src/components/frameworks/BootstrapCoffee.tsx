import 'bootstrap/dist/css/bootstrap.min.css';
import { useFontStore } from '../../state/useFontStore';
import { LuHouse, LuMenu, LuPhone, LuStar } from 'react-icons/lu';

export const BootstrapCoffee = () => {
    const { selectedFont } = useFontStore();
    
  return (
    <div className="font-sans" style={{ fontFamily: selectedFont.family }}>
      {/* Nav Header */}
      <header className="bg-black text-white px-4 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h4 fw-bold">Brewed Awakening</h1>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-warning d-flex align-items-center gap-2 border-0 fw-semibold">
              <LuHouse /> Home
            </button>
            <button className="btn btn-outline-warning d-flex align-items-center gap-2 border-0 fw-semibold">
              <LuMenu /> Menu
            </button>
            <button className="btn btn-outline-warning d-flex align-items-center gap-2 border-0 fw-semibold">
              <LuPhone /> Contact
            </button>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-warning text-white border-0 fw-semibold" type='button'>Log In</button>
            <button className="btn btn-warning text-black fw-semibold">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ height: '400px', backgroundImage: "../../../public/coffee-bg.jpg", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div>
          <h1 className="display-4 fw-bold">Brewed Awakening</h1>
          <p className="lead mt-3">Your daily dose of craft coffee</p>
          <button className="btn btn-warning mt-4 px-4 py-2 fw-semibold text-dark">
            Explore Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 px-3 container text-center text-black">
        <h2 className="mb-4 fw-bold">About Us</h2>
        <p className="fs-5">
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

      {/* Menu Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Featured Menu</h2>
          <div className="row">
            {[
              { title: "Caramel Macchiato", desc: "Rich espresso layered with velvety milk and caramel." },
              { title: "Iced Vanilla Latte", desc: "Cool down with our chilled take on a favorite classic." },
              { title: "Hazelnut Cold Brew", desc: "Slow-brewed and infused with subtle nutty flavor." }
            ].map((item, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-4 mt-5 text-center text-black container">
        <h2 className="fw-bold mb-4">Critic Review</h2>
        <figure className="blockquote">
          <p className="fs-5 fst-italic">
            "Great vibes, even better coffee. And an unbeatable price!"
          </p>
          <figcaption className="blockquote-footer mt-2 text-black has-text-weight-semibold">
            The Bean Magazine
          </figcaption>
        </figure>
      </section>

      <div className="bg-white px-4 py-5 mb-6 shadow-lg rounded-4">
        <div className="container" style={{ maxWidth: '80rem' }}>
          <h2 className="fs-2 mb-4 text-start">What Our Customers Have To Say</h2>
          <div className="d-flex overflow-auto gap-3 p-4 rounded-3 bg-gray shadow-lg">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="card shadow-lg flex-shrink-0" style={{ minWidth: '300px' }}>
                <div className="card-header fw-bold">John Doe</div>
                <div className="card-body text-dark fst-italic">
                  This coffee shop is amazing. The atmosphere is cozy and the coffee is the best in town!
                </div>
                <div className="card-footer text-warning">
                  {[...Array(5)].map((_, i) => <LuStar key={i} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        &copy; {new Date().getFullYear()} Brewed Awakening. All rights reserved.
      </footer>
    </div>
  );
};