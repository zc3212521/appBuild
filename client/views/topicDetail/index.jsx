import React  from 'react'

import { getAdd, getRemove } from "./action"

@connect(
    state => ({
        num: state.topicDetail.groupNum,
    }),
    { getAdd, getRemove }
)

export default class TopicList extends React.Component {
    render() {
        return (
            <div>
                <p>小组成员{this.props.num}名</p>
                <input type="button" value="+" onClick={this.props.getAdd()}/>
                <input type="button" value="-" onClick={this.props.getRemove()}/>
            </div>
        )
    }
}