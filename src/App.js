import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Axios from "axios";
import axios from "axios";


function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  const [impiegatiList, setImpiegatiList] = useState([]);

  const aggiungiImpiegato = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      gender: gender,
      surname: surname,
    }).then(() => {
      setImpiegatiList([
        ...impiegatiList,
        {
          name: name,
          age: age,
          country: country,
          gender: gender,
          surname: surname,
        },
      ]);
    });
  };


  const eliminaImpiegato = (id) => {
  
    console.log(id)
    if(window.confirm('are u sure?')){
      axios.delete(`http://localhost:3001/remove/${id}`);
    }
  }

  const getImpiegati = () => {
    Axios.get("http://localhost:3001/impiegati").then((response) => {
      setImpiegatiList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="row mt-5 justify-content-center">
        <div className="col-6">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            type="text"
          />

          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            onChange={(e) => {
              setAge(e.target.value);
            }}
            className="form-control"
            type="number"
          />

          <label className="form-label" htmlFor="surname">
            Surname
          </label>
          <input
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            className="form-control"
            type="text"
          />

          <label className="form-label" htmlFor="gender">
            Gender
          </label>
          <input
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="form-control"
            type="text"
          />

          <label className="form-label" htmlFor="country">
            Country
          </label>
          <input
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            className="form-control"
            type="text"
          />

          <button onClick={aggiungiImpiegato} className="btn btn-success mt-5">
            Aggiungi
          </button>
        </div>
      </div>
      <hr />

      <div className="container text-center">
        <button onClick={getImpiegati} className="btn btn-danger">
          Mostra impiegato
        </button>
        <div className="row justify-content-center">
          {impiegatiList.map((el, key) => {
            return (
              <div className="col-3 m-3">
                <p>id = {el.id} </p>
                <div key={key} class="card">
                  <img class="card-img-top" src="" alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title fs-1">
                      <p> {el.name} </p>
                    </h5>

                    <p className="fs-2">{el.surname}</p>
                    <p>{el.age}</p>
                    <p>{el.country}</p>
                    <p>{el.gender}</p>
                    <button
                      onClick={() => eliminaImpiegato(el.id)}
                      class="btn btn-primary"
                    >
                      Elimina
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
