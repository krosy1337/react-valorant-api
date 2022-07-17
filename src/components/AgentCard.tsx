import React, {FC} from 'react';
import {Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {IAgent} from "types/agent";
import {NavLink} from "react-router-dom";

interface AgentCardProps {
    agent: IAgent
}

const AgentCard: FC<AgentCardProps> = ({agent}) => {
    return (
        <Card sx={{
            height: "100%",
            backgroundColor: "primary.main",
            borderColor: "primary.main",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
        }}>
            <CardMedia
                component="img"
                height="160"
                image={agent.imageUrl}
                alt={agent.name}
                sx={{
                    objectFit: "cover",
                    objectPosition: "top",
                    backgroundImage: `url(${agent.backgroundUrl})`,
                    backgroundSize: "50%",
                    backgroundColor: "background.paper",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "0 50%"
            }}
            />
            <CardContent>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                }}>
                    <Typography variant="h5" component="div" color="text.primary"
                                maxWidth={350} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                        {agent.name}
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: 1,
                    }}>
                        <Typography variant="h6" component="span" color="text.primary">
                            {agent.role.title}
                        </Typography>
                        <Avatar alt={agent.role.title} src={agent.role.iconUrl} sx={{
                            width: 24,
                            height: 24,
                        }}/>
                    </Box>
                </Box>
                <Typography variant="body1" color="text.secondary">
                    {agent.description}
                </Typography>
            </CardContent>
            <CardActions sx={{mt: "auto"}}>
                <Button color="secondary"
                        sx={{
                            fontSize: 16,
                            fontWeight: 700,
                        }}>
                    <NavLink to={agent.id} style={{
                        color: "inherit",
                        textDecoration: "inherit",
                    }}>
                        Подробнее
                    </NavLink>
                </Button>
            </CardActions>
        </Card>
    );
};

export default AgentCard;