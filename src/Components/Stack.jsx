import React from "react";

const Stack = (props) => {
  return (
    <>
      <div className=" overflow-hidden p-4 w-32 space-y-4">
        <h3 className="text-lg text-center ">{props.name}</h3>
        <img src={props.img_url} alt={props.alt} className="w-full" />
      </div>
    </>
  );
};

export default Stack;
