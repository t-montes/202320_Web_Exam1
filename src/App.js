import './App.css';
import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import CoffeeList from "./Coffee/CoffeeList";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import { IntlProvider } from 'react-intl';

import es from "./locales/es.json";
import en from "./locales/en.json";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const userLanguage = navigator.language || navigator.userLanguage;
  const locale = userLanguage.split('-')[0];
  const messages = locale === 'es' ? es : en;

  useEffect(() => {
    let lgdIn = localStorage.getItem("loggedIn");
    if (lgdIn === null) {
      localStorage.setItem("loggedIn", "false");
      lgdIn = "false";
    }
    lgdIn = lgdIn === "true";

    // redirect to login if not logged in
    if (!lgdIn) {
      if (window.location.pathname !== "/login")
        window.location.href = "/login";
    } else {
      if (window.location.pathname === "/login")
        changeLoggedIn(false);
    }
    setLoggedIn(lgdIn);
  }, []);

  const loadCoffees = (async () => {
    return await fetch("http://localhost:3001/cafes")
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  });

  const getCoffee = (async (id) => {
    return await fetch("http://localhost:3001/cafes/" + id)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  });

  const getLoggedIn = (async (login, password) => {
    return await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({login, password})
    })
      .then(res => {
        return res.status === 200;
      })
      .catch(err => {
        console.log(err);
      });
  });

  const changeLoggedIn = ((v) => {
    localStorage.setItem("loggedIn", v);
    setLoggedIn(v);
  });

  const ctx = {
    loggedIn, changeLoggedIn,
    loadCoffees, getCoffee, getLoggedIn
  };
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages}>
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
      </IntlProvider>
    </div>
  );
}

export default App;
