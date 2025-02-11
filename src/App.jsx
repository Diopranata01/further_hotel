// import { useState } from "react";
import "./App.css";
import BookingEngine from "./BookingEngine";
import Navbar from "./Navbar";

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <div className="app">
        <Navbar />
        <main>
          {/* Section 3 */}
          <section className="section-accomodation">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-5 text-align px-5">
              <div className="col-12 col-md-6 text-wrapper">
                {/* <img src="/img/3.jpg" className="img-fluid" alt="" /> */}
                <h1>Suites</h1>
                {/* <p className="futura_medium">Urban King Suite</p> */}
                <p>
                  We are a Diffused Hotel spread across four separate buildings,
                  each with its own unique character and purpose.
                </p>
                <p>
                  Every building is designed to cater to different aspects of
                  your stay, ensuring a versatile and enriching experience. Our
                  goal is to create a space where you can truly connect with the
                  local community, immerse yourself in the vibrant culture, and
                  experience the daily life of the village.
                </p>
                <p>
                  Each stay at FURTHER HOTEL is designed to be unique and
                  memorable, offering you a genuine taste of Bali’s charm.
                </p>
                <div className="mt-5 link-nav-container">
                  <p className="yoxall">FURTHER STUDIO</p>
                  <p className="yoxall">FURTHER HOTEL</p>
                  <p className="yoxall">FURTHER GALLERY</p>
                </div>
              </div>
              <div className="col-12 col-md-6 text-wrapper">
                <img src="/img/4.webp" className="img-fluid" alt="" />
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="section-accomodation">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-4 text-align px-5">
              <div className="col-12 col-md-4 text-wrapper ">
                <img src="/img/5.webp" className="img-fluid" alt="" />
                <p>ARCHITECTURE</p>
                <p className="futura_medium">Morq + Studio Wenden</p>
                <p>
                  Through its layout and footprint, Further relates to the
                  multi-layered street activities of the village, which evolve
                  and change on a seasonal basis. On the other hand, through
                  their manifestation and architecture, the Further buildings
                  speak to the spiritual fabric of the place, by engaging with
                  the presence, materiality and regular geometry of the small
                  temples that are found in the area. Such a relationship is
                  supported by the character of muted monumentality that the
                  hotel displays, generating a timeless and lasting quality.
                </p>
                <p>DISCOVER MORE</p>
              </div>
              <div className="col-12 col-md-4 text-wrapper ">
                <img src="/img/6.webp" className="img-fluid" alt="" />
                <p>DINING</p>
                <p className="futura_medium">Bar Vera</p>
                <p>
                  Bar Vera is where guests, locals and expats congregate; where
                  the dispersed come back together. Early on, we looked back on
                  the nostalgic elements of service that are synonymous with the
                  hotel restaurant. We started to unlock this idea of taking
                  behaviour from those spaces: their vocabulary, their
                  commonalities, and how they make you feel.
                </p>
                <p>DISCOVER MORE</p>
              </div>
              <div className="col-12 col-md-4 text-wrapper ">
                <img src="/img/7.jpg" className="img-fluid" alt="" />
                <p>ST.ALi</p>
                <p className="futura_medium">A taste of ST. ALi in BALi</p>
                <p>
                  Introducing our all-day meeting place, perfect for breakfast,
                  coffee, lunch, or those in-between moments. Indulge in a menu
                  curated by Daniel Dobra, affectionately known as ‘Dobbers’,
                  featuring all your beloved ST. ALi classics. And don’t forget
                  to stay refreshed with our wide selection of iced beverages,
                  ready to help you beat the heat.
                </p>
                <p>DISCOVER MORE</p>
              </div>
            </div>
          </section>
        </main>
        <div className="subscribe">SUBSCRIBE</div>
        <BookingEngine />
      </div>
    </>
  );
}

export default App;
