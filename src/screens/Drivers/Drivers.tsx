import { ActivityIndicator, FlatList, FlatListProps, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadDrivers, refreshDrivers } from '../../store/drivers';
import { driversStateSelector } from '../../store/drivers/selectors';
import { Driver } from '../../types';
import { styles } from './styles';
import { DriverItem } from './DriverItem';
import { EmptyView } from '../../components';
import { DRIVER_ITEM_HEIGHT } from '../../constants';

const renderItem: FlatListProps<Driver>['renderItem'] = ({ item, index }) => {
  return <DriverItem driver={item} order={index + 1} />;
};

const keyExtractor: FlatListProps<Driver>['keyExtractor'] = item => item.driverId;

const getItemLayout: FlatListProps<Driver>['getItemLayout'] = (data, index) => ({
  length: DRIVER_ITEM_HEIGHT,
  offset: DRIVER_ITEM_HEIGHT * index,
  index,
});

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const { drivers, refreshing, currentPage, totalPages, loading: isLoading } = useAppSelector(driversStateSelector);

  useEffect(() => {
    dispatch(loadDrivers(true));
  }, []);

  const isInitialLoading = currentPage === 0;

  const ListEmptyComponent = isLoading && isInitialLoading ? <ActivityIndicator size={'large'} /> : <EmptyView />;
  const ListFooterComponent = isLoading && !isInitialLoading ? <ActivityIndicator size={'large'} /> : null;

  const onEndReached = () => {
    if (totalPages > currentPage && !isLoading) {
      dispatch(loadDrivers());
    }
  };

  const onRefresh = () => {
    dispatch(refreshDrivers());
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={drivers}
        windowSize={11}
        initialNumToRender={15}
        getItemLayout={getItemLayout}
        refreshing={refreshing}
        onRefresh={onRefresh}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.listContentContainer}
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
};
