/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Grid, Avatar } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { Link } from "react-router-dom";

import UseForm from "./Login.js";

import { useAuth0 } from "@auth0/auth0-react";

import logo from "./images/Logo.png";



function Layout(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return ( 
  <div style={{width:"100%"}}>
       <Grid
       container
        direction="row"
        justify="space-between"
        alignItems="center"
       >
       <Grid item xs={6}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Logo" style={{ height: '70px', width: '70px' }} />
          </Link>
       </Grid>
       <Grid 
       item xs={6}
       justify="flex-end"
       display="flex"
        >
        <div style={{display:"flex", justifyContent:"flex-end"}}>
          <UseForm /> 
          {isAuthenticated ? <Avatar src={user.picture} alt={user.name} style={{ height: '30px', width: '30px' }} /> : 
            <PersonOutlineIcon />
          }
          
          <Link to="/doulas">
          <SearchIcon />
          </Link>
        </div>
        </Grid>
        </Grid>
      <div>{props.children}</div>
      <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
      <Link to="/about" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="primary">About Us</Button>
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" >Contact</Button>
      </Link>
      </Grid>
      </div>
  </div> 
  );
}
export default Layout; 