import { Text, TouchableOpacity } from 'react-native';
import { Driver } from '../../types';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationProp, MainStackScreens } from '../../navigation';

type DriveItemProps = {
  driver: Driver;
  order: number;
};

export const DriverItem = ({ order, driver }: DriveItemProps) => {
  const navigation = useNavigation<MainStackNavigationProp<MainStackScreens.Drivers>>();

  const fullName = `${order}. ${driver.givenName} ${driver.familyName}`;

  const handlePress = () => {
    navigation.navigate(MainStackScreens.Driver, { driverId: driver.driverId });
  };

  return (
    <TouchableOpacity style={styles.itemDriverContainer} onPress={handlePress}>
      <Text style={styles.driverFullName}>{fullName}</Text>
    </TouchableOpacity>
  );
};
