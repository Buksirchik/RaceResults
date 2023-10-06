import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type HomeStyles = {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
};

export const styles = StyleSheet.create<HomeStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    fontSize: 18,
    marginTop: 16,
  },
});
