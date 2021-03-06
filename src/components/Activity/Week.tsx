import dayjs from 'dayjs';
import React, { memo } from 'react';
import { View } from 'react-native';
import { padding } from '../../features/Config';
import { Text } from '../Text';
import { Day } from './Day';
import { ActivityDay, ActivityWeek } from './types';

type Props = {
  index: number;
  item: ActivityWeek;
  margin: number;
  max: number;
  onPress: (item: ActivityDay) => () => void;
  size: number;
};

export const Week = memo(function Week({
  item,
  max,
  index,
  size,
  margin,
  onPress,
}: Props) {
  const first = item[0].date;
  const showHeader = Number(dayjs(first).format('DD')) <= 7;
  const header = showHeader ? dayjs(first).format('MMM') : ' ';

  return (
    <View key={index}>
      <Text
        center
        emphasis="medium"
        style={{ paddingBottom: padding(3) }}
        title={header}
        type="overline"
      />
      {item.map((day) => (
        <Day
          day={day}
          key={String(day.date)}
          margin={margin}
          max={max}
          onPress={onPress}
          size={size}
        />
      ))}
    </View>
  );
});
