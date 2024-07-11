import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

function PokeCard({ pokemon }) {
  const [pokeDetails, setPokeDetails] = useState(null);
  useEffect(() => {
    try {
      axios
        .get(pokemon.url)
        .then((resp) => {
          setPokeDetails(resp.data);
        })
        .catch((e) => {
          console.log("erro", e.message);
        });
    } catch (e) {
      console.log(e.message);
    }
  }, [pokemon]);
  return pokeDetails ? (
    <Card sx={{ backgroundColor: `${deepPurple[50]}` }}>
      <CardMedia
        component="img"
        height="200"
        image={pokeDetails.sprites.other["dream_world"].front_default}
        alt="project2"
        sx={{ objectFit: "contain", backgroundColor: `${deepPurple[100]}` }}
      />
      <CardContent
        sx={{ color: "white", backgroundColor: `${deepPurple[200]}` }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: { xs: 13, md: 20 } }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {pokemon.name.toUpperCase()}
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: { xs: 11, md: 13 } }}
          color="smokewhite"
        >
          TYPE:{" "}
          {pokeDetails.types.map((type, i) => {
            return i === pokeDetails.types.length - 1 &&
              pokeDetails.types.length !== 1
              ? `, ${type.type.name.toUpperCase()} `
              : ` ${type.type.name.toUpperCase()}`;
          })}
        </Typography>
      </CardContent>
      <CardActions
        fontSize="small"
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          backgroundColor: `${deepPurple[300]}`,
        }}
      >
        <Button
          sx={{
            fontSize: { xs: 9, md: 12 },
            color: "white",
            backgroundColor: `${deepPurple[200]}`,
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`details/${pokemon.name}/${pokeDetails.id}`}
          >
            View Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  ) : (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {pokemon.name.toUpperCase()}
        </Typography>
        <Typography fontSize="small" color="text.secondary">
          Loading Please Wait...
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokeCard;
