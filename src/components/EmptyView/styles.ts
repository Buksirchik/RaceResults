import { StyleSheet, TextStyle } from 'react-native';

type EmptyViewStyles = {
  text: TextStyle;
};

export const styles = StyleSheet.create<EmptyViewStyles>({
  text: {
    textAlign: 'center',
  },
});
