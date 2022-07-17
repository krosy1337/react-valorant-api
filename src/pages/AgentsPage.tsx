import React, {FC, useEffect, useMemo, useState} from "react"
import AgentsList from "components/AgentsList"
import {useTypedSelector} from "hooks/useTypedSelector"
import {useActions} from "hooks/useActions"
import {Box, CircularProgress, Typography} from "@mui/material"
import AgentsFilter from "components/AgentsFilter"

const AgentsPage: FC = () => {
    const {agents, error, isLoading} = useTypedSelector(state => state.agents)
    const {fetchAgents} = useActions()
    const [nameFilter, setNameFilter] = useState<string>("")
    const [roleFilter, setRoleFilter] = useState<string>("")

    const filteredAgents = useMemo(() => {
        const fAgents = agents.filter((agent) => agent.name.toLowerCase().includes(nameFilter.toLowerCase().trim()))
        return roleFilter ? fAgents.filter((agent) => agent.role.title === roleFilter) : fAgents
    }, [nameFilter, agents, roleFilter])

    const roles = useMemo(() => {
        const allRoles: string[] = []
        agents.forEach((agent) => {
            if (!allRoles.includes(agent.role.title)) {
                allRoles.push(agent.role.title)
            }
        })

        return allRoles
    }, [agents])

    useEffect(() => {
        fetchAgents()
    }, [])

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
            <Box sx={{display: "flex", alignItems: "center", mb: 2, columnGap: 2,}}>
                <AgentsFilter nameFilter={nameFilter} roleFilter={roleFilter} roles={roles}
                              setNameFilter={setNameFilter} setRoleFilter={setRoleFilter}/>
            </Box>
            <AgentsList agents={filteredAgents}/>
        </>
    )
}

export default AgentsPage