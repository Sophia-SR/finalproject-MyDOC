/* eslint-disable import/order */
import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const UseForm = ({ handleClose }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    user,
    isAuthenticated,
    isLoading,
    logout,
    loginWithRedirect,
  } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <Button
          variant="outlined"
          color="primary"
          style={{ height: "30px", width: "50px" }}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          LogOut
        </Button>
      ) : (
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          LogIn
        </Button>
      )}
    </div>
  );
};

export default UseForm;
