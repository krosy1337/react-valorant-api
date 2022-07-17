import React, {FC} from "react"
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material"

interface AgentsFilterProps {
    nameFilter: string
    setNameFilter: (value: string) => void
    roleFilter: string
    setRoleFilter: (value: string) => void
    roles: string[]
}

const AgentsFilter: FC<AgentsFilterProps> = ({nameFilter, roleFilter, roles,
                                                 setRoleFilter, setNameFilter}) => {
    return (
        <>
            <TextField variant="standard" placeholder="Введите имя агента..."
                       value={nameFilter} onChange={(e) => setNameFilter(e.currentTarget.value)}/>
            <FormControl variant="standard" sx={{minWidth: 120, mb: 2,}}>
                <InputLabel sx={{color: "primary.main"}}>Роль</InputLabel>
                <Select color="primary" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                    <MenuItem value="" sx={{color: "secondary.main",}}>Любая</MenuItem>
                    {roles.map((role) =>
                        <MenuItem key={role} value={role} sx={{color: "secondary.main",}}>{role}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </>
    )
}

export default AgentsFilter