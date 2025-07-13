import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/login";
import Profile from "./components/Profile";
import UserContextprovider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Ritik</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
