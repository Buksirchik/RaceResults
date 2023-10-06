import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationProp, MainStackScreens } from '../../navigation';

export const Home = () => {
  const navigation = useNavigation<MainStackNavigationProp<MainStackScreens.Home>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>
        Formula One is a motorsport in which different teams compete in multiple Grand Prix races. Each team engineers
        its own Formula One car which drivers race around a track. Races take place in different countries around the
        world, with the most famous including Monaco, Britain and Japan.
      </Text>

      <Button title={'Checkout table of drivers'} onPress={() => navigation.navigate(MainStackScreens.Drivers)} />
    </View>
  );
};
