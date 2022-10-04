import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Axios from "axios";

function AllEmployee() {
  const [impiegatiList, setImpiegatiList] = useState([]);

  const eliminaImpiegato = (id) => {
    console.log(id);
    if (window.confirm("Are u sure?")) {
      axios.delete(`http://localhost:3001/remove/${id}`);
    }
  };

  const getImpiegati = () => {
    Axios.get("/utenti").then((response) => {
      console.log(response);
      setImpiegatiList(response.data);
    });
  };

  useEffect(() => {
    getImpiegati();
  }, []);

  return (
    <div className="container text-center">
      <div className="row justify-content-center mt-3">
        <Link className="col-3" to="/">
          <button className="btn btn-primary">Torna indietro</button>
        </Link>
      </div>
      <div className="row justify-content-between mx-auto">
        {impiegatiList.map((el, key) => {
          return (
            <div key={el.id} className="col-4 m-3">
              <div key={key} style={{ width: "300px" }} className="card">
                <img
                  className="card-img-top"
                  style={{ width: "100%", height: '150px', objectFit: 'cover' }}
                  src={`./uploads/${el.image}`}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title fs-1">
                    <p> {el.name} </p>
                  </h5>

                  <p className="fs-2">{el.surname}</p>
                  <p>{el.age}</p>
                  <p>{el.country}</p>
                  <p>{el.gender}</p>
                  <div className="row g-3 align-items-center justify-content-center">
                    <button
                      onClick={() => eliminaImpiegato(el.id)}
                      className="btn btn-primary col-8"
                    >
                      Elimina
                    </button>
                    <Link to={`/update/${el.id}`}>
                      <button className="btn btn-secondary col-8">
                        Modifica
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllEmployee;
