import { CardContent, Grid, Typography } from "@mui/material";
import {RoomDetailsProps} from "../../interfaces/RoomDetailsProps";

export const RoomDetails = (props: RoomDetailsProps) => {
  const roomData = props.roomData;

  return (
    <>
      <Grid sx={{ borderTop: 1 }} container>
        <CardContent sx={{ flexGrow: 1 }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%" }}>
              <Typography gutterBottom variant="h6" component="div">
                {roomData?.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                Adults: {roomData?.occupancy?.maxAdults}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
                Children: {roomData?.occupancy?.maxChildren}
              </Typography>
            </div>
            <div style={{ width: "70%" }}>
              <Typography
                sx={{ px: "16px" }}
                gutterBottom
                variant="subtitle2"
                component="h2"
              >
                {roomData?.longDescription}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Grid>
    </>
  );
};
