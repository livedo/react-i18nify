/* eslint no-underscore-dangle: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import I18n from './I18n';
import BaseComponent from './Base';

export default class Translate extends BaseComponent {

  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  otherProps = () => {
    const result = { ...this.props };
    delete result.value;
    return result;
  }

  render = () => (
    <span>
      {I18n._translate(this.props.value, this.otherProps())}
    </span>
  );
}
