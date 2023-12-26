import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/UserContext";

const LoginAndRegister = () => {
  const { logout } = useContext(userContext);
  return (
    <div className="buttons">
      <Link to="/register">
        <Button variant="contained" disableElevation>
          Sign up
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="contained" disableElevation>
          Login
        </Button>
      </Link>
      <Button
        variant="contained"
        disableElevation
        onClick={() => {
          logout();
        }}>
        Logout
      </Button>
    </div>
  );
};

export default LoginAndRegister;
