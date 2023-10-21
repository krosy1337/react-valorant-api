export interface IAgentRole {
    title?: string
    iconUrl?: string
    description?: string
}

export interface IAbility {
    title?: string
    description?: string
    iconUrl?: string
    slot?: string
}

export interface IAgentVoice {
    url?: string
}

export interface rawAgent {
    uuid?: string
    displayName?: string
    description?: string
    bustPortrait?: string
    background?: string
    role?: {
        uuid?: string
        displayName?: string
        description?: string
        displayIcon?: string
    }
    abilities?: {
        displayName?: string
        description?: string
        displayIcon?: string
        slot?: string
    }[]
    voiceLine?: {
        mediaList?: [
            { wave?: string }
        ]
    }
}

export interface IAgent {
    id?: string
    name?: string
    description?: string
    imageUrl?: string
    backgroundUrl?: string
    role?: IAgentRole
    abilities?: IAbility[]
    voice?: IAgentVoice
}

export interface AgentsState {
    agents: IAgent[]
    isLoading: boolean
    error: string
}

export interface AgentState {
    agent: IAgent
    isLoading: boolean
    error: string
}

export enum AgentsActionTypes {
    FETCH_AGENTS = "FETCH_AGENTS",
    FETCH_AGENTS_COMPLETE = "FETCH_AGENTS_COMPLETE",
    FETCH_AGENTS_ERROR = "FETCH_AGENTS_ERROR",
    FETCH_AGENT_BY_ID = "FETCH_AGENT",
    FETCH_AGENT_BY_ID_COMPLETE = "FETCH_AGENT_COMPLETE",
    FETCH_AGENT_BY_ID_ERROR = "FETCH_AGENT_ERROR",
}

export interface FetchAgentsAction {
    type: AgentsActionTypes.FETCH_AGENTS
}

export interface FetchAgentsCompleteAction {
    type: AgentsActionTypes.FETCH_AGENTS_COMPLETE
    payload: IAgent[]
}

export interface FetchAgentsErrorAction {
    type: AgentsActionTypes.FETCH_AGENTS_ERROR
    payload: string
}

export interface FetchAgentByIdAction {
    type: AgentsActionTypes.FETCH_AGENT_BY_ID
}

export interface FetchAgentByIdCompleteAction {
    type: AgentsActionTypes.FETCH_AGENT_BY_ID_COMPLETE
    payload: IAgent
}

export interface FetchAgentByIdErrorAction {
    type: AgentsActionTypes.FETCH_AGENT_BY_ID_ERROR
    payload: string
}

export type AgentsAction =
    FetchAgentsAction
    | FetchAgentsCompleteAction
    | FetchAgentsErrorAction

export type AgentAction =
    FetchAgentByIdAction
    | FetchAgentByIdCompleteAction
    | FetchAgentByIdErrorAction
