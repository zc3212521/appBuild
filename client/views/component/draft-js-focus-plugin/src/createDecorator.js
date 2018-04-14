import React, { Component } from 'react';
import unionClassNames from 'union-class-names';

// Get a component's display name
const getDisplayName = (WrappedComponent) => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ theme, blockKeyStore }) => {
  console.log(116, theme);
  return (
      (WrappedComponent) => class BlockFocusDecorator extends Component {
          static displayName = `BlockFocus(${getDisplayName(WrappedComponent)})`;
          static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;


          componentWillMount() {
              blockKeyStore.add(this.props.block.getKey());
              // console.log(117, blockKeyStore.add(this.props.block.getKey()).toJS())
          }

          componentWillUnmount() {
              blockKeyStore.remove(this.props.block.getKey());
          }

          onClick = (evt) => {
              evt.preventDefault();
              console.log(777, this.props.blockProps.isFocused)
              if (!this.props.blockProps.isFocused) {
                  this.props.blockProps.setFocusToBlock();
              }
          }

          render() {
              const { blockProps, className } = this.props;
              const { isFocused } = blockProps;
              const combinedClassName = isFocused
                  ? unionClassNames(className, theme.focused)
                  : unionClassNames(className, theme.unfocused);

              console.log(111222, isFocused, theme.focused)
              console.log(160, this.props)
              return (
                  <WrappedComponent
                      {...this.props}
                      onClick={this.onClick}
                      className={combinedClassName}
                  />
              );
          }
      }
  )
};
