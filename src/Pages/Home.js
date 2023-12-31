import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import { StarRating } from '../components/StarRating';

import vektor from '../assets/img/vector.png';
import girl from "../assets/img/girl.png";
import marks from "../assets/img/marks.png";
import antene from "../assets/img/antene.png";
import plane from "../assets/img/plane.png";
import microfon from "../assets/img/microfon.png";
import setthings from "../assets/img/sethings.png";
import wire from "../assets/img/wire.png";
import santorini from "../assets/img/santorini.png";
import selection1 from "../assets/img/selection1.png";
import water1 from "../assets/img/water1.png";
import taxi1 from "../assets/img/taxi1.png";
import marksdown from "../assets/img/marksdown.png";
import face from "../assets/img/face.png";
import user1 from "../assets/img/user-1.png";
import user2 from "../assets/img/user-2.png";
import image01 from "../assets/img/image01.png";
import image02 from "../assets/img/image02.png";
import image03 from "../assets/img/image03.png";
import image04 from "../assets/img/image04.png";
import image05 from "../assets/img/image05.png";
import rings1 from "../assets/img/rings.png";
import rings2 from "../assets/img/rings2.png";
import sendArrow from "../assets/img/sendArrow.png";







const Home = ({ destinations, setDestinations }) => {

  let topDestinations = destinations.slice(0, 4);
  return (
    <>
      <section className="section-hero container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 text-center text-md-start">
            <p className="lead fw-bold">Best Destinations around the world</p>
            <h1 className="position-relative">
              Travel, enjoy and live a new and full life
              <img className="img-fluid position-absolute" src={vektor} alt="" />
            </h1>
            <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <div className="hero-links mb-4 mb-md-0">
              <Link to="/destinations" className="btn btn-warning text-capitalize text-white"
              >find out more</Link>
              <Link target='_blank' to="https://www.youtube.com/watch?v=9GvTYd5hG_g" className="btn btn-warning text-capitalize ms-md-5" > play demo</Link>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <img className="img-fluid" src={girl} alt="" />
          </div>
        </div>
      </section >

      <section className="services position-relative">
        <img className="d-none d-lg-block img-fluid position-absolute end-0" src={marks} alt="" />
        <div className="service-title text-center">
          <h4 className="text-uppercase">category</h4>
          <h2 className="text-capitalize">we offer best services</h2>
        </div>
        <div className="row container justify-content-md-around  align-items-end m-auto p-0 flex-md-wrap flex-lg-nowrap gap-md-1">
          <div className="service-item col-md-5 col-lg-2 text-center p-2 h-100 mb-5">
            <article>
              <img className="mb-4" src={antene} alt="" />
              <div className="service-text">
                <h4>Calculated Weather</h4>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
              </div>
            </article>
            <div className="deco position-absolute"></div>
          </div>
          <div className="service-item col-md-5 col-lg-2 text-center p-2 position-relative h-100 mb-5">
            <article>
              <img src={plane} alt="" />
              <div className="service-text">
                <h4>Calculated Weather</h4>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
              </div>
            </article>
            <div className="deco position-absolute"></div>
          </div>
          <div className="service-item col-md-5 col-lg-2 text-center p-2 mb-5">
            <article>
              <img className="mb-4" src={microfon} alt="" />
              <div className="service-text">
                <h4>Calculated Weather</h4>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
              </div>
            </article>
            <div className="deco position-absolute"></div>
          </div>
          <div className="service-item col-md-5 col-lg-2 text-center p-2 mb-5">
            <article>
              <img className="mb-4" src={setthings} alt="" />
              <div className="service-text">
                <h4>Calculated Weather</h4>
                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
              </div>
            </article>
            <div className="deco position-absolute"></div>
          </div>
        </div>
      </section>


      <section className="section-destination py-5">
        <div className="destination-title text-center mb-5">
          <h4 className="text-uppercase">Top selling</h4>
          <h2 className="text-capitalize">top destinations</h2>
        </div>
        <div className="container m-auto">
          <div className="row py-0 py-md-5 position-relative justify-content-md-around justify-content-lg-between">
            <img className="img-fluid position-absolute wire end-0 d-none d-lg-block" src={wire} alt="" />

            {
              topDestinations.map((dest, idx) => {
                return (
                  <div key={dest.id} className="dest-items col-md-5 col-lg-3 mb-5">
                    <Link to="destinations">
                      <article className="border rounded-4">
                        <div className="dest-img mb-3">
                          <img className="img-fluid rounded-top-3 w-100" src={dest.img} alt="" />
                        </div>
                        <div className="dest-desc px-2">
                          <div className="dest-title d-flex align-items-start justify-content-between">
                            <h4 className="mb-3">{dest.name}</h4>
                            <div>
                              <StarRating rating={dest.rating} />
                            </div>
                          </div>
                          <div className="dest-details d-flex flex-row flex-lg-column flex-xl-row mb-2">
                            <p className="me-auto">{dest.date}</p>
                            <p>From ${dest.price}</p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                )
              }
              )
            }
          </div>
        </div>
      </section>



      <section className="book-trip">
        <div className="container">
          <div className="row d-flex justify-content-lg-between align-items-center">
            <div className="col-lg-6">
              <article>
                <div className="trip-title mb-5 text-center text-md-start">
                  <p>Easy and fast</p>
                  <h2>Book your next trip in 3 easy steps</h2>
                </div>
                <div className="trip-items">
                  <div className="trip-item d-flex flex-column flex-sm-row text-center text-sm-start align-items-start">
                    <img className="cube m-auto mb-3 m-sm-start m-sm-3" src={selection1} alt="" />
                    <div>
                      <h5>Choose Destination</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                  </div>
                  <div className="trip-item d-flex flex-column flex-sm-row text-center text-sm-start align-items-start">
                    <img className="water m-auto mb-3 m-sm-start m-sm-3" src={water1} alt="" />
                    <div>
                      <h5>Make Payment</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                  </div>
                  <div className="trip-item d-flex flex-column flex-sm-row text-center text-sm-start align-items-start">
                    <img className="taxi m-auto mb-3 m-sm-start m-sm-3" src={taxi1} alt="" />
                    <div>
                      <h5>Reach Airport on Selected Date</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="slika col-lg-6" style={{ backgroundImage: `url(${santorini})` }}></div>
          </div>
        </div>
      </section>


      <section className="testimonails">
        <div className="container position-relative">
          <div className="row justify-content-between">
            <div className="test-heading col-md-12 col-lg-6 position-relative">
              <div className="title text-center text-lg-start">
                <h4 className="text-uppercase text-uppercase">Testimonials</h4>
                <h2 className="text-capitalize">what our clients say about us</h2>
              </div>
              <img className="nesto position-absolute start-0 fa-rotate-180 d-none d-lg-block" src="./img/marks.png" alt="" />
              <img className="position-absolute d-none d-lg-block" src={marksdown} alt="" />
            </div>
            <div className="col-md-12 col-lg-6">
              <Swiper
                direction='vertical'
                spaceBetween={30}
                loop={true}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                modules={[Pagination]}

                className="swiper">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonials-title d-flex flex-column flex-sm-row justify-content-around mb-3 mb-lg-0">
                      <img src={face} alt="" />
                      <p className="flex-grow-0">
                        “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                      </p>
                    </div>
                    <div className="user text-center">
                      <h5>Mike taylor</h5>
                      <p>Lahore, Pakistan</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonials-title d-flex flex-column flex-sm-row justify-content-around mb-3">
                      <img src={user1} alt="" />
                      <p className="flex-grow-0">
                        “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                      </p>
                    </div>
                    <div className="user text-center">
                      <h5>Mike taylor</h5>
                      <p>Lahore, Pakistan</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonials-title d-flex flex-column flex-sm-row justify-content-around mb-3">
                      <img src={user2} alt="" />
                      <p className="flex-grow-0">
                        “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                      </p>
                    </div>
                    <div className="user text-center">
                      <h5>Mike taylor</h5>
                      <p>Lahore, Pakistan</p>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination position-absolute start-0"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>



      <section className="sponsors">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-md-4 col-lg-2">
              <img className="img-fluid" src={image01} alt="" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img className="img-fluid" src={image02} alt="" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img className="img-fluid" src={image03} alt="" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img className="img-fluid" src={image04} alt="" />
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <img className="img-fluid" src={image05} alt="" />
            </div>
          </div>
        </div>
      </section>


      <section className="subscribe position-relative">
        <div className="container position-relative">
          <div className="row justify-content-between flex-column align-items-center position-relative">
            <img className="d-none d-md-block rings1 position-absolute" src={rings1} alt="" />
            <img className="d-none d-md-block rings2 position-absolute" src={rings2} alt="" />
            <div className="col-md-6">
              <div className="subscribe-title text-center mb-5">
                <h4 className="text-uppercase">Subscribe to get information, latest news and other interesting offers about Cobham</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="subscribe-form text-center">
                <form action="">
                  <input className="border border-0 rounded-2 py-2 px-4 mb-3 mb-sm-0" type="email" placeholder="Enter your email" />
                  <button className="btn btn-warning text-capitalize">subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="arrow d-inline-block border rounded-5 p-2 position-absolute top-0 end-0">
            <img src={sendArrow} alt="" />
          </div>
        </div>
        <img className="d-none d-lg-block marks position-absolute fa-rotate-90" src={marks} alt="" />
      </section>
    </>
  )
}

export default Home