/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { RichUtils, EditorState, Modifier } from 'draft-js';
import unionClassNames from 'union-class-names';
import { Button } from 'antd';
import colorStyleMap from './colors';

export default ({ color, children }) => (
    class InlineStyleButton extends Component {

        toggleStyle = (event) => {
            const editorState = this.props.getEditorState();
            const selection = editorState.getSelection();

            const nextContentState = Object.keys(colorStyleMap)
                .reduce((contentState, color) => {
                    return Modifier.removeInlineStyle(contentState, selection, color)
                }, editorState.getCurrentContent());

            let nextEditorState = EditorState.push(
                editorState,
                nextContentState,
                'change-inline-style'
            );

            const currentStyle = editorState.getCurrentInlineStyle();

            // Unset style override for current color.
            if (selection.isCollapsed()) {
                nextEditorState = currentStyle.reduce((state, color) => {
                    return RichUtils.toggleInlineStyle(state, color);
                }, nextEditorState);
            }

            // If the color is being toggled on, apply it.
            if (!currentStyle.has(toggledColor)) {
                nextEditorState = RichUtils.toggleInlineStyle(
                    nextEditorState,
                    toggledColor
                );
            };
            this.props.setEditorState(nextEditorState);
        }

        preventBubblingUp = (event) => { event.preventDefault(); }

        // we check if this.props.getEditorstate is undefined first in case the button is rendered before the editor
        styleIsActive = () => this.props.getEditorState && this.props.getEditorState().getCurrentInlineStyle().has(color);

        render() {
            const { theme } = this.props;
            const className = this.styleIsActive() ? 'primary' : 'gost';
            return (
                <div
                    className={theme.buttonWrapper}
                    onMouseDown={this.preventBubblingUp}
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
