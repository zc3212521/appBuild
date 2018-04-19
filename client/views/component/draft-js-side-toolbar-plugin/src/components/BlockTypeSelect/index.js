/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button } from 'antd';

export default class BlockTypeSelect extends React.Component {

  state = {
    style: {
      transform: 'translate(-50%) scale(0)',
    }
  }

  onMouseEnter = () => {
    this.setState({
      style: {
        transform: 'translate(-50%) scale(1)',
        transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
      },
    });
  }

  onMouseLeave = () => {
    this.setState({
      style: {
        transform: 'translate(-50%) scale(0)',
      },
    });
  }

  onMouseDown = (clickEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
  }

  render() {
    const { theme, getEditorState, setEditorState } = this.props;
    return (
      <div
          style={{display:'inline-block'}}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.onClick}
      >
          <Button type='gost' icon='ellipsis'/>
        {/*
          The spacer is needed so the popup doesn't go away when moving from the
          blockType div to the popup.
        */}
        <div className={theme.blockTypeSelectStyles.spacer} />
        <div className={theme.blockTypeSelectStyles.popup} style={this.state.style}>
          {this.props.structure.map((Component, index) => (
            <Component
              key={index}
              getEditorState={getEditorState}
              setEditorState={setEditorState}
              theme={theme.buttonStyles}
            />
          ))}
        </div>
      </div>
    );
  }
}
