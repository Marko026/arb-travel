import { useState } from "react";
import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import Dashboard from "./Pages/Dashboard";
import Details from "./Pages/Details";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import RouthLayout from "./components/RouthLayout";


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import italy from "./assets/img/italija.jpg";
import england from "./assets/img/engleska.jpg";
import maldives from "./assets/img/maldivi.jpg";
import dubayy from "./assets/img/uae.jpg";
import indonezija from "./assets/img/indonezija.jpg";
import dominicana from "./assets/img/dominikana.jpg";
import spain from "./assets/img/spain.jpg";
import serbia from "./assets/img/serbia.jpg";
const App = () => {

  const [edit, setEdit] = useState({
    editMode: false,
    id: null,
    name: "",
    img: "",
    price: "",
    info: "",
    date: "",
    rating: "",
  })

  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Italy",
      img: italy,
      price: 1000,
      info: "Italy is a southern European country known for its rich history, stunning architecture, delicious cuisine, and beautiful landscapes. It is famous for its iconic cities such as Rome, Venice, and Florence, as well as its world-renowned art and fashion.",
      date: "2023-10-10",
      rating: 4,
    },
    {
      id: 2,
      name: "England",
      img: england,
      price: 1500,
      info: "England is a country located in wester Europe. It is known for its rich history, stunning architecture, and world-class cultural institutions. It is home to iconic landmarks such as Big Ben, Buckingham Palace, and Stonehenge, as well as famous cities such as London, Manchester, and Liverpool.",
      date: "2023-12-12",
      rating: 3,
    },
    {
      id: 3,
      name: "Maldives",
      img: maldives,
      price: 2000,
      info: "The Maldives is a tropical paradise located in the Indian Ocean. It is known for its crystal-clear waters, stunning coral reefs, and pristine white sand beaches. It is a popular destination for honeymooners and those seeking a luxurious island getaway.",
      date: "2023-11-11",
      rating: 5,
    },
    {
      id: 4,
      name: "Dubayy",
      img: dubayy,
      price: 2500,
      info: "Dubai is a city and emirate in the United Arab Emirates known for its luxury shopping, stunning architecture, and vibrant nightlife. It is home to iconic landmarks such as the Burj Khalifa, the world's tallest building, and the Palm Jumeirah, a man-made island in the shape of a palm tree.",
      date: "2023-5-10",
      rating: 5,
    },
    {
      id: 5,
      name: "Indonesian",
      img: indonezija,
      price: 3000,
      info: "Indonesia is a Southeast Asian country made up of thousands of islands, known for its diverse culture, stunning natural beauty, and delicious cuisine. It is home to iconic landmarks such as Borobudur Temple and Komodo Island, as well as famous cities such as Jakarta and Bali.",
      date: "2023-03-07",
      rating: 5,
    },
    {
      id: 6,
      name: "Dominicana",
      img: dominicana,
      price: 3500,
      info: "The Dominican Republic is a Caribbean country known for its beautiful beaches, lush rainforests, and vibrant culture. It is home to iconic landmarks such as the colonial-era capital of Santo Domingo and the Pico Duarte mountain, the highest peak in the Caribbean. It is a popular destination for tourists seeking sun, sand, and adventure.",
      date: "2023-04-04",
      rating: 4,
    },
    {
      id: 7,
      name: "Spain",
      img: spain,
      price: 4000,
      info: "pain is a country in southwestern Europe known for its rich history, diverse culture, and stunning landscapes. It is home to iconic landmarks such as the Sagrada Familia in Barcelona and the Alhambra in Granada, as well as world-renowned beaches and delicious cuisine. It is a popular destination for tourists seeking art, culture, and relaxation.",
      date: "2023-06-06",
      rating: 4,
    },
    {
      id: 8,
      name: "Serbia",
      img: serbia,
      price: 4500,
      info: "Serbia is a country in southeastern Europe known for its rich history, stunning landscapes, and vibrant culture. It is home to iconic landmarks such as Belgrade Fortress and the Drina River House, as well as delicious cuisine and world-renowned wine. It is a popular destination for tourists seeking history, nature, and adventure.",
      date: "2023-07-07",
      rating: 5,
    }



  ])
  console.log(destinations);


  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RouthLayout />}>
      <Route path="/" element={<Home destinations={destinations} setDestinations={setDestinations} />} />
      <Route path="/destinations" element={<Destinations destinations={destinations} setDestinations={setDestinations} />} />
      <Route path="/dashboard" element={<Dashboard destinations={destinations} setDestinations={setDestinations} edit={edit} setEdit={setEdit} />} />
      <Route path="/details/:id" element={<Details destinations={destinations} setDestinations={setDestinations} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  ));


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
