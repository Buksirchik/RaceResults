import { StackNavigationProp } from '@react-navigation/stack';
import { Driver } from '../../types';
import { RouteProp } from '@react-navigation/native';

export enum MainStackScreens {
  Home = 'Home',
  Drivers = 'Drivers',
  Driver = 'Driver',
}

export type MainStackParamList = {
  Home: undefined;
  Drivers: undefined;
  Driver: { driverId: Driver['driverId'] };
};

export type MainStackNavigationProp<T extends keyof MainStackParamList> = StackNavigationProp<MainStackParamList, T>;
export type MainStackRouteProp<T extends keyof MainStackParamList> = RouteProp<MainStackParamList, T>;
