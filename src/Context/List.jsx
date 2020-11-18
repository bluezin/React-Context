import React, { useContext } from "react";
import AppContext, { CreateContext } from "./AppContext";

const Ui = () => {
  const context = useContext(CreateContext);
  return (
    <div>
      <ul>
        {context.user}
        {context.last.map((s) => (
          <div>
            <p>Su mascota se llama : {s.name}</p>
            <p>Su Id es : {s.id}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

const List = () => {
  return (
    <div>
      <AppContext>
        <Ui />
      </AppContext>
    </div>
  );
};

export default List;
