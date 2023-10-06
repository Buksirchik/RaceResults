import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { LIST_ITEM_HEIGHT } from '../../constants';

type DriversStyles = {
  itemDriverContainer: ViewStyle;
  driverFullName: TextStyle;
  listContentContainer: ViewStyle;
  container: ViewStyle;
  emptyListContentContainer: ViewStyle;
};

export const styles = StyleSheet.create<DriversStyles>({
  itemDriverContainer: {
    padding: 20,
    height: LIST_ITEM_HEIGHT,
  },
  driverFullName: {
    fontSize: 18,
  },
  listContentContainer: {
    flexGrow: 1,
  },
  emptyListContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});
