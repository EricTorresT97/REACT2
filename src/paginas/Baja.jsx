import { useState } from "react";
import { Link } from "react-router-dom";
import { deletePerson } from "../servicios/api";

const Baja = () => {
  const [id, setId] = useState("");

  return (
    <div>
      <h1>DAR DE BAJA</h1>
      <p>
        <input
          type="text"
          placeholder="id usuario"
          onChange={(e) => setId(e.target.value)}
        />

        <button onClick={() => deletePerson(id)}>Eliminar</button>
      </p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Baja;
