import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import topicDetail from "../views/topicDetail/reducer"
import topicList from "../views/topicList/reducer"

export default combineReducers({
    routing: routerReducer,
    topicDetail: topicDetail,
})