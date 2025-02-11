// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <div className="app">
        <header>
          <nav className="navbar navbar-expand-lg px-4">
            <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
              <a className="navbar-brand logo" href="#">
                <strong>FURTHER</strong>
                <span>HOTEL</span>
              </a>

              <div className="menu-icon">
                <a href="#" className="btn-menu js-btn-menu">
                  <span></span>
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main>
          {/* Section 1 */}
          <div className="container-fluid text-center mx-0 p-0 container-content">
            <div className="content">
              <p>
                Both a journey and a destination, Further is a gathering of
                people, desires and spaces scattered along a gentle road to the
                sea. In their evolution, bonds are forged, ideas take flight,
                and the foreign becomes familiar.
              </p>
            </div>
          </div>

          <div className="section block-image">
            <div className="align-center">
              <img src="/img/1.webp" className="img-fluid" alt="" />
            </div>
          </div>

          {/* Section 2 */}
          <section
            className="section-content-and-images"
            data-type="primary"
            data-space="small"
            data-id="section-1"
          >
            <div className="container-fluid d-flex flex-column flex-md-row text-align px-4">
              <div
                className="section__content col-md-5 col-lg-5"
                data-aos="fade-up"
              >
                <div className="content-sticky">
                  <h1>The Hotel, Reimagined</h1>
                  <p>
                    Diverging from the conventional hospitality typology,
                    Further takes the form of a diffused hotel, reimagining a
                    long-lost concept that disperses the elements of a guest
                    experience – rarefied spaces for sleep, rejuvenation, and
                    celebration – throughout a village, respectfully weaving
                    into the fabric of its community.
                  </p>
                  <p>
                    Centred in lively Pererenan, the ascendant darling of Bali
                    that’s brimming with the places to be, Further’s four sites
                    form a singular concept, each pairing intimate guest suites
                    with common spaces attune to vibrant local sights, sounds,
                    and rhythms. In the transitions between experiences,
                    opportunities catalyse for encounters, exchange and
                    togetherness.
                  </p>
                </div>
              </div>

              <div className="section__images col-md-7 col-lg-7 ">
                <div className="section__image w-100" data-aos="fade-up">
                  <img src="/img/2.webp" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="section-accomodation">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-5 text-align px-5">
              <div className="col-6 text-wrapper">
                <img src="/img/3.jpg" className="img-fluid" alt="" />
                <p>ACCOMMODATION</p>
                <p className="futura_medium">Urban King Suite</p>
                <p>
                  Centred around a king-sized bed, our URBAN KING SUITE category
                  ranges from a generous 63-65m2, complete with a semi-enclosed
                  outdoor shower, private patio for ample space to unwind,
                  connect, and dream.
                </p>
                <p>DISCOVER MORE</p>
              </div>
              <div className="col-6 text-wrapper">
                <img src="/img/4.webp" className="img-fluid" alt="" />
                <p>ACCOMMODATION</p>
                <p className="futura_medium">Urban Twin</p>
                <p>
                  A generous yet intimate sanctuary, our URBAN TWIN situates a
                  queen-sized bed in a calm 53 m2 space with superlative
                  proximity to the elements and plentiful room to reconnect –
                  with nature, yourself, and each other.
                </p>
                <p>DISCOVER MORE</p>
              </div>
            </div>
          </section>

          <section className="view-all-accomodation w-100 px-4">
            <p>VIEW ALL SUITES</p>
          </section>

          {/* Section 4 */}
          <section className="section-accomodation">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-4 text-align px-5">
              <div className="col-4 text-wrapper ">
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
              <div className="col-4 text-wrapper ">
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
              <div className="col-4 text-wrapper ">
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

          {/* Section 5 */}
          <section className="section-accomodation">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-5 text-start px-5">
              <div className="col-8 text-wrapper">
                <img src="/img/8.webp" className="img-fluid" alt="" />
                <p>FRIENDS OF FURTHER</p>
                <p className="futura_medium">
                  St. Ali, Oaken Lab, Smile Clothing and Thomas Surfboards
                </p>
                <p>
                  At Further Hotel, we believe in cultivating a community that
                  goes beyond mere accommodation. That’s why we’re thrilled to
                  introduce our “Friends of Further”—a curated group of local
                  and international businesses that align with our ethos and
                  enrich the guest experience. Oaken Lab elevates your daily
                  grooming rituals with artisanal skincare and grooming
                  products. St. Ali brings a Melbourne-style café culture to
                  Further, delivering specialty coffee and mouth-watering
                  dishes. Smile provides organic and sustainable fashion choices
                  that make you feel as good as you look. And Thomas Surfboards
                  doesn’t just offer boards; they offer a lifestyle, encouraging
                  everyone to catch waves and good vibes. Together, these
                  tenants create a holistic and enriching experience that speaks
                  to the essence of what Further Hotel is all about.
                </p>
              </div>
              <div className="col-4 text-wrapper">
                <img src="/img/9.webp" className="img-fluid" alt="" />
                <p>AMENETIES</p>
                <p className="futura_medium">Object</p>
                <p>
                  A purposeful lifestyle collection, perceived by the senses.
                  Object, our curated partner, elevates your stay with luxurious
                  toiletries and inviting room fragrances. They’re a
                  purpose-driven lifestyle brand that’s handpicked all the
                  in-room furniture and art, as well as crafted our artisanal
                  signature FURTHER fragrance. Each element they bring adds
                  meaningful depth to your experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="section-accomodation">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-5 text-start px-5">
              <div className="col-4 text-wrapper">
                <img src="/img/10.webp" className="img-fluid" alt="" />
                <p></p>
                <p>
                  FURTHER HOTEL is located in the serene area of Pererenan, near
                  Canggu, Bali. Nestled among picturesque rice fields and close
                  to the ocean, our location offers a perfect blend of
                  tranquility and accessibility. Guests can enjoy the beautiful
                  sunsets, surf spots, and vibrant local culture, all within a
                  short distance from the hotel. The beach is easily reachable,
                  making it convenient for those looking to explore the natural
                  beauty of Bali. Our proximity to local cafes, the Wrong GYM,
                  and various cultural sites ensures that guests have plenty of
                  options to explore and enjoy during their stay with us
                </p>
              </div>
              <div className="col-8 text-wrapper">
                <img src="/img/11.webp" className="img-fluid" alt="" />
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <div className="container-fluid text-center mx-0 p-0 container-content-location">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-4 text-start px-5">
              <div className="col-4 text-wrapper ">
                <p className="futura_medium">Getting There</p>
                <p>
                  Nestled in the serene surroundings of Pererenan, FURTHER HOTEL
                  is situated just a 45-60 minute drive from Ngurah Rai
                  International Airport (DPS), handling both international and
                  domestic flights.
                </p>
                <p>
                  For those opting for a private car or taxi, the journey
                  through Bali’s picturesque landscapes will lead you directly
                  to our doors, making the commute a pleasurable start to your
                  stay with us. Additionally, our hotel airport pickup service
                  is available for a smooth and comfortable transition, with a
                  travel time of approximately 45 minutes to an hour, depending
                  on traffic conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="container-fluid text-center mx-0 p-0 container-content-location">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-4 text-start px-5">
              <img src="/img/12.webp" alt="" />
            </div>
          </div>

          {/* Section 9 */}
          <section className="section-accomodation">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-5 text-start px-5">
              <div className="col-8 text-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.077609523937!2d115.16765746116664!3d-8.684169841884202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2471787b9b7cb%3A0x32098541bca3038c!2sLa%20Favela%20Bali!5e0!3m2!1sid!2sid!4v1739175632370!5m2!1sid!2sid"
                  width="100%" // Use 100% for responsive design
                  height="450"
                  style={{ border: 0 }} // Correct usage of style in JSX
                  allowFullScreen // Correct usage of allowFullScreen
                  loading="lazy"
                  title="Google Maps Location" // Add a title for accessibility
                ></iframe>
              </div>
              <div className="col-4 text-wrapper">
                <p>
                  Jl. Pantai Pererenan No.84, Pererenan, Kec. Mengwi, Kabupaten
                  Badung,
                </p>
                <p>GET DIRECTION</p>
                <p>
                  Bali Airport (Ngurah Rai) Denpasar – Indonesia 45-60 minutes
                  by car
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section className="section-accomodation mb-5">
            <div className="container-fluid d-flex justify-content-center align-items-start flex-column flex-md-row gap-5 text-start px-5">
              <div className="col-8 text-wrapper">
                <img src="/img/13.webp" className="img-fluid" alt="" />
              </div>
              <div className="col-4 text-wrapper">
                <p>
                  Nestled within the enchanting landscape of Bali, FURTHER HOTEL
                  encapsulates a vision of harmony, tranquility, and connection.
                  Since its inception, the hotel has been more than just a place
                  to stay; it’s a gateway to an immersive cultural experience.
                  Today, the hotel stands as a symbol of the perfect blend
                  between contemporary design and tradi- tional Balinese
                  culture, always evolving, with ongoing proj- ects that
                  continue to enrich the guest experience. The story of FURTHER
                  HOTEL is not just a history; it is an ongoing journey in
                  discovering and celebrating the true essence of Bali.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section className="view-all-link w-100 px-4 gap-2 d-flex align-items-start text-start">
            <p>LOCATION</p><span>|</span>
            <p>YOUTUBE</p><span>|</span>
            <p>INSTAGRAM</p><span>|</span>
            <p>WHATSAPP</p>
          </section>
        </main>

        <div className="subscribe">SUBSCRIBE</div>

        <div className="container-fluid row booking py-3 d-flex justify-content-evenly align-items-center">
          <div className="col-2">
            <label htmlFor="checkin">BOOK YOUR STAY</label>
          </div>
          <div className="col-4">
            <input
              type="text"
              id="checkin"
              className="form-control rounded-0 mx-0"
              placeholder="07-02-2025"
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              id="checkout"
              className="form-control rounded-0 mx-0"
              placeholder="08-02-2025"
            />
          </div>
          <div className="col-2">
            <button className="btn container-fluid btn-dark rounded-0">BOOK NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
