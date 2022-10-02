import React from "react";
import { useState } from "react";
import Axios from "axios";
import axios from "axios";
import { Link } from "react-router-dom";

function NewEmployee() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  const [impiegatiList, setImpiegatiList] = useState([]);

  const aggiungiImpiegato = () => {
    Axios.post("http://localhost:3001/create", {
      id: id,
      name: name,
      age: age,
      country: country,
      gender: gender,
      surname: surname,
    }).then(() => {
      setImpiegatiList([
        ...impiegatiList,
        {
          id: id,
          name: name,
          age: age,
          country: country,
          gender: gender,
          surname: surname,
        },
      ]);
    });
  };



 
  return (
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
        <div className="row justify-content-between pt-5">
          <button onClick={aggiungiImpiegato} className="btn btn-success col-3">
            Aggiungi
          </button>
          <Link to='/all' className="col-3">
            <button className="btn btn-danger">
              Tutti gli impiegati
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewEmployee;
