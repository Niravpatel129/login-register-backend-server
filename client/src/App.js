import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a href={"/auth/google"}>Click To Login</a>
      <br />
      <a href={"/api/logout"}>Click To Logout</a>
      <br />
      <a href={"/api/current_user"}>Click To View Profile</a>
    </div>
  );
}

export default App;
