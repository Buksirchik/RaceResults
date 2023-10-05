import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type DriverStyles = {
  text: TextStyle;
  container: ViewStyle;
  contentContainer: ViewStyle;
};

export const styles = StyleSheet.create<DriverStyles>({
  text: {
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
});
