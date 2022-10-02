import React, {useState} from 'react'
import axios from 'axios';
import Axios from "axios";


function AllEmployee() {


  const [impiegatiList, setImpiegatiList] = useState([]);

   const eliminaImpiegato = (id) => {
     console.log(id);
     if (window.confirm("Are u sure?")) {
       axios.delete(`http://localhost:3001/remove/${id}`);
       getImpiegati();
     }
   };

   const getImpiegati = () => {
     Axios.get("http://localhost:3001/impiegati").then((response) => {
       setImpiegatiList(response.data);
     });
   };

  return (
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
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title fs-1">
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
  );
}

export default AllEmployee