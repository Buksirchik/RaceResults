import { EmptyView } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { loadRaceSchedule } from '../../store/raceSchedule';
import { raceScheduleStateStateSelector } from '../../store/raceSchedule/selectors';
import { ActivityIndicator, FlatList, FlatListProps, SafeAreaView, Text } from 'react-native';
import { styles } from './styles';
import { Race } from '../../types';
import { LIST_ITEM_HEIGHT } from '../../constants';

const renderItem: FlatListProps<Race>['renderItem'] = ({ item }) => {
  const { raceName, date, round } = item;

  return <Text style={styles.scheduleItem}>{`${round}. ${raceName} – ${new Date(date).toDateString()}`}</Text>;
};

const keyExtractor: FlatListProps<Race>['keyExtractor'] = item => item.Circuit.circuitId;

const getItemLayout: FlatListProps<Race>['getItemLayout'] = (data, index) => ({
  length: LIST_ITEM_HEIGHT,
  offset: LIST_ITEM_HEIGHT * index,
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

  const contentContainerStyle = raceSchedule.length ? styles.listContentContainer : styles.emptyListContentContainer;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={raceSchedule}
        windowSize={11}
        initialNumToRender={15}
        getItemLayout={getItemLayout}
        refreshing={refreshing}
        onRefresh={onRefresh}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={contentContainerStyle}
        onEndReachedThreshold={0.3}
      />
    </SafeAreaView>
  );
};
