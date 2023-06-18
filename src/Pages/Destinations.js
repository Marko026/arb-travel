import React from 'react'
import { Link } from 'react-router-dom'
import { StarRating } from '../components/StarRating'
import { useState } from 'react'
import { useEffect } from 'react'
import SignIn from '../components/SignIn'
const Destinations = ({ destinations, setDestinations }) => {

  const [searchTerm, setSearchTerm] = useState([])
  const [backtoOldArray, setBacktoOldArray] = useState([])

  let start = "start"


  useEffect(() => {
    const regex = new RegExp(searchTerm, 'gi')
    const filteredArray = destinations.filter((destination) => {
      return destination.name.match(regex)
    })
    setBacktoOldArray(filteredArray)
  }, [searchTerm])



  return (
    <>

      <section className="section-hero destiantion-hero container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6 text-center text-md-start">
            <p className="lead fw-bold">Best Destinations around the world</p>
            <h1 className="position-relative">Travel around the world</h1>
            <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
            <div className="hero-links mb-4 mb-md-0">
              <Link to="/#" className="btn btn-warning text-capitalize text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Sing up now</Link>
            </div>
            <SignIn />
          </div>
          <div className="col-12 col-lg-6">
            <img src="img/destination-hero.png" alt="" />
          </div>
        </div>
      </section>


      <section className="search">
        <div className="destination-title text-center mb-5">
          <h4 className="text-capitalize">Search destinations</h4>
        </div>
        <form className="w-50 m-auto text-center">
          <div className="form-group">
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your destination" />
          </div>
        </form>
      </section>


      <section className="section-destination py-5">
        <div className="container m-auto">
          <div className="row py-0 py-md-5 position-relative justify-content-md-around justify-content-lg-start">
            {
              backtoOldArray.length < 4
                ?
                <img className="img-fluid position-absolute wire end-0 d-none " src="img/wire.png" alt="" />
                :
                <img className="img-fluid position-absolute wire end-0 d-none d-lg-block" src="img/wire.png" alt="" />
            }

            {
              backtoOldArray.map((destination, idx) => {

                return (
                  <div key={destination.id} className="dest-items col-md-5 col-lg-4 col-xl-3  mb-5 ">
                    <Link
                      to={`/details/${destination.id}`}
                    >
                      <article className="border rounded-4">
                        <div className="dest-img mb-3">
                          <img className="img-fluid rounded-top-3 w-100" src={destination.img} alt="" />
                        </div>
                        <div className="dest-desc px-2">
                          <div className="dest-title d-flex align-items-start justify-content-between">
                            <h4 className="mb-3">{destination.name}</h4>
                            <div>
                              <StarRating rating={destination.rating} />
                            </div>
                          </div>
                          <div className="dest-details d-flex flex-row flex-lg-column flex-xl-row mb-2">
                            <p className="me-auto">{destination.date}</p>
                            <p>From ${destination.price}</p>
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
      </section >
    </>
  )
}

export default Destinations