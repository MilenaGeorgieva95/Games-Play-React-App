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
import { UserContext } from "./components/contexts/UserContext";
import Logout from "./components/Authentication/Logout";

function App() {
  const [authData, setAuthData] = useState("");

  const userLoginHandler = (user) => {
    console.log(user);

    setAuthData(user);
  };
  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler }}>
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
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/logout" element={<Logout />} />
            </Route>
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
