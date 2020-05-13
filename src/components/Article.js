import React, { useState, useEffect } from "react";
import Form from "./Form";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [categoriaSelect, setCategoriaSelect] = useState(null);
  const [articuloFiltrado, setArticuloFiltrado] = useState(null);

  useEffect(() => {
    const Fetch = async () => {
      const api = await fetch("http://localhost:3001/api/articles");
      const response = await api.json();
      setArticles(response.articles);
    };
    Fetch();
  }, []);

  const onChangeCategory = (e) => {
    const { value } = e.target;

    if (value === "Filtrar por") {
      setCategoriaSelect(null);
    } else {
      setCategoriaSelect(value);
      filterCategory(value);
    }
  };

  const filterCategory = (value) => {
    if (value !== "Todos") {
      const newData = articles.filter((article) => {
        const itemData = article.category.toUpperCase();
        const selectCategory = value.toUpperCase();
        return itemData.indexOf(selectCategory) > -1;
      });
      setArticuloFiltrado(newData);
    } else {
      setArticuloFiltrado(articles);
    }
  };

  return (
    <div className="container">
      <Form onChangeCategory={onChangeCategory} value={categoriaSelect} />

      <div className="row">
        {articuloFiltrado
          ? articuloFiltrado.map((article) => (
              <div key={article._id} className=" center col s12 m4 l3">
                <h5>{article.model}</h5>
                <h6>
                  {article.year} | ${article.price}
                </h6>
                <img
                  className="col s11 m11 l11"
                  alt={"article.model"}
                  src={"http://localhost:3001/api/get-image/" + article.image}
                />
                <a className="waves-effect waves-light btn-small grey darken-4" href="!#">
                  Ver Modelo
                </a>
              </div>
            ))
          : articles.map((article) => (
              <div key={article._id} className=" center col s12 m4 l3">
                <h5>{article.model}</h5>
                <h6>
                  {article.year} | ${article.price}
                </h6>
                <img
                  className="col s11 m11 l11"
                  alt={"article.model"}
                  src={"http://localhost:3001/api/get-image/" + article.image}
                />
                <a className="waves-effect waves-light btn-small grey darken-4" href="!#">
                  Ver Modelo
                </a>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Article;
