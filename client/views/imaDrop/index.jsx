import React, { Component } from 'react';
import {
    convertFromRaw,
    EditorState,
} from 'draft-js';

import '../../resource/iconfont/iconfont.less';

import colors from './ColorsToggle/colors';

import Editor, { composeDecorators } from '../component/draft-js-plugins-editor/src';

import createImagePlugin from '../component/draft-js-image-plugin/src';

import createFocusPlugin from '../component/draft-js-focus-plugin/src';

import createBlockDndPlugin from '../component/draft-js-drag-n-drop-plugin/src';

import createSideToolbarPlugin from '../component/draft-js-side-toolbar-plugin/src';

import createInlineToolbarPlugin, { Separator } from '../component/draft-js-inline-toolbar-plugin/src';

import createLinkPlugin from '../component/draft-js-anchor-plugin/src';

import ColorsButton from './ColorsToggle';

import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();

const blockDndPlugin = createBlockDndPlugin();

const decorator = composeDecorators(
    focusPlugin.decorator,
    blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
} from '../component/draft-js-buttons/src';

// 侧边栏组件
const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const linkPlugin = createLinkPlugin({placeholder:'输入链接后键入Enter确认'});

// 行内组件
const inlineToolbarPlugin = createInlineToolbarPlugin({
    structure: [
        BoldButton,
        ItalicButton,
        UnderlineButton,
        CodeButton,
        linkPlugin.LinkButton,
        Separator,
        ColorsButton,
    ],
    // customStyleMap: colors  //todo not work
});

const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
    blockDndPlugin,
    focusPlugin,
    imagePlugin,
    sideToolbarPlugin,
    inlineToolbarPlugin,
    linkPlugin,
];

/* eslint-disable */
const initialState = {
    "entityMap": {
        "0": {
            "type": "image",
            "mutability": "IMMUTABLE",
            "data": {
                "src": "https://wscdn.ql1d.com/31999134935610288861.jpg"
            }
        },
        "1": {
            "type": "image",
            "mutability": "IMMUTABLE",
            "data": {
                "src": "https://wscdn.ql1d.com/63176873725799917118.jpg"
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
    }, {
        "key": "ovkl",
        "text": " ",
        "type": "atomic",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [{
            "offset": 0,
            "length": 1,
            "key": 1
        }],
        "data": {}
    }, ]
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
            <div style={{padding:'50px'}}>
                <div className={editorStyles.editor} onClick={this.focus}>
                    <Editor
                        customStyleMap={colors}
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                    />
                    <SideToolbar modifier={imagePlugin.addImage}/>
                    <InlineToolbar />
                </div>
            </div>
        );
    }
}