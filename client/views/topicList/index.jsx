import React  from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { DefaultDraftBlockRenderMap, Editor, EditorState, convertFromHTML, ContentState, ContentBlock } from 'draft-js'
import Immutable from 'immutable'

import {
    observer,
    inject
} from 'mobx-react'
// @inject('appState') @observer


class MyCustomBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(222, this.props.children)
        return (
            <div className='MyCustomBlock' style={{color: 'red'}}>
                {/* here, this.props.children contains a <section> container, as that was the matching element */}
                {this.props.children}
            </div>
        );
    }
}


// const blockRenderMap = Immutable.Map({
//     'MyCustomBlock': {
//         // element is used during paste or html conversion to auto match your component;
//         // it is also retained as part of this.props.children and not stripped out
//         element: 'section',
//         wrapper: MyCustomBlock,
//     }
// });
// console.log(111, DefaultDraftBlockRenderMap)
//
// const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);
//
// console.log(222, extendedBlockRenderMap)

const blockRenderMap = Immutable.Map({
    'section': {
        element: 'section'
    }
});
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);
console.log(333, extendedBlockRenderMap)

export default class TopicList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.log = this.log.bind(this)
    }

    log() {

        const sampleMarkup = '<section>link</section>';

        console.log(5, convertFromHTML)
        const blocksFromHTML = convertFromHTML(sampleMarkup);
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
        );
        this.setState({
            editorState: EditorState.createWithContent(state)
        })
        console.log(666,this.state.editorState.toJS(),this.state.editorState.getCurrentContent().getBlockMap())
    }
    render() {
        return (
            <div>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    blockRenderMap={extendedBlockRenderMap}
                />
                <br/>
                <Button onClick={this.log}>log</Button>
            </div>
        )
    }
}


