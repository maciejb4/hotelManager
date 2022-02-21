import { Box, Card, Container, Grid, IconButton, Rating } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
import { HotelDetails } from "../HotelDetails/HotelDetails";
import {Hotel} from "../../interfaces/HotelInterface";

export const HotelsList = () => {
  const [hotelsData, sethotelsData] = useState<Hotel[]>([]);
  const [ratingFilter, setratingFilter] = useState<number | null>();
  const [adultsNumber, setadultsNumber] = useState<number>(2);
  const [childrenNumber, setchildrenNumber] = useState<number>(0);
  const adultLabel = "Adults:";
  const childrenLabel = "Children:";

  useEffect(() => {
    fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
      .then((res) => res.json())
      .then((data) => {
        sethotelsData(data);
      });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <Card>
          <Box
            sx={{ p: "8px", display: "flex", justifyContent: "space-between" }}
          >
            <Rating
              name="rating-filter"
              onChange={(event, newValue) => {
                setratingFilter(newValue);
              }}
            />
            <Box>
              {adultLabel}
              <IconButton onClick={() =>{setadultsNumber((prevValue) => prevValue !== 0 ? prevValue - 1 : prevValue)}}>
                <RemoveIcon />
              </IconButton>
              {adultsNumber}
            <IconButton onClick={() =>{setadultsNumber((prevValue) => prevValue + 1)}}>
                <AddIcon />
              </IconButton>
              {childrenLabel}
                <IconButton onClick={() =>{setchildrenNumber((prevValue) => prevValue !== 0 ? prevValue - 1 : prevValue)}}>
                <RemoveIcon />
              </IconButton>
              {childrenNumber}
                <IconButton onClick={() =>{setchildrenNumber((prevValue) => prevValue + 1)}}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {ratingFilter
            ? hotelsData &&
              hotelsData
                .filter((element: Hotel) => parseInt(element.starRating) >= ratingFilter)
                .map((element: Hotel) => (
                  <HotelDetails hotelData={element} key={element.id} {...{adultsNumber,childrenNumber}} />
                ))
            : hotelsData &&
              hotelsData.map((element: Hotel) => (
                    <HotelDetails hotelData={element} key={element.id}  {...{adultsNumber,childrenNumber}}/>
              ))}
        </Grid>
      </Container>
    </>
  );
};
