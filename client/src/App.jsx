import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const userLoginHandler = (email) => {
    setEmail(email);
    console.log(email);
  };
  return (
    <div id="box">
      <main id="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Catalog />} />
          <Route path="/games/create" element={<Create />} />
          <Route path="/games/:gameId/details" element={<Details />} />
          <Route path="/games/:gameId/edit" element={<Edit />} />
          <Route path="/auth">
            <Route path="/auth/register" element={<Register />} />
            <Route
              path="/auth/login"
              element={<Login onLogin={userLoginHandler} />}
            />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
