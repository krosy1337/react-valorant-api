import {AgentsAction, AgentsActionTypes, AgentsState, IAgent} from "types/agent";

const initialState = {
    agents: [] as IAgent[],
    isLoading: false,
    error: '',
} as AgentsState

const agentsReducer = (state = initialState, action: AgentsAction): AgentsState => {
    switch (action.type) {
        case AgentsActionTypes.FETCH_AGENTS:
            return {...state, isLoading: true}
        case AgentsActionTypes.FETCH_AGENTS_COMPLETE:
            return {...state, isLoading: false, agents: action.payload}
        case AgentsActionTypes.FETCH_AGENTS_ERROR:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state
    }
}

export default agentsReducer