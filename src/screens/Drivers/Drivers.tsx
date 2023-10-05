import { ActivityIndicator, FlatList, FlatListProps, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadDrivers } from '../../store/drivers';
import { driversStateSelector } from '../../store/drivers/selectors';
import { Driver } from '../../types';
import { styles } from './styles';
import { DriverItem } from './DriverItem';

const renderItem: FlatListProps<Driver>['renderItem'] = ({ item, index }) => {
  return <DriverItem driver={item} order={index + 1} />;
};

const keyExtractor: FlatListProps<Driver>['keyExtractor'] = item => item.driverId;

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const { drivers, currentPage, totalPages, loading: isLoading } = useAppSelector(driversStateSelector);

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
