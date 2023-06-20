import React from "react";
import allCountryScores from "./score";

const HighScores = () => {
  const data = allCountryScores;
  data.map((country) =>(
    country.scores.sort((a,b) => (
b.s-a.s
    ))
    ))
  
  return data.map((country, index) => (
    <div key={index}>
      <table>
        <thead>
          <tr>
            <th>High Scores : {country.name}</th>
          </tr>
        </thead>
        {country.scores.map((el, index) => (
          <tbody key={index}>
            <tr>
              <td>{el.n}</td>
              <td>{el.s}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  ));
}


export default HighScores;
