import 'bulma/css/bulma.min.css';

export const BulmaCoffee = () => {
  return (
    <div className="has-text-weight-normal">
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
          <h2 className="title is-3">About Us</h2>
          <p className="subtitle is-5">
            Brewed Awakening is your cozy corner coffee hub. We specialize in organic beans,
            ethically sourced, roasted locally, and brewed fresh with love and precision.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-3 has-text-centered mb-6">Featured Menu</h2>
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

      {/* Testimonials */}
      <section className="section has-text-centered">
        <div className="container">
          <h2 className="title is-3 mb-4">Customer Love</h2>
          <p className="is-italic is-size-5">
            "This place is my second home. Great vibes, even better coffee."
          </p>
          <p className="mt-2 has-text-weight-semibold">– Jessie M.</p>
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