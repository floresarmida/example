import React, {Suspense, lazy, memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, Alert, Notification} from '../../components';
import {SplashScreen} from '../../features';
import {useColor} from '../../hooks';
import {usePersistedState} from './usePersistedState';
import {rootMode, rootScreenOptions} from './configs';

const Arcade = lazy(() => import('../../apps/Arcade'));
const Portfolio = lazy(() => import('../../apps/Portfolio'));
const Playground = lazy(() => import('../../apps/Playground'));
const Admin = lazy(() => import('../../apps/Admin'));
const Progress = lazy(() => import('../../apps/Progress'));
const CantHurtMe = lazy(() => import('../../apps/CantHurtMe'));
const Checklists = lazy(() => import('../../apps/Checklists'));
const Focus = lazy(() => import('../../apps/Focus'));
const Journal = lazy(() => import('../../apps/Journal'));
const TheOneThing = lazy(() => import('../../apps/TheOneThing'));

const Stack = createStackNavigator();
const linking = {
  prefixes: ['https://app.example.com', 'mychat://'],
};

export const Navigation = memo(function Navigation() {
  const {initialState, isReady, onStateChange, onRef} = usePersistedState();
  const color = useColor();
  const fallback = <ActivityIndicator />;

  if (!isReady) {
    return fallback;
  }
  return (
    <Suspense fallback={fallback}>
      <SplashScreen
        backgroundColor={color.background}
        primaryColor={color.brand}
        source={require('../../assets/line-chart.png')}>
        <NavigationContainer
          fallback={fallback}
          initialState={initialState}
          linking={linking}
          onStateChange={onStateChange}
          ref={onRef}>
          <Stack.Navigator mode={rootMode} screenOptions={rootScreenOptions}>
            <Stack.Screen component={Admin} name="admin" />
            <Stack.Screen component={Arcade} name="arcade" />
            <Stack.Screen component={Portfolio} name="portfolio" />
            <Stack.Screen component={Progress} name="progress" />
            <Stack.Screen component={Playground} name="playground" />
            <Stack.Screen component={CantHurtMe} name="cant-hurt-me" />
            <Stack.Screen component={Checklists} name="checklists" />
            <Stack.Screen component={Focus} name="focus" />
            <Stack.Screen component={Journal} name="journal" />
            <Stack.Screen component={TheOneThing} name="the-one-thing" />
            <Stack.Screen component={Notification} name="notification" />
            <Stack.Screen component={Alert} name="alert" />
          </Stack.Navigator>
        </NavigationContainer>
      </SplashScreen>
    </Suspense>
  );
});
