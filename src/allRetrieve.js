import React, { useState } from "react";
import AllRecipes from "./list";

function AllRetrieve({ apiFacade }) {
  const [recipes, setRecipe] = useState([]);

  const retrieve = evt => {
    evt.preventDefault();
    apiFacade.getRecipes().then(data => setRecipe(data));
  };

  return (
    <div>
      <button onClick={retrieve}> Hent opskrifter </button>
      <AllRecipes recipes={recipes} />
    </div>
  );
}

export default AllRetrieve;
