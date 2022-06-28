import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SwapiContext } from "../state/context";


const ResidentDetailView = ({ resource }) => {
  const navigate = useNavigate()
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
            <td>id</td>
            <td>{single.id}</td>
          </tr>
         
          <tr>
            <td>birth year</td>
            <td>{single.birth_year}</td>
          </tr>
          <tr>
            <td>created</td>
            <td>{created}</td>
          </tr>
          <tr>
            <td>gender</td>
            <td>{single.gender}</td>
          </tr>

          <tr>
            <td>edited</td>
            <td>{edited}</td>
          </tr>
          <tr>
            <td>hair color</td>
            <td>{single.hair_color}</td>
          </tr>
          <tr>
            <td>height</td>
            <td>{single.height}</td>
          </tr>
          <tr>
            <td>homeworld</td>
            <td>{single.homeworld}</td>
          </tr>

          <tr>
            <td>skin color</td>
            <td>{single.skin_color}</td>
          </tr>
          <tr>
            <td>url</td>
            <td>
              <a href={single.url}>{single.url}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>go back</button>
    
    </>
  );
};

export default ResidentDetailView;
