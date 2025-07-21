import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/");
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="px-6 py-3 rounded-lg text-white font-bold text-lg transition duration-200 hover:bg-gray-700 bg-gray-800"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
