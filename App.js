/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { pushNotifications } from './src/services';
pushNotifications.configure();
import Router from './src/router'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<Router />);
  }
}
