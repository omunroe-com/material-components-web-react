import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withRipple from '../ripple';

import NativeControl from './NativeControl';

export class ThumbUnderlay extends React.Component {
  rippleActivator = React.createRef();

  init = (el) => {
    this.props.initRipple(el, this.rippleActivator.current);
  }

  get classes() {
    return classnames('mdc-switch__thumb-underlay', this.props.className);
  }

  handleChange = (e) => {
    const {handleChange, onChange} = this.props;
    const {checked} = e.target;
    handleChange(checked);
    onChange(e);
  }

  render() {
    const {
      /* eslint-disable */
      className,
      handleChange,
      initRipple,
      unbounded,
      /* eslint-enable */
      checked,
      disabled,
      id,
      handleDisabled,
      ...otherProps
    } = this.props;

    return (
      <div
        className={this.classes}
        ref={this.init}
        {...otherProps}
      >
        <div className='mdc-switch__thumb'>
          <NativeControl
            id={id}
            checked={checked}
            disabled={disabled}
            handleDisabled={handleDisabled}
            onChange={this.handleChange}
            setRippleActivator={this.rippleActivator}
          />
        </div>
      </div>
    );
  }
}

ThumbUnderlay.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  handleDisabled: PropTypes.func,
  handleChange: PropTypes.func,
  unbounded: PropTypes.bool,
};

ThumbUnderlay.defaultProps = {
  checked: false,
  className: '',
  disabled: false,
  id: null,
  handleDisabled: () => {},
  handleChange: () => {},
  unbounded: true,
};

export default withRipple(ThumbUnderlay);
