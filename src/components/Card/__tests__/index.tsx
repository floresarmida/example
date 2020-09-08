import React from 'react';
import {Card} from '..';
import {mockRenderer} from '../../../mocks/Renderer';

it('renders correctly', () => {
  const dom = mockRenderer(<Card />).toJSON();
  expect(dom).toMatchSnapshot();
});

it('renders correctly with onPress', () => {
  const callback = jest.fn();
  const dom = mockRenderer(<Card onPress={callback} />).toJSON();
  expect(dom).toMatchSnapshot();
});
