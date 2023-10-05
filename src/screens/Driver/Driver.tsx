import { SafeAreaView, Text, View } from 'react-native';
import { useAppSelector } from '../../hooks';
import { getDriverByIdSelector } from '../../store/drivers/selectors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MainStackNavigationProp, MainStackRouteProp, MainStackScreens } from '../../navigation';
import { EmptyView } from '../../components';
import { styles } from './styles';
import { useLayoutEffect } from 'react';

export const Driver = () => {
  const navigation = useNavigation<MainStackNavigationProp<MainStackScreens.Driver>>();
  const route = useRoute<MainStackRouteProp<MainStackScreens.Driver>>();

  const currentDriver = useAppSelector(state => getDriverByIdSelector(state, route.params.driverId));

  const fullName = currentDriver ? `${currentDriver.givenName} ${currentDriver.familyName}` : '';

  useLayoutEffect(() => {
    if (fullName) {
      navigation.setOptions({ title: fullName });
    }
  }, [fullName]);

  return (
    <SafeAreaView style={styles.container}>
      {currentDriver ? (
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{`Full Name: ${fullName}`}</Text>
          <Text style={styles.text}>
            {`Date of Birth: ${new Date(currentDriver.dateOfBirth).toLocaleDateString()}`}
          </Text>
          <Text style={styles.text}>{`Nationality: ${currentDriver.nationality}`}</Text>
        </View>
      ) : (
        <EmptyView />
      )}
    </SafeAreaView>
  );
};
