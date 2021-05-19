/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Grid } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { Link } from "react-router-dom";

function Layout(props) {
  return ( 
  <div style={{width:"100%"}}>
       <Grid
       container
        direction="row"
        justify="space-between"
        alignItems="center"
       >
       <Grid item xs={6}>
          <Link to="/home">
          <p>MyDOC</p>
          </Link>
       </Grid>
       <Grid 
       item xs={6}
       justify="flex-end"
       display="flex"
        >
        <div style={{display:"flex", justifyContent:"flex-end"}}>
          <Link to="/doulaprofile">
            <PersonOutlineIcon />
          </Link>
          <Link to="/doulas">
          <SearchIcon />
          </Link>
          <Link to="/signin">
          <ChatOutlinedIcon />
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
      <Link to="/about">
      <Button variant="contained" color="primary">About Us</Button>
      </Link>
      <Link to="/contact">
          <Button variant="contained" color="primary">Contact</Button>
      </Link>
      </Grid>
      </div>
  </div> 
  );
}
export default Layout; 