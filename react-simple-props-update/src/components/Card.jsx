import React from "react";
import Avatar from "./Avatar";
import Custom from "./CustomDetails";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Custom details={props.tel} />
        <Custom details={props.email} />
      </div>
    </div>
  );
}

export default Card;
