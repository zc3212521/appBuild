import React  from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import {
    observer,
    inject
} from 'mobx-react'

@inject('appState') @observer
export default class TopicList extends React.Component {
    render() {
        return <Button>{this.props.appState.msg}</Button>
    }
}

TopicList.propTypes = {
    appState: PropTypes.object
}