import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
import { RoomDetails } from "../RoomDetails/RoomDetails";
import {Room, RoomObject} from "../../interfaces/RoomInterface";
import { HotelDetailsProps } from "../../interfaces/HotelDetailsProps";

export const HotelDetails = (props: HotelDetailsProps) => {
  const hotelData = props.hotelData;
  const adultsNumber = props.adultsNumber;
  const childrenNumber = props.childrenNumber;
  const [roomsData, setRoomsData] = useState<RoomObject>();

  useEffect(() => {
    hotelData &&
      fetch(
        `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelData.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRoomsData(data);
        });
  }, [hotelData]);

  return (
    <>
      <Grid item key={hotelData.id} xs={12} sm={12} md={12}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "30%" }}>
                <Carousel>
                  {hotelData?.images.map((item) => (
                    <CardMedia
                      key={item.url}
                      component="img"
                      height="140"
                      image={item.url}
                      alt="hotel image"
                    />
                  ))}
                </Carousel>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "70%",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {hotelData?.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {hotelData?.address1}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {hotelData?.address2}
                    </Typography>
                  </CardContent>
                </div>
                <div>
                  <Rating
                    name="star-rating"
                    readOnly
                    value={
                      parseInt(hotelData?.starRating) || null
                    }
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardContent sx={{ flexGrow: 1 }}>
            {roomsData &&
              roomsData.rooms &&
              roomsData.rooms
                .filter((el: Room) => el.occupancy.maxAdults >= adultsNumber)
                .filter((el: Room) => el.occupancy.maxChildren >= childrenNumber)
                .map((element: Room) => (
                  <RoomDetails roomData={element} key={element.id} />
                ))}
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
