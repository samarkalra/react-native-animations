import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OpacityAnimation from '../animations/timing/OpacityAnimation';

const drawerScreens = [
  {
    id: 0,
    name: 'Opacity Animation',
    screen: OpacityAnimation,
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
