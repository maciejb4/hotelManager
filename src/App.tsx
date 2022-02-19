import React from 'react';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import './App.css';
import { PageHeader } from './hotelManager/components/PageHeader/PageHeader';
import { HotelsList } from "./hotelManager/components/HotelsList/HotelsList";

const App = () => {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <main>
            <PageHeader/>
            <HotelsList/>
          </main>
        </Container>
      </ThemeProvider>
  );
}

export default App;
