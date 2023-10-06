import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from '../MainStackNavigator';
import Toast from 'react-native-toast-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const RootNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <MainStackNavigator />
      <Toast topOffset={top} />
    </NavigationContainer>
  );
};
