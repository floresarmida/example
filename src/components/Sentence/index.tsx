import React, { memo } from 'react';
import { StyleProp, Text as OriginalText, TextStyle } from 'react-native';
import { Text } from '../Text';
import { SentenceType } from './types';

type Props = {
  center?: boolean;
  sentences: SentenceType[];
  style: StyleProp<TextStyle>;
};

export const Sentence = memo(function Sentence({
  sentences,
  style,
  center,
}: Props) {
  return (
    <OriginalText style={style}>
      {sentences.map(({ bold, title, onPress, type, emphasis }) => (
        <Text
          bold={bold}
          center={center}
          color={onPress ? 'accent' : 'primaryA'}
          emphasis={emphasis}
          key={title}
          onPress={onPress}
          title={`${title} `}
          type={type}
        />
      ))}
    </OriginalText>
  );
});
