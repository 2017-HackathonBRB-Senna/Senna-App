import { StackNavigator } from 'react-navigation';

import Main from './components/Main';
import Senna from './components/Senna';
import Financing from './components/Financing';
import Proposal from './components/Proposal';
import Sucess from './components/Sucess';

const BaseNavigation = StackNavigator({
  Main: { screen: Main },
  Senna: {
    screen: Senna
  },
  Financing: {
    screen: Financing
  },
  Proposal: {
    screen: Proposal
  }
});

export default BaseNavigation;
