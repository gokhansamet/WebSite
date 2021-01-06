import React from "react";
import Avatar from "./Avatar";
import Custom from "./CustomDetails";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* This part a kind of control of id of Card component.
        if you notice we can't use props.key because it is a one of a special React component
        so if you show id of Card component, we have to create another props that includes "id" */}
        {/* <h2>{props.id}</h2> */}
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
