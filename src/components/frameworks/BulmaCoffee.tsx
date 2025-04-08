import 'bulma/css/bulma.min.css';
import { useFontStore } from '../../state/useFontStore';
import { LuHouse, LuMenu, LuPhone, LuStar } from 'react-icons/lu';

export const BulmaCoffee = () => {
  const { selectedFont } = useFontStore();

  return (
    <div className="has-text-weight-normal" style={{ fontFamily: selectedFont.family }}>
      {/* Nav Header */}
      <nav className="navbar is-black px-6 py-3">
        <div className="navbar-brand">
          <h1 className="has-text-white has-text-weight-bold is-size-4">Brewed Awakening</h1>
        </div>
        <div className="navbar-menu ml-6">
          <div className="mx-auto navbar-start px-6">
            <button className="button is-outlined is-warning has-text-warning has-text-weight-semibold mr-3">
              <span className="icon"><LuHouse /></span>
              <span>Home</span>
            </button>
            <button className="button is-outlined is-warning has-text-warning has-text-weight-semibold mr-3">
              <span className="icon"><LuMenu /></span>
              <span>Menu</span>
            </button>
            <button className="button is-outlined is-warning has-text-warning has-text-weight-semibold mr-3">
              <span className="icon"><LuPhone /></span>
              <span>Contact</span>
            </button>
          </div>
          <div className="navbar-end">
            <div className="buttons">
              <button className="button is-outlined has-text-warning border-warning">Log In</button>
              <button className="button has-background-warning has-text-black">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero is-dark is-medium has-background"
        style={{ backgroundImage: "../../../public/coffee-bg.jpg", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title is-1 has-text-weight-bold">Brewed Awakening</h1>
            <h2 className="subtitle is-4 mt-3">Your daily dose of craft coffee</h2>
            <button className="button is-warning is-medium mt-4 has-text-black has-text-weight-semibold">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section has-text-centered">
        <div className="container">
          <h2 className="title is-3 has-text-black">About Us</h2>
          <p className="subtitle is-5 has-text-black">
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
        </div>
      </section>

      {/* Menu Section */}
      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-3 has-text-centered has-text-black mb-6">Featured Menu</h2>
          <div className="columns is-variable is-8">
            {[
              { title: "Caramel Macchiato", desc: "Rich espresso layered with velvety milk and caramel." },
              { title: "Iced Vanilla Latte", desc: "Cool down with our chilled take on a favorite classic." },
              { title: "Hazelnut Cold Brew", desc: "Slow-brewed and infused with subtle nutty flavor." }
            ].map((item, i) => (
              <div key={i} className="column">
                <div className="box has-text-centered">
                  <h3 className="title is-5">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section has-text-centered mt-4">
        <div className="container">
          <h2 className="subtitle is-3 mb-3 has-text-black has-text-weight-semibold">Critic Review</h2>
          <p className="is-italic is-size-5 has-text-black">
            "Great vibes, even better coffee. And an unbeatable price!"
          </p>
          <h3 className="subtitle mt-2 has-text-weight-semibold has-text-black">– The Bean Magazine</h3>
        </div>
      </section>

      <section className="section has-background-white px-4 py-5 mb-6 shadow-lg rounded-4">
        <div className="container" style={{ maxWidth: '80rem' }}>
          <h2 className="subtitle is-2 has-text-left has-text-warning has-text-weight-semibold">What Our Customers Have To Say</h2>
          <div className="columns is-flex is-flex-direction-row is-overflow-x-auto p-4 bg-gray-light shadow-lg rounded-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="card column is-narrow has-background-white has-shadow" style={{ minWidth: '300px' }}>
                <header className="card-header bg-white">
                  <p className="card-header-title has-text-black">John Doe</p>
                </header>
                <div className="card-content">
                  <div className="content has-text-black is-italic">
                    This coffee shop is amazing. The atmosphere is cozy and the coffee is the best in town!
                  </div>
                </div>
                <footer className="card-footer bg-white">
                  <div className="card-footer-item has-text-warning">
                    {[...Array(5)].map((_, i) => <LuStar key={i} />)}
                  </div>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer has-background-dark has-text-white-ter">
        <div className="content has-text-centered">
          <p>&copy; {new Date().getFullYear()} Brewed Awakening. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};