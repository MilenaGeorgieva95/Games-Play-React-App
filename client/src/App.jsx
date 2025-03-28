import { Route, Routes } from "react-router";
import "./App.css";
import UserProvider from "./providers/UserProvider";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Logout from "./components/Authentication/Logout";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";

function App() {
  return (
    <UserProvider>
      <div id="box">
        <main id="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Catalog />} />
            <Route path="/games/:gameId/details" element={<Details />} />
            <Route element={<AuthGuard />}>
              <Route path="/games/create" element={<Create />} />
              <Route path="/games/:gameId/edit" element={<Edit />} />
              <Route path="/auth/logout" element={<Logout />} />
            </Route>
            <Route element={<GuestGuard />}>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
            </Route>
          </Routes>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
