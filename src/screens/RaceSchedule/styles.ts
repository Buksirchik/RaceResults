import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { LIST_ITEM_HEIGHT } from '../../constants';

type RaceScheduleStyles = {
  scheduleItem: TextStyle;
  container: ViewStyle;
  listContentContainer: ViewStyle;
  emptyListContentContainer: ViewStyle;
};

export const styles = StyleSheet.create<RaceScheduleStyles>({
  scheduleItem: {
    padding: 20,
    fontSize: 18,
    height: LIST_ITEM_HEIGHT,
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
