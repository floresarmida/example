import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import { v4 } from 'uuid';
import { useRootSelector } from '../../../redux';
import { Cell } from './Cell';
import { useLoop } from './useLoop';

export const GameBoard = memo(function GameBoard() {
  const count = useRootSelector((state) => state.gameOfLife.count);
  const array = useMemo(() => Array(count).fill(0), [count]);
  useLoop();

  return (
    <View>
      {array.map((_, x) => (
        <View
          key={v4()}
          style={{ flexDirection: 'row', justifyContent: 'center' }}
        >
          {array.map((__, y) => (
            <Cell key={v4()} x={x} y={y} />
          ))}
        </View>
      ))}
    </View>
  );
});
