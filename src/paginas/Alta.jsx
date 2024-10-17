import { useState } from "react";
import { Link } from "react-router-dom";
import { savePersonName } from "../servicios/api";

const Alta = () => {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <h1>DAR DE ALTA</h1>
      <p>
        <input
          type="text"
          placeholder="nombre usuario"
          onChange={(e) => setNombre(e.target.value)}
        />

        <button onClick={() => savePersonName({ name: nombre })}>
          Guardar
        </button>
      </p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Alta;
