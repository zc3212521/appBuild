import React, { Component } from 'react';
import {
    convertFromRaw,
    EditorState,
} from 'draft-js';

import Editor, { composeDecorators } from '../component/draft-js-plugins-editor/src';

import createImagePlugin from '../component/draft-js-image-plugin/src';

import createAlignmentPlugin from '../component/draft-js-alignment-plugin/src';

import createFocusPlugin from '../component/draft-js-focus-plugin/src';

// import createResizeablePlugin from '../component/draft-js-resizeable-plugin/src';

import createBlockDndPlugin from '../component/draft-js-drag-n-drop-plugin/src';

// import createDragNDropUploadPlugin from '../component/draft-js-drag-n-drop-upload-plugin/src';
import editorStyles from './editorStyles.css';
import mockUpload from './mockUpload';
import ImageAdd from './ImageAdd';

const focusPlugin = createFocusPlugin();
// const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
// const alignmentPlugin = createAlignmentPlugin();
// const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
    // resizeablePlugin.decorator,
    // alignmentPlugin.decorator,
    focusPlugin.decorator,
    blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

// const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
//     handleUpload: mockUpload,
//     addImage: imagePlugin.addImage,
// });

const plugins = [
    // dragNDropFileUploadPlugin,
    blockDndPlugin,
    focusPlugin,
    // alignmentPlugin,
    // resizeablePlugin,
    imagePlugin
];

/* eslint-disable */
const initialState = {
    "entityMap": {
        "0": {
            "type": "image",
            "mutability": "IMMUTABLE",
            "data": {
                "src": "https://wscdn.ql1d.com/12832690150305721735QN1D535SouthEast.png"
            }
        }
    },
    "blocks": [{
        "key": "9gm3s",
        "text": "You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }, {
        "key": "ov7r",
        "text": " ",
        "type": "atomic",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [{
            "offset": 0,
            "length": 1,
            "key": 0
        }],
        "data": {}
    }, {
        "key": "e23a8",
        "text": "See advanced examples further down …",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }]
};
/* eslint-enable */

export default class CustomImageEditor extends Component {

    state = {
        editorState: EditorState.createWithContent(convertFromRaw(initialState)),
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
                <div className={editorStyles.editor} onClick={this.focus}>
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
            </div>
        );
    }
}