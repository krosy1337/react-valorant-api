import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "store";
import App from 'App';
import {Provider} from 'react-redux';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f2434f",
        },
        background: {
            default: "#27272f",
            paper: "#ffd6d6",
        },
        text: {
            primary: "#ffd6d6",
            secondary: "#fcc0c0",
        },
        secondary: {
            main: "#27272f",
        },
    },
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
