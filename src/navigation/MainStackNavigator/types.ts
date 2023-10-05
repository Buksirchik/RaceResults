import { StackNavigationProp } from '@react-navigation/stack';

export enum MainStackScreens {
  Home = 'Home',
  Drivers = 'Drivers',
}

export type MainStackParamList = {
  Home: undefined;
  Drivers: undefined;
};

export type MainStackNavigationProp<T extends keyof MainStackParamList> = StackNavigationProp<MainStackParamList, T>;
