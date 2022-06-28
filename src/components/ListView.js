import React from "react";
import { Link } from "react-router-dom";

const ListView = (props) => {
  const List = () => {
    return props.data.map((item) => {
      return (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <Link to={`/planets/${item.id}`}>View Details</Link>
        </div>
      );
    });
  };

  return <div>{List()}</div>;
};
export default ListView;
