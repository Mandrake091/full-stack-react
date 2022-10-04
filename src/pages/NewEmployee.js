import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function NewEmployee() {
  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState("");

  const fileOnChange = (e) => {
    setFile(e.target.files[0]);
  };
  const nameOnChange = (e) => {
    setName(e.target.value);
  };
  const surnameOnChange = (e) => {
    setSurname(e.target.value);
  };
  const ageOnChange = (e) => {
    setAge(e.target.value);
  };
  const genderOnChange = (e) => {
    setGender(e.target.value);
  };
  const countryOnChange = (e) => {
    setCountry(e.target.value);
  };

  const aggiungiImpiegato = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    console.log(formData)
    formData.append("image", file);
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("age", age);
    formData.append("country", country);
    formData.append("gender", gender);

    console.log(age, gender, country, name, surname);
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post("/create", formData, config);
  };

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-6">
        <form>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            onChange={nameOnChange}
            className="form-control"
            type="text"
            value={name}
          />

          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            id="age"
            onChange={ageOnChange}
            className="form-control"
            type="number"
            value={age}
          />

          <label className="form-label" htmlFor="surname">
            Surname
          </label>
          <input
            id="surname"
            onChange={surnameOnChange}
            className="form-control"
            type="text"
            value={surname}
          />

          <label className="form-label" htmlFor="gender">
            Gender
          </label>
          <input
            id="gender"
            onChange={genderOnChange}
            className="form-control"
            type="text"
            value={gender}
          />

          <label className="form-label" htmlFor="country">
            Country
          </label>
          <input
            id="country"
            onChange={countryOnChange}
            className="form-control"
            type="text"
            value={country}
          />

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Inserisci un immagine
            </label>
            <input
              name="image"
              onChange={fileOnChange}
              className="form-control"
              type="file"
            />
          </div>

          <div className="row justify-content-between pt-5">
            <button
              type="submit"
              onClick={aggiungiImpiegato}
              className="btn btn-success col-3"
            >
              Aggiungi
            </button>

            <Link to="/all" className="col-3">
              <button className="btn btn-danger">Tutti gli impiegati</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEmployee;
