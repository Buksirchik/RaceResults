import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from '../MainStackNavigator';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
