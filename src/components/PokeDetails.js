import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

function PokeDetails() {
  const { pokemonName, id } = useParams();
  const [pokeDetails, setPokeDetails] = useState(null);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((resp) => {
      setPokeDetails(resp.data);
    });
  }, []);
  return pokeDetails ? (
    <Box sx={{ backgroundColor: deepPurple[50], flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              backgroundColor: deepPurple[500],
              color: deepPurple[50],
              fontSize: 40,
              textAlign: "center",
            }}
          >
            {pokemonName.toLocaleUpperCase()}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={pokeDetails.sprites.other["dream_world"].front_default}
            alt="pokemon"
            height="350"
            width="700"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              backgroundColor: deepPurple[500],
              color: deepPurple[50],
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Body Size
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              color: deepPurple[500],
              fontSize: 20,
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            Height: {pokeDetails.height}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              color: deepPurple[500],
              fontSize: 20,
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            Weight: {pokeDetails.weight}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              backgroundColor: deepPurple[500],
              color: deepPurple[50],
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Stats
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              color: deepPurple[500],
              fontSize: 20,
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            HP: {pokeDetails.stats[0].base_stat}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              color: deepPurple[500],
              fontSize: 20,
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            Attack: {pokeDetails.stats[1].base_stat}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              color: deepPurple[500],
              fontSize: 20,
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            Defence: {pokeDetails.stats[2].base_stat}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              color: deepPurple[500],
              fontSize: 20,
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            Special Attack: {pokeDetails.stats[3].base_stat}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              color: deepPurple[500],
              fontSize: 20,
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            Special Defence: {pokeDetails.stats[4].base_stat}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{
              color: deepPurple[500],
              fontSize: 20,
              textAlign: "center",
              paddingBottom: 1,
            }}
          >
            Speed: {pokeDetails.stats[5].base_stat}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              backgroundColor: deepPurple[500],
              color: deepPurple[50],
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Abilities
          </Typography>
        </Grid>
        {pokeDetails.abilities.map((ability) => (
          <Grid item xs={6} md={6}>
            <Typography
              sx={{
                color: deepPurple[500],
                fontSize: 20,
                textAlign: "center",
                paddingBottom: 1,
              }}
            >
              {ability.ability.name.charAt(0).toUpperCase() +
                ability.ability.name.slice(1)}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              backgroundColor: deepPurple[500],
              color: deepPurple[50],
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Type
          </Typography>
        </Grid>
        {pokeDetails.types.map((types) => (
          <Grid item xs={6} md={6}>
            <Typography
              sx={{
                color: deepPurple[500],
                fontSize: 20,
                textAlign: "center",
                paddingBottom: 1,
              }}
            >
              {types.type.name.charAt(0).toUpperCase() +
                types.type.name.slice(1)}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Typography
            sx={{
              backgroundColor: deepPurple[500],
              color: deepPurple[50],
              height: 1,
            }}
          >
            <Divider></Divider>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button sx={{mb:2}} variant="outlined">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                borderRadius: 2,
                color: deepPurple[900],
                fontSize: "1rem",
                float: "center",
              }}
              to={"/"}
            >
              Back to home page
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Box>
      <Typography sx={{ fontSize: 50, textAlign: "center" }}>
        Error fetching details. Please Retry
      </Typography>
    </Box>
  );
}

export default PokeDetails;
