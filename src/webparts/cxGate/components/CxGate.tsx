import * as React from 'react';
import styles from './CxGate.module.scss';
import type { ICxGateProps } from './ICxGateProps';
import { escape } from '@microsoft/sp-lodash-subset';
import welcomeDark from '../assets/welcome-dark.png';
import welcomeLight from '../assets/welcome-light.png';
import { NavigationBar } from './NavigationBar/NavigationBar';

export default class CxGate extends React.Component<ICxGateProps> {
  public render(): React.ReactElement<ICxGateProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      userDisplayName
    } = this.props;

    return (
      <>
      <NavigationBar/>
      </>
    );
  }
}
