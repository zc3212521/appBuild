import React  from 'react'
import PropTypes from 'prop-types'

import {
    observer,
    inject
} from 'mobx-react'

@inject('appState') @observer
export default class TopicList extends React.Component {
    render() {
        return <div>{this.props.appState.msg}</div>
    }
}

TopicList.propTypes = {
    appState: PropTypes.object
}