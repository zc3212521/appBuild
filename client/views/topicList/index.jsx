import React, { Component } from 'react';

import {
    convertFromRaw,
    EditorState,
} from 'draft-js';

import Editor from "../component/draft-js-plugins-editor/src"
import createImagePlugin from '../component/draft-js-image-plugin/src'

import editorStyles from './editorStyles.css';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];
console.log(666, plugins)

/* eslint-disable */
const initialState = {
    "entityMap": {
        "0": {
            "type": "image",
            "mutability": "IMMUTABLE",
            "data": {
                "src": "http://7xjl1j.com1.z0.glb.clouddn.com/256Icon.png"
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

export default class SimpleImageEditor extends Component {

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
            </div>
        );
    }
}
