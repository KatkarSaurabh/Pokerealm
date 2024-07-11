import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import { deepPurple } from "@mui/material/colors";
import Header from "./Header";

function Pokerealm() {
  const [data, setdata] = useState([]);
  const [slicedData, setSliceddata] = useState([]);
  const [filterValue, setfilterValue] = useState("");
  const [count, setCount] = useState(40);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=500`)
      .then((resp) => {
        setdata(resp.data.results);
        setSliceddata(resp.data.results.slice(0,20))
      });
  }, []);
  const getFiltervalue = (data) => {
    setfilterValue(data);
  };

  const loadMorePokemons = () => {
    setCount((prev) => prev + 20);
    setSliceddata(data.slice(0,count))
  };
  
  return (
    <>
      <Header getFiltervalue={getFiltervalue}></Header>
      <Box sx={{ backgroundColor: `${deepPurple[50]}` }}>
        {slicedData ? (
          filterValue !== ''
          ? <Grid container rowSpacing={5} columnSpacing={4} sx={{ padding: 4 }}>
          {
          data.filter((nameObj) =>
              nameObj.name.includes(filterValue.toLowerCase())
            )
            .map((pokemon, i) => {
              return (
                <Grid item xs={6} md={3}>
                  <PokeCard pokemon={pokemon} />
                </Grid>
              );
            })}
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {filterValue === "" ? (
              <Button
                variant="outlined"
                sx={{ color: `${deepPurple[900]}` }}
                onClick={loadMorePokemons}
              >
                Load More
              </Button>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
          : <Grid container rowSpacing={5} columnSpacing={4} sx={{ padding: 4 }}>
          {
          slicedData
            .map((pokemon, i) => {
              return (
                <Grid item xs={6} md={3}>
                  <PokeCard pokemon={pokemon} />
                </Grid>
              );
            })}
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {filterValue === "" ? (
              <Button
                variant="outlined"
                sx={{ color: `${deepPurple[900]}` }}
                onClick={loadMorePokemons}
              >
                Load More
              </Button>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
        ) : (
          <h1>Loading Please Wait...</h1>
        )}
      </Box>
    </>
  );
}

export default Pokerealm;
