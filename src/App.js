import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Axios from "axios";

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
      console.log("success");
    });
  };

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
      <button onClick={getImpiegati} className="btn btn-danger">
        Mostra impiegato
      </button>
      {impiegatiList.map((el, key) => {
        return (
          <div className="card">
            <p> {el.name} </p>
            <p>{el.surname}</p>
            <p>{el.age}</p>
            <p>{el.country}</p>
            <p>{el.gender}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
