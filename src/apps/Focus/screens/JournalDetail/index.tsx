import { RouteProp } from '@react-navigation/core';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { memo, useCallback, useState } from 'react';
import { Modal, Text, TextInput } from '../../../../components';
import { AuthStackRoutes } from '../../types';

export const JournalDetail = memo(function JournalDetail() {
  const { navigate } =
    useNavigation<StackNavigationProp<AuthStackRoutes, 'journal-detail'>>();
  const route = useRoute<RouteProp<AuthStackRoutes, 'journal-detail'>>();

  const onModalClose = useCallback(() => {
    navigate('home');
  }, [navigate]);

  const [form, setForm] = useState({ notes: '', effort: '' });

  const onChange = (key: string) => (value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
  };

  return (
    <Modal onBackgroundPress={onModalClose}>
      <Text title={route?.params?.item?.title || 'empty'} />

      <Text title="Effort" />
      <TextInput
        onChangeText={onChange('effort')}
        placeholder="what did you do?"
        value={form.effort}
      />
      <Text title="Focus?" />
      <Text title="Intensity?" />

      <Text title="notes" />
      <TextInput
        multiline
        numberOfLines={5}
        onChangeText={onChange('notes')}
        placeholder="notes"
        value={form.notes}
      />
      <Text title="goal" />
      <Text emphasis="low" title="categories..." />
    </Modal>
  );
});
