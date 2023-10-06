import { EmptyView } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { loadRaceSchedule } from '../../store/raceSchedule';
import { raceScheduleStateStateSelector } from '../../store/raceSchedule/selectors';
import { ActivityIndicator, FlatList, FlatListProps, SafeAreaView, Text } from 'react-native';
import { styles } from '../Drivers/styles';
import { Race } from '../../types';
import { DRIVER_ITEM_HEIGHT } from '../../constants';

const renderItem: FlatListProps<Race>['renderItem'] = ({ item, index }) => {
  return <Text>{item.raceName}</Text>;
};

const keyExtractor: FlatListProps<Race>['keyExtractor'] = item => item.Circuit.circuitId;

const getItemLayout: FlatListProps<Race>['getItemLayout'] = (data, index) => ({
  length: DRIVER_ITEM_HEIGHT,
  offset: DRIVER_ITEM_HEIGHT * index,
  index,
});

export const RaceSchedule = () => {
  const dispatch = useAppDispatch();
  const { refreshing, raceSchedule, loading: isLoading } = useAppSelector(raceScheduleStateStateSelector);

  useEffect(() => {
    dispatch(loadRaceSchedule(true));
  }, []);

  const ListEmptyComponent = isLoading ? <ActivityIndicator size={'large'} /> : <EmptyView />;

  const onRefresh = () => {
    dispatch(loadRaceSchedule());
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={raceSchedule}
        windowSize={11}
        getItemLayout={getItemLayout}
        refreshing={refreshing}
        onRefresh={onRefresh}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.listContentContainer}
        onEndReachedThreshold={0.3}
      />
    </SafeAreaView>
  );
};
