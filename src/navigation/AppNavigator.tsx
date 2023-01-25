import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  AbsolutePositionAnimation,
  OpacityAnimation,
  ScaleAnimation,
  TranslateAnimation,
  WidthHeightAnimation,
} from '../animations';

const drawerScreens = [
  {
    id: 0,
    name: 'Opacity Animation',
    screen: OpacityAnimation,
  },
  {
    id: 1,
    name: 'Translate Animation',
    screen: TranslateAnimation,
  },
  {
    id: 2,
    name: 'Scale Animation',
    screen: ScaleAnimation,
  },
  {
    id: 3,
    name: 'Width/Height Animation',
    screen: WidthHeightAnimation,
  },
  {
    id: 4,
    name: 'Absolute Position Animation',
    screen: AbsolutePositionAnimation,
  },
];

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {drawerScreens.map(drawerScreen => (
          <Drawer.Screen
            key={drawerScreen.id}
            name={drawerScreen.name}
            component={drawerScreen.screen}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
