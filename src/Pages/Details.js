import React from 'react'
import { useParams } from 'react-router-dom'
import { StarRating } from '../components/StarRating'
import SignIn from '../components/SignIn'

const Details = ({ destinations }) => {


  const { id } = useParams()

  const destination = destinations.find(destination => destination.id === parseInt(id))





  return (
    <>
      <section className="container details-destination mt-5 py-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={`/${destination.img}`} className="w-100 rounded-start" alt="..." />
            </div>
            <div className="col-md-6 d-flex flex-column">
              <div className="card-body">
                <h4 className="text-uppercase">Destination description</h4>
                <p className="card-text">{destination.info}</p>
              </div>
              <div className="card-footer">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Destination:{destination.name}</li>
                  <li className="list-group-item">
                    <StarRating rating={destination.rating} />
                  </li>
                  <li className="list-group-item">Date of traveling : {destination.date}</li>
                  <li className="list-group-item">Price : $ {destination.price}</li>
                  <li className="list-group-item"><button className="btn w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Book now</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}

        <SignIn />

      </section>
    </>
  )
}

export default Details