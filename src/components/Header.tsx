import React from "react"
import {AppBar, Container, Toolbar, Typography} from "@mui/material"
import {RouteNames} from "router"
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{mr: 2, display: {xs: "none", md: "flex"}}}
                    >
                        <NavLink to={RouteNames.ROOT} style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}>
                            VALORANT API
                        </NavLink>
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
                    >
                        <NavLink to={RouteNames.ROOT} style={{
                            color: "inherit",
                            textDecoration: "inherit",
                        }}>
                            VALORANT API
                        </NavLink>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;