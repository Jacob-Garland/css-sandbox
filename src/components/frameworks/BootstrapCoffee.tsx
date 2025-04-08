import 'bootstrap/dist/css/bootstrap.min.css';
import { useFontStore } from '../../state/useFontStore';

export const BootstrapCoffee = () => {
    const { selectedFont } = useFontStore();
    
  return (
    <div className="font-sans" style={{ fontFamily: selectedFont.family }}>
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
      <section className="py-5 px-3 container text-center">
        <h2 className="mb-4 fw-bold">About Us</h2>
        <p className="fs-5">
          Brewed Awakening is your cozy corner coffee hub. We specialize in organic beans,
          ethically sourced, roasted locally, and brewed fresh with love and precision.
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

      {/* Testimonials */}
      <section className="py-5 text-center container">
        <h2 className="fw-bold mb-4">Customer Love</h2>
        <figure className="blockquote">
          <p className="fs-5 fst-italic">
            "This place is my second home. Great vibes, even better coffee."
          </p>
          <figcaption className="blockquote-footer mt-2">
            Jessie M.
          </figcaption>
        </figure>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        &copy; {new Date().getFullYear()} Brewed Awakening. All rights reserved.
      </footer>
    </div>
  );
};