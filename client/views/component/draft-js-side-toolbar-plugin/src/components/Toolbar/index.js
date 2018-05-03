/* eslint-disable react/no-array-index-key */
import React from 'react';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';

export default class Toolbar extends React.Component {

  state = {
    position: {
      transform: 'scale(0)',
    }
  }

  componentDidMount() {
    this.props.store.subscribeToItem('editorState', this.onEditorStateChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribeFromItem('editorState', this.onEditorStateChange);
  }

  onEditorStateChange = (editorState) => {
    const selection = editorState.getSelection();
    if (!selection.getHasFocus()) {
      this.setState({
        position: {
          transform: 'scale(0)',
        },
      });
      return;
    }

    const currentContent = editorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(selection.getStartKey());
    // TODO verify that always a key-0-0 exists
    const offsetKey = DraftOffsetKey.encode(currentBlock.getKey(), 0, 0);
    console.log('offsetKey', offsetKey);
    // Note: need to wait on tick to make sure the DOM node has been create by Draft.js
    setTimeout(() => {
      const node = document.querySelectorAll(`[data-offset-key="${offsetKey}"]`)[0];
        let top;
        console.log('node', node)
        if(node === undefined || node.tagName === 'figure') return false;
        switch(node.tagName){
            case 'H1' :
              top = node.getBoundingClientRect().top + 6;
              break;
            case "H2" :
              top = node.getBoundingClientRect().top ;
              break;
            default:
                top = node.getBoundingClientRect().top - 6;
        }
      const editorComp = this.props.store.getItem('getEditorRef')();
      // this keeps backwards-compatibility with react 15
      const editorNode = editorComp.refs.editor ? editorComp.refs.editor : editorComp.editor;

      const scrollY = window.scrollY == null ? window.pageYOffset : window.scrollY;
      this.setState({
        position: {
          top: (top + scrollY),
          left: editorNode.getBoundingClientRect().left - 100,
          transform: 'scale(1)',
          transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
        },
      });
    }, 0);
  }

  render() {
    const { theme, store } = this.props;
    return (
      <div
        className={theme.toolbarStyles.wrapper}
        style={this.state.position}
      >
        {this.props.structure.map((Component, index) => (
          <Component
            key={index}
            getEditorState={store.getItem('getEditorState')}
            setEditorState={store.getItem('setEditorState')}
            theme={theme}
            modifier={this.props.modifier}
          />
        ))}
      </div>
    );
  }
}
