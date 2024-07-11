import React from "react";
import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import icon2 from "../game.png";
import { useState } from "react";

function Header({ getFiltervalue }) {
  const [value, setValue] = useState("");
  getFiltervalue(value);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: `${deepPurple[800]}` }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <img src={icon2} alt="pokemon" height="50" width="50" />
          <Typography variant="h5" sx={{fontSize:{xs:20, md:23}, pt: 2 }}>
            PokeRealm
          </Typography>
        </Box>
        <TextField
          sx={{
            width: 150,
            margin: 1.5,
            borderRadius: 2,
            backgroundColor: "whitesmoke",
          }}
          id="filled-basic"
          value={value}
          variant="filled"
          placeholder="Search"
          label="Search Pokemon"
          onChange={(e) => setValue(e.target.value)}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
