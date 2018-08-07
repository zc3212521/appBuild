import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import TopicList from '../views/topicList/index'
import TopicDetail from '../views/topicDetail/index'

export default () => [
    <Route path="/" exact key="first" component={TopicList}/>,
    <Route path="/list" component={TopicList} key="list"/>,
    <Route path="/detail" component={TopicDetail} key="detail"/>
]