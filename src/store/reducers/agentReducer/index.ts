import {AgentAction, AgentsActionTypes, AgentState} from "types/agent"

const initialState = {} as AgentState

const agentReducer = (state=initialState, action: AgentAction): AgentState => {
    switch (action.type) {
        case AgentsActionTypes.FETCH_AGENT_BY_ID:
            return {...state, isLoading: true}
        case AgentsActionTypes.FETCH_AGENT_BY_ID_COMPLETE:
            return {...state, isLoading: false, agent: action.payload}
        case AgentsActionTypes.FETCH_AGENT_BY_ID_ERROR:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state
    }
}

export default agentReducer