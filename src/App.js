import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 0,
    name: "Francesco Robiola",
    caption: "No pain no Gain XOXO PALESTRA MUSCOLI POTENZA",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1612341193/react-api-course/tizio-palestra_naoqwo.jpg"
  },
  {
    id: 1,
    name: "Sabrina Cortelli",
    caption: "La musica è per l'anima quello che la ginnastica è per il corpo.",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1612341197/react-api-course/tizia-cuffie_xf2bae.jpg"
  },
  {
    id: 2,
    name: "Mike Russel",
    caption: "Non promettere a nessuno di dirti che non sei capace",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1612341184/react-api-course/tizio-giacca_jvzktv.jpg"
  },
  {
    id: 3,
    name: "Rebecca Orlando",
    caption: "La fotografia è passione e amore, è l'emozione passeggera, che arriva e subito vola via.",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1612341204/react-api-course/tipa-occhiali_svc9jp.jpg"
  },
  {
    id: 4,
    name: "Christian Minerva",
    caption: "Non mangerei un hamburger nemmeno se mi pagassero 40,000 dollari",
    img: "https://res.cloudinary.com/thomasdea/image/upload/v1612341200/react-api-course/tizio_awlq7r.jpg"
  },

]

function App() {

  const [people, setPeople] = useState(data);

  /**
   * Retakes the data to refill the variable dinamically displayed
   */
  const resetPeople = () => {
    setPeople(data)
  }

  /**
   * Removes all data from the variable
   */
  const deleteAll = () => {
    setPeople(0)
  }

  /**
   * updates the array excluding the given item
   * @param {number} key the id of the item to remove
   */
  const deleteItem = (key) => {
    let newPeople = people.filter(person => person.id !== key)
    setPeople(newPeople)
  }

  return (
    <div className="App">
      <div className="py-3 d-flex justify-content-center">
        <div className="col-12 col-lg-8 col-xl-6 px-3">
          <h1 className="text-center mb-4 fw-bold text-light">
            Prossimi Incontri
          </h1>
          <div className="d-flex flex-column align-items-center">
            <ul className="list-unstyled shadow-lg w-100 mb-4">

              {
                people.length > 0 && people.map((person) => {
                  return (
                    <li key={person.id}>
                      <article className="d-flex items-center gap-3 bg-dark text-white py-3 px-3 w-100">
                        <div className="profile-pic rounded-circle overflow-hidden d-flex align-items-center justify-content-center flex-shrink-0">
                          <img src={person.img} alt={person.name} className="img-fluid" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-grow-1">
                          <div>
                            <h6 className="mb-0">{person.name}</h6>
                            <small className="caption fst-italic">{person.caption}</small>
                          </div>
                          <button type="button" className="btn text-danger d-flex align-items-start justify-content-center" onClick={() => deleteItem(person.id)}>
                            <i className="fa-solid fa-delete-left"></i>
                          </button>
                        </div>
                      </article>
                    </li>
                  )
                })
              }
            </ul>
            <div className="d-flex align-items-center justify-content-between w-100 py-3">
              <button type="button" className="btn btn-info rounded-pill shadow-lg px-4 text-uppercase" onClick={resetPeople}>Reload</button>
              <button type="button" className="btn btn-outline-danger rounded-pill shadow-lg px-4 text-uppercase" onClick={deleteAll}>Delete all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
