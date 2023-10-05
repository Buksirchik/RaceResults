import { ActivityIndicator, FlatList, FlatListProps, SafeAreaView, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadDrivers } from '../../store/drivers';
import {
  driversCurrentPageSelector,
  driversLoadingSelector,
  driversSelector,
  driversTotalPagesSelector,
} from '../../store/drivers/selectors';
import { Driver } from '../../types';
import { styles } from './styles';

const renderItem: FlatListProps<Driver>['renderItem'] = ({ item, index }) => {
  const { givenName = '', familyName = '' } = item;

  const fullName = `${index + 1}. ${givenName} ${familyName}`;

  return (
    <View style={styles.itemDriverContainer}>
      <Text style={styles.driverFullName}>{fullName}</Text>
    </View>
  );
};

const keyExtractor: FlatListProps<Driver>['keyExtractor'] = item => item.driverId;

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const drivers = useAppSelector(driversSelector);
  const isLoading = useAppSelector(driversLoadingSelector);
  const currentPage = useAppSelector(driversCurrentPageSelector);
  const totalPages = useAppSelector(driversTotalPagesSelector);

  useEffect(() => {
    if (!drivers.length) {
      dispatch(loadDrivers());
    }
  }, [drivers.length]);

  const isInitialLoading = currentPage === 0;

  const ListEmptyComponent = isLoading && isInitialLoading ? <ActivityIndicator size={'large'} /> : null;
  const ListFooterComponent = isLoading && !isInitialLoading ? <ActivityIndicator size={'large'} /> : null;

  const onEndReached = () => {
    if (totalPages > currentPage && !isLoading) {
      dispatch(loadDrivers());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={drivers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.listContentContainer}
        onEndReachedThreshold={0.25}
        onEndReached={onEndReached}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
};
