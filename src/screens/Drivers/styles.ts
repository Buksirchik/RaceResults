import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { DRIVER_ITEM_HEIGHT } from '../../constants';

type DriversStyles = {
  itemDriverContainer: ViewStyle;
  driverFullName: TextStyle;
  listContentContainer: ViewStyle;
  container: ViewStyle;
};

export const styles = StyleSheet.create<DriversStyles>({
  itemDriverContainer: {
    padding: 20,
    height: DRIVER_ITEM_HEIGHT,
  },
  driverFullName: {
    fontSize: 18,
  },
  listContentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
});
