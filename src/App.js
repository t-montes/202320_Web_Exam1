import './App.css';
import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import CoffeeList from "./Coffee/CoffeeList";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const lgdIn = localStorage.getItem("loggedIn");
    if (lgdIn === null) {
      localStorage.setItem("loggedIn", false);
    }

    // redirect to login if not logged in
    if (!lgdIn) {
      if (window.location.pathname !== "/login")
        window.location.href = "/login";
    }
    setLoggedIn(lgdIn);
  }, []);

  const changeLoggedIn = (() => {
    localStorage.setItem("loggedIn", !loggedIn);
    setLoggedIn(!loggedIn);
  });

  const ctx = {
    loggedIn, changeLoggedIn
  };
  return (
    <div className="App">
      <AppContext.Provider value={ctx}>
        <Banner/>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/coffee" element={<CoffeeList/>} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
