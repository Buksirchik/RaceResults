import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type DriversStyles = {
  itemDriverContainer: ViewStyle;
  driverFullName: TextStyle;
  listContentContainer: ViewStyle;
  container: ViewStyle;
};

export const styles = StyleSheet.create<DriversStyles>({
  itemDriverContainer: {
    padding: 20,
  },
  driverFullName: {
    fontSize: 18,
  },
  listContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});
