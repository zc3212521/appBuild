import { combineReducters } from "redux"
import type from "../../store/type"

export default {
    groupNum: (state=10, action) => {
        switch (action.type) {
            case type.topicDetail.add:
                return state + action.data
            case type.topicDetail.remove:
                return state - action.data
        }
    }
}