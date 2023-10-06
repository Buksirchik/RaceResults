import { createStackNavigator } from '@react-navigation/stack';
import { Drivers, Home, RaceSchedule, Driver } from '../../screens';
import { MainStackParamList, MainStackScreens } from './types';
import { Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const Stack = createStackNavigator();

const driversScreenOptions = ({ navigation }: { navigation: NavigationProp<MainStackParamList> }) => {
  const handleButtonRightPress = () => {
    navigation.navigate(MainStackScreens.RaceSchedule);
  };

  return {
    headerRight: () => <Button title={'Race Schedule'} onPress={handleButtonRightPress} />,
  };
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MainStackScreens.Home} component={Home} />
      <Stack.Screen name={MainStackScreens.Drivers} component={Drivers} options={driversScreenOptions} />
      <Stack.Screen name={MainStackScreens.Driver} component={Driver} />
      <Stack.Screen name={MainStackScreens.RaceSchedule} component={RaceSchedule} />
    </Stack.Navigator>
  );
};
