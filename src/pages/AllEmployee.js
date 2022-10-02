import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
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
    Axios.get("http://localhost:3001/impiegati").then((response) => {
      setImpiegatiList(response.data);
    });
  };

useEffect(() =>{
  getImpiegati()
},[]);

  return (
    <div className="container text-center">
      <div className="row justify-content-start mt-3">
        <Link className="col-3" to="/">
          <button className="btn btn-primary">Torna indietro</button>
        </Link>
      </div>
      <div className="row justify-content-between mx-auto">
        {impiegatiList.map((el, key) => {
          return (
            <div key={el.id} className="col-3 m-3">
              <p>id = {el.id} </p>
              <div key={key} className="card">
                <img className="card-img-top" src="" alt="Card image cap" />
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
                      <button className="btn btn-secondary col-8">Modifica</button>
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
