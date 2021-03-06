import React, { ReactNode } from 'react';
import { Card, Text } from '../../../components';
import { padding } from '../../../features';

type Props = {
  children: ReactNode;
  title: string;
};

export const Section = ({ title, children }: Props): JSX.Element => {
  return (
    <Card>
      <Text
        emphasis="low"
        style={{ paddingBottom: padding(2) }}
        title={title}
        type="h4"
      />
      {children}
    </Card>
  );
};
