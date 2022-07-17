import agentsActionCreators from "./agentsReducer/action-creators"
import agentActionCreators from "./agentReducer/action-creators"

const actions = {
    ...agentsActionCreators,
    ...agentActionCreators
}

export default actions