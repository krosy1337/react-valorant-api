import {Grid, Typography} from "@mui/material"
import React, {FC} from "react"
import {IAgent} from "types/agent"
import AgentCard from "components/AgentCard"

interface AgentsListProps {
    agents: IAgent[]

}

const AgentsList: FC<AgentsListProps> = ({agents}) => {
    return (
        <>
            {
                agents.length
                    ?
                    <Grid container spacing={2}>
                        {agents.map((agent: IAgent) =>
                            <Grid key={agent.id} item xs={12} md={4}>
                                <AgentCard agent={agent}/>
                            </Grid>
                        )}
                    </Grid>
                    :
                    <Typography variant="h2" align="center">Список агентов пуст :(</Typography>
            }
        </>
    )
}

export default AgentsList