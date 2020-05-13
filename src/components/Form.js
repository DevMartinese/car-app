import React from "react";

const Form = ({ onChangeCategory, value }) => {
  return (
    <div>
      <h3 className="col s12 m4 l11">Descubrí todos los modelos</h3>

      <form>
        <div className="row">
          <div className="input-field col s5 m4 l3">
            <select
              name={"categoriaSelect"}
              defaultValue="Filtrar por"
              value={value}
              onChange={onChangeCategory}
            >
              <option>Filtrar por</option>
              <option value="Todos">Todos</option>
              <option value="Autos">Autos</option>
              <option value="Pickups y Comerciales">
                Pickups y Comerciales
              </option>
              <option value="SUVs y Crossovers">SUVs y Crossovers</option>
            </select>
          </div>
          <div className="col s2 m4 l6"></div>
          <div className="input-field col s5 m4 l3">
            <select>
              <option>Ordenar por</option>
              <option value="1">De menor a mayor</option>
              <option value="2">De mayor a menor</option>
              <option value="3">Mas nuevos primero</option>
              <option value="4">Mas viejos primero</option>
            </select>
          </div>
        </div>
      </form>

      <hr />
    </div>
  );
};

export default Form;
