import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const initialState = {
  name: "",
  surname: "",
  gender: "",
  country: "",
  age: "",
};

const UpdateEmployee = () => {
  const [state, setState] = useState(initialState);

  const { name, surname, gender, country, age } = state;

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/${id}`)
      .then((res) => setState({ ...res.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !gender || !country || !age) {
      console.log("error in handleSubmit");
    } else {
      if (!id) {
        axios
          .post("http://localhost:3001/post", {
            name,
            surname,
            gender,
            country,
            age,
          })
          .then(() => {
            setState({
              name: "",
              surname: "",
              age: "",
              country: "",
              gender: "",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .put(`http://localhost:3001/update/${id}`, {
            name,
            surname,
            age,
            gender,
            country,
          })
          .then(() => {
            setState({
              name: "",
              age: "",
              gender: "",
              country: "",
              surname: "",
            });
          })
          .catch((err) => console.log(err, "update successfully"));
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="row mt-5 justify-content-center">
      <h1>update</h1>
      <div className="col-6">
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleInputChange}
            name="name"
            value={name}
            className="form-control"
            type="text"
            id="name"
          />

          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            onChange={handleInputChange}
            age="age"
            value={age}
            className="form-control"
            type="number"
            id="age"
          />

          <label className="form-label" htmlFor="surname">
            Surname
          </label>
          <input
            onChange={handleInputChange}
            surname="surname"
            value={surname}
            className="form-control"
            type="text"
            id="surname"
          />

          <label className="form-label" htmlFor="gender">
            Gender
          </label>
          <input
            onChange={handleInputChange}
            gender="gender"
            value={gender}
            className="form-control"
            type="text"
            id="gender"
          />

          <label className="form-label" htmlFor="country">
            Country
          </label>
          <input
            onChange={handleInputChange}
            id="country"
            value={country}
            className="form-control"
            type="text"
          />
          <input type="submit" value={id ? "Update" : "Save"} />
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
