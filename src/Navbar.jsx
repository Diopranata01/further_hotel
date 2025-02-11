import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg px-4">
          <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
            <a className="navbar-brand logo" href="#">
              <strong>FURTHER</strong>
              <span>HOTEL</span>
            </a>

            <div className="menu-icon">
              <button
                onClick={toggleMenu}
                className={`btn-menu js-btn-menu ${isOpen ? "open" : ""}`}
              >
                <span></span>
              </button>
            </div>
          </div>
        </nav>

        <div className={`side-navbar ${isOpen ? "open" : "close"}`}>
          <div className="row h-100 justify-content-center">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">SUITES</a>
              </li>
              <li>
                <a href="#">PRESS</a>
              </li>
              <li>
                <a href="#">JURNAL</a>
              </li>
              <li>
                <a href="#">PHOTOSHOOT</a>
              </li>
            </ul>
            <div className="row align-items-start text-align big-nav-info">
              <div className="col-md-12 col-lg-8 col-xl-4">
                <p className="futura_medium">The Hotel, Reimagined</p>
                <p>
                  Within the urban-tropical context of Pererenan, on the cusp of
                  Bali’s southwest coast, Further’s four sites form a singular
                  concept, each pairing intimate guest suites with common spaces
                  open to local sights, sounds, and rhythms. In the transitions
                  between experiences, opportunities catalyse for encounters,
                  exchange and togetherness.
                </p>
              </div>
              <div className="col-md-2">
                <p className="futura_medium">INFO</p>
                <p>CONTACT</p>
                <p>RESERVE YOUR STAY</p>
              </div>
              <div className="col-md-2">
                <p className="futura_medium">INFO</p>
                <p>FAQ</p>
                <p>PRIVACY POLICY</p>
              </div>
              <div className="col-md-4">
                <p className="futura_medium">NEWSLETTER </p>
                <input
                  type="text"
                  id="email"
                  name="cin"
                  placeholder="Enter Email"
                  className="form-control rounded-0 mx-0 mt-1"
                  required
                />
                <div className="d-flex flex-row gap-2 ms-0 mt-1 pt-2">
                  <a href="" className="d-flex align-items-center">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="d-flex align-items-center">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
