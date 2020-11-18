import React, { createContext, useEffect, useState } from "react";

export const CreateContext = createContext({
  user: [],
  api: "",
});

const AppContext = ({ children }) => {
  const [last, setLast] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories/1")
      .then((repsonse) => repsonse.json())
      .then((data) => setLast([data]));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <CreateContext.Provider
        value={{
          user: ["Name: Yadi"],
          last
        }}
      >
        {children}
      </CreateContext.Provider>
    </div>
  );
};

export default AppContext;
