import React from "react"
import AgentsPage from "pages/AgentsPage"
import AgentPage from "pages/AgentPage"

interface IRoute {
    path: string
    element: React.ComponentType
    isPage: boolean
    text?: string
}

export enum RouteNames {
    ROOT = "/",
    AGENTS = "/agents",
    CURRENT_AGENT = "/agents/:id",
}

export const routes: IRoute[] = [
    {path: RouteNames.AGENTS, element: AgentsPage, isPage: true, text: "Агенты"},
    {path: RouteNames.CURRENT_AGENT, element: AgentPage, isPage: false},
]