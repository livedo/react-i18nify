/* eslint no-underscore-dangle: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import I18n from './I18n';
import BaseComponent from './Base';

export default class Localize extends BaseComponent {

  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object]).isRequired,
    options: PropTypes.object,
    dateFormat: PropTypes.string,
  };

  render = () => (
    <span>
      {I18n._localize(
        this.props.value,
        this.props.dateFormat
          ? { dateFormat: this.props.dateFormat }
          : this.props.options
      )}
    </span>
  );
}
