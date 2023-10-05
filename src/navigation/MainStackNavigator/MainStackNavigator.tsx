import { createStackNavigator } from '@react-navigation/stack';
import { Drivers, Home } from '../../screens';
import { MainStackScreens } from './types';
import { Driver } from '../../screens/Driver';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MainStackScreens.Home} component={Home} />
      <Stack.Screen name={MainStackScreens.Drivers} component={Drivers} />
      <Stack.Screen name={MainStackScreens.Driver} component={Driver} />
    </Stack.Navigator>
  );
};
