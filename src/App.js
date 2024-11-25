import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Catogrey from "./catogrey";
import Products from "./products";

function App() {
  let [catlist, setcatlist] = useState([]);
  let [plist, setplist] = useState([]);
  let [finalcat, setfinalcat] = useState("");
  let getcateogry = () => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => res.data)
      .then((finalres) => {
        setcatlist(finalres);
      });
  };
  let getproduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((prores) => prores.data)
      .then((finalprores) => {
        setplist(finalprores.products);
      });
  };

  useEffect(() => {
    getproduct();
    getcateogry();
  }, 1);
  useEffect(() => {
    if (finalcat !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${finalcat}`)
        .then((prores) => prores.data)
        .then((finalprores) => {
          setplist(finalprores.products);
        });
    }
  }, [finalcat]);

  return (
    <div className="App">
      <header>
        <h1>Dummy products</h1>
      </header>
      <div className="container">
        <div className="catogery">
          <h2>Our catogerys</h2>
          <Catogrey catlist={catlist} setfinalcat={setfinalcat} />
        </div>
        <div className="products">
          {plist.length >= 1 ? (
            <Products plist={plist} />
          ) : (
            <img
              className="loadingimg"
              src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif"
            />
          )}
        </div>
      </div>
      <footer className="footer">
        <p>
          Dummy products is a dummy API for testing and development purposes.
        </p>
        <p>contact-nanduvinay719@gmmail.com</p>
      </footer>
    </div>
  );
}

export default App;
