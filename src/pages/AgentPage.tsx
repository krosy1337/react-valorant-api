import React, {FC, useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {useTypedSelector} from "hooks/useTypedSelector"
import {useActions} from "hooks/useActions"
import {Avatar, Box, CircularProgress, Grid, Stack, styled, Tab, Tabs, Typography} from "@mui/material"
import {common} from "@mui/material/colors"
import AgentVoice from "components/AgentVoice"

interface AgentPageParams {
    id: string
}

const MyTab = styled(Tab)`
  color: white;
`

const AgentPage: FC = () => {
    const params = useParams<keyof AgentPageParams>() as AgentPageParams

    const [value, setValue] = useState(0)

    const {agent, error, isLoading} = useTypedSelector(state => state.agent)
    const {fetchAgentById} = useActions()

    useEffect(() => {
        fetchAgentById(params.id)
    }, [])

    const changeHandler = (e: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    if (isLoading) {
        return (
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <CircularProgress/>
            </Box>
        )
    }
    if (error) {
        return <Typography variant="h3">{error}</Typography>
    }
    return (
        <>
            {
                agent
                    ?
                    <Grid container sx={{flexDirection: "row"}} columnSpacing={2}>
                        <Grid item md={5} xs={12}>
                            <Stack sx={{maxWidth: 300}}>
                                <Avatar src={agent.imageUrl} alt={agent.name} variant="square" sx={{
                                    width: 300,
                                    height: 300,
                                    border: 5,
                                    borderColor: "primary.main",
                                    backgroundImage: `url(${agent.backgroundUrl})`,
                                    backgroundSize: "50%",
                                    backgroundColor: "background.paper",
                                    backgroundPosition: "0 50%",
                                }}/>
                                <AgentVoice url={agent.voice.url}/>
                            </Stack>
                        </Grid>
                        <Grid item md={7} xs={12}>
                            <Stack>
                                <Typography variant="h3" color="text.primary">{agent.name}</Typography>
                                <Typography variant="body1" color="text.primary">{agent.description}</Typography>
                                <Stack direction="row" flexWrap="wrap" columnGap={1}>
                                    <Typography variant="h4" color={common.white}>Роль:</Typography>
                                    <Stack direction="row" columnGap={1} alignItems="center">
                                        <Typography variant="h4" color={common.white}>{agent.role.title}</Typography>
                                        <Avatar src={agent.role.iconUrl} alt={agent.role.title} sx={{
                                            width: 28,
                                            height: 28,
                                        }}/>
                                    </Stack>
                                </Stack>
                                <Typography variant="body1" color={common.white}>{agent.role.description}</Typography>
                                <Box sx={{marginTop: 2}}>
                                    <Tabs value={value} onChange={changeHandler} variant="scrollable">
                                        {agent.abilities.map((ability) => {
                                            return (
                                                <MyTab key={ability.slot} label={ability.title}
                                                       icon={<Avatar src={ability.iconUrl}
                                                                     sx={{color: common.white}}/>}/>
                                            )
                                        })}
                                    </Tabs>
                                    {agent.abilities.map((ability, index) => {
                                            return value === index &&
                                                <Box key={ability.slot}>
                                                    <Typography variant="subtitle1"
                                                                color="primary.main">{ability.description}</Typography>
                                                </Box>
                                        }
                                    )}
                                </Box>
                            </Stack>
                        </Grid>

                    </Grid>
                    :
                    "Агента с таким ID нет"
            }
        </>
    )
}

export default AgentPage