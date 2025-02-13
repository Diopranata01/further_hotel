import { useParams } from "react-router-dom";

const DetailRoomPage = () => {
  const { id } = useParams();

  return (
    <>
      <main>
        <div className="section block-image">
          <div className="align-center">
            <img
              src="/img/rooms/urban-king-suite/urban-king-suites.webp"
              className="img-fluid"
              alt=""
            />
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
                <h4 className="yoxall">{id}</h4>
                <p className="yoxall pb-4">Non Plus Ultra</p>

                <div className="text-evenly accomodation-desciption">
                  <p className="futura_medium">
                    Urban King Suite: Your Personal Paradise Awaits
                  </p>

                  <p>
                    Elevate your Bali experience to unparalleled heights of
                    luxury with our Urban King Suite. Crafted to captivate your
                    senses and designed as a private sanctuary, this opulent
                    space ensures that your time with us is nothing less than
                    extraordinary. Imagine stepping into an elegantly furnished
                    53 sqm room, styled with Balinese art and modern decor that
                    evoke a sense of timeless sophistication. Sink into the
                    plush king-size bed adorned with the softest, high-quality
                    linens and a selection of pillows to match your preference.
                  </p>
                </div>

                <div className="text-evenly mt-4 accomodation-desciption">
                  <p className="futura_medium">Amenities at a Glance</p>

                  <p>- Full Air Conditioning</p>
                  <p>- Motorized Roller Blind</p>
                  <p>- Comnplimentary Access to Wrong Gym</p>
                  <p>- Free Bikes</p>
                  <p>- King-size Bed</p>
                  <p>- High-speed Wi-Fi</p>
                  <p>- In-room Safe</p>
                  <p>- Minibar</p>
                  <p>- Coffee and Tea Making Facilities</p>
                  <p>- Walk-in Rain Shower</p>
                </div>

                <div className="text-evenly mt-4 accomodation-desciption">
                  <p className="futura_medium">Indulge in Privacy</p>

                  <p>
                    The Urban King Suite is not just a room; it’s an experience.
                    Choose to indulge in our in-room dining service or relax in
                    privacy with your own personal balcony, providing the
                    ultimate haven for a romantic getaway or a creative retreat.
                  </p>
                </div>

                <div className="text-evenly mt-4 accomodation-desciption">
                  <p>
                    Ready for your royal stay? Book your Urban King Suite now
                    and let us make your Bali dreams come true.
                  </p>
                </div>

                <div className="text-evenly mt-4 accomodation-desciption">
                  <h5>
                    <a href="#">BOOK NOW</a>
                  </h5>
                </div>
              </div>
            </div>

            <div className="section__images d-flex flex-column gap-3 col-md-7 col-lg-7 ">
              <div className="section__image w-100" data-aos="fade-up">
                <img
                  src="/img/rooms/urban-king-suite/urban-king-suites1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="section__image w-100" data-aos="fade-up">
                <img
                  src="/img/rooms/urban-king-suite/urban-king-suites2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="section__image w-100" data-aos="fade-up">
                <img
                  src="/img/rooms/urban-king-suite/urban-king-suites3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 11 */}
        <section className="view-all-link w-100 px-3 px-md-4 gap-2 d-flex align-items-start justify-content-center justify-content-md-start text-start">
          <p>LOCATION</p>
          <span>|</span>
          <p>YOUTUBE</p>
          <span>|</span>
          <p>INSTAGRAM</p>
          <span>|</span>
          <p>WHATSAPP</p>
        </section>
      </main>
    </>
  );
};

export default DetailRoomPage;
