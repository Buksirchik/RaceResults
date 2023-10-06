import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type MainStackStyles = {
  headerRightTouchable: ViewStyle;
  headerRightText: TextStyle;
};

export const styles = StyleSheet.create<MainStackStyles>({
  headerRightTouchable: {
    marginRight: 15,
  },
  headerRightText: {
    color: '#007AFF',
  },
});
