import {AppDispatch} from "store";
import {
    AgentsActionTypes,
    IAgent,
    rawAgent,
} from "types/agent";
import axios from "axios";

const AgentsActionCreators = {
    fetchAgents: () => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch({type: AgentsActionTypes.FETCH_AGENTS})
                const response = await axios.get("https://valorant-api.com/v1/agents", {
                    params: {
                        language: "ru-RU",
                        isPlayableCharacter: "true"
                    }
                })
                const rawAgents = response.data.data
                const agents = rawAgents.map((agent: rawAgent): IAgent => {
                    return {
                        id: agent.uuid,
                        name: agent.displayName,
                        description: agent.description,
                        imageUrl: agent.bustPortrait,
                        backgroundUrl: agent.background,
                        role: {
                            iconUrl: agent.role.displayIcon,
                            title: agent.role.displayName,
                            description: agent.role.description
                        },
                        abilities: agent.abilities.map((ability) => {
                            return {
                                title: ability.displayName,
                                description: ability.description,
                                iconUrl: ability.displayIcon,
                                slot: ability.slot
                            }
                        }),
                        voice: {
                            url: agent.voiceLine.mediaList[0].wave
                        },
                    }
                })
                dispatch({type: AgentsActionTypes.FETCH_AGENTS_COMPLETE, payload: agents})

            } catch (e: any) {
                dispatch({type: AgentsActionTypes.FETCH_AGENTS_ERROR, payload: e.message})
            }
        }
    },
}

export default AgentsActionCreators