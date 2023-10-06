import { createStackNavigator } from '@react-navigation/stack';
import { Drivers, Home, RaceSchedule, Driver } from '../../screens';
import { MainStackParamList, MainStackScreens } from './types';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './styles';

const Stack = createStackNavigator();

const driversScreenOptions = ({ navigation }: { navigation: NavigationProp<MainStackParamList> }) => {
  const handleButtonRightPress = () => {
    navigation.navigate(MainStackScreens.RaceSchedule);
  };

  return {
    headerRight: () => (
      <TouchableOpacity onPress={handleButtonRightPress} style={styles.headerRightTouchable}>
        <Text style={styles.headerRightText}>Race Schedule</Text>
      </TouchableOpacity>
    ),
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
