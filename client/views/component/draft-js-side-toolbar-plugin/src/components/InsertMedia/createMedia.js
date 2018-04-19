/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import { Button } from 'antd'

export default ({ mediaType, children }) => (
    class BlockStyleButton extends Component {

        // toggleStyle = (event) => {
        //     event.preventDefault();
        //     this.props.setEditorState(
        //         RichUtils.toggleBlockType(
        //             this.props.getEditorState(),
        //             blockType
        //         )
        //     );
        // }
        addMedia = (e) => {
            console.log(mediaType);
        }

        preventBubblingUp = (event) => { event.preventDefault(); }

        // blockTypeIsActive = () => {
        //     // if the button is rendered before the editor
        //     if (!this.props.getEditorState) {
        //         return false;
        //     }
        //
        //     const editorState = this.props.getEditorState();
        //     const type = editorState
        //         .getCurrentContent()
        //         .getBlockForKey(editorState.getSelection().getStartKey())
        //         .getType();
        //     return type === blockType;
        // }

        render() {
            const { theme } = this.props;
            // const className = this.blockTypeIsActive() ? 'primary' : 'gost';
            const className = 'gost';
            return (
                <div
                    className={theme.buttonWrapper}
                    onMouseDown={this.preventBubblingUp}
                    style={{display:'inline-block'}}
                >
                    <Button
                        type={className}
                        onClick={this.toggleStyle}
                        children={children}
                        style={{width:'36px', height:'36px'}}
                    />
                </div>
            );
        }
    }
);
