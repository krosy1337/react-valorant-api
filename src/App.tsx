import React, {FC} from 'react'
import {Container} from "@mui/material";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

const App: FC = () => {
    return (
        <>
            <Header />
            <Container sx={{paddingTop: 2, paddingBottom: 2}}>
                <AppRouter />
            </Container>
        </>
    )
}

export default App