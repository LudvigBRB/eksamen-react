import React from "react";

export default function AllRecipes(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Navn</th>
            <th>Beskrivelse</th>
            <th>Forberedelsestid</th>
          </tr>
        </thead>
        <tbody>
          {props.recipes.map(recipe => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.description}</td>
              <td>{recipe.prep_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
