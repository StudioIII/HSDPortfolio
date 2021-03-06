import React, { Component } from 'react';

/**
 * Hoverable HOC
 */
const Hoverable = InnerComponent => {
  return class HoverableComponent extends Component {
    state = {
      hover: false
    };

    _toggleHover = to => {
      this.setState({
        hover: to
      });

    }

    _connect = el => {
      if (el) {
        el.addEventListener('mouseenter', (e) => this._toggleHover(true));
        el.addEventListener('mouseleave', (e) => this._toggleHover(false));
      }
    };

    render() {
      const { hover } = this.state;

      return (
        <InnerComponent
          hoverRef={this._connect}
          hover={hover}
          {...this.props}
        />
      );
    }
  }
}

export default Hoverable;
