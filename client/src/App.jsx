import React from "react";
import axios from "axios";


function App() {
  const handleClick = () => {
    axios
      .get("http://localhost:8000/api/hello")
      .then((res) => console.log("g", res.data))
      .catch((err) => console.error("b", err));
  };
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the main content area.</p>
      <button onClick={handleClick}>Test API</button>
    </div>
  );
}
export default App;
