import React, { useEffect } from 'react'
import { useState } from 'react'

import italy from '../assets/img/italija.jpg'
import england from '../assets/img/engleska.jpg'
import maldives from '../assets/img/maldivi.jpg'
import dubayy from '../assets/img/uae.jpg'
import indonezija from '../assets/img/indonezija.jpg'
import dominicana from '../assets/img/dominikana.jpg'
import spain from '../assets/img/spain.jpg'
import serbia from '../assets/img/serbia.jpg'



const Dashboard = ({ destinations, setDestinations, edit, setEdit }) => {

  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [price, setPrice] = useState("")
  const [info, setInfo] = useState("")
  const [date, setDate] = useState("")
  const [rating, setRating] = useState("")
  const [isHidden, setIsHidden] = useState(true)
  console.log(img);

  const addNewDestiantion = (e) => {
    e.preventDefault()
    if (!name || !img || !price || !info || !date || !rating) {
      alert("Please fill all fields")
      return
    }

    setDestinations([...destinations,
    {
      id: Math.random(),
      name: name,
      img: img,
      price: price,
      info: info,
      date: date,
      rating: rating
    }])

    emptyFormFileds(e)
  }
  useEffect(() => {
    if (edit.editMode) {
      setIsHidden(false)
      setName(edit.name)
      setImg(edit.img)
      setPrice(edit.price)
      setInfo(edit.info)
      setDate(edit.date)
      setRating(edit.rating)
    }
  }, [edit])


  const emptyFormFileds = (e) => {
    e.preventDefault()
    setEdit({
      editMode: false,
      id: null,
      name: "",
      img: "",
      price: "",
      info: "",
      date: "",
      rating: "",
    })
    setName("")
    setImg("")
    setPrice("")
    setInfo("")
    setDate("")
    setRating("")
    setIsHidden(true)
  }

  const editDestinationItem = (e) => {
    e.preventDefault()
    setDestinations(destinations.map((dest) => {
      if (dest.id === edit.id) {
        return { ...dest, name, img, price, info, date, rating }
      }
      return dest
    }))
    emptyFormFileds(e)
    setIsHidden(true)
  }






  return (

    <>
      <section className="bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center mt-5">
        {
          edit.editMode
            ?
            <h1 className="fw-bold display-5 mb-5 text-center ">Edit destination</h1>
            :
            <h1 className="fw-bold display-5 mb-5 text-center ">Dashboard for destination</h1>
        }
        <form className="row justify-content-between gx-3 gy-2 align-items-center container">
          <div className="col-sm-4">
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control form-control-lg" placeholder="Destination" />
          </div>

          <div className="col-sm-4">
            <input onChange={(e) => setInfo(e.target.value)} value={info} type="text" className="form-control form-control-lg" placeholder="Description" />
          </div>

          <div className="col-sm-4">
            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" min="0" className="form-control form-control-lg" placeholder="Price" />
          </div>

          <div className="col-sm-4">
            <input onChange={(e) => setDate(e.target.value)} value={date} type="date" min="0" className="form-control form-control-lg" />
          </div>

          <div className="col-sm-4">
            <select onChange={(e) => setRating(e.target.value)} value={rating} className="form-select form-select-lg" name='rating'>
              <option >Rating...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="col-sm-4">
            <select onChange={(e) => setImg(e.target.value)} value={img} className="form-select form-select-lg">
              <option >Img...</option>
              <option value={italy}>Engleska</option>
              <option value={england}>Italija</option>
              <option value={dominicana}>Dominikana</option>
              <option value={maldives}>Maldivi</option>
              <option value={dubayy}>Uae</option>
              <option value={indonezija}>Indonezija</option>
              <option value={spain}>Spain</option>
              <option value={serbia}>Serbia</option>
            </select>
          </div>

          <div className="col-sm-4 d-flex ">
            <button type="submit" className="btn btn-success btn-lg me-1" onClick={addNewDestiantion} >Add</button>
            <button type="submit" className="btn btn-warning btn-lg me-1" hidden={isHidden} onClick={editDestinationItem} >Edit</button>
            <button type="submit" className="btn btn-danger btn-lg" onClick={emptyFormFileds}>Back</button>
          </div>
        </form>
      </section>

      <section className="container spisak-putovanja py-5">
        <div className="table-responsive">
          {
            destinations.length === 0 && <h1 className="text-center">No destinations</h1>
          }
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Destination</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>
                <th scope="col">Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                destinations.map((destination, index) => {
                  return (
                    <tr key={destination.id}>
                      <th scope="row">{index + 1}</th>
                      <td><img src={destination.img} alt="" width="50" /></td>
                      <td>{destination.name}</td>
                      <td style={{
                        maxWidth: "150px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}>
                        {destination.info}
                      </td>
                      <td>{`$${destination.price}`}</td>
                      <td>{destination.rating}</td>
                      <td>{destination.date}</td>
                      <td><button className="btn btn-warning" onClick={() => setEdit({ editMode: true, id: destination.id, img: destination.img, name: destination.name, price: destination.price, info: destination.info, rating: destination.rating, date: destination.date })}>Edit</button></td>
                      <td><button className="btn btn-danger" onClick={() => setDestinations(destinations.filter(dest => dest.id !== destination.id))} >Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Dashboard