import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";

export const HotelDetails = (props: any) => {
  const hotelData = props.hotelData;

  return (
    <>
      <Grid item key={hotelData.id} xs={12} sm={12} md={12}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <div>
              <div style={{ width: "20%" }}>
                <Carousel>
                  {hotelData?.images.map((item: any) => (
                    <CardMedia
                      key={item}
                      component="img"
                      height="140"
                      image={item.url}
                      alt="hotel image"
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </CardContent>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {hotelData.name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
