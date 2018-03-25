import React  from 'react'
import PropTypes from 'prop-types'
import {Editor, EditorState} from 'draft-js'

import {
    observer,
    inject
} from 'mobx-react'

@inject('appState') @observer
export default class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }
    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
}



// class TopicList extends React.Component {
//     render() {
//         return <div>{this.props.appState.msg}</div>
//     }
// }


//
// TopicList.propTypes = {
//     appState: PropTypes.object
// }