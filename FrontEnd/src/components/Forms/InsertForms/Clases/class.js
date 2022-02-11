import React, { Component } from 'react';

import HeaderClasses from './HeaderClasses';
import Clases from './Clases'
import Footer from '../../../Commons/Footer/Footer';

export default class ClassUE4 extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderClasses />
        <Clases />
      </React.Fragment>
    );
  }
}