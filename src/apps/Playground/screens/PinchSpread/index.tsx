import React, {memo, useState} from 'react';
import {Animated, PanResponder, StyleSheet} from 'react-native';
import {Screen, Text} from '../../../../components';
import {useColor, useNav} from '../../../../hooks';
import {GestureHandler} from './logic';

const minTouches = 2;
const title = `pinch or spread the screen with ${minTouches} fingers minimum`;

export default memo(function PinchSpread() {
  const [state, setState] = useState({pinchCount: 0, spreadCount: 0});
  const color = useColor();
  const nav = useNav();
  const styles = StyleSheet.create({
    container: {backgroundColor: color.light, flex: 1},
  });
  const gestureHandler = new GestureHandler({minTouches});
  const panGesture = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (event) => gestureHandler.onPanResponderMove(event),
    onPanResponderRelease: () => {
      const outcome = gestureHandler.onPanResponderRelease();
      if (outcome.spread) {
        setState((prev) => ({...prev, spreadCount: prev.spreadCount++}));
      }
      if (outcome.pinch) {
        setState((prev) => ({...prev, pinchCount: prev.pinchCount++}));
      }
    },
  });

  return (
    <Screen onLeftPress={nav.to('playground')} title="Pinch Spread">
      <Text center title={title} />
      <Text center title={`spread: ${state.spreadCount}`} />
      <Text center title={`pinch: ${state.pinchCount}`} />
      <Animated.View style={styles.container} {...panGesture.panHandlers} />
    </Screen>
  );
});