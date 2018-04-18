import React, { Component } from 'react';
import { Card } from "antd"

import {
    convertFromRaw,
    EditorState,
} from 'draft-js';

import Editor, { createEditorStateWithText, composeDecorators  } from '../component/draft-js-plugins-editor/src';

import createImagePlugin from '../component/draft-js-image-plugin/src';
// import createAlignmentPlugin from '../component/draft-js-alignment-plugin/src';
import createFocusPlugin from '../component/draft-js-focus-plugin/src';
// import createResizeablePlugin from '../component/draft-js-resizeable-plugin/src';

import createBlockDndPlugin from '../component/draft-js-drag-n-drop-plugin/src';

// import createDragNDropUploadPlugin from '../component/draft-js-drag-n-drop-upload-plugin/src';
import './editorStyles.css'
// import mockUpload from './mockUpload';
import ImageAdd from './ImageAdd';

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();

const decorator = composeDecorators(
    focusPlugin.decorator,
    blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });

const plugins = [
    blockDndPlugin,
    focusPlugin,
    imagePlugin
];

export default class CustomImageEditor extends Component {

    state = {
        editorState: EditorState.createEmpty()
    };

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    focus = () => {
        this.editor.focus();
    };

    render() {
        return (
            <div>
                <Card>
                    <div onClick={this.focus} className='editor'>
                        <Editor
                            editorState={this.state.editorState}
                            onChange={this.onChange}
                            plugins={plugins}
                            ref={(element) => { this.editor = element; }}
                        />

                    </div>
                    <ImageAdd
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        modifier={imagePlugin.addImage}
                    />
                </Card>
            </div>
        );
    }
}