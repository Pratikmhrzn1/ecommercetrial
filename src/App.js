import React, { useEffect, useState, createContext } from "react";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    getCountry("https://restcountries.com/v3.1/all");
  }, []);
  const getCountry = async (url) => {
    const response = await axios.get(url);
    setCountryList(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getCountry("https://restcountries.com/v3.1/all");
  }, []);

  const values = { countryList };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
