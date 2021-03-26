import React from "react";
import "./App.css";
import Header from "./components/Header"
import Home from "./pages/Home.js";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;