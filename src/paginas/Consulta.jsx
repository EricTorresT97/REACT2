import { useEffect, useState } from "react";
import { getPersons } from "../servicios/api";
import { Link } from "react-router-dom";

const Consulta = () => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    getPersons().then((data) => {
      setUsuario(data.data);
    });
  }, []);

  return (
    <div>
      <h1>CONSULTA</h1>
      <div>
        {usuario.map((persona) => (
          <ul key={persona.id}>
            <li>
              <p>
                {persona.id} {persona.name}
              </p>
            </li>
          </ul>
        ))}
      </div>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Consulta;
