/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import unionClassNames from 'union-class-names';
import { Button } from 'antd'

export default ({ blockType, children }) => (
  class BlockStyleButton extends Component {

    toggleStyle = (event) => {
      event.preventDefault();
      this.props.setEditorState(
        RichUtils.toggleBlockType(
          this.props.getEditorState(),
          blockType
        )
      );
    }

    preventBubblingUp = (event) => { event.preventDefault(); }

    blockTypeIsActive = () => {
      // if the button is rendered before the editor
      if (!this.props.getEditorState) {
        return false;
      }

      const editorState = this.props.getEditorState();
      const type = editorState
        .getCurrentContent()
        .getBlockForKey(editorState.getSelection().getStartKey())
        .getType();
      return type === blockType;
    }

    render() {
      const { theme } = this.props;
      console.log(123, theme)
      const className = this.blockTypeIsActive() ? 'primary' : 'gost';
      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
          style={{display:'inline-block'}}
        >
          <Button
            type={className}
            style={{height:'34px',width:'.6px',fontSize:'18px'}}
            onClick={this.toggleStyle}
            children={children}
          />
        </div>
      );
    }
  }
);
