import { FlatList, FlatListProps, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadDrivers } from '../../store/drivers';
import { getDriversSelector } from '../../store/drivers/selectors';
import { Driver } from '../../types';

const renderItem: FlatListProps<Driver>['renderItem'] = ({ item }) => {
  const fullName = `${item.givenName} ${item.familyName}`;

  return (
    <View>
      <Text>{fullName}</Text>
    </View>
  );
};

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const drivers = useAppSelector(getDriversSelector);

  useEffect(() => {
    dispatch(loadDrivers());
  }, []);

  return <FlatList data={drivers} renderItem={renderItem} />;
};
