import React from "react";
import useCurrentUser from "swr";

const Animals = () => {
  const { data } = useCurrentUser("https://api.thecatapi.com/v1/categories/1");
  console.log(data);
  return (
    <div>
      <h1>Hello</h1>
      <h1>{data.name}</h1>
    </div>
  );
};

export default Animals;
