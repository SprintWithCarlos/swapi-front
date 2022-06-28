import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SwapiContext } from "../state/context";
import ResidentsList from "./ResidentsList";


const DetailView = ({ resource }) => {
  const { id } = useParams();
  const { dispatch, ...state } = useContext(SwapiContext);

  const single = state[resource].find((single) => single.id === Number(id));
  const created = new Date(single.created).toLocaleDateString();
  const edited = new Date(single.edited).toLocaleDateString();
  return (
    <>
      <h1>{single.name}</h1>
      <table>
        <thead>
          <tr>
            <td>Key</td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>climate</td>
            <td>{single.climate}</td>
          </tr>
          <tr>
            <td>created</td>
            <td>{created}</td>
          </tr>
          <tr>
            <td>diameter</td>
            <td>{single.diameter}</td>
          </tr>

          <tr>
            <td>edited</td>
            <td>{edited}</td>
          </tr>
          <tr>
            <td>gravity</td>
            <td>{single.gravity}</td>
          </tr>
          <tr>
            <td>orbital_period</td>
            <td>{single.orbital_period}</td>
          </tr>
          <tr>
            <td>population</td>
            <td>{single.population}</td>
          </tr>

          <tr>
            <td>rotation_period</td>
            <td>{single.rotation_period}</td>
          </tr>
          <tr>
            <td>surface_water</td>
            <td>{single.surface_water}</td>
          </tr>
          <tr>
            <td>terrain</td>
            <td>{single.terrain}</td>
          </tr>
          <tr>
            <td>url</td>
            <td>
              <a href={single.url}>{single.url}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <h2>Residents</h2>
        <ResidentsList residents={single.residents} people={state.people}/>
    </>
  );
};

export default DetailView;
