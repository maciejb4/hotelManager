import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import { HotelDetails } from "../HotelDetails/HotelDetails";

export const HotelsList = () => {

    const [ hotelsData, sethotelsData] = useState<any>([]);

    useEffect(() => {
        fetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG')
            .then(res => res.json())
            .then((data) => {
                console.log('data',data);
                sethotelsData(data);
            })
    },[]);

    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {hotelsData && hotelsData.map((element: any) => (
                        <HotelDetails hotelData={element} key={element.id}/>
                    ))}
                </Grid>
            </Container>
        </>
    )
}