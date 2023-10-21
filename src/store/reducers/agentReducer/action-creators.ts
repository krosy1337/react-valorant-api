import {AppDispatch} from "../../index";
import {AgentsActionTypes, IAgent, rawAgent} from "../../../types/agent";
import axios from "axios";

const AgentActionCreators = {
    fetchAgentById: (id: string) => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch({type: AgentsActionTypes.FETCH_AGENT_BY_ID})
                const response = await axios.get(`https://valorant-api.com/v1/agents/${id}`, {
                    params: {
                        language: "ru-RU",
                    }
                })
                const rawAgent: rawAgent = response.data.data
                const agent: IAgent = {
                    id: rawAgent.uuid,
                    name: rawAgent.displayName,
                    description: rawAgent.description,
                    imageUrl: rawAgent.bustPortrait,
                    backgroundUrl: rawAgent.background,
                    abilities: rawAgent.abilities?.map((ability) => {
                        return {
                            title: ability.displayName,
                            description: ability.description,
                            iconUrl: ability.displayIcon,
                            slot: ability.slot
                        }
                    }),
                    voice: {
                        url: rawAgent.voiceLine?.mediaList?.length ? rawAgent.voiceLine?.mediaList[0].wave : undefined
                    },
                    role: {
                        iconUrl: rawAgent.role?.displayIcon,
                        title: rawAgent.role?.displayName,
                        description: rawAgent.role?.description
                    }
                }
                dispatch({type: AgentsActionTypes.FETCH_AGENT_BY_ID_COMPLETE, payload: agent})
            } catch (e: any) {
                dispatch({type: AgentsActionTypes.FETCH_AGENT_BY_ID_ERROR, payload: e.message})
            }
        }
    },
}

export default AgentActionCreators